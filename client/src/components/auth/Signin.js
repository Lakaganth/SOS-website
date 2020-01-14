import React, { useState } from "react";
import firebase from "./../../context/firebase/FirebaseState";

import "./Auth.scss";
import Admin from "../../assets/img/admin.png";

const Signin = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const loginuser = async (email, password) => {
    try {
      await firebase.login(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = user;
    loginuser(email, password);
    props.history.push("/admin");
    console.log("Signed in");
  };

  return (
    <div className="auth-container">
      <div className="admin-img">
        <img src={Admin} alt="" />
      </div>
      <div className=" sign-in-container ">
        <h1 className="col s12">Sign In</h1>
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row" />
          <div className="row">
            <div className="input-field col s12">
              <input
                name="email"
                placeholder="Email"
                id="email"
                type="email"
                className="validate"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="password"
                placeholder="Password"
                id="password"
                type="password"
                className="validate"
                required
                minLength="6"
                onChange={handleChange}
              />
            </div>
          </div>
          <input
            type="submit"
            className="btn waves-effect waves-light cyan accent-3"
            value="Sign In"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default Signin;
