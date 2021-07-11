import Router from 'next/Router';
import firebase from 'firebase/app';
import {useState} from 'react';
import 'firebase/auth';

import initFirebase from '../services/firebase.js';

initFirebase();

const provider =  new firebase.auth.GoogleAuthProvider();
console.log(provider);

export default function Join(){
  const [authorizing, setAuthorizing] = useState(false);


  const handleAuthentication = async () =>{
    setAuthorizing(true);
    console.log(10);

      const result = await firebase.auth().signInWithPopup(provider);

      const {user} = result;

      console.log({user});

      if(!user){
        throw new Error('There was an issue authorizing');
      }
      // Router.push('/login');
      setAuthorizing(false);
    }


return (
  <div>
  <center>
<h1>Join Now</h1>
<h2>Click Below to Sign in or Join</h2>
<button loading={authorizing} onClick = {handleAuthentication} className="btn btn-success" style={{outline:'none', marginTop:'30px'}}>Login Via Google</button>
</center>
  </div>
)
}
