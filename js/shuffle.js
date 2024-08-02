function shuffle() {
  var shuffle_project_name = document.getElementById("shuffle-project-name");
  var shuffle_project_type = document.getElementById("shuffle-project-type");
  var shuffle_project_year = document.getElementById("shuffle-project-year");
  var shuffle_project_image = document.getElementById("shuffle-project-image");
  var shuffle_project_video = document.getElementById("shuffle-project-video");
  var shuffle_project_video_source = document.getElementById("shuffle-project-video-source");

  var index = document.querySelectorAll("details");
  var randomIndex = Math.floor(Math.random() * index.length);
  var mediaElements = index[randomIndex].querySelectorAll("img, video");
  var randomMediaIndex = Math.floor(Math.random() * mediaElements.length);
  var selectedMedia = mediaElements[randomMediaIndex];

  shuffle_project_name.textContent = index[randomIndex].getElementsByTagName("h1")[0].textContent;
  shuffle_project_type.textContent = index[randomIndex].getElementsByTagName("h2")[0].textContent;
  shuffle_project_year.textContent = index[randomIndex].getElementsByTagName("h3")[0].textContent;

  // Hide both media elements initially
  shuffle_project_image.style.display = 'none';
  shuffle_project_video.style.display = 'none';

  // Show and set the source of the appropriate media type
  if (selectedMedia.tagName.toLowerCase() === 'img') {
    shuffle_project_image.src = selectedMedia.src;
    shuffle_project_image.style.display = 'block';
  } else if (selectedMedia.tagName.toLowerCase() === 'video') {
    shuffle_project_video_source.src = selectedMedia.querySelector("source").src;
    shuffle_project_video.load(); // To reload the video with the new source
    shuffle_project_video.style.display = 'block';
  }
}

shuffle();