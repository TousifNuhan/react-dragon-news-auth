import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader,setLoader]=useState(true);

    const createUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userLogin=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('User in current state changed',currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>{
               unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        userLogin,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;