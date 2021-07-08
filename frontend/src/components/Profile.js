import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";
import SMCProfile from "./SMCProfile";
import GOVTProfile from "./GOVTProfile";

export default function Profile() {
  const [userData, setUserData] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  async function logoutHandler() {
    try {
      await logout();
      history.push("/signin");
    } catch {
      console.log("Error in logging out");
    }
  }

  useEffect(() => {
    if (currentUser) {
      var docRef = db.collection("users").doc(currentUser.uid);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            //   userData = doc.data();
            setUserData(doc.data());
            console.log("UserType", userData.userType);
            //   console.log(typeof userData.userType);
            console.log(userData.userType === "govt");
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  }, []);

  return (
    <div>
      {userData && userData.userType === "govt" ? (
        <h1>
          <GOVTProfile />
        </h1>
      ) : (
        <h2>
          <SMCProfile />
        </h2>
      )}

      {currentUser && currentUser.uid}
      {userData.userType}
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}
