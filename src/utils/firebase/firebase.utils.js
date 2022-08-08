import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCVPOXtqtRMiuasndvCLz18sbbjLB1dJ78",
  authDomain: "clothing-store-v2.firebaseapp.com",
  projectId: "clothing-store-v2",
  storageBucket: "clothing-store-v2.appspot.com",
  messagingSenderId: "308140723063",
  appId: "1:308140723063:web:67bd8e725c6dc789d3ef72"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

 // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  console.log({userSnapshot})
  //does this exist in database
  console.log(userSnapshot.exists())

  //if user data does not exist, set the document with the data from userAuth in the collection
   
  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log('Error trying to create the user', error)
    }
    //if user data exists already just return

    return userDocRef;
  }

  

}