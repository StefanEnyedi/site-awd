// var particles = Particles.init({
//   selector: ".background",
//   color: "#000000",
//   connectParticles: true,
//   maxParticles: 200,
//   responsive: "null",
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const menuBtn = document.querySelector(".hamburger");
//   const navLinks = document.querySelector(".hamburgerMenu");

//   menuBtn.addEventListener("click", function () {
//     navLinks.classList.add("active");
//   });
//   document.addEventListener("click", function (event) {
//     // Verificăm dacă click-ul nu este în interiorul meniului
//     if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
//       // Dacă nu este în interiorul meniului și nici în interiorul butonului hamburger, închidem meniul
//       navLinks.classList.remove("active");
//     }
//   });
//   menuBtn.addEventListener("click", function () {
//     if (navLinks.classList.contains("active")) {
//       // Dacă meniul este deja deschis, închidem meniul
//       navLinks.classList.remove("active");
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const menuBtn = document.querySelector(".hamburger");
//   const navLinks = document.querySelector(".hamburgerMenu");

//   menuBtn.addEventListener("click", function () {
//     if (navLinks.classList.contains("active")) {
//       // Dacă meniul este deja deschis, închidem meniul
//       navLinks.classList.remove("active");
//     } else {
//       // Altfel, deschidem meniul
//       navLinks.classList.add("active");
//     }
//   });

//   document.addEventListener("click", function (event) {
//     // Verificăm dacă click-ul nu este în interiorul meniului
//     if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
//       // Dacă nu este în interiorul meniului și nici în interiorul butonului hamburger, închidem meniul
//       navLinks.classList.remove("active");
//     }
//   });
// });
// function myFunction() {
//   var dropDown = document.getElementById("myDropDown");
//   if (dropDown.style.display === "block") {
//     dropDown.style.display = "none";
//   } else {
//     dropDown.style.display = "block";
//   }
// }
document.addEventListener("click", function (event) {
  var dropDown = document.getElementById("myDropDown");
  var dropBtn = document.querySelector(".dropBtn");

  if (
    event.target !== dropBtn &&
    !dropBtn.contains(event.target) &&
    event.target !== dropDown &&
    !dropDown.contains(event.target)
  ) {
    dropDown.style.display = "none";
  }
});

function myFunction() {
  var dropDown = document.getElementById("myDropDown");
  if (dropDown.style.display === "block") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".hamburgerMenu");

  menuBtn.addEventListener("click", function () {
    // Adaugă sau elimină clasa 'active' și 'open' pentru a activa tranzitia
    navLinks.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
    // Verificăm dacă click-ul nu este în interiorul meniului
    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
      // Dacă nu este în interiorul meniului și nici în interiorul butonului hamburger, închidem meniul
      navLinks.classList.remove("active");
      navLinks.classList.remove("open");
    }
  });
});

// function myFunction() {
//   document.getElementById("myDropDown").classList.toggle("show");
// }
// window.onclick = function (event) {
//   if (!event.target.matches(".dropBtn")) {
//     var dropdowns = document.getElementsByClassName("dropDown");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

// const hamburger = document.getElementsByClassName(".hamburgerMenu");

// document.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementsByClassName(".hamburgerMenu").display = "Hello World";
// }

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector("ul");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// }

// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach((n) => n.addEventListener("click", closeMenu));

// function closeMenu() {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }
