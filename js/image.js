async function duplicateRandomMediaFromSource(sourceURL, basePath) {
    try {
        // Fetch the source HTML document
        const response = await fetch(sourceURL);
        if (!response.ok) {
            throw new Error(`Failed to fetch source document: ${response.statusText}`);
        }
        const sourceHTML = await response.text();

        // Parse the fetched HTML into a DOM object
        const parser = new DOMParser();
        const sourceDoc = parser.parseFromString(sourceHTML, 'text/html');

        // Get all elements with the class name 'project-media' from the source document
        const projectMediaElements = sourceDoc.querySelectorAll('.project-media');

        // Get the target container where media will be duplicated
        const targetElement = document.querySelector('.image-container');
        if (!targetElement) {
            console.error("Target container with class 'image-container' not found.");
            return;
        }

        // Array to hold all media items
        const allMediaItems = [];

        // Map to track media items with their corresponding <details> identifiers
        const mediaDetailsMap = new Map();

        // Iterate over each 'project-media' element and collect all media items
        projectMediaElements.forEach((mediaElement, detailsIndex) => {
            const mediaItems = mediaElement.querySelectorAll('img, video');
            mediaItems.forEach(mediaItem => {
                allMediaItems.push({
                    mediaItem: mediaItem.cloneNode(true),
                    detailsIndex: detailsIndex
                }); // Clone and add to the array with the associated index
            });
        });

        if (allMediaItems.length === 0) {
            console.warn('No media items found.');
            return;
        }

        // Shuffle the array of all media items
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // Swap elements
            }
        }

        // Shuffle all media items
        shuffleArray(allMediaItems);

        // Select the first 12 items after shuffling
        const selectedMediaItems = allMediaItems.slice(0, 12);

        // Function to set random grid-column value
        function setRandomGridColumn(mediaItem) {
            let randomWidth;
        
            if (window.innerWidth <= 768) {  // Mobile view (adjust the width for mobile)
                randomWidth = Math.floor(Math.random() * 35) + 20;  
            } else {  // Desktop view
                randomWidth = Math.floor(Math.random() * 25) + 10; 
            }
        
            mediaItem.style.width = `${randomWidth}%`;
        }
        

        // Process each selected media item
        selectedMediaItems.forEach(({ mediaItem, detailsIndex }) => {
            // Update the media item's URL with the additional path
            const mediaSrc = mediaItem.getAttribute('data-src') || mediaItem.getAttribute('src');
            if (mediaSrc) {
                const updatedSrc = basePath + mediaSrc;
                if (mediaItem.hasAttribute('data-src')) {
                    mediaItem.setAttribute('data-src', updatedSrc);
                    mediaItem.removeAttribute('src'); // Ensure src is not set for lazy loading
                } else {
                    mediaItem.setAttribute('src', updatedSrc);
                }
            }

            // Ensure video attributes for autoplay, muted, loop, and inline play
            if (mediaItem.tagName.toLowerCase() === 'video') {
                mediaItem.muted = true;
                mediaItem.autoplay = true;
                mediaItem.loop = true;
                mediaItem.playsInline = true;
            }

            // Set random grid-column value
            setRandomGridColumn(mediaItem);

            // Add click event listener to open the corresponding <details> tag
            mediaItem.addEventListener('click', () => {
                // Navigate to the source page with a URL parameter for the specific <details> tag
                window.location.href = `${sourceURL}?openDetail=${detailsIndex}`;
            });

            // Add an error event listener to log if the media fails to load
            mediaItem.addEventListener('error', (event) => {
                console.error(`Failed to load media: ${event.target.src}`);
            });

            // Append the selected media item to the target container
            targetElement.appendChild(mediaItem);
        });

        // Reinitialize LazyLoad to account for newly added images/videos
        if (typeof LazyLoad === 'function') {
            if (typeof lazyLoadInstance !== 'undefined') {
                lazyLoadInstance.update();
            } else {
                console.warn('LazyLoad instance is not available.');
            }
        } else {
            console.warn('LazyLoad is not available. Make sure it is properly imported.');
        }

        console.log("Randomly selected and displayed 10 media items from all '.project-media' elements to '.image-container'.");
    } catch (error) {
        console.error('Error duplicating media:', error);
    }
}

// Usage
// Provide the URL of the source HTML document and the additional path for media URLs
duplicateRandomMediaFromSource('index/index.html', 'index/');
