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
                  const stickyOffset = 20;
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
  function updateProjectTitle(details) {
    const projectTitles = details.querySelectorAll(".project-title");
    projectTitles.forEach((projectTitle) => {
      if (details.open) {
        projectTitle.textContent = projectTitle.textContent.replace(
          /^\s*\(\s*|\s*\)\s*$/g,
          ""
        );
      } else {
        projectTitle.textContent = `(${projectTitle.textContent
          .trim()
          .replace(/^\(|\)$/g, "")})`;
      }
    });
  }

  // Function to scroll a <details> element into view, considering sticky <summary>
  function scrollToDetails(detailsElement) {
    requestAnimationFrame(() => {
      setTimeout(() => {
        detailsElement.scrollIntoView({ behavior: "auto", block: "start" });
        requestAnimationFrame(() => {
          const stickyOffset = 20;
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
      }, 100);
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
            updateProjectTitle(otherDetails);
          }
        });
        scrollToDetails(details);
      }
      updateProjectTitle(details);
    });
  });

  // Initial check to ensure all closed details have parentheses
  detailsElements.forEach((details) => {
    if (!details.open) {
      updateProjectTitle(details);
    }
  });

  // related projects
  document.querySelectorAll(".related-thumbnail").forEach(function (thumbnail) {
    // Get the media element inside the thumbnail
    const mediaElement = thumbnail.querySelector("img, video");

    // Check if mediaElement exists and has a data-id attribute
    if (mediaElement && mediaElement.dataset.id) {
        const targetId = mediaElement.dataset.id.trim();

        // Fetch the target <details> element
        const targetDetails = document.getElementById(targetId);
        if (targetDetails) {
            // Get the project title and set it in the figcaption
            const projectTitleElement = targetDetails.querySelector(".project-title");
            const projectTitleText = projectTitleElement ? projectTitleElement.textContent.trim() : '';

            const figcaptionElement = thumbnail.querySelector("figcaption");
            if (figcaptionElement) {
                figcaptionElement.textContent = projectTitleText;
            }
        }

        // Add click event listener
        thumbnail.addEventListener("click", function () {
            // Get the media element inside the clicked thumbnail
            const mediaElement = this.querySelector("img, video");
            const targetId = mediaElement ? mediaElement.dataset.id.trim() : '';

            // Only proceed if targetId is valid
            if (targetId) {
                // Close any currently open <details> elements
                document.querySelectorAll("details[open]").forEach(function (detail) {
                    detail.removeAttribute("open");
                });

                // Open the corresponding <details> element
                const targetDetails = document.getElementById(targetId);
                if (targetDetails) {
                    targetDetails.setAttribute("open", true);
                    scrollToDetails(targetDetails); // Assuming scrollToDetails function is defined elsewhere
                }
            }
        });
    } else {
        console.warn('Thumbnail does not have a data-id or media element:', thumbnail);
    }
});
});
