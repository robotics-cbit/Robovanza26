"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full nav-bg text-white font-semibold">
            <div className="h-[60px] sm:h-[80px] flex items-center justify-between px-5">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-xl font-Exo2">
                    <Image src="/logo.png" alt="logo" width={50} height={50} />
                    <span className="hidden sm:block">Robotics and Innovation Club</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-6 text-base font-Exo2">
                    <Link href="/AboutUs">ABOUT US</Link>
                    <Link href="/RoboWars">ROBOWARS</Link>
                    <Link href="/RoboSoccer">ROBOSOCCER</Link>
                    <Link href="/RoboSumo">ROBOSUMO</Link>
                    <Link href="/RoboRover">ROBOROVER</Link>
                    <Link href="/LineFollower">LINE FOLLOWER</Link>
                    <Link href="/ProjectExpo">PROJECT EXPO</Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center gap-4 py-6 nav-bg text-base font-Exo2">
                    <Link href="/AboutUs" onClick={() => setIsOpen(false)}>ABOUT US</Link>
                    <Link href="/RoboWars" onClick={() => setIsOpen(false)}>ROBOWARS</Link>
                    <Link href="/RoboSoccer" onClick={() => setIsOpen(false)}>ROBOSOCCER</Link>
                    <Link href="/RoboSumo" onClick={() => setIsOpen(false)}>ROBOSUMO</Link>
                    <Link href="/RoboRover" onClick={() => setIsOpen(false)}>ROBOROVER</Link>
                    <Link href="/LineFollower" onClick={() => setIsOpen(false)}>LINE FOLLOWER</Link>
                    <Link href="/ProjectExpo" onClick={() => setIsOpen(false)}>PROJECT EXPO</Link>
                </div>
            )}
        </nav>
    );
}
