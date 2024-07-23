function landingShuffler() {
  var landing_project_name = document.getElementById("landing-project-name");
  var landing_project_type = document.getElementById("landing-project-type");
  var landing_project_year = document.getElementById("landing-project-year");
  var landing_project_image = document.getElementById("landing-project-image");
  var landing_project_video = document.getElementById("landing-project-video");
  var landing_project_video_source = document.getElementById("landing-project-video-source");

  var index = document.querySelectorAll("details");
  var randomIndex = Math.floor(Math.random() * index.length);
  var mediaElements = index[randomIndex].querySelectorAll("img, video");
  var randomMediaIndex = Math.floor(Math.random() * mediaElements.length);
  var selectedMedia = mediaElements[randomMediaIndex];

  landing_project_name.textContent = index[randomIndex].getElementsByTagName("h1")[0].textContent;
  landing_project_type.textContent = index[randomIndex].getElementsByTagName("h2")[0].textContent;
  landing_project_year.textContent = index[randomIndex].getElementsByTagName("h3")[0].textContent;

  // Hide both media elements initially
  landing_project_image.style.display = 'none';
  landing_project_video.style.display = 'none';

  // Show and set the source of the appropriate media type
  if (selectedMedia.tagName.toLowerCase() === 'img') {
    landing_project_image.src = selectedMedia.src;
    landing_project_image.style.display = 'block';
  } else if (selectedMedia.tagName.toLowerCase() === 'video') {
    landing_project_video_source.src = selectedMedia.querySelector("source").src;
    landing_project_video.load(); // To reload the video with the new source
    landing_project_video.style.display = 'block';
  }
}

landingShuffler();