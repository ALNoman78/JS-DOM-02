// const v = document.getElementById("change-element")

//option one using onclick method  on attribute on html

function summaryOnClick(){
    const newElement = document.getElementById('change-element');
    newElement.innerText = "This is change by onclick attribute"
}
// practice task = 01

function newElement(){
    const changeElement = document.getElementById('change-text');
    changeElement.innerText = "This is practice task using javaScript in DOM"
}

//  using add event listener

document.getElementById("added-event").addEventListener('click',function(){
    const handlerButton = document.getElementById("change-text")
    handlerButton.innerText = "text updated by event listener"
})

//  option recap - 2

// document.getElementById('button-update').addEventListener('click',function(){
//     const inputField = document.getElementById('text')
//     const updateHeading = inputField.value;
//     const headingTextUpdate = document.getElementById('heading-text-update');
//     headingTextUpdate.innerText = updateHeading;
// })


// document.getElementById('button-update').addEventListener('click', function(){
//     const inputField = document.getElementById('text')
//     const updateHeading = inputField.value;
//     const headindText = document.getElementById('heading-text-update')
//     headindText.innerText = updateHeading;
//     inputField.value = "";
// })

// add event listener recap

document.getElementById('event-button').addEventListener('click',function(){
    const inputText = document.getElementById('text');
    const inputUpdateValue = inputText.value;
    const headingText = document.getElementById('name-Noman')
    headingText.innerText = inputUpdateValue;
    inputText.value = "";
})