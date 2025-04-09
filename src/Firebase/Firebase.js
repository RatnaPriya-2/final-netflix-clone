import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD0Zx9gkkI8TFaRfnw4Wj4I4TTpj1TrX9A",
  authDomain: "final-netflix-clone-a3dcc.firebaseapp.com",
  projectId: "final-netflix-clone-a3dcc",
  storageBucket: "final-netflix-clone-a3dcc.firebasestorage.app",
  messagingSenderId: "255848127906",
  appId: "1:255848127906:web:bc0e0ca7f7a3806014a6fb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signUpToSite = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = response.user;
    await addDoc(collection(db, "Netflix Users"), {
      uid: user.uid,
      name: name,
      email: email,
    });
    toast.success("Sign Up Successful");
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const loginToSite = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Sign In Successful");
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
    throw new Error(error.code); 
  }
};

const signOutFromSite = async () => {
  await signOut(auth);
  toast.success("Sign Out Successful");
};

export { auth, db, signOutFromSite, signUpToSite, loginToSite };
