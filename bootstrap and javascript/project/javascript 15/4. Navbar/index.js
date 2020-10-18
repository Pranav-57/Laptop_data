const btn = document.getElementById("btn");

const nav_items = document.querySelector(".nav_items")

btn.addEventListener('click', function(){
    nav_items.classList.toggle("active");
});