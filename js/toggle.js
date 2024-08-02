// toggle index / shuffle
function toggleSections(event) {
  event.preventDefault();
  const indexSection = document.getElementById("index");
  const shuffleSection = document.getElementById("shuffle");
  const indexLink = document.getElementById("index-link");
  const shuffleLink = document.getElementById("shuffle-link");
  var htmlPage = document.getElementsByTagName('html')[0];

  if (indexSection.classList.contains("hidden")) {
    indexSection.classList.remove("hidden");
    indexSection.style.display = "flex";
    shuffleSection.classList.add("hidden");
    shuffleSection.style.display = "";
    indexLink.classList.add("hidden");
    shuffleLink.classList.remove("hidden");
    htmlPage.style.backgroundColor = 'ghostwhite';
  } else {
    indexSection.classList.add("hidden");
    indexSection.style.display = "";
    shuffleSection.classList.remove("hidden");
    shuffleSection.style.display = "";
    indexLink.classList.remove("hidden");
    shuffleLink.classList.add("hidden");
    htmlPage.style.backgroundColor = 'black';
  }
}

document.getElementById("index-link").addEventListener("click", toggleSections);
document
  .getElementById("shuffle-link")
  .addEventListener("click", toggleSections);

// toggle projects / details tags
document.addEventListener('DOMContentLoaded', function() {
  const detailsElements = document.querySelectorAll('details');
  
  // Set the first details element to be open initially
  if (detailsElements.length > 0) {
      detailsElements[0].setAttribute('open', '');
  }

  detailsElements.forEach((details) => {
      details.addEventListener('toggle', (event) => {
          if (details.open) {
              detailsElements.forEach((otherDetails) => {
                  if (otherDetails !== details && otherDetails.open) {
                      otherDetails.removeAttribute('open');
                  }
              });
          }
      });
  });
});