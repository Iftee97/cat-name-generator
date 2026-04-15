"use client";

import { Button } from "./ui/button";

export function RevealButton({ catName }) {
    const handleClick = () => {
        document.getElementById("main").innerText = catName;
    };

    return (
        <Button onClick={handleClick} className="w-max">
            Reveal Cat Name
        </Button>
    );
}
