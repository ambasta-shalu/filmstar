import React, { useRef } from "react";
import "../css/SignUpScreen.css";
import { auth } from "../utils/Firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup-screen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="xyz@email.com" ref={emailRef} />
        <input type="password" placeholder="********" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signup-span-gray">New to Netflix? </span>
          <span className="signup-span-link" onClick={register}>
            Sign up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
