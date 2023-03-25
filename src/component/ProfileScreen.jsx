import React from "react";
import "../css/ProfileScreen.css";
import Navbar from "./Navbar";
import userAvatar from "../assests/user-avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { auth } from "../utils/Firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  const handleSignOut = function () {
    auth.signOut();
  };

  return (
    <div className="profile-screen">
      <Navbar />
      <div className="profile-contents">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <div className="profile-avatar">
            <img src={userAvatar} alt="User Avatar" />
          </div>
          <div className="profile-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
              <h3>Plans</h3>
              <button className="profile-button" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
