function infoToggle() {
  var x = document.getElementById("info-content");
  if (x.style.opacity === "1") {
    x.style.opacity = "0";
    x.style.visibility = "hidden";
  } else {
    x.style.opacity = "1";
    x.style.visibility = "visible";
  }

}