import React, { useState } from "react";
import "../css/LoginScreen.css";
import Logo from "./Logo";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login-screen">
      <div className="login-logo">
        <Logo />
      </div>
      <button className="login-button" onClick={() => setSignIn(true)}>
        Sign In
      </button>
      <div className="login-gradient" />
      <div className="login-contents">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited Movies, TV programmes and more.</h1>
            <h2>Watch anywhere, Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login-input">
              <form action="">
                <input
                  className="login-input-field"
                  type="email"
                  placeholder="xyz@email.com"
                />
                <button
                  className="login-button get-started-button"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
