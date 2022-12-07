import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

export default function ProfileCard() {


  const ProfilePage = true;



  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Roshni</span>
        <span>Software Associate</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>5,8989</span>
            <span>Following</span>
          </div>

          <div className="vl"></div>

          <div className="follow">
            <span>343</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>


          {ProfilePage && (
            <>
            <div className="follow">
              <span>3</span>
              <span>Posts</span>
            </div>
            </>
          )}



        </div>
        <hr />
      </div>
      {ProfilePage?'':<span>
        My Profile
      </span>}
    </div>
  );
}