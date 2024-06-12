// Import FirebaseAuth and firebase.
import React, { useEffect, useState, useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import  {globalContext}  from './globalContext';
import { Navigate } from 'react-router-dom';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function AuthGuard({children}) {
  const {user} = useContext(globalContext)
  if (!user) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in: </p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }

  if(!children){
    return <Navigate to='/' />;
  }else{

  return (
    <div>{children}</div>
  );
  }
}

export default AuthGuard;