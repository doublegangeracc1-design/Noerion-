document.addEventListener("DOMContentLoaded", () => {

  // TODO:
  // Backend should verify that only trainees
  // can access this page.

  const userRole = localStorage.getItem("userRole");

  if (userRole !== "trainee") {
    window.location.href = "../landing/landing.html";
    return;
  }
  
  
  const consentGiven =
    localStorage.getItem("privacyConsent");

  if (consentGiven === "true") {
    window.location.href =
      "../eeg/eeg-setup.html";
    return;
  }
  

  const consentCheck = document.getElementById("consentCheck");
  const acceptBtn = document.getElementById("acceptBtn");
  const declineBtn = document.getElementById("declineBtn");

  consentCheck.addEventListener("change", () => {
    if (consentCheck.checked) {
      acceptBtn.disabled = false;
      acceptBtn.classList.add("active");
    } else {
      acceptBtn.disabled = true;
      acceptBtn.classList.remove("active");
    }
  });

  acceptBtn.addEventListener("click", () => {

    // TODO:
    // Backend should save consent records
    // to the database.
    localStorage.setItem(
      "privacyConsent",
      "true"
    );

    localStorage.setItem(
      "privacyConsentDate",
      new Date().toISOString()
    );

    localStorage.setItem(
      "privacyVersion",
      "1.0"
    );

    window.location.href =
      "../eeg/eeg-setup.html";
  });

  declineBtn.addEventListener("click", () => {
    window.location.href =
      "../landing/landing.html";
  });

});