import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["600", "700"],
});
type AppLogoProps = {
    href?: string;
    showName?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
};

const sizes = {
    sm: {
        mark: "h-7 w-7 rounded-md",
        icon: "text-lg",
        name: "text-base",
    },
    md: {
        mark: "h-8 w-8 rounded-md",
        icon: "text-xl",
        name: "text-lg",
    },
    lg: {
        mark: "h-10 w-10 rounded-lg",
        icon: "text-2xl",
        name: "text-xl",
    },
};

export function AppLogo({
    href = "/",
    showName = true,
    size = "md",
    className = "",
}: AppLogoProps) {
    const s = sizes[size];

    const content = (
        <div className={`flex items-center justify-center gap-2 ${className}`}>
            <div
                className={`flex ${s.mark} shrink-0 items-center justify-center bg-white text-black`}
            >
                <span
                    className={`${spaceGrotesk.className} text-xl font-bold leading-none tracking-[-0.08em]`}
                >
                    <span>p*</span>
                </span>
            </div>

            {showName && (
                <span
                    className={`${spaceGrotesk.className} text-[19px] font-bold tracking-[-0.06em] text-white`}
                >
                    pypr
                </span>
            )}
        </div>
    );

    return href ? <Link href={href}>{content}</Link> : content;
}