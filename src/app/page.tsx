"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import FullScreenLoadingComponent from "@/components/full-screen-loading/FullScreenLoadingComponent";
import LandingComponent from "@/components/landing/LandingComponent";
import PrivateLandingComponent from "@/components/private-landing/PrivateLandingComponent";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
      setLoading(false);
    };

    checkSession();

    // opcional: ouvir mudanças de login/logout em tempo real
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <FullScreenLoadingComponent />;
  }

  return isLoggedIn ? <PrivateLandingComponent /> : <LandingComponent />;
}
