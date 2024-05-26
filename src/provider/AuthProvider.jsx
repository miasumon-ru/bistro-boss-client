import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const axiosPublic = useAxiosPublic()

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

    // update profile

    const profileUpdate = (obj) => {

        return updateProfile(auth.currentUser , obj)
    }

    // login with google login

    const googleLogin = () => {

        setLoading(true)

        return signInWithPopup(auth, googleProvider)
    }



    useEffect(()=> {

       const unSubscribe =  onAuthStateChanged(auth, currentUser => {
        console.log(currentUser)
            setUser(currentUser)
            setLoading(false)


            if(currentUser){
                // get the token and store to the client side 

                const userInfo = {
                    email : currentUser.email
                }

                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    console.log(res.data)

                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }

                })

       


            }
            else{
                // TODO : remove token (if token stored in the client side)

                localStorage.removeItem('access-token')



            }



        })

        return () => {
            return unSubscribe()
        }

    },[axiosPublic])

    const AuthInfo = {

        user,
        loading,
        setUser,
        setLoading,
        createUser,
        login,
        logOut,
        profileUpdate,
        googleLogin
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