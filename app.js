let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("#name");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("#color");
    div.style.backgroundColor = randomColor;
    console.log(randomColor, "Colour updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 225 );
    let green = Math.floor(Math.random() * 225);
    let blue = Math.floor(Math.random() * 225);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}