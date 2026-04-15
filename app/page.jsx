import { Fragment } from "react";
import Image from "next/image";

import { RevealButton } from "@/components/reveal-button";

import { readFile } from "fs/promises";
import path from "path";

async function getRandomCatName() {
    const catFile = await readFile(path.join(process.cwd(), "public/cats.txt"), "utf-8");
    const catNames = catFile.split("\n").filter(Boolean);
    const index = Math.floor(Math.random() * catNames.length);
    return catNames[index];
}

export default async function HomePage() {
    const catName = await getRandomCatName();

    console.log({ catName });

    return <RevealButton catName={catName} />;
}
