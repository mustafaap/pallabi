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
