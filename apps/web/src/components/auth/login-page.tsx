"use client";
import LoginForm from "./login-form";
import { useRouter } from "next/navigation";

export function LoginPage() {
    const router = useRouter();

    return (
        <section className="flex flex-1 items-center justify-center p-4">
            <LoginForm onSignup={() => router.push("/signup")} />
        </section>
    );
}