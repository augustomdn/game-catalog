import Link from "next/link";
import DrawerComponent from "../drawer/DrawerComponent";
import { Button } from "../ui/button";
import DarkModeComponent from "../dark-mode/DarkModeComponent";

const navItems = [
    { label: 'Home', href: '' },
    { label: 'Favoritos', href: '' },
    { label: 'Calendário', href: '' }
];

export default function HeaderComponent() {
    return (
        <header className="p-4 flex justify-between items-center">

            {/* Logo */}
            <a href="">
                <span className="font-honk text-2xl uppercase md:text-2xl">
                    JOGOPÉDIA
                </span>
            </a>

            {/*  Menu Desktop */}
            <nav className="hidden gap-4 lg:flex">

                {navItems.map((item, index) => (
                    <Link href={item.href} key={index}>
                        <span className="text-xl text-primary-txt">{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* Menu Mobile/Tablet */}
            <DrawerComponent className="lg:hidden" />

            {/* Dark Mode Button */}
            <div className="hidden lg:flex lg:gap-4">
                <Button><span>Login</span></Button>
                <DarkModeComponent className="" />
            </div>

        </header>
    )
}