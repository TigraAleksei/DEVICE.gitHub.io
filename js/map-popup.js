var linkMap = document.querySelector(".map-popup");
var popupDeviceMap = document.querySelector(".map");
var overlayDevice = document.querySelector(".modal-overlay");
var closeMap = popupDeviceMap.querySelector(".close");
linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupDeviceMap.classList.add("modal-show-map");
    overlayDevice.classList.add("modal-show-overlay");
  });
closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupDeviceMap.classList.remove("modal-show-map");
    overlayDevice.classList.remove("modal-show-overlay");
  });
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    	evt.preventDefault();
      if (popupDeviceMap.classList.contains("modal-show-map")) {
        popupDeviceMap.classList.remove("modal-show-map");
        overlayDevice.classList.remove("modal-show-overlay");
      }
    }
  });
