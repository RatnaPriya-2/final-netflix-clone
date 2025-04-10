import React, { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import "../../pages/Login/Login.css";
import { useNavigate } from "react-router-dom";
import { loginToSite } from "../../Firebase/Firebase";
import { toast } from "react-toastify";

import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";

const Login = () => {
  const [learnMore, setLearnMore] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const refContainer = useRef();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setLoading(true);

    try {
      await loginToSite(email, password);
      navigate("/home");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <div className="login-container">
          <img src={logo} alt="logo" className="login-logo" />

          <div className="login-form">
            <h2>Sign In</h2>
            <form>
              <div className="input-cluster">
                <input
                  type="text"
                  value={email}
                  placeholder=" "
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label ref={refContainer}>Email</label>
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

              <button className="sign-in-btn" onClick={handleSignIn}>
                Sign In
              </button>
              <p className="or">OR</p>
              <button className="sign-in-code-btn">Use a sign-in code</button>
              <p className="forgot-password">Forgot password?</p>
              <div className="remember-cluster">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <p className="new-to-netflix">
                New to Netflix?
                <span onClick={() => navigate("/signup")}> Sign up now.</span>
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

export default Login;
