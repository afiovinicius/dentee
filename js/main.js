// menu
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Cards Specialties
const hoverCard = document.querySelectorAll(".card_specialties");

hoverCard.forEach((hActive, index) => {
  hActive.addEventListener("mouseover", (e) => {
    e.preventDefault();

    hoverCard.forEach((hActiveR) => {
      hActiveR.classList.remove("active");
    });

    hActive.classList.toggle("active");
  });
});
