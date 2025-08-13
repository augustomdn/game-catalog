"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AvatarProps {
    name_abbr?: string;
    src?: string;
    alt?: string;
    className?: string;
}

export default function AvatarComponent({name_abbr, src, alt, className}: AvatarProps) {

    return (
        <Avatar>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback className={className}>{name_abbr}</AvatarFallback>
        </Avatar>

    );
}
