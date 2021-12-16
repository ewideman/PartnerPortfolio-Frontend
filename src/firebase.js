

import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAThLySrgCUs3tmJjr0p4inR1grJi5kEas",
  authDomain: "portfolia-app.firebaseapp.com",
  projectId: "portfolia-app",
  storageBucket: "portfolia-app.appspot.com",
  messagingSenderId: "714036331042",
  appId: "1:714036331042:web:f891762ca4345d7acf007b",
  measurementId: "G-RPCVTWGPCL"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  console.log("firebase init success")
}else{
  firebase.app();
}

const handleGoogleLogin = async () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({prompt : 'select_account'});
/*   await firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("result1", result);
    
    return result;
    // ...e
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  }); */
  try{
    const result = await firebase.auth().signInWithPopup(provider)
    return result
  }catch(err){
    console.log("google auth error", err)
  }
}

const handleGoogleLogout = async () => {
  await firebase.auth().signOut();
  console.log("google logout success")
  return true;
}

export {
  handleGoogleLogin,
  handleGoogleLogout,
}
