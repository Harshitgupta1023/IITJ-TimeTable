import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged} from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
        console.log("Signed Out.....")
    }
});
const SignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  } catch (error) {
    console.log("Google Auth ERROR -------->", error);
  }
};

export {SignIn};
