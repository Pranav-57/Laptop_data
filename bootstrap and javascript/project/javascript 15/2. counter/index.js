const h1 = document.getElementById("h1");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const increment = document.getElementById("increment");

var count = h1.innerText

decrement.addEventListener("click", function(){
    count--;
    h1.innerText = count;
})
reset.addEventListener("click", function(){
    count = 0;
    h1.innerText = count;
})
increment.addEventListener("click", function(){
    count++;
    h1.innerText = count;
})