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

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ResumeRepositoryProvider>
            <ResumeServiceProvider>
                <TooltipProvider>
                    <SidebarProvider defaultOpen={false}>
                        <AppSidebar />

                        <SidebarInset>
                            <header className="flex h-14 shrink-0 items-center px-4">
                                <div className="ml-auto flex items-center gap-2">
                                    <ProfileMenu name="Kapil" initial="K" />
                                </div>
                            </header>

                            <main className="flex-1 p-4 bg-primary-tint container mx-auto max-w-7xl">
                                {children}
                            </main>
                        </SidebarInset>
                    </SidebarProvider>
                </TooltipProvider>
            </ResumeServiceProvider>
        </ResumeRepositoryProvider>
    );
}