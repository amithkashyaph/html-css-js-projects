const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progressSteps = document.querySelectorAll(".progress-step");
const progressLine = document.getElementById("progress-line");

let currentStep = 1;

nextBtn.addEventListener("click", () => {
  currentStep++;
  if (currentStep > progressSteps.length) {
    currentStep = progressSteps.length;
  }
  console.log(currentStep);
  update();
});

prevBtn.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  update();
});

function update() {
  progressSteps.forEach((progressStep, index) => {
    if (index < currentStep) {
      progressStep.classList.add("active");
    } else {
      progressStep.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progressLine.style.width =
    ((actives.length - 1) / (progressSteps.length - 1)) * 100 + "%";

  if (currentStep >= progressSteps.length) {
    nextBtn.disabled = true;
  } else if (currentStep <= 1) {
    prevBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
}
