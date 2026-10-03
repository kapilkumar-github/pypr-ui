"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <div className="relative">
                <Input
                    ref={ref}
                    {...props}
                    type={showPassword ? "text" : "password"}
                    className="pr-10"
                />

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2"
                >
                    <Eye
                        className={`absolute h-4 w-4 transition-all duration-200 ${showPassword
                                ? "scale-75 opacity-0"
                                : "scale-100 opacity-100"
                            }`}
                    />

                    <EyeOff
                        className={`absolute h-4 w-4 transition-all duration-200 ${showPassword
                                ? "scale-100 opacity-100"
                                : "scale-75 opacity-0"
                            }`}
                    />

                    <span className="sr-only">
                        {showPassword
                            ? "Hide password"
                            : "Show password"}
                    </span>
                </Button>
            </div>
        );
    }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;