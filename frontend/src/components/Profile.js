import React from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  async function logoutHandler() {
    try {
      await logout();
      history.pushState("/signin");
    } catch {
      console.log("Error in logging out");
    }
  }

  return (
    <div>
      <h1>{currentUser && currentUser.uid}</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}
