"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Settings,
    FileStack,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppLogo } from "./app-logo";

const navigation = [
    {
        title: "Resumes",
        url: "/resumes",
        icon: FileStack,
    },
];

export function AppSidebar() {
    const pathname = usePathname();

    const isActive = (url: string) =>
        pathname === url || pathname.startsWith(`${url}/`);

    return (
        <Sidebar
            collapsible="icon"
            variant="sidebar"
            className="bg-background text-foreground"
        >
            {/* Header */}
            <AppLogo className="h-14 w-full" showName={false} href="/resumes" />

            {/* Main Navigation */}
            <SidebarContent>
                <SidebarMenu className="gap-2 p-2">
                    {navigation.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                isActive={isActive(item.url)}
                                tooltip={item.title}
                                className="h-11 rounded-lg"
                            >
                                <Link href={item.url}>
                                    <item.icon className="size-5" />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter className="p-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                        {/* <SidebarTrigger className="size-9 rounded-lg" /> */}
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
