import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export const cn = (...inputs) => twMerge(clsx(inputs));

export const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));
