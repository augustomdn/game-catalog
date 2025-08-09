"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import DrawerComponent from "../drawer/DrawerComponent";
import { Button } from "../ui/button";
import DarkModeComponent from "../dark-mode/DarkModeComponent";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Favoritos", href: "/favoritos" },
    { label: "Calendário", href: "/calendario" },
];

export default function HeaderComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Verifica se o usuário está logado
    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            setIsLoggedIn(!!data.session);
        };

        checkSession();

        // Listener para mudanças na autenticação
        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            setIsLoggedIn(!!session);
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            alert("Erro ao sair: " + error.message);
        } else {
            setIsLoggedIn(false);
            window.location.href = "/login";
        }
    };

    return (
        <header className="w-full p-4 flex justify-between items-center">
            <Link href="/">
                <span className="font-honk text-2xl uppercase">JOGOPÉDIA</span>
            </Link>

            {/* <nav className="hidden gap-4 lg:flex">
                {navItems.map((item, index) => (
                    <Link href={item.href} key={index}>
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav> */}

            {/* <DrawerComponent className="lg:hidden" /> */}

            <div className="flex gap-4 items-center">
                {isLoggedIn ? (
                    <>
                        <Button variant="secondary" onClick={handleLogout}>
                            Sair
                        </Button>
                    </>
                ) : (
                    <>
                        <Button asChild variant="secondary">
                            <Link href="/login">Entrar</Link>
                        </Button>
                    </>
                )}
                <DarkModeComponent />
            </div>
        </header>
    );
}
