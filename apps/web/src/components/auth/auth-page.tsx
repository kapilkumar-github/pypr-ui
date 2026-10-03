"use client";

import { useState } from "react";
import LoginForm from "./login-form";
import RegisterForm from "./signup-form";

export function AuthPage() {
    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <main className="h-screen p-6 flex">
            <section className="flex flex-1 items-center justify-center p-4">
                {mode === "login" ? (
                    <LoginForm onSignup={() => setMode("register")} />
                ) : (
                    <RegisterForm onLogin={() => setMode("login")} />
                )}
            </section>

            <section className="relative flex-1 overflow-hidden rounded-md bg-primary">

                {/* Large top-right ring */}
                <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full border-[70px] border-white/5" />

                {/* Inner ring */}
                <div className="absolute right-20 top-20 h-64 w-64 rounded-full border border-white/10" />

                {/* Bottom-left ring */}
                <div className="absolute -bottom-48 -left-48 h-[650px] w-[650px] rounded-full border border-white/10" />

                {/* Large diamond */}
                <div className="absolute left-[15%] top-[15%] h-40 w-40 rotate-45 rounded-[32px] border border-white/10" />

                {/* Small diamond */}
                <div className="absolute right-[25%] top-[30%] h-20 w-20 rotate-45 bg-white/5" />

                {/* Floating square */}
                <div className="absolute bottom-[25%] left-[35%] h-28 w-28 rotate-12 rounded-2xl border border-white/10" />

                {/* Small translucent square */}
                <div className="absolute bottom-20 right-20 h-14 w-14 rotate-45 bg-white/10" />

                {/* Horizontal line */}
                <div className="absolute left-0 top-[42%] h-px w-[45%] bg-white/10" />

                {/* Vertical line */}
                <div className="absolute bottom-0 right-[35%] h-[40%] w-px bg-white/10" />

                {/* Dotted grid */}
                <div className="absolute right-12 top-1/2 grid grid-cols-5 gap-3 opacity-30">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-1.5 w-1.5 rounded-full bg-white"
                        />
                    ))}
                </div>

                {/* Small circles */}
                <div className="absolute left-[45%] top-16 h-4 w-4 rounded-full bg-white/20" />

                <div className="absolute bottom-[35%] right-[45%] h-3 w-3 rounded-full bg-white/30" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-end p-12 text-white">
                    <div>
                        <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-white backdrop-blur-sm">
                            pypr
                        </div>

                        <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight">
                            Make every follow-up count.
                        </h1>

                        <p className="mt-5 max-w-lg text-lg leading-7 text-white/70">
                            Build smarter sequences, automate your outreach, and focus on
                            conversations that matter.
                        </p>
                    </div>
                </div>

            </section>
        </main>
    );
}