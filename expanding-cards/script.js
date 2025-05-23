let panels = document.querySelectorAll(".panel");
let panelsArray = Array.from(panels);

panels.forEach((p) => {
  p.addEventListener("click", () => {
    // clearCurrentActivePanel();
    const activePanel = document.querySelector(".active");
    if (activePanel == p) {
      p.classList.remove("active");
    } else {
      clearCurrentActivePanel();
      p.classList.add("active");
    }
  });
});

const clearCurrentActivePanel = () => {
  panels.forEach((p) => {
    p.classList.remove("active");
  });
};
