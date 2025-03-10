document.getElementById("commentpost")
.addEventListener('click',function(){
    const commentText = document.getElementById('comment')
    const newComment= commentText.value;
    const commentContainer =document.getElementById('newcomment')
    const commentElement =document.createElement('p');
    commentElement.classList.add('comment')
    commentElement.innerText = newComment;
    commentContainer.appendChild(commentElement);

})
