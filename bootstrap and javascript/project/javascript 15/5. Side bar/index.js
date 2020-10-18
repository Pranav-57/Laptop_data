const side_toggle = document.querySelector(".side_toggle");
const sidebar = document.querySelector(".sidebar");
const close_btn = document.querySelector('.close_btn');

side_toggle.addEventListener("click", function(){
    sidebar.classList.toggle("sidebar_active");
});

close_btn.addEventListener("click", function(){
    sidebar.classList.toggle("sidebar_active");
});