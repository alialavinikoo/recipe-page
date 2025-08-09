
function moveImageContainer() {
  const header = document.getElementById("header");
  const imgContainer = document.getElementById("img-container");
  const mainPadded = document.getElementById("main-padded");

  if (!header || !imgContainer) return; 
  if (window.innerWidth < 400) {
    if (header.contains(imgContainer)) {
      header.parentNode.parentNode.insertBefore(imgContainer, mainPadded);
    }
  } else {
    if (!header.contains(imgContainer)) {
      header.insertBefore(imgContainer, header.firstChild);
    }
  }
}

document.addEventListener("DOMContentLoaded", moveImageContainer);

window.addEventListener("resize", moveImageContainer);
