/* =====================================================
   PARTICLES CONFIG
===================================================== */
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.4
    }
  }
});

/* =====================================================
   SECTION REVEAL ON SCROLL
===================================================== */
const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.25 }
);

sections.forEach(section => revealObserver.observe(section));

/* =====================================================
   SMOOTH NAVIGATION
===================================================== */
document.querySelectorAll("[data-scroll]").forEach(button => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* =====================================================
   MEMORY POPUP LOGIC
===================================================== */
const overlay = document.getElementById("messageOverlay");
const popupText = document.getElementById("popupText");

document.querySelectorAll(".memory-card").forEach(card => {
  card.addEventListener("click", () => {
    popupText.textContent = card.dataset.message;
    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
});

/* =====================================================
   NO BUTTON ESCAPE (PLAYFUL)
===================================================== */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {
    const maxX = 140;
    const maxY = 100;

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* =====================================================
   YES BUTTON CELEBRATION
===================================================== */
const yesBtn = document.getElementById("yesBtn");

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    confetti({
      particleCount: 260,
      spread: 160,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      alert("You just made my heart very, very happy ❤️");
    }, 400);
  });
}
