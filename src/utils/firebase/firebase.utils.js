import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';


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