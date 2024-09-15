const commentContainer = document.getElementById('comment-container');

document.getElementById('btn').addEventListener('click',function () {
    const commentBox = document.getElementById('comment-text');
    const commentValue = commentBox.value;
    commentBox.value = '';
    const newComment = document.createElement('p')
    newComment.innerText = commentValue;
    commentContainer.appendChild(newComment)
})