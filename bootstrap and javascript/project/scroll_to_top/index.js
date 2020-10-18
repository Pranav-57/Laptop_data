const toTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        toTop.classList.add("ative");
    }else{
        toTop.classList.remove("ative");
    }
})

function topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}