onload = () => {
  // Use requestAnimationFrame for smoother class removal
  requestAnimationFrame(() => {
    document.body.classList.remove("container");
  });
};

// Pause animations when tab is not visible
document.addEventListener("visibilitychange", () => {
  const flowers = document.querySelector(".flowers");
  if (document.hidden) {
    flowers.style.animationPlayState = "paused";
  } else {
    flowers.style.animationPlayState = "running";
  }
});

// Detect mobile and reduce animations
if (window.innerWidth <= 768) {
  document.querySelectorAll('.flower__light').forEach(el => {
    el.style.display = 'none';
  });
  
  document.querySelectorAll('.long-g').forEach((el, i) => {
    if (i > 4) el.style.display = 'none';
  });
}
