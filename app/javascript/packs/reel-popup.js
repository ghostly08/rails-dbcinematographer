const popup = document.querySelector("#reel-popup");
const popupButton = document.querySelector("#openPopupButton");

function openPopup() {
  popup.classList.add('open')
};

popupButton.addEventListener('click', openPopup)

export { openPopup }
