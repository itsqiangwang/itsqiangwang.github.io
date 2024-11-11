document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle corresponding projects open from the image page
  const params = new URLSearchParams(window.location.search);
  const openDetailIndex = params.get("openDetail");

  if (openDetailIndex !== null) {
    const projectMediaElements = document.querySelectorAll(".project-media");
    console.log("Project Media Elements:", projectMediaElements);

    if (openDetailIndex >= 0 && openDetailIndex < projectMediaElements.length) {
      const mediaElement = projectMediaElements[openDetailIndex];
      const detailsElement = mediaElement.closest("details");
      console.log("Details Element:", detailsElement);

      if (detailsElement) {
        detailsElement.open = true;

        // Function to check if all images are loaded
        const allImagesLoaded = () => {
          const images = detailsElement.querySelectorAll("img");
          const promises = Array.from(images).map((img) => {
            return new Promise((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.addEventListener("load", resolve);
                img.addEventListener("error", resolve);
              }
            });
          });
          return Promise.all(promises);
        };

        requestAnimationFrame(() => {
          allImagesLoaded()
            .then(() => {
              setTimeout(() => {
                detailsElement.scrollIntoView({
                  behavior: "auto",
                  block: "start",
                });

                requestAnimationFrame(() => {
                  const stickyOffset = -1;
                  const summaryElement =
                    detailsElement.querySelector("summary");
                  const summaryHeight = summaryElement
                    ? summaryElement.offsetHeight
                    : 0;
                  const adjustedScrollTop =
                    detailsElement.getBoundingClientRect().top +
                    window.pageYOffset -
                    stickyOffset;

                  console.log("Adjusted Scroll Top:", adjustedScrollTop);

                  window.scrollTo({ top: adjustedScrollTop, behavior: "auto" });
                });
              }, 100);
            })
            .catch((error) => {
              console.error("Error loading images:", error);
            });
        });
      }
    }
  }
  
  // Function to update the project title within the given details element
  // function updateProjectTitle(details) {
  //   const projectTitles = details.querySelectorAll(".project-title");
  //   projectTitles.forEach((projectTitle) => {
  //     if (details.open) {
  //       projectTitle.textContent = projectTitle.textContent.replace(
  //         /^\s*\(\s*|\s*\)\s*$/g,
  //         ""
  //       );
  //     } else {
  //       projectTitle.textContent = `(${projectTitle.textContent
  //         .trim()
  //         .replace(/^\(|\)$/g, "")})`;
  //     }
  //   });
  // }

  // Function to scroll a <details> element into view, considering sticky <summary>
  function scrollToDetails(detailsElement) {
    requestAnimationFrame(() => {
      setTimeout(() => {
        detailsElement.scrollIntoView({ behavior: "auto", block: "start" });
        requestAnimationFrame(() => {
          const stickyOffset = -1;
          const summaryElement = detailsElement.querySelector("summary");
          const summaryHeight = summaryElement
            ? summaryElement.offsetHeight
            : 0;
          const adjustedScrollTop =
            detailsElement.getBoundingClientRect().top +
            window.pageYOffset -
            stickyOffset;
          window.scrollTo({ top: adjustedScrollTop, behavior: "auto" });
        });
      }, 0);
    });
  }

  // Toggle details functionality with scroll-to-view
  const detailsElements = document.querySelectorAll("details");
  detailsElements.forEach((details) => {
    details.addEventListener("toggle", () => {
      if (details.open) {
        detailsElements.forEach((otherDetails) => {
          if (otherDetails !== details && otherDetails.open) {
            otherDetails.removeAttribute("open");
            // updateProjectTitle(otherDetails);
          }
        });
        scrollToDetails(details);
      }
      // updateProjectTitle(details);
    });
  });
});