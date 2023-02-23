import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const twcx = (...classes: ClassValue[]) => twMerge(clsx(...classes));
