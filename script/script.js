var wrapper = document.querySelector(".wrapper");
var loginLink = document.querySelector(".login-link");
var registerLink = document.querySelector(".register-link");
var btnPopup = document.querySelector(".login-btn");
var closeBtn = document.querySelector(".icon-close");

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});