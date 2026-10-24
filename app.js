const destination = "https://aminnepali.com.np/";
const authContent = document.querySelector("#auth-content");
const authCard = document.querySelector("#auth-card");
const cardKicker = document.querySelector("#card-kicker");
const cardIndex = document.querySelector("#card-index");

const pages = {
  login: {
    kicker: "WELCOME BACK",
    index: "01 / 03",
    title: "Sign in<span class=\"title-period\">.</span>",
    subtitle: "Your corner of the internet is right where you left it.",
    form: `
      <form class="auth-form" data-form="login">
        <label class="field-label" for="login-email">EMAIL ADDRESS</label>
        <div class="input-wrap">
          <span class="input-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><rect x="2.5" y="4" width="15" height="12" rx="2" /><path d="m3.5 5 6.5 5 6.5-5" /></svg>
          </span>
          <input id="login-email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required />
        </div>

        <div class="label-row">
          <label class="field-label" for="login-password">PASSWORD</label>
          <a class="inline-link" href="#/forgot">Forgot password?</a>
        </div>
        <div class="input-wrap">
          <span class="input-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><rect x="3.5" y="8.5" width="13" height="9" rx="2" /><path d="M6.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5M10 12v2" /></svg>
          </span>
          <input id="login-password" name="password" type="password" placeholder="Your password" autocomplete="current-password" required />
          <button class="password-toggle" type="button" data-toggle-password="login-password" aria-label="Show password">
            <svg viewBox="0 0 20 20" fill="none"><path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" /><circle cx="10" cy="10" r="2.2" /></svg>
          </button>
        </div>
        <div class="form-options">
          <label class="check-label"><input type="checkbox" name="remember" /><span class="custom-check" aria-hidden="true"></span><span>Keep me signed in</span></label>
          <span class="option-note">ON THIS DEVICE</span>
        </div>
        <button class="submit-button" type="submit">
          <span>Sign in to your space</span>
          <span class="button-arrow" aria-hidden="true">↗</span>
          <span class="button-shine" aria-hidden="true"></span>
        </button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </form>
      <div class="form-divider"><span>NEW AROUND HERE?</span></div>
      <a class="secondary-button" href="#/register">Create an account <span aria-hidden="true">↗</span></a>
    `,
  },
  register: {
    kicker: "A GOOD PLACE TO BEGIN",
    index: "02 / 03",
    title: "Make it yours<span class=\"title-period\">.</span>",
    subtitle: "A few details, and you're all set to make this space your own.",
    form: `
      <form class="auth-form" data-form="register">
        <label class="field-label" for="register-name">YOUR NAME</label>
        <div class="input-wrap">
          <span class="input-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6.2" r="3" /><path d="M4 17c.4-3.1 2.4-4.8 6-4.8s5.6 1.7 6 4.8" /></svg>
          </span>
          <input id="register-name" name="name" type="text" placeholder="How should we call you?" autocomplete="name" minlength="2" required />
        </div>
        <label class="field-label" for="register-email">EMAIL ADDRESS</label>
        <div class="input-wrap">
          <span class="input-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><rect x="2.5" y="4" width="15" height="12" rx="2" /><path d="m3.5 5 6.5 5 6.5-5" /></svg>
          </span>
          <input id="register-email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required />
        </div>
        <label class="field-label" for="register-password">CREATE A PASSWORD</label>
        <div class="input-wrap">
          <span class="input-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><rect x="3.5" y="8.5" width="13" height="9" rx="2" /><path d="M6.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5M10 12v2" /></svg>
          </span>
          <input id="register-password" name="password" type="password" placeholder="At least 8 characters" autocomplete="new-password" minlength="8" required />
          <button class="password-toggle" type="button" data-toggle-password="register-password" aria-label="Show password">
            <svg viewBox="0 0 20 20" fill="none"><path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" /><circle cx="10" cy="10" r="2.2" /></svg>
          </button>
        </div>
        <div class="password-meter" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
        <label class="field-label" for="register-confirm">CONFIRM PASSWORD</label>
        <div class="input-wrap">
          <span class="input-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><rect x="3.5" y="8.5" width="13" height="9" rx="2" /><path d="M6.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5M10 12v2" /></svg>
          </span>
          <input id="register-confirm" name="confirmPassword" type="password" placeholder="Type it once more" autocomplete="new-password" minlength="8" required />
          <button class="password-toggle" type="button" data-toggle-password="register-confirm" aria-label="Show password">
            <svg viewBox="0 0 20 20" fill="none"><path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" /><circle cx="10" cy="10" r="2.2" /></svg>
          </button>
        </div>
        <label class="check-label terms-check"><input type="checkbox" name="terms" required /><span class="custom-check" aria-hidden="true"></span><span>I agree to the <a class="inline-link" href="https://aminnepali.com.np/" target="_blank" rel="noreferrer">terms and privacy policy</a></span></label>
        <button class="submit-button" type="submit">
          <span>Create my account</span>
          <span class="button-arrow" aria-hidden="true">↗</span>
          <span class="button-shine" aria-hidden="true"></span>
        </button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </form>
      <div class="form-divider"><span>ALREADY HAVE AN ACCOUNT?</span></div>
      <a class="secondary-button" href="#/login">Back to sign in <span aria-hidden="true">↗</span></a>
    `,
  },
  forgot: {
    kicker: "IT HAPPENS TO THE BEST OF US",
    index: "03 / 03",
    title: "Find your way back<span class=\"title-period\">.</span>",
    subtitle: "Leave us the email you signed up with and we'll help you find your way back in.",
    form: `
      <form class="auth-form" data-form="forgot">
        <label class="field-label" for="forgot-email">EMAIL ADDRESS</label>
        <div class="input-wrap">
          <span class="input-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><rect x="2.5" y="4" width="15" height="12" rx="2" /><path d="m3.5 5 6.5 5 6.5-5" /></svg>
          </span>
          <input id="forgot-email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required />
        </div>
        <button class="submit-button" type="submit">
          <span>Send recovery link</span>
          <span class="button-arrow" aria-hidden="true">↗</span>
          <span class="button-shine" aria-hidden="true"></span>
        </button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </form>
      <div class="form-divider"><span>REMEMBERED IT?</span></div>
      <a class="secondary-button" href="#/login">Back to sign in <span aria-hidden="true">↗</span></a>
    `,
  },
};

function currentPage() {
  const route = window.location.hash.replace(/^#\/?/, "").split(/[/?]/)[0];
  return Object.hasOwn(pages, route) ? route : "login";
}

function renderPage() {
  const page = pages[currentPage()];
  cardKicker.textContent = page.kicker;
  cardIndex.textContent = page.index;
  authContent.innerHTML = `
    <div class="auth-heading">
      <h2>${page.title}</h2>
      <p>${page.subtitle}</p>
    </div>
    ${page.form}
  `;
  authCard.classList.remove("card-enter");
  requestAnimationFrame(() => authCard.classList.add("card-enter"));
  authContent.querySelector("input")?.focus({ preventScroll: true });
}

window.addEventListener("hashchange", renderPage);
if (!window.location.hash) window.history.replaceState(null, "", "#/login");
renderPage();

authContent.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-toggle-password]");
  if (!toggle) return;

  const input = document.getElementById(toggle.dataset.togglePassword);
  const showPassword = input.type === "password";
  input.type = showPassword ? "text" : "password";
  toggle.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
});

authContent.addEventListener("input", (event) => {
  if (event.target.id !== "register-password") return;
  const password = event.target.value;
  const strength = [
    password.length >= 8,
    /[A-Z]/.test(password) && /[a-z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;
  const meter = authContent.querySelector(".password-meter");
  meter.dataset.strength = strength;
});

authContent.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();

  const status = form.querySelector(".form-status");
  if (form.dataset.form === "register") {
    const password = form.elements.password.value;
    if (password !== form.elements.confirmPassword.value) {
      form.elements.confirmPassword.setCustomValidity("Those passwords don't match yet.");
      form.elements.confirmPassword.reportValidity();
      form.elements.confirmPassword.addEventListener("input", () => {
        form.elements.confirmPassword.setCustomValidity("");
      }, { once: true });
      return;
    }
    status.textContent = "Demo only — no account was created. Connect an auth provider to enable registration.";
    status.classList.add("is-visible");
    form.reset();
    authContent.querySelector(".password-meter")?.removeAttribute("data-strength");
    return;
  }

  if (form.dataset.form === "forgot") {
    status.textContent = "Demo only — no recovery email was sent. Connect an auth provider to enable password recovery.";
    status.classList.add("is-visible");
    form.reset();
    return;
  }

  status.textContent = "Demo only — your identity was not verified. Redirecting to aminnepali.com.np…";
  status.classList.add("is-visible");
  form.reset();
  window.setTimeout(() => window.location.assign(destination), 900);
});

if (window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const glow = document.querySelector(".cursor-glow");
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let glowX = pointerX;
  let glowY = pointerY;

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
  }, { passive: true });

  function animateCursor() {
    glowX += (pointerX - glowX) * 0.14;
    glowY += (pointerY - glowY) * 0.14;
    glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

document.addEventListener("pointermove", (event) => {
  const button = event.target.closest(".submit-button, .secondary-button");
  if (!button) return;
  const bounds = button.getBoundingClientRect();
  button.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
  button.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
}, { passive: true });
