import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flash, setFlash] = useState({ show: false, message: "", type: "" });
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (flash.show) {
      timer = setTimeout(() => {
        setFlash({ show: false, message: "", type: "" });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [flash]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim().toLowerCase() === "admin" && password.trim() === "1234") {
      setFlash({
        show: true,
        message: "Login successful! Redirecting to Dashboard...",
        type: "success",
      });
      localStorage.setItem("token", "sarkar-admin-auth-token");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setFlash({
        show: true,
        message: "Invalid credentials. Use admin / 1234",
        type: "error",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="icon-box">
              <i className="fa-solid fa-user-shield"></i>
            </div>
            <h2>SARKAR ADMIN</h2>
            <p className="login-subtitle">Control Panel Access</p>
          </div>

          {flash.show && (
            <div className={`flash-message ${flash.type}`}>
              <i
                className={`fa-solid ${
                  flash.type === "success"
                    ? "fa-circle-check"
                    : "fa-triangle-exclamation"
                }`}
              ></i>{" "}
              {flash.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-wrapper">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="demo-credentials-badge">
              <i className="fa-solid fa-key"></i> Demo Login: <strong>admin</strong> / <strong>1234</strong>
            </div>

            <button type="submit" className="btn-submit">
              <i className="fa-solid fa-right-to-bracket"></i> Login to Dashboard
            </button>
          </form>

          <div className="back-home">
            <Link to="/">
              <i className="fa-solid fa-arrow-left"></i> Return to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;