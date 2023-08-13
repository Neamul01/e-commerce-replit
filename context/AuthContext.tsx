"use client";
import { auth } from "@/firebase/clientApp";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";

type AuthContextType = {
  user: any | null;
  googleSignIn: () => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // const mobileSignIn = ({ phone }: { phone: string }) => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPhoneNumber(auth, phone, provider);
  // };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  const contextValue: AuthContextType = {
    user,
    googleSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default function UserAuth() {
  return useContext(AuthContext);
}
