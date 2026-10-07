"use client";
import {
    Check,
    Code2,
    FileText,
    PenLine,
    Plus,
    Sparkles,
    Star,
    Type,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateResumeCard() {
    const router = useRouter();
    const handleCardClick = () => {
        console.log("Create Resume Card clicked");
        router.push("/resumes/create");
    }
    return (
        <div
            onClick={handleCardClick}
            className="
                group
                flex
                h-[300px]
                w-[500px]
                shrink-0
                cursor-pointer
                overflow-hidden
                rounded-xl
                bg-background
                transition-all
                duration-200
                hover:-translate-y-1
            "
            style={{
                border: "5px dashed var(--accent-med-tint)",
                borderSpacing: "50px",
            }}
        >
            {/* Resume preview */}
            <div
                className="
                    relative
                    aspect-[3/4]
                    h-full
                    shrink-0
                    overflow-hidden
                    bg-background
                    border border-dashed border-border
                "
            >
                <div className="absolute inset-0 p-5 opacity-40 transition-opacity duration-200 group-hover:opacity-60">
                    <div className="space-y-2">
                        <div className="h-2.5 w-2/5 rounded-sm bg-muted-foreground/40" />
                        <div className="h-1.5 w-3/5 rounded-sm bg-muted-foreground/20" />
                    </div>

                    <div className="mt-7 space-y-1.5">
                        <div className="h-1.5 w-1/3 rounded-sm bg-accent/40" />
                        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
                        <div className="h-1 w-11/12 rounded-sm bg-muted-foreground/20" />
                        <div className="h-1 w-4/5 rounded-sm bg-muted-foreground/20" />
                    </div>

                    <div className="mt-6 space-y-1.5">
                        <div className="h-1.5 w-1/4 rounded-sm bg-accent/40" />
                        <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
                        <div className="h-1 w-10/12 rounded-sm bg-muted-foreground/20" />
                        <div className="h-1 w-3/4 rounded-sm bg-muted-foreground/20" />
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                            <div className="h-1.5 w-1/2 rounded-sm bg-accent/40" />
                            <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
                            <div className="h-1 w-4/5 rounded-sm bg-muted-foreground/20" />
                        </div>

                        <div className="space-y-1.5">
                            <div className="h-1.5 w-1/2 rounded-sm bg-accent/40" />
                            <div className="h-1 w-full rounded-sm bg-muted-foreground/20" />
                            <div className="h-1 w-3/4 rounded-sm bg-muted-foreground/20" />
                        </div>
                    </div>
                </div>

                {/* Plus */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="
                            flex
                            size-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            bg-background/90
                            text-muted-foreground
                            shadow-sm
                            backdrop-blur
                            transition-all
                            duration-200
                            group-hover:scale-110
                            group-hover:border-accent/50
                            group-hover:bg-accent
                            group-hover:text-accent-foreground
                        "
                    >
                        <Plus className="size-5 transition-transform duration-200 group-hover:rotate-90" />
                    </div>
                </div>
            </div>

            {/* Content */}
            {/* Content */}
            <div className="relative flex min-w-0 flex-1 flex-col justify-center overflow-hidden p-6">
                {/* Floating background elements */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                >
                    {/* Document */}
                    <div
                        className="
                absolute right-10 top-8 rotate-[-10deg]
                text-accent/25
                transition-transform duration-500
                group-hover:-translate-y-1 group-hover:rotate-[-6deg]
            "
                    >
                        <FileText className="size-12" strokeWidth={1.3} />
                    </div>

                    {/* Pen */}
                    <div
                        className="
                absolute right-32 top-12 rotate-[28deg]
                text-foreground/20
                transition-transform duration-500
                group-hover:translate-x-1 group-hover:-translate-y-1
            "
                    >
                        <PenLine className="size-9" strokeWidth={1.4} />
                    </div>

                    {/* Text / typography */}
                    <div
                        className="
                absolute right-20 top-28
                text-accent/25
            "
                    >
                        <Type className="size-7" strokeWidth={1.5} />
                    </div>

                    {/* Skills / code */}
                    <div
                        className="
                absolute right-36 top-36 rotate-[-8deg]
                text-foreground/20
            "
                    >
                        <Code2 className="size-8" strokeWidth={1.4} />
                    </div>

                    {/* Star / achievement */}
                    <div
                        className="
                absolute right-8 top-44 rotate-[12deg]
                text-accent/30
            "
                    >
                        <Star className="size-8" strokeWidth={1.3} />
                    </div>

                    {/* Check */}
                    <div
                        className="
                absolute right-28 bottom-24
                flex size-9 rotate-[-8deg] items-center justify-center
                rounded-full border border-accent/20
                text-accent/40
            "
                    >
                        <Check className="size-5" strokeWidth={1.5} />
                    </div>

                    {/* Sparkles */}
                    <div
                        className="
                absolute right-48 bottom-16
                rotate-[10deg] text-accent/25
            "
                    >
                        <Sparkles className="size-7" strokeWidth={1.3} />
                    </div>

                    {/* Large geometric circle */}
                    <div
                        className="
                absolute -right-16 -top-16 size-36 rounded-full
                border-2 border-accent/15
            "
                    />

                    {/* Rotated square */}
                    <div
                        className="
                absolute -bottom-10 right-10 size-28 rotate-12
                rounded-2xl border border-border/80
            "
                    />

                    {/* Diamond */}
                    <div
                        className="
                absolute right-52 bottom-12 size-8 rotate-45
                border border-accent/20
            "
                    />

                    {/* Small circles */}
                    <div className="absolute right-52 top-8 size-3 rounded-full bg-accent/30" />
                    <div className="absolute right-6 bottom-36 size-2 rounded-full bg-foreground/25" />

                    {/* Floating lines */}
                    <div
                        className="
                absolute right-[-10px] top-1/2 h-px w-32
                rotate-[-28deg] bg-border
            "
                    />

                    <div
                        className="
                absolute right-16 top-[55%] h-px w-20
                rotate-[35deg] bg-accent/20
            "
                    />

                    {/* Resume text lines */}
                    <div className="absolute right-10 bottom-10 space-y-1.5 opacity-30">
                        <div className="h-1 w-20 rounded-full bg-muted-foreground" />
                        <div className="h-1 w-14 rounded-full bg-muted-foreground" />
                        <div className="h-1 w-24 rounded-full bg-accent" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-content absolute z-10 max-w-[90%] item-stretch">
                    <p className="text-sm leading-6 text-muted-foreground">
                        Start with a professionally designed template and build a
                        resume that stands out.
                    </p>

                    <div className="mt-5">
                        <span
                            className="
                    inline-flex items-center gap-2
                    text-sm font-medium text-foreground
                "
                        >
                            create resume
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}