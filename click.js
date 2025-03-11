
function handleCompletedButtonClick(increaseButton, decreaseButton) {
    let increaseValue = parseInt(increaseButton.textContent);
    let decreaseValue = parseInt(decreaseButton.textContent);

    increaseButton.textContent = increaseValue + 1;
    decreaseButton.textContent = decreaseValue - 1;
}

document.querySelectorAll('.disable-btn').forEach(button => {
    button.addEventListener('click', function() {
        
        const increaseButton = document.getElementById('increase');
        const decreaseButton = document.getElementById('decrease');
        
        handleCompletedButtonClick(increaseButton, decreaseButton);
    });
});
