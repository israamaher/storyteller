import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

function AuthProvider({ children }){
    const [currentUser, setCurrentUser] =useState();
    const [loading , setLoading] = useState(true);

    const Signup=(email, password)=>{
      return  createUserWithEmailAndPassword(auth,email,password);
    }

    const logout = ()=>{
       return signOut(auth);
    }

    const login =(email,password)=>{
      return  signInWithEmailAndPassword(auth, email,password)
    }
    useEffect(()=>{
        const unsubscrbe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false);
        });
        return()=>{
            unsubscrbe();
        }
    },[])
    return(
        <AuthContext.Provider value={{ currentUser, Signup, logout, login}}> 
            {!loading && children}
        </AuthContext.Provider>

    );

}

export default AuthProvider;

export function useAuth(){
    return useContext(AuthContext);
} 