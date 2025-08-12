"use client"

import Footer from "../footer/Footer";
import HeaderComponent from "../header/HeaderComponent";
import InfosComponent from "../infos/InfosComponent";
import MainComponent from "../main/MainComponent";
import TrendingComponent from "../trending/TrendingComponent";

export default function LandingComponent() {
    return (
        <>
            <HeaderComponent />
            <MainComponent />
            <TrendingComponent />
            <InfosComponent />
            <Footer />
        </>
    )
}