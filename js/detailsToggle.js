// keeping only one details tag / project open at a time
document.querySelectorAll('details').forEach(details => {
    details.addEventListener('toggle', event => {
        if (details.open) {
            document.querySelectorAll('details').forEach(otherDetails => {
                if (otherDetails !== details && otherDetails.open) {
                    otherDetails.removeAttribute('open');
                }
            });
        }
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     const images = document.querySelectorAll("img:not(#landing img)");
//     let currentlyToggledImage = null;

//     images.forEach(image => {
//         image.addEventListener("click", function() {
//             // Reset the currently toggled image, if any
//             if (currentlyToggledImage && currentlyToggledImage !== this) {
//                 currentlyToggledImage.style.width = "";
//                 currentlyToggledImage.style.maxWidth = "";
//                 currentlyToggledImage.style.maxHeight = "";
//             }

//             // Toggle the clicked image
//             if (this.style.width === "100%") {
//                 this.style.width = "";
//                 this.style.maxWidth = "";
//                 this.style.maxHeight = "";
//                 currentlyToggledImage = null;
//             } else {
//                 this.style.width = "100%";
//                 this.style.maxWidth = "none";
//                 this.style.maxHeight = "none";
//                 currentlyToggledImage = this;
//             }
//         });
//     });
// });
