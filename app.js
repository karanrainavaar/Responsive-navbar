let barIcon = document.querySelector(".icon-2");
let scrollBar = document.querySelector(".scroll-bar");
let catBtn2 = document.querySelector("#cate2");
let catBtn1 = document.querySelector("#cate1");
let catDiv = document.querySelector(".categories");
let catDiv2 = document.querySelector(".categories2");
let input = document.querySelectorAll("input");

barIcon.addEventListener("click",() => {
    barIcon.classList.remove("fa-solid");
    barIcon.classList.remove("fa-bars");
    scrollBar.classList.toggle("scroll-down");
    barIcon.classList.add("fa-solid");
    barIcon.classList.add("fa-xmark");

    barIcon.addEventListener("click", () => {
        barIcon.classList.toggle("fa-solid");
        barIcon.classList.toggle("fa-xmark"); 
        barIcon.classList.toggle("fa-solid");
    barIcon.classList.toggle("fa-bars");
    });
});

catBtn2.addEventListener("click",() => {
    catDiv.classList.toggle("catDiv");
});

catBtn1.addEventListener("click", () => {
    catDiv2.classList.toggle("catDiv2");
});
