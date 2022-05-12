
function loading() {
  const title = document.querySelector('.none-title');
  setTimeout(() => {
    title.style.visibility = "visible";
    //title.style.transition = "2s";
  }, 3000);
}

export { loading }
