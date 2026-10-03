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

const navigation = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Resumes",
        url: "/resumes",
        icon: FileStack,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
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
            className="border-r"
        >
            {/* Header */}
            <div className="flex h-16 items-center px-3">
                {/* Logo */}
                <Link
                    href="/dashboard"
                    className="flex h-9 items-center rounded-xl text-sm font-bold group-data-[collapsible=icon]:w-9 group-data-[collapsible=icon]:justify-center"
                >
                    <span>pypr</span>
                </Link>
            </div>

            {/* Main Navigation */}
            <SidebarContent>
                <SidebarMenu className="gap-2 px-2">
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
                        <SidebarTrigger className="size-9 rounded-lg" />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
