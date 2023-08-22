var js_btn_submit = document.querySelector('.js-btn-submit');
var thankyou_popup = document.querySelector('.thankyou-popup');
var thankyou_popup_back = document.querySelector('.thankyou-popup__back');
var thankyoupopup_close = document.querySelector('.thankyou-popup__close');

if (js_btn_submit) {
	js_btn_submit.addEventListener("click", function(e) {
		thankyou_popup.classList.add('js-active')
	});
	thankyou_popup_back.addEventListener("click", function(e) {
		thankyou_popup.classList.remove('js-active')
	});
	thankyoupopup_close.addEventListener("click", function(e) {
		thankyou_popup.classList.remove('js-active')
	});
}