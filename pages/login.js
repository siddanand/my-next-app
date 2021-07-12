import firebase from 'firebase/app';
import {useState} from 'react';
import 'firebase/auth';

import initFirebase from '../services/firebase.js';

initFirebase();

const provider =  new firebase.auth.GoogleAuthProvider();

export default function Join(){
  const [authorizing, setAuthorizing] = useState(false);


  const handleAuthentication = async () =>{
    setAuthorizing(true);
    console.log(10);

      const result = await firebase.auth().signInWithPopup(provider);

      const {user} = result;
      console.log(result.additionalUserInfo.isNewUser);
      console.log({user});

      if(!user){
        throw new Error('There was an issue authorizing');
      }
      setAuthorizing(false);
    }
    function currentUser() {
      // [START auth_current_user]
      const user = firebase.auth().currentUser;

      if (user) {
        console.log(user)
      } else {
        console.log('no user')
        // No user is signed in.
      }
      // [END auth_current_user]
    }
    function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    currentUser();
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
}

return (
  <div>
  <center>
<h1>Join Now</h1>
<h2>Click Below to Sign in or Join</h2>
<button onClick = {handleAuthentication} className="btn btn-success" style={{outline:'none', marginTop:'30px'}}>Login Via Google</button>
  <button onClick = {currentUser}>Current User</button>
  <button onClick = {signOut}>Sign Out</button>

</center>
  </div>
)
}
