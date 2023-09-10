import React, { createContext, useEffect, useState,} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

const AuthContext = createContext()
const auth= getAuth(app);

const AuthProvider = ({children}) => {
    const [signinuser,setSigninuser]=useState(null)

    const creatUser=(email,password)=>
    {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>
    {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,(loggeduser)=>{
           
                console.log(loggeduser)
                setSigninuser(loggeduser)
            
        })

        return ()=>{
            unsubscribed();
        };
        
    },[])

    const logOut=()=>{

       return signOut(auth)
        
    }

    const authinfo={
        creatUser,
        signIn,
        logOut,
        signinuser,
    };

    return (
        <AuthContext.Provider value={authinfo}>
                {children}
        </AuthContext.Provider>
    );
};

export {AuthContext};
export default AuthProvider;