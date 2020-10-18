const toggle_btn = document.getElementById("toggle_btn");
const side_bar = document.querySelector(".side_bar");
const btn_1 = document.getElementById("btn_1");
const btn_2 = document.querySelectorAll(".btn_2");
// const btn_3 = document.getElementById("btn_3");
const sub_items_1 = document.querySelectorAll('.sub_1');
const sub_items_2 = document.querySelectorAll('.sub_2');

console.log(btn_2);
console.log(sub_items_2);

toggle_btn.addEventListener('click', function(){
    side_bar.classList.toggle("active")
})
btn_1.addEventListener('click',function(){
    sub_items_1[0].classList.toggle("active_2")
});
btn_2[0].addEventListener('click',function(){
    sub_items_1[0].classList.toggle("active_2")
    console.log(sub_items_1[0]);
    sub_items_2[0].classList.toggle("active_3")
    console.log(sub_items_2[0]);
});
// btn_3.addEventListener('click',function(){
//     sub_items_1.classList.toggle("active_2")
//     sub_items_2.classList.toggle("active_3")
// });