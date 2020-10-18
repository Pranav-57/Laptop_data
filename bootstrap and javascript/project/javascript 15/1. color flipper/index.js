const colors = ["green","red","rgb(130,100,200)","#f1d3f1","blue","yellow","brown"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number 
    const randomNumber = getrandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];

    color.textContent = colors[randomNumber];
})

function getrandomNumber(){
    return Math.floor(Math.random() * colors.length);
}