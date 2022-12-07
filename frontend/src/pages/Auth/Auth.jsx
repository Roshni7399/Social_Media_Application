import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

export default function Auth() {
  return (
    <div className="Auth">
      {/* left side */}

      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>Proximity Content</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right form side */}

      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Sign Up</h3>

          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="User Name"
              className="infoInput"
              name="username"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Password"
              className="infoInput"
              name="password"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="infoInput"
              name="confirmpass"
            />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Already Have an Account. Login!
            </span>
          </div>
          <button className="button infoButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
