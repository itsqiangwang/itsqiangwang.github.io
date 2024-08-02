// Get the section where figures are located
const projectImagesSection = document.querySelector(".project-images");

// Save the original order of figures
const originalOrder = Array.from(projectImagesSection.children);

// Function to randomize figures
function randomizeFigures() {
  const figures = projectImagesSection.querySelectorAll("figure");
  const figureArray = Array.from(figures);

  // Shuffle the array (Fisher-Yates algorithm)
  for (let i = figureArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [figureArray[i], figureArray[j]] = [figureArray[j], figureArray[i]];
  }

  // Remove existing figures from the section
  figures.forEach((figure) => figure.remove());

  // Append the shuffled figures back to the section
  figureArray.forEach((figure) => projectImagesSection.appendChild(figure));
}

// Function to restore original order of figures
function restoreOriginalOrder() {
  // Remove existing figures from the section
  while (projectImagesSection.firstChild) {
    projectImagesSection.removeChild(projectImagesSection.firstChild);
  }

  // Append the figures in their original order
  originalOrder.forEach((figure) => projectImagesSection.appendChild(figure));
}

// Function to handle figure clicks
function handleFigureClick(event) {
  if (projectImagesSection.classList.contains("index-mode")) {
    const expandedFigure =
      projectImagesSection.querySelector("figure.expanded");
    if (expandedFigure && expandedFigure !== event.currentTarget) {
      expandedFigure.classList.remove("expanded");
    }

    event.currentTarget.classList.toggle("expanded");
  }
}

// Function to toggle the text content of the index link
function toggleLinkText() {
  const indexLink = document.querySelector(".index-link");
  if (indexLink) {
    indexLink.textContent = indexLink.textContent === "Index" ? "Home" : "Index";
  }
}

// Attach click event listeners to all figures
function addFigureClickListeners() {
  const figures = projectImagesSection.querySelectorAll("figure");
  figures.forEach((figure) => {
    figure.addEventListener("click", handleFigureClick);
  });
}

// Initialize the index link text
const indexLink = document.querySelector(".index-link");
if (indexLink) {
  indexLink.textContent = "Index";
}

// Run the randomization function initially
randomizeFigures();

// Add click listeners to figures
addFigureClickListeners();

// Handle the index-link click event to toggle the 'index-mode' class and restore the original order
indexLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior

  // Toggle the 'index-mode' class
  projectImagesSection.classList.toggle("index-mode");

  // If 'index-mode' is enabled, restore original order
  if (projectImagesSection.classList.contains("index-mode")) {
    restoreOriginalOrder();
  } else {
    randomizeFigures();
  }

  // Toggle the text content of the link
  toggleLinkText();
});
