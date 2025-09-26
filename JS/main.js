var typed = new Typed(".text", {
  strings: [
    "Full Stack .NET Developer",
    "ASP.NET Core Specialist",
    "SQL Server Expert",
    "API and Microservices Builder",
    "Frontend Developer",
    "Backend Developer"
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});


const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-link");


menuOpenButton.addEventListener("click", () => {
  document.body.classList.add("show-mobile-menu");
});


menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});


navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
});







