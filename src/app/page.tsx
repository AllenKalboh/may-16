'use client'
import React, { useEffect, useState } from "react";
import Home from "./pages/Home/page";
import LabTable from "./medical-staff/LabTable/page";
import Responsive1 from "./Responsive/Responsive1/page";
import Soperbas from "./Soperbas/page";
import { supabase } from "./CreateClient";
import Authent from "./components/Auth/page";
const App = () => {
  const [session, setSession] = useState<any>(null);

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
    console.log(currentSession);
    setSession(currentSession.data.session);
  }
  useEffect(() => {
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })

    return () => {
      authListener.subscription.unsubscribe();
    }
  }, [])

  const logout = async () => {
    await supabase.auth.signOut();
  }

  return (
    <>

      <button onClick={logout}> Log out </button>
      {session ? <Soperbas session={session} /> : <Authent />}

    </>
  );
};

export default App;
