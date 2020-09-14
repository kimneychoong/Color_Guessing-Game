var numberofSqaures = 6
var colors = generateRandomColor(numberofSqaures);
var squares = document.querySelectorAll('.square')
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay")
colorDisplay.textContent = pickedColor
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset')
var easyBtn = document.querySelector('#easyBtn')
var hardBtn = document.querySelector('#hardBtn')


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")
    numberofSqaures = 3
    changeMode(numberofSqaures, 'easy')
})
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    numberofSqaures = 6
    changeMode(numberofSqaures, 'hard')
})

reset.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue"
    colors = generateRandomColor(numberofSqaures)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
})



for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            h1.style.backgroundColor = clickedColor
            reset.textContent = "Play again"
            changeColor(clickedColor)
        } else{
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Wrong!"
        }
    })
}

function changeMode(num, mode) {
    h1.style.backgroundColor = "steelblue"
    colors = generateRandomColor(num)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    console.log(colors)
    for (var i = 0; i < squares.length; i++) {
        if (mode == 'easy') {
            if (colors[i]) {
                squares[i].style.backgroundColor = colors[i]
            } else {
                squares[i].style.display = "none";
            }
        } else {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function generateRandomColor(num){
    var array = []
    for (var i=0; i<num; i++) {
        array.push(randomColor())
    }
    return array
}

function randomColor() {
 var red = Math.floor(Math.random() * 256)
 var green = Math.floor(Math.random() * 256)
 var blue = Math.floor(Math.random() * 256)
 return "rgb(" + red + ", " + green + ", " + blue + ")"
}


