import { AppSidebar } from "@/components/app-ui/app-sidebar";
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
                            <header className="flex h-14 shrink-0 items-center border-b px-4">
                                <div className="ml-auto flex items-center gap-2">
                                    <button
                                        type="button"
                                        className="flex size-9 items-center justify-center rounded-full border bg-muted text-xs font-medium hover:bg-accent"
                                    >
                                        K
                                    </button>
                                </div>
                            </header>

                            <main className="flex-1 p-4 bg-primary-tint">
                                {children}
                            </main>
                        </SidebarInset>
                    </SidebarProvider>
                </TooltipProvider>
            </ResumeServiceProvider>
        </ResumeRepositoryProvider>
    );
}