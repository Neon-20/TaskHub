import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import {Poppins} from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-poppins",
})

// const headingFont = localFont({
// src:"../public/font.woff2",
// })

const Logo = () => {
    return ( 
    <Link href="/">
        <div className="hover:opacity-80 transition items-center
        gap-x-2 p-2 hidden md:flex">
        <Image
        src="/logo.png"
        alt="Logo"
        width="25"
        height="25"
        />
        <Link href="">
        <p className="text-xl text-white font-sans font-semibold text-transparent pb-1">
        TaskHub
        </p>
        </Link>
        </div>
    </Link>
);
}

export default Logo;