"use client";

import {
    ChevronDown,
    Settings,
    User,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ProfileMenuProps = {
    name: string;
    initial?: string;
};

const ProfileMenu = ({
    name,
    initial = name.charAt(0).toUpperCase(),
}: ProfileMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-foreground outline-none transition-colors hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent"
                >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-accent text-xs font-semibold text-accent-foreground">
                        {initial}
                    </div>

                    <span className="hidden font-medium sm:block">
                        {name}
                    </span>

                    <ChevronDown className="size-4 text-muted-foreground" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-52"
            >
                <DropdownMenuItem>
                    <User className="mr-2 size-4" />
                    Profile
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Settings className="mr-2 size-4" />
                    Settings
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileMenu;