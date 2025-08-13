import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";


export default function useSupabaseUser() {
    const [user, setUser] = useState<{ name_abbr: string, avatar_url: string } | null>(null);


    useEffect(() => {

        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();


            if (user) {
                const firstName = user.user_metadata?.first_name || "";
                const lastName = user.user_metadata?.last_name || "";

                const name_abbr =
                    (firstName[0] || "") + (lastName[0] || "") || "S/N";

                setUser({
                    name_abbr: name_abbr.toUpperCase(),
                    avatar_url: user.user_metadata?.avatar_url || ""
                });
            }
        };

        fetchUser();

        const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) setUser(null);
            else fetchUser();
        });

        return () => subscription.subscription.unsubscribe();

    }, []);

    return user;
}