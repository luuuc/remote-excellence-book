function toggleMenu() {
  const offcanvas = document.getElementById("offcanvas");
  const overlay = document.getElementById("overlay");

  if (offcanvas.classList.contains("open")) {
    offcanvas.classList.remove("open");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  } else {
    offcanvas.classList.add("open");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

// Close menu when clicking on a link
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      // Only close menu if it's not a section header (which might have submenus)
      if (!link.classList.contains("nav-section")) {
        toggleMenu();
      }
    });
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const offcanvas = document.getElementById("offcanvas");
      if (offcanvas.classList.contains("open")) {
        toggleMenu();
      }
    }
  });
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
