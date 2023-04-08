import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"


export const AUTH_CONTEXT = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})

    // create account with email and password
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile name and photo
    const updateProfileInfo = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    // login with google 
    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //logout user
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [])

    const userInfo = {
        user,
        createAccount,
        loginUser,
        updateProfileInfo,
        googleSingIn,
        logout
    }


    return (
        <AUTH_CONTEXT.Provider value={userInfo}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;