"use client";
import { AppLogo } from "@/components/app-ui/app-logo";
import { LogIn, MoveLeft } from "lucide-react";
import { DotBackground } from "./dot-background";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LandingPageBackground() {
    const pathname = usePathname();

    const isAuthPage =
        pathname === "/signin" ||
        pathname === "/signup";

    return (
        <>
            {/* Subtle dot grid */}
            <DotBackground />

            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

            {/* Geometric shapes */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Top-left square */}
                <div className="absolute -left-20 top-32 h-56 w-56 rotate-12 rounded-3xl border border-white/[0.07] bg-white/[0.015]" />

                {/* Top-right document */}
                <div className="absolute right-[8%] top-[12%] hidden h-52 w-40 rotate-[14deg] rounded-xl border border-white/[0.09] bg-zinc-950/80 shadow-2xl lg:block">
                    <div className="p-5">
                        <div className="mb-5 h-2 w-16 rounded-full bg-white/[0.12]" />
                        <div className="space-y-3">
                            <div className="h-1.5 w-full rounded-full bg-white/[0.06]" />
                            <div className="h-1.5 w-4/5 rounded-full bg-white/[0.06]" />
                            <div className="h-1.5 w-5/6 rounded-full bg-white/[0.06]" />
                        </div>
                        <div className="mt-8 h-16 rounded-lg border border-white/[0.05] bg-white/[0.02]" />
                    </div>
                </div>

                {/* Bottom-left diamond */}
                <div className="absolute bottom-[15%] left-[10%] hidden h-32 w-32 rotate-45 border border-white/[0.07] bg-white/[0.01] lg:block" />

                {/* Bottom-right circle */}
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border border-white/[0.06]" />

                {/* Floating small square */}
                <div className="absolute left-[18%] top-[22%] h-3 w-3 rotate-45 border border-white/20" />

                <div className="absolute right-[22%] top-[35%] h-2 w-2 rounded-full bg-white/20" />
            </div>

            {/* Navigation */}
            <nav className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8 w-full">
                <AppLogo />

                <div className="flex items-center gap-3">
                    {!isAuthPage ?
                        <Link
                            href="/signin"
                            className="flex items-center gap-2 px-4 py-1 text-sm font-medium transition hover:text-zinc-200 hover:underline hover:underline-offset-4"
                        >
                            <LogIn className="h-4 w-4" />
                            Sign in
                        </Link> :

                        <Link
                            href="/"
                            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition hover:text-zinc-200 hover:underline hover:underline-offset-4"
                        >
                            <MoveLeft className="h-4 w-4" />
                            home
                        </Link>
                    }
                </div>
            </nav>
        </>
    );
}