
function loadingLinks() {
  const links = document.getElementsByClassName("video-links").children;
  //const links = document.getElementsByTagName("a");
  //console.log(links);

  setTimeout(() => {
    links.style.visibility = "visible";
  }, 2000);
}

export { loadingLinks }
