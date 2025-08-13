"use client"

import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import HeaderComponent from "../header/HeaderComponent";
import InfosComponent from "../infos/InfosComponent";
import MainComponent from "../main/MainComponent";
import TrendingComponent from "../trending/TrendingComponent";
import FullScreenLoadingComponent from "../full-screen-loading/FullScreenLoadingComponent";

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