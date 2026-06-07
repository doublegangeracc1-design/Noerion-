const currentStatus = document.getElementById("currentStatus");
const loadingTitle = document.getElementById("loadingTitle");

const loadingSteps = [
  "Verifying credentials...",
  "Loading user environment...",
  "Synchronizing assessment data...",
  "Preparing dashboard..."
];

// TODO: Backend integration:
// Replace simulated loading steps with real API calls.

let stepIndex = 0;
let cycleCount = 0;
const maxCycles = 2;

function startTitleAnimation() {
  let titleDots = 0;

  titleTimer = setInterval(() => {
    titleDots = (titleDots % 3) + 1;
    loadingTitle.textContent =
      "Initializing TESDA System" + ".".repeat(titleDots);
  }, 500);
}

function showLoadingStep() {
  const step = loadingSteps[stepIndex];

  currentStatus.textContent = step;
  currentStatus.className = "current-status fade-in";

  setTimeout(() => {
    currentStatus.className = "current-status fade-out";

    setTimeout(() => {
      stepIndex++;

      if (stepIndex < loadingSteps.length) {
        showLoadingStep();
      } else {
        cycleCount++;

        if (cycleCount < maxCycles) {
          stepIndex = 0;
          showLoadingStep();
        } else {
          clearInterval(titleTimer);

          currentStatus.textContent = "";
          loadingTitle.textContent =
            "Initializing TESDA System...";

          window.location.href = "../PRIVACY/privacy.html";
        }
      }
    }, 350);

  }, 1800);
}

let titleTimer;
startTitleAnimation();
showLoadingStep();




