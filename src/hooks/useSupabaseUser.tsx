import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";


export default function useSupabaseUser() {
    const [user, setUser] = useState<{ name_abbr: string, avatar_url: string } | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();

            if (user) {
                const name_abbr = user.user_metadata.first_name ? user.user_metadata.first_name.split("").map((n: string) => n[0])
                    .join("")
                    .toUpperCase()
                    : "US";

                setUser({
                    name_abbr,
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