import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Register = () => {
  const [gUser, gLoading] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  if (loading || gLoading) {
    return <loading></loading>;
  }

  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
    navigate("/");
  };

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
                  <p className="lead">Create an account</p>
                </div>
                <div className="body">
                  <form
                    className="form-auth-small"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group">
                      <label
                        htmlFor="signup-email"
                        className="control-label sr-only"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="usernameInput"
                        placeholder="Enter your Email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is Required",
                          },
                          pattern: {
                            value: /[A-Za-z]{3}/,
                            message: "Provide a Valid Email",
                          },
                        })}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="signup-password"
                        className="control-label sr-only"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        placeholder="Enter your password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is Required",
                          },
                          minLength: {
                            value: 6,
                            message: "Minimum 6 Characters",
                          },
                        })}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      REGISTER
                    </button>
                    <div className="bottom">
                      <span className="helper-text">
                        Already have an account?{" "}
                        <Link to="/login">Login</Link>
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

export default Register;
