const burger = document.querySelector(".burger"),
      headerMenu = document.querySelector(".head-menu"),
      body = document.querySelector("body"),
      closeMenu = document.querySelector(".close");

burger.addEventListener("click", () => {
    burger.classList.toggle("h-active");
    headerMenu.classList.toggle("h-active");
    body.classList.toggle("lock");
});

closeMenu.addEventListener("click", (e) => {
    e.preventDefault();
    burger.classList.remove("h-active");
    headerMenu.classList.remove("h-active");
    body.classList.remove("lock");
});