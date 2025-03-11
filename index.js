
const disableBtn = document.querySelectorAll(".disable-btn");
disableBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.setAttribute('disabled', 'true');
    });
});

  

