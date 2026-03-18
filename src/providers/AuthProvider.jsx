import { createContext, useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
   GoogleAuthProvider,
   signInWithEmailAndPassword,
    signInWithPopup,
     signOut,
  updateProfile
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

//create user
const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}
//login
 const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google login
    const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //logout
   const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
 
//user state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
const authInfo = {
user,
loading,
createUser,
signInUser,
googleLogin,
logOut,
updateProfile


};

    return (
      <AuthContext.Provider value={authInfo}>
{children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;