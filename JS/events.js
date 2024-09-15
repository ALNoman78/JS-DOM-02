// const body = document.getElementById("body")
// body.style.backgroundColor = "Yellow"

// option 2 (remanded)

function makeRed (){
    document.body.style.backgroundColor = "green";
}

// option three

const variable = document.getElementById("make-option-3")
variable.onclick = color;
    function color (){
    document.body.style.backgroundColor = "steelblue";
}

// option 2 (practice task)

function makeColor (){
    document.body.style.backgroundColor = "purple"
}

// option 4 with addEventListener ()

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor = "pink";
})

// most use case and final 

document.getElementById("blue-button").addEventListener('click',function() {
    document.body.style.backgroundColor = "blue";
})