
// :::::::::: Reel Pop Up  :::::::::::: //

const popup = document.querySelector("#reel-popup");
const popupButton = document.querySelector("#openPopupButton");
const closeButton = document.querySelector("#closePopUpButton");
console.log(closeButton);

function openPopup() {
  popup.classList.add('open');
  popup.classList.remove('close');
};

popupButton.addEventListener('click', openPopup)

export { openPopup }

// ::::::: Close Pop Up ::::::: //

function closePopup() {
  popup.classList.add('close')
  popup.classList.remove('open')
};

closeButton.addEventListener('click', closePopup);

export { closePopup }
