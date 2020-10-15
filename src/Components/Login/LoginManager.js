import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';




export const initializeFirebaseLogin = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

 export const handleGoogleSignIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res =>{
      const{displayName, photoURL, email} =res.user;
      const signInUser = {
        isSignIn: true,
        name: displayName, photoURL,
        email: email,
        photo: photoURL, 
        success:true
      }
      return signInUser;
    // setLoggedInUser(signInUser);
    // history.replace(from);
      // console.log(displayName, photoURL, email);
    })
    .catch(err =>{
      console.log(err);
      console.log(err.massage);
    })
  }
  export const handleGoogleSignOut = () =>{  
    return firebase.auth().signOut()
    .then(res => {
      // const{displayName, photoURL, email} =res.user;
      const signOutUser = {
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        error:'',
        success:''
      }
      return signOutUser;
    })
    .catch (err =>{
      
    })
  
  };
  export const createUserWithEmailAndPassword = (name, email, password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      updateUserName(name);
    return newUserInfo;
    // setUser(newUserInfo);
    
     
    })
    .catch(error => {
      // Handle Errors here.
      const newUserInfo ={};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
    });
  } 
  export const signInWithEmailAndPassword = (email, password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res =>{
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      return newUserInfo;
    //   setLoggedInUser(newUserInfo);
    //   history.replace(from);
    })
    .catch(function(error) {
      const newUserInfo ={};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
     
    });
  }

  const updateUserName = name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    })
    .then(function(){
      console.log('user name update successfully')
    }).catch(function(error){
      console.log(error)
    });
  }