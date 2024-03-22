document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".input-login");
    const registerForm = document.querySelector(".input-register");
    const showRegisterLink = document.getElementById("showRegister");
    const showLoginLink = document.getElementById("showLogin");
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    showRegisterLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });
    showLoginLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });
});

function delaySubmit(event) {
  event.preventDefault();
  event.target.classList.add('loading');
  setTimeout(function() {
    event.target.classList.remove('loading');
  }, 3000);
}

VANTA.BIRDS({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0xffffff,
    color1: 0x8a5af,
    color2: 0x47b9f7,
    birdSize: 1.60,
    wingSpan: 18.00,
    speedLimit: 8.00,
    separation: 27.00,
    alignment: 17.00,
    cohesion: 26.00,
    quantity: 3.00
})