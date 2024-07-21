function landingShuffler() {
  var landing_project_name = document.getElementById("landing-project-name");
  var landing_project_type = document.getElementById("landing-project-type");
  var landing_project_year = document.getElementById("landing-project-year");
  var landing_project_image = document.getElementById("landing-project-image");

  var index = document.querySelectorAll("details");
  var randomIndex = Math.floor(Math.random() * index.length);
  var imageIndex = index[randomIndex].querySelectorAll("img");
  var randomImageIndex = Math.floor(Math.random() * imageIndex.length);
  
  landing_project_name.textContent =
    index[randomIndex].getElementsByTagName("h1")[0].textContent;
  landing_project_type.textContent =
    index[randomIndex].getElementsByTagName("h2")[0].textContent;
  landing_project_year.textContent =
    index[randomIndex].getElementsByTagName("h3")[0].textContent;
  landing_project_image.src = imageIndex[randomImageIndex].src;
}

landingShuffler();
