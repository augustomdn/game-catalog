"use client"

import Link from "next/link";
import "./globals.css";
import DrawerComponent from "@/components/drawer/DrawerComponent";
import DarkModeComponent from "@/components/dark-mode/DarkModeComponent";
import { Button } from "@/components/ui/button";
import HeaderComponent from "@/components/header/HeaderComponent";

const navItems = [
  { label: 'Home', href: '' },
  { label: 'Favoritos', href: '' },
  { label: 'Calendário', href: '' }
];


export default function Home() {

  return (
    <>
      <HeaderComponent/>
    </>
  );
}
