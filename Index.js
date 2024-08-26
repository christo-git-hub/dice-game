function changeContent() {

    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");
    var header = document.querySelector("h1");

    
    var randomnumber1 = Math.floor(Math.random() * 6) + 1;
    var randomnumber2 = Math.floor(Math.random() * 6) + 1;

    
    img1.setAttribute("src", "./images/dice" + randomnumber1 + ".png");
    img2.setAttribute("src", "./images/dice" + randomnumber2 + ".png");

    
    if (randomnumber1 > randomnumber2) {
        header.textContent = "Player 1 wins!!";
    } else if (randomnumber1 < randomnumber2) {
        header.textContent = "Player 2 wins!!";
    } else {
        header.textContent = "Draw!!";
    }
}


var button = document.querySelector("button");
button.addEventListener('click', changeContent);
