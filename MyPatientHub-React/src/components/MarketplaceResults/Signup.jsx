import { useState } from "react"; import "./Signup.css";
function SignUp({ onLoginClick }) { const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [confirmPassword, setConfirmPassword] = useState(""); const [errors, setErrors] = useState({}); const [success, setSuccess] = useState("");
function handleSubmit(e) { e.preventDefault();
setErrors({});
setSuccess("");

const newErrors = {};

if (name.trim().length < 2) {
  newErrors.name = "Please enter your full name.";
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
  newErrors.email = "Please enter a valid email address.";
}

if (password.length < 6) {
  newErrors.password =
    "Password must be at least 6 characters.";
}

if (password !== confirmPassword) {
  newErrors.confirmPassword =
    "Passwords do not match!";
}

if (Object.keys(newErrors).length > 0) {
  setErrors(newErrors);
  return;
}

setSuccess("Sign up form submitted successfully!");
}
return ( <div className="signup-container"> <form className="signup-form" onSubmit={handleSubmit}> <h1>Create Account</h1> <p>Join MyPatientHub today</p>
    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
    {errors.name && <p className="error">{errors.name}</p>}

    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    {errors.email && <p className="error">{errors.email}</p>}

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    {errors.password && (
      <p className="error">{errors.password}</p>
    )}

    <input
      type="password"
      placeholder="Confirm Password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    />
    {errors.confirmPassword && (
      <p className="error">{errors.confirmPassword}</p>
    )}

    {success && <p className="success">{success}</p>}

    <button type="submit">Create Account</button>

    <p className="login-link">
      Already have an account?{" "}
      <button type="button" onClick={onLoginClick}>
        Log in
      </button>
    </p>
  </form>
</div>
); }
export default SignUp;