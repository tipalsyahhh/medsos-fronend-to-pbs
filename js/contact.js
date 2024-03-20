
function toggleModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = modal.style.display === "none" ? "block" : "none";
}

function showChat() {
    var welcome = document.querySelector('.welcome');
    var isiChat = document.querySelector('.profile-case');
    var userChat = document.querySelector('.user-chat');
    function toggleElements() {
        if (window.innerWidth <= 768) {
            welcome.style.display = isiChat.style.display === 'none' ? 'none' : 'none';
            isiChat.style.display = isiChat.style.display === 'none' ? 'flex' : 'none';
            userChat.style.display = isiChat.style.display === 'block' ? 'none' : 'block';
            // userChat.classList.remove('show-profile-case');
        } else {
            welcome.style.display = 'none';
            isiChat.style.display = 'flex';
            userChat.style.display = 'block';
            // userChat.classList.add('show-profile-case');
        }
        if (isiChat.style.display = "block" && window.innerWidth <= 768) {
            userChat.style.display = "none";
            isiChat.style.display = "flex"
        }
    }
    toggleElements();
    window.addEventListener('resize', toggleElements);
}
