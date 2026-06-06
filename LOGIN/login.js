/* ==========================
   1. WAVE ANIMATION ENGINE
========================== */

const waveShadow = document.getElementById("waveShadow");
const waveCyan = document.getElementById("waveCyan");
const waveBlue = document.getElementById("waveBlue");

let tick = 0;

function animateWave() {
  let shadowPath = "";
  let cyanPath = "";
  let bluePath = "";

  const width = 1400;
  const centerY = 180;
  const points = 100;

  for (let i = 0; i <= points; i++) {
    const x = (i / points) * width;

    const volume = Math.sin((i / points) * Math.PI);
    const edge = Math.pow(volume, 0.4);

    let cyanY =
      centerY +
      (
        Math.sin(i * 0.25 + tick * 0.04) * 60 +
        Math.cos(i * 0.60 - tick * 0.06) * 120
      ) * edge;

    let shadowY =
      centerY + 8 +
      (
        Math.sin(i * 0.25 + tick * 0.035) * 35 +
        Math.cos(i * 0.60 - tick * 0.05) * 65
      ) * edge;

    let blueY =
      centerY +
      (
        Math.sin(i * 0.18 - tick * 0.03) * 80 +
        Math.cos(i * 0.50 + tick * 0.05) * 100
      ) * edge;

    cyanPath += `${i === 0 ? "M" : "L"} ${x} ${cyanY}`;
    shadowPath += `${i === 0 ? "M" : "L"} ${x} ${shadowY}`;
    bluePath += `${i === 0 ? "M" : "L"} ${x} ${blueY}`;
  }

  waveShadow.setAttribute("d", shadowPath);
  waveCyan.setAttribute("d", cyanPath);
  waveBlue.setAttribute("d", bluePath);

  tick++;
  requestAnimationFrame(animateWave);
}

animateWave();


/* ==========================
   2. PASSWORD TOGGLE (EYE)
========================== */

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.getAttribute("type") === "password";

  passwordInput.setAttribute("type", isPassword ? "text" : "password");

  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});


/* ==========================
   3. FORM + VALIDATION
========================== */

const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector(".btn-primary");
const loginError = document.getElementById("loginError");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(input) {
  const group = input.parentElement;
  group.classList.add("error");
}

function clearErrors() {
  document.querySelectorAll(".input-group").forEach(group => {
    group.classList.remove("error");
  });

  loginError.textContent = "";
}

function setLoading(state) {
  button.disabled = state;
  button.textContent = state ? "Logging in..." : "Login";
}


/* ==========================
   4. SUBMIT HANDLER (BACKEND READY)
========================== */

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  clearErrors();

  let hasError = false;

  // EMAIL CHECK
  if (email.value.trim() === "") {
    setError(email);
    hasError = true;
  } else if (!emailPattern.test(email.value)) {
    setError(email);
    hasError = true;
  }

  // PASSWORD CHECK
  if (password.value.trim() === "") {
    setError(password);
    hasError = true;
  } else if (password.value.length < 6) {
    setError(password);
    hasError = true;
  }

  if (hasError) return;

  setLoading(true);

  try {                           /* NEED TO CHANGE THE LOCAL HOST */
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    console.log("LOGIN SUCCESS:", data);

    window.location.href = "loading.html";



  } catch (err) {
    setError(email);

    loginError.textContent = err.message;
    console.error(err.message);

  } finally {
    setLoading(false);
  }
});


[email, password].forEach(input => {
  input.addEventListener("input", () => {
    const group = input.parentElement;

    if (input.value.trim() !== "") {
      group.classList.remove("error");
      loginError.textContent = "";
    }
  });
});

