"use client"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import { useEffect, useState } from "react";
import DarkModeComponent from "../dark-mode/DarkModeComponent";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Favoritos', href: '/favoritos' },
    { label: 'Calendário', href: '/calendario' }
];

interface DrawerTriggerProps {
    className: string;
}

export default function DrawerComponent({ className }: DrawerTriggerProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && open) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [open]);

    return (
        <Drawer direction="right" open={open} onOpenChange={setOpen}>

            <DrawerTrigger className={`${className}`} >
                <Menu />
            </DrawerTrigger>

            <DrawerContent className="p-4 flex flex-col justify-between items-center">
                <DrawerHeader className="w-full p-0">
                    <DrawerTitle hidden={true} />

                    <DrawerClose className="flex justify-end mt-1">
                        <X />
                    </DrawerClose>

                </DrawerHeader>

                <DrawerDescription hidden={true} />


                <nav className="flex flex-col items-center gap-4">
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.label}>
                            <span className="text-xl">{item.label}</span>
                        </Link>
                    ))}
                    <Button>
                        <Link href="/registro">
                            <span>Cadastre-se</span>
                        </Link>
                    </Button>
                </nav>

                <DarkModeComponent />

                <DrawerFooter hidden={true}>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
