import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import {auth} from "../config"

const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
const SignIn = async() => {
  try {
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  } catch (error) {
    console.log("Google Auth ERROR -------->", error);
  }
};

const SignOutN = async ()=>{
    try{
        const res = await signOut(auth)
        console.log("Sign Out Successfull.")
    }catch(err){
        console.log("SignOut",err)
    }

}
export { SignIn,SignOutN };
