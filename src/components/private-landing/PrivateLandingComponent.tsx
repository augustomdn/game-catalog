"use client"

import { useEffect, useState } from "react";
import FullScreenLoadingComponent from "../full-screen-loading/FullScreenLoadingComponent";
import PrivateHeaderComponent from "./components/private-header-component/PrivateHeaderComponent";

export default function PrivateLandingComponent() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    if (loading) {
        return <FullScreenLoadingComponent />;
    }

    return (
        <>
            <PrivateHeaderComponent />
        </>
    )
}