import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    //console.log({ user });
    
  };

  return (
    <div>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
