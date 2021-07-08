import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {db} from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    resetPassword,
  };

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function signup(values) {
    console.log("hello ", values.email)
    return auth.createUserWithEmailAndPassword(values.email, values.password).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        fname: values.firstName,
        lname: values.lastName,
        empNo: values.employeeNumber,
        userType: values.userType,
      });
    })
  } 

  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
