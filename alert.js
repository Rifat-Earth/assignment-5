const completedButtons = document.querySelectorAll('.disable-btn');
completedButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Board updated successfully');
    });
});