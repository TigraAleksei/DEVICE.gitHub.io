var link = document.querySelector(".writeus-popup");
var popupDevice = document.querySelector(".write");
var overlayDevice = document.querySelector(".modal-overlay");
var close = popupDevice.querySelector(".close");

var form = popupDevice.querySelector(".write-us-form");
var userName = popupDevice.querySelector("[name=name-user]");
var userMail = popupDevice.querySelector("[name=e-mail]");
var userTextarea = popupDevice.querySelector("[name=write-letter]");
var isStorageSupport = true;
var storage = "";
 
try {
	storage = localStorage.getItem("userName");
	storage = localStorage.getItem("userMail");
	storage = localStorage.getItem("userTextarea");
} catch (err) {
	isStorageSupport = false;
} 
link.addEventListener("click", function (evt){
	evt.preventDefault();
	popupDevice.classList.add("modal-show");
	overlayDevice.classList.add("modal-show-overlay");
	if (storage) {
		userName.value = storage;
		userMail.value = storage;
		userTextarea.focus();
	} else {
		userName.focus();
	}
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupDevice.classList.remove("modal-show");
    overlayDevice.classList.remove("modal-show-overlay");
    popupDevice.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
	if (!userMail.value || !userTextarea.value) {
		evt.preventDefault();
		popupDevice.classList.remove("modal-error");
		popupDevice.offsetWidth = popupDevice.offsetWidth;
		popupDevice.classList.add("modal-error");
		console.log("Нужно ввести ваши данные !");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("userName", userName.value);
			localStorage.setItem("userMail", userMail.value);
			localStorage.setItem("userTextarea", userTextarea.value);
		}
	}
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupDevice.classList.contains("modal-show")) {
        popupDevice.classList.remove("modal-show");
        overlayDevice.classList.remove("modal-show-overlay");
        popupDevice.classList.remove("modal-error");
      }
    }
  });
