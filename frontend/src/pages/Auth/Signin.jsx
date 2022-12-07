import React from 'react'
import "./Auth.css";
import Logo from "../../img/logo.png";

export default function Signin() {
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
          <h3>Sign In</h3>

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
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Dont Have an Account. Signup!
            </span>
            <button className="button infoButton" type="submit">Login</button>
          </div>
         
        </form>
      </div>
    </div>
    )
}
