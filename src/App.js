import SignIn from 'features/Auth/pages/SingIn';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from "./components/NotFound";

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getMe } from 'app/userSlice';



//Lazy load - code splitting
const Photo = React.lazy(() => import('./features/Photo'));
// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

function App() {
  const dispatch = useDispatch();
  //handle firebase auth change
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log('you are not logged in yet!');
        return;
      }
      const token = await user.getIdToken();
      // var db;
      // var request = indexedDB.open("firebaseLocalStorageDb");
      // request.onerror = function (event) {
      //   console.log("Why didn't you allow my web app to use IndexedDB?!");
      // };
      // request.onsuccess = function (event) {
      //   db = event.target.result;
      //   db.transaction("firebaseLocalStorage").objectStore("firebaseLocalStorage").get("firebase:authUser:AIzaSyDduuq6fzR7fawJDV1mh3F_LdSM1_92Ldg:[DEFAULT]").onsuccess = function (event) {
      //     console.log(event.target.result.value);
      //   };
      // };
      // console.log({ token: token });
      try {
        const actionResult = await dispatch(getMe());
        const currentUser = unwrapResult(actionResult);
        console.log('Logged in user: ', currentUser);
      } catch (error) {
        console.log('Failed to login ', error.message);
        // show toast error
      }

    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
