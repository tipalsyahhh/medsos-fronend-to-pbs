
function toggleModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = modal.style.display === "none" ? "block" : "none";
}

function showChat() {
    var welcome = document.querySelector('.welcome');
    var isiChat = document.querySelector('.isi-chat');
    var userChat = document.querySelector('.user-chat');
    function toggleElements() {
        if (window.innerWidth <= 768) {
            welcome.style.display = isiChat.style.display === 'none' ? 'none' : 'none';
            isiChat.style.display = isiChat.style.display === 'none' ? 'flex' : 'none';
            userChat.style.display = isiChat.style.display === 'block' ? 'none' : 'block';
            // userChat.classList.remove('show-isi-chat');
        } else {
            welcome.style.display = 'none';
            isiChat.style.display = 'flex';
            userChat.style.display = 'block';
            // userChat.classList.add('show-isi-chat');
        }
        if (isiChat.style.display = "block" && window.innerWidth <= 768) {
            userChat.style.display = "none";
            isiChat.style.display = "flex"
        }
    }
    toggleElements();
    window.addEventListener('resize', toggleElements);
}

var texts = ["Chat-if for Website"];
var speed = 500;
var index = 0;
var charIndex = 0;
var direction = 1;
var typingText = document.getElementById("typing-text");

function type() {
    if (index < texts.length) {
        if (charIndex < texts[index].length && direction === 1) {
            typingText.textContent += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else if (direction === 1) {
            direction = -1;
            setTimeout(type, speed * 3);
        } else if (charIndex > 0 && direction === -1) {
            typingText.textContent = texts[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, speed / 2);
        } else {
            direction = 1;
            index = (index + 1) % texts.length;
            charIndex = 0;
            setTimeout(type, speed * 2);
        }
    }
}


window.onload = function() {
    type();
};