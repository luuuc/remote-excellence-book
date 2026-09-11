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

// Header download menu.
//
// Amazon offers no API letting a website drop a file onto someone's device.
// "Send to my Kindle" therefore does the only two things a page can do:
// download the EPUB, and open Amazon's upload tool where the reader drops it.
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("download-toggle");
  const menu = document.getElementById("download-menu");
  if (!toggle || !menu) return;

  function close() {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    const opening = menu.hidden;
    menu.hidden = !opening;
    toggle.setAttribute("aria-expanded", String(opening));
  });

  document.addEventListener("click", function (e) {
    if (!menu.hidden && !menu.contains(e.target)) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });

  const kindle = menu.querySelector("[data-kindle]");
  if (kindle) {
    kindle.addEventListener("click", function () {
      window.open(kindle.dataset.kindle, "_blank", "noopener");
      close();
    });
  }
});
