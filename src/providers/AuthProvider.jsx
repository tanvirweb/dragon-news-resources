import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config"
export const ContentAPI = createContext(null)

const AuthProvider = ({ children }) => {
    // Set user status, such as logged in or not
    const [user, setUser] = useState(null);

    // Signup User Using Email Pass
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // User login using email pass
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // User logout
    const userLogout = () => {
        return signOut(auth)
    }

    // Check user status
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        });
        return(() => {
            unSubscribe();
        })
    }, [])

    // Passing data using contentAPI
    const contextData = {user, userLogin, userRegister, userLogout};

    return (
        <ContentAPI.Provider value={contextData}>
            {children}
        </ContentAPI.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;