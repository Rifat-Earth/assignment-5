
const completedButton = document.querySelectorAll('.disable-btn');
completedButton.forEach(button => {
    button.addEventListener('click', function() {
        const currentTime = new Date().toLocaleTimeString();
        const commentContainer = document.getElementById('comment-container');
        commentContainer.value = `you have completed the task fix mobile button issue at ${currentTime}`;
    });
});