// option 2 recap with some new problem

const appendValue = document.getElementById('append')

document.getElementById('post').addEventListener('click',function(){
    const newComment = document.getElementById('new-comment');
    const value = newComment.value;
    // appendValue.append(value);
    const newElement = document.createElement("p")
    newElement.innerText = value;
    const app = appendValue.append(newElement)
    newComment.value = "";
})
console.log(appendValue);