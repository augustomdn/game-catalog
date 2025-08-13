"use client";

import { Avatar, AvatarFallback } from "../ui/avatar";

export default function AvatarComponent() {

    return (
        <div className="flex items-center gap-2">
            <Avatar>
                {/* <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" /> */}
                <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            
        </div>
    );
}
