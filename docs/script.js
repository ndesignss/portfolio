gsap.registerPlugin(ScrollTrigger);

// INTRO
gsap.from("#logo", {
  scale: 0,
  duration: 1
});

setTimeout(() => {
  gsap.to("#intro", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("intro").style.display = "none";
    }
  });
}, 2000);

// CURSOR
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1
  });
});

// SCROLL ANIMATION
gsap.utils.toArray(".project-card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: card,
    y: 50,
    opacity: 0,
    duration: 1
  });
});

// AI CHAT
const input = document.getElementById("chatInput");
const text = document.getElementById("chatText");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const val = input.value.toLowerCase();

    if (val.includes("project")) {
      text.innerHTML = "Scroll and explore my work 🔥";
    } else if (val.includes("contact")) {
      text.innerHTML = "Contact via Instagram or WhatsApp 📩";
    } else {
      text.innerHTML = "I create cinematic digital experiences 😎";
    }

    input.value = "";
  }
});