const navBtn = document.querySelector("#hambergerButton")
const navElement = document.querySelector("#primaryNav")

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("open")
    navElement.classList.toggle("open")
})