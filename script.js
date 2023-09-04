const thankyou_popup = document.querySelector('.thankyou-popup');
const thankyou_popup_back = document.querySelector('.thankyou-popup__back');
const thankyoupopup_close = document.querySelector('.thankyou-popup__close');
const thankyoupopup_title = document.querySelector('.thankyou-popup__title');
const errorBlock = document.querySelector('.error-block');
const saveDataForm = document.getElementById('saveDataForm');

document.addEventListener('DOMContentLoaded', function() {
    if (saveDataForm) {

        saveDataForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(saveDataForm);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/save_data/', true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    if (response.hasOwnProperty('error') && response.error !== '') {
                        errorBlock.innerHTML = response.error;
                    } else {
                        errorBlock.innerHTML = '';
                        thankyoupopup_title.innerHTML = 'Спасибо за вашу заявку!';
                        thankyou_popup.classList.add('js-active');
                    }
                } else {
                    errorBlock.innerHTML = 'Ошибка. Что-то пошло не так. Попробуйте позже.';
                    console.error('Ошибка: ' + xhr.status);
                }
            };
            xhr.onerror = function() {
                errorBlock.innerHTML = 'Ошибка. Что-то пошло не так. Попробуйте позже.';
                console.error('Произошла ошибка при отправке запроса.');
            };
            xhr.send(formData);
        });

        thankyou_popup_back.addEventListener("click", function(e) {
            thankyou_popup.classList.remove('js-active');
        });
        thankyoupopup_close.addEventListener("click", function(e) {
            thankyou_popup.classList.remove('js-active');
        });
    }
});