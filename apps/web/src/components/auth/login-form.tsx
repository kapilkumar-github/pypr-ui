"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "../forms/password-input";
import { authServiceInstance, authService } from "@/features/auth/services";
import * as AuthSchema from "@/schemas/auth.schema";

type SigninFormParams = {
    onSignup: () => void;
};

const SigninForm = ({ onSignup }: SigninFormParams) => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<AuthSchema.LoginFormValues>({
        resolver: zodResolver(AuthSchema.loginSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const rememberMe = watch("rememberMe");

    const onSubmit = async (values: AuthSchema.LoginFormValues) => {
        try {
            const req: authService.LoginRequest = {
                emailId: values.email,
                password: values.password,
            };

            const response = await authServiceInstance.login(req);

            if (response != null) {
                // Redirect to dashboard or home page after successful login
                window.location.href = "/resumes"; // or any other page you want to redirect to
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="relative w-full max-w-md">
            {/* Subtle glow */}
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-white/[0.025] blur-3xl" />

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-7 shadow-2xl backdrop-blur-xl sm:p-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                        Welcome back
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Sign in to continue building your resume.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                    {/* Email */}
                    <div className="space-y-2">
                        <Label
                            htmlFor="email"
                            className="text-xs font-medium text-zinc-300"
                        >
                            Email
                        </Label>

                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            {...register("email")}
                            className="h-11 border-white/[0.1] bg-white/[0.04] text-white placeholder:text-zinc-600 focus-visible:border-white/20 focus-visible:ring-white/10"
                        />

                        {errors.email && (
                            <p className="text-xs text-red-400">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mt-5 space-y-2">
                        <Label
                            htmlFor="password"
                            className="text-xs font-medium text-zinc-300"
                        >
                            Password
                        </Label>

                        <PasswordInput
                            id="password"
                            {...register("password")}
                        />

                        {errors.password && (
                            <p className="text-xs text-red-400">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Remember / Forgot */}
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="remember-me"
                                checked={rememberMe}
                                onCheckedChange={(checked) =>
                                    setValue("rememberMe", checked === true)
                                }
                                className="border-white/20 data-[state=checked]:border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                            />

                            <label
                                htmlFor="remember-me"
                                className="cursor-pointer text-xs text-zinc-400"
                            >
                                Remember me
                            </label>
                        </div>

                        <button
                            type="button"
                            className="text-xs font-medium text-zinc-300 transition hover:text-white"
                        >
                            Forgot password?
                        </button>
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        size="lg"
                        className="mt-6 h-11 w-full bg-white font-medium text-black transition hover:bg-zinc-200"
                    >
                        Sign in
                        <span className="ml-1">→</span>
                    </Button>
                </form>

                {/* Signup */}
                <div className="mt-7 flex items-center justify-center gap-1.5">
                    <p className="text-xs text-zinc-500">
                        Don't have an account?
                    </p>

                    <button
                        onClick={onSignup}
                        type="button"
                        className="text-xs font-medium text-white underline-offset-4 transition hover:text-zinc-300 hover:underline"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SigninForm;
