"use client";

import { ChevronDown, GripVertical } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

type CollapsibleSectionProps = {
    title: string;
    description?: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
};

export default function CollapsibleSection({
    title,
    description,
    children,
    defaultOpen = true,
}: CollapsibleSectionProps) {
    return (
        <Collapsible defaultOpen={defaultOpen} className="bg-background/50 p-4 mb-[0.5] rounded-lg border border-border">
            <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-lg text-left transition-colors hover:bg-accent/5">
                <div className="min-w-0 flex items-center gap-2">
                    <div>
                        <button
                            type="button"
                            className="flex size-8 cursor-grab items-center justify-center text-muted-foreground hover:text-foreground active:cursor-grabbing"

                        >
                            <GripVertical className="size-4" />
                        </button>
                    </div>
                    <div>
                        <h2 className="text-xl text-foreground tracking-wide">
                            {title}
                        </h2>

                        {description && (
                            <p className="mt-0.5 text-xs text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>
                </div>

                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-4 p-4 text-sm text-foreground">
                {children}
            </CollapsibleContent>
        </Collapsible>
    );
}