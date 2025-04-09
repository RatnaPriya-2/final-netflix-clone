import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "../../pages/Login/Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signUpToSite } from "../../Firebase/Firebase";
import { toast } from "react-toastify";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";

const SignUp2 = () => {
  const location = useLocation();

  const [learnMore, setLearnMore] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUpToSite(name, email, password);
      navigate("/login");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);
  return (
    <>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <div className="login-container">
          <img src={logo} alt="logo" className="login-logo" />

          <div className="login-form">
            <h2>Sign Up</h2>
            <form>
              <div className="input-cluster">
                <input
                  type="text"
                  value={name}
                  placeholder=" "
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Name</label>
              </div>
              <div className="input-cluster">
                <input
                  type="text"
                  value={email}
                  placeholder=" "
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
              </div>
              <div className="input-cluster">
                <input
                  type="password"
                  value={password}
                  placeholder=" "
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
              </div>

              <button className="sign-in-btn" onClick={handleSignUp}>
                Sign Up
              </button>
              <p className="or">OR</p>
              <button className="sign-in-code-btn">Use a sign-in code</button>
              <p className="forgot-password">Forgot password?</p>
              <div className="remember-cluster">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <p className="new-to-netflix">
                Already have account?
                <span>
                  <Link to="/login">Sign In now.</Link>
                </span>
              </p>
              <p className="captcha">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
              <div className="learn-more" onClick={() => setLearnMore(true)}>
                {learnMore ? (
                  <p id="learn-more-content">
                    The information collected by Google reCAPTCHA is subject to
                    the Google{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </a>
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is
                    not used for personalised advertising by Google).
                  </p>
                ) : (
                  <p className="only-learn-more">Learn more.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp2;
