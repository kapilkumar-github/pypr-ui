"use client";
import RegisterForm from "@/components/auth/signup-form";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <section className="flex flex-1 items-center justify-center p-4">
            <RegisterForm onLogin={() => router.push("/signin")} />
        </section>
    );
}