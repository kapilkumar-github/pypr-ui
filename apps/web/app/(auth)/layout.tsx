import "../globals.css";
import LandingPageBackground from "@/features/home/landing-page-bg";


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100 flex flex-col">
      <LandingPageBackground />
      {children}
    </main>
  );
}