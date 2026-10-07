import {
    Download,
    MoreHorizontal,
    Pencil,
} from "lucide-react";

export default function ResumeCard() {
    return (
        <div
            className="
                group
                flex
                h-[300px]
                w-[500px]
                shrink-0
                cursor-pointer
                overflow-hidden
                rounded-xl
                border
                border-border
                bg-background
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-accent/50
                hover:shadow-[0_6px_20px_rgba(124,58,237,0.06)]
            "
        >
            {/* Resume preview */}
            <div
                className="
                    relative
                    aspect-[3/4]
                    h-full
                    shrink-0
                    overflow-hidden
                    border-r
                    border-border
                    bg-background
                "
            >
                {/* Abstract resume */}
                <div className="absolute inset-0 p-5">
                    {/* Header */}
                    <div className="space-y-2">
                        <div className="h-2.5 w-2/5 rounded-sm bg-muted-foreground/50" />
                        <div className="h-1.5 w-3/5 rounded-sm bg-muted-foreground/20" />
                    </div>

                    {/* Experience */}
                    <div className="mt-7 space-y-1.5">
                        <div className="h-1.5 w-1/3 rounded-sm bg-accent/50" />
                        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
                        <div className="h-1 w-11/12 rounded-sm bg-muted-foreground/20" />
                        <div className="h-1 w-4/5 rounded-sm bg-muted-foreground/20" />
                    </div>

                    {/* Projects */}
                    <div className="mt-6 space-y-1.5">
                        <div className="h-1.5 w-1/4 rounded-sm bg-accent/50" />
                        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
                        <div className="h-1 w-10/12 rounded-sm bg-muted-foreground/20" />
                        <div className="h-1 w-3/4 rounded-sm bg-muted-foreground/20" />
                    </div>

                    {/* Skills */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                            <div className="h-1.5 w-1/2 rounded-sm bg-accent/50" />
                            <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
                            <div className="h-1 w-4/5 rounded-sm bg-muted-foreground/20" />
                        </div>

                        <div className="space-y-1.5">
                            <div className="h-1.5 w-1/2 rounded-sm bg-accent/50" />
                            <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
                            <div className="h-1 w-3/4 rounded-sm bg-muted-foreground/20" />
                        </div>
                    </div>
                </div>

                {/* Hover actions */}
                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        gap-2
                        bg-background/70
                        opacity-0
                        backdrop-blur-[2px]
                        transition-opacity
                        duration-200
                        group-hover:opacity-100
                    "
                >
                    <button
                        type="button"
                        aria-label="Edit resume"
                        className="
                            flex
                            size-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            bg-background/90
                            text-foreground
                            shadow-sm
                            transition-all
                            hover:scale-105
                            hover:border-accent
                            hover:bg-accent
                            hover:text-accent-foreground
                        "
                    >
                        <Pencil className="size-4" />
                    </button>

                    <button
                        type="button"
                        aria-label="Download resume"
                        className="
                            flex
                            size-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            bg-background/90
                            text-foreground
                            shadow-sm
                            transition-all
                            hover:scale-105
                            hover:border-accent
                            hover:bg-accent
                            hover:text-accent-foreground
                        "
                    >
                        <Download className="size-4" />
                    </button>
                </div>
            </div>

            {/* Resume information */}
            <div className="flex min-w-0 flex-1 flex-col p-6">
                <div>
                    <h3 className="truncate text-lg font-semibold tracking-tight text-foreground">
                        Resume 1
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Modified 2 hours ago
                    </p>
                </div>

                {/* Bottom section */}
                <div className="mt-auto flex items-center">
                    <span className="text-xs text-muted-foreground">
                        Professional Resume
                    </span>

                    <button
                        type="button"
                        aria-label="More options"
                        className="
                            ml-auto
                            flex
                            size-8
                            items-center
                            justify-center
                            rounded-md
                            text-muted-foreground
                            transition-colors
                            hover:bg-accent/10
                            hover:text-foreground
                        "
                    >
                        <MoreHorizontal className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}