import React from 'react'
import './Profile.css'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import PostSide from '../../Components/PostSide/PostSide';
import RightSide from '../../Components/RightSide/RightSide';

export default function Profile() {
  return (
    <div className="Profile">
      <ProfileLeft/>

      <div className="Profile-center">
        <ProfileCard/>
        <PostSide/>
      </div>

      <RightSide/>


    </div>
  )
}
