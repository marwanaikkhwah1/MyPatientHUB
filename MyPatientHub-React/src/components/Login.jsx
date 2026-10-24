import { useState } from "react"; import "./Login.css";
function Login({ onLoginSuccess, onSignUpClick }) { const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [emailError, setEmailError] = useState(""); const [passwordError, setPasswordError] = useState(""); const [successMessage, setSuccessMessage] = useState("");
function validation() { setEmailError(""); setPasswordError(""); setSuccessMessage("");
let isValid = true;

if (!email.trim()) {
  setEmailError("Please enter your email.");
  isValid = false;
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  setEmailError("Please enter a valid email address.");
  isValid = false;
}

if (!password) {
  setPasswordError("Please enter your password.");
  isValid = false;
} else if (password.length < 6) {
  setPasswordError("Password must be at least 6 characters.");
  isValid = false;
}

if (isValid) {
  setSuccessMessage("Sign in successful!");

  setTimeout(() => {
    onLoginSuccess?.();
  }, 500);
}
}
return ( <> <section className="login"> <h1>Welcome to MyPatientHub!</h1> <p>We provide smart healthcare services in your hands.</p> </section>
  <div className="form">
    <h2>Sign in to MyPatientHub</h2>

    <div className="social-icons">
      <img src="/images/f.jpg" alt="Facebook" />
      <img src="/images/g.jpg" alt="Google" />
    </div>

    <div className="form-content">
      <input
        type="email"
        id="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {emailError && <p className="error">{emailError}</p>}

      <input
        type="password"
        id="password"
        placeholder="Please enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {passwordError && <p className="error">{passwordError}</p>}

      <button className="btn1" type="button" onClick={validation}>
        SIGN IN
      </button>

      {successMessage && (
        <p className="success">{successMessage}</p>
      )}

      <div className="form-actions">
        <a href="#/login">Forget password?</a>

        <label>
          <input type="checkbox" />
          Remember me
        </label>
      </div>

      <p className="or-text">──────── or ────────</p>

      <button
        className="btn2"
        type="button"
        onClick={onSignUpClick}
      >
        SIGN UP
      </button>
    </div>
  </div>

  <footer>
    <p>Google Play Store App</p>
    <p>App Store App</p>
    <p>About MyPatientHub</p>
    <p>About Us</p>
    <p>Our Blog</p>
  </footer>
</>
); }
export default Login;