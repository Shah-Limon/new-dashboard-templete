import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();



  const [signInWithEmailAndPassword] =
    useSignInWithEmailAndPassword(auth);
  const [loginError, setLoginError] = useState(null);

  const [userMail] = useAuthState(auth);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setLoginError("Incorrect email or password. Please try again.");
      });
  };

  if (userMail) {
    navigate("/");
    return null;
  }

  return (
    <>
      <div id="wrapper" className="theme-cyan">
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle auth-main">
            <div className="auth-box">
              <div className="top">
                <img src="assets/images/logo-white.svg" alt="Iconic" />
              </div>
              <div className="card">
                <div className="header">
                  <p className="lead">Login to your account</p>
                </div>
                <div className="body">
                  <form className="form-auth-small" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label
                        htmlFor="signin-email"
                        className="control-label sr-only"
                      >
                        Email
                      </label>

                      <input
                        {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"}
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="signin-password"
                        className="control-label sr-only"
                      >
                        Password
                      </label>
                      <input
                        {...register("password", { required: true })}
                        aria-invalid={errors.password ? "true" : "false"}
                        type="password"
                        placeholder="Enter your password"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group clearfix">
                      <label className="fancy-checkbox element-left">
                        <input type="checkbox" />
                        <span>Remember me</span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      LOGIN
                    </button>
                    <div className="bottom">
                      
                      <span>
                        Don't have an account?{" "}
                        <Link to="/register">Register</Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
