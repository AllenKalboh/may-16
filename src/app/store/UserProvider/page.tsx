"use client";
import { supabase } from "@/app/CreateClient";
import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  user: User | null;
  fetchUser: (id: string) => Promise<void>;
}

interface User {
  id: number;
  name: string;
  age: number;
}

const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [user, setUser] = useState<User | null>(null);
  console.log(user?.id);

  const fetchUser = async (id: string) => {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", id)
      .single();
    if (error) {
      console.log(error.message);
    }
    if (data) {
      setUser(data);
    }
  };

  const valyu: UserContextType = {
    user,
    fetchUser,
  };

  return (
    <UserContext.Provider value={valyu}> {children} </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "Use User must be used witihin a <UserProvider> </UserProvider>"
    );
  }
  return context;
};
export default UserProvider;
