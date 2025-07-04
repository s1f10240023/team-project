let nav=document.querySelector("#sidebar")
let btn=document.querySelector("#menuBtn")
let mask=document.querySelector("#mask")

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    mask.classList.toggle("active");
});

mask.addEventListener("click", () => {
    nav.classList.remove("active");
    mask.classList.remove("active");
});
