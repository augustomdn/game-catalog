"use client"

import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import HeaderComponent from "./components/header/HeaderComponent";
import InfosComponent from "./components/infos/InfosComponent";

import TrendingComponent from "./components/trending/TrendingComponent";
import FullScreenLoadingComponent from "../full-screen-loading/FullScreenLoadingComponent";
import MainComponent from "./components/main/MainComponent";

export default function LandingComponent() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    if (loading) {
        return <FullScreenLoadingComponent />;
    }

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