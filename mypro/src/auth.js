/*import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};*/

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Check local storage for the login status
        const savedLoginStatus = localStorage.getItem('isLoggedIn');
        return savedLoginStatus === 'true';
    });

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true'); // Save status in local storage
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn'); // Remove status from local storage
    };

    // Optional: Sync state with local storage on logout
    useEffect(() => {
        const handleStorageChange = () => {
            const savedLoginStatus = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(savedLoginStatus === 'true');
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

