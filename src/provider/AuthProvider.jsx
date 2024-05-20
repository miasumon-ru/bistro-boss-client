import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)

    // create user

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login
    const login = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout

    const logOut = () => {
        setLoading(true)

        return signOut(auth)
    }

    useEffect(()=> {

       const unSubscribe =  onAuthStateChanged(auth, currentUser => {
        console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unSubscribe()
        }

    },[])

    const AuthInfo = {

        user,
        loading,
        setUser,
        setLoading,
        createUser,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>

            {
                children
            }
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;