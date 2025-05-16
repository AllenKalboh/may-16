"use client";
import { useAuth } from "@/app/store/AuthProvider/page";
import { useTheme } from "@/app/store/ThemeProvider/page";
import { useUser } from "@/app/store/UserProvider/page";
import React, { useContext } from "react";

const HomeScreen = () => {
  const { isDarkMode } = useTheme();

  const { user, fetchUser } = useUser();
  const { id } = useAuth();
  if (id) {
    fetchUser(id);
  }
  return (
    <div>
      Welcome {user?.name}
      <div>{isDarkMode ? "Dark" : "Light"}</div>
    </div>
  );
};

export default HomeScreen;
