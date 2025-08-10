"use client"

import MainComponent from "@/components/main/MainComponent";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import RoundedSeparatorComponent from "@/components/rounded-separator/RoundedSeparatorComponent";
import TrendingComponent from "@/components/trending/TrendingComponent";
import InfosComponent from "@/components/infos/InfosComponent";
import Footer from "@/components/footer/Footer";

export default function Home() {

  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <RoundedSeparatorComponent />
      <TrendingComponent />
      <InfosComponent />
      <Footer />
    </>
  );
}
