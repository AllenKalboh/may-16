"use client";
import { supabase } from "@/app/CreateClient";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signUp: (
    email: string,
    password: string,
    name?: string | null,
    age?: number | null
  ) => Promise<void>;
  error: string | null;
  id: string | null;
}

const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  //States that will be provided to the components that will use this context

  // GLOBAL STATES?
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);

  const checkAuth = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session?.user.id);
      setIsLoggedIn(session !== null);
      console.log(session === null);
      setId(session?.user.id ?? "");
    });
  };
  checkAuth();

  // Function to Call for Sign in
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setIsLoading(false);
    if (error) {
      setError(error.message);
    }
    if (data) {
      router.push("/pages/HomeScreen");
    }
  };

  // Function to Call for SignUP
  const signUp = async (
    email: string,
    password: string,
    name?: string | null,
    age?: number | null
  ) => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (data) {
      await supabase.from("users").insert({
        name: name,
        age: age,
        id: data.user?.id,
      });
    }

    setIsLoading(false);
    router.push("/pages/Login");
  };
  // Function to Call for Signout
  const logout = async () => {
    setIsLoading(true);
    await supabase.auth.signOut();
    setIsLoading(false);
    router.push("/pages/Login");
  };

  const valyu: AuthContextType = {
    isLoggedIn,
    isLoading,
    login,
    logout,
    signUp,
    error,
    id,
  };

  return <AuthContext.Provider value={valyu}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Use auth must be used witihin an AuthProvider");
  }
  return context;
};

export default AuthProvider;
