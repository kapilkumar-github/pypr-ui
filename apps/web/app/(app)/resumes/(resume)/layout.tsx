import { AppSidebar } from "@/components/app-ui/app-sidebar";
import ProfileMenu from "@/components/app-ui/profile-menu";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ResumeRepositoryProvider } from "@/providers/resume-repository-provider";
import { ResumeServiceProvider } from "@/providers/resume-service-provider";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ResumeRepositoryProvider>
            <ResumeServiceProvider>
                <header className="flex h-14 shrink-0 items-center border-b border-border px-4">
                    <Link
                        href="/resumes"
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                    >
                        <ArrowLeft className="size-4" />
                        <span>resumes</span>
                    </Link>

                    <div className="ml-auto flex items-center gap-2">
                        <ProfileMenu name="Kapil" initial="K" />
                    </div>
                </header>
                <main className="flex-1 bg-primary-tint">
                    {children}
                </main>
            </ResumeServiceProvider>
        </ResumeRepositoryProvider>
    );
}