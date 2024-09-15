// document.getElementById('input-field').addEventListener('keyup', function(e){
//     const valueOfElement = e.target.value
//     const deleteButton = document.getElementById('btn-delete')
//     if (valueOfElement === 'delete') {
//         deleteButton.removeAttribute('disabled')
//     }else{
//         deleteButton.setAttribute('disabled', true)
//     }
// })
// document.getElementById('btn-delete').addEventListener('click', function(){
//     const removeHeading = document.getElementById('heading-element');
//     removeHeading.style.display = 'none';
// })


//  recap section
// we have to notice what i'm type if my word is === what my condition then it will be work, 1st of all i need to see what i am typing

// document.getElementById('input-field').addEventListener('keyup', function(event){
//     const e = event.target.value
//     const disableBtn = document.getElementById('btn-delete')
//     if (e === "delete") {
//         disableBtn.removeAttribute('disabled')
//     }else{
//         disableBtn.setAttribute('disabled', true)
//     }
// })

// document.getElementById('btn-delete').addEventListener('click',function(){
//     const hideELement = document.getElementById('heading-element');
//     hideELement.style.display = 'none';
// })


//  practice task 3 recap session start

document.getElementById('input-field').addEventListener('keyup', function(event){
    const newElement = event.target.value;
    const deleteBtn = document.getElementById('btn-delete')
    if (newElement === 'delete') {
        deleteBtn.removeAttribute('disabled')
    }else{
        deleteBtn.setAttribute('disabled', true)
    }
})

document.getElementById('btn-delete').addEventListener('click', function(){
    const hideELement = document.getElementById('heading-element')
    hideELement.style.display = 'none';
})