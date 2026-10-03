"use client";

import {
    forwardRef,
    InputHTMLAttributes,
    useState,
} from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <div className="relative">
                <Input
                    ref={ref}
                    {...props}
                    type={showPassword ? "text" : "password"}
                    className={cn(
                        "h-11 pr-11",
                        "border-white/[0.1]",
                        "bg-white/[0.04]",
                        "text-zinc-100",
                        "placeholder:text-zinc-600",
                        "focus-visible:border-primary/50",
                        "focus-visible:ring-primary/20",
                        className
                    )}
                />

                <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="
            absolute right-1 top-1/2
            flex h-9 w-9
            -translate-y-1/2
            items-center justify-center
            rounded-md
            text-zinc-500
            transition-colors
            hover:bg-white/[0.06]
            hover:text-zinc-300
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary/30
          "
                >
                    {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                    ) : (
                        <Eye className="h-4 w-4" />
                    )}
                </button>
            </div>
        );
    }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;