"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "../forms/password-input";

import * as AuthSchema from "@/schemas/auth.schema";
import { authServiceInstance, authService } from "@/features/auth/services";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type SignupFormParams = {
    onLogin: () => void;
};

const SignupForm = ({ onLogin }: SignupFormParams) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthSchema.SignupFormValues>({
        resolver: zodResolver(AuthSchema.signupSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (values: AuthSchema.SignupFormValues) => {
        try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            const invitationToken = null;

            const emailParts = values.email.split("@");
            const firstName = emailParts[0] ?? "";

            const req: authService.RegisterUserRequest = {
                firstName,
                emailId: values.email,
                password: values.password,
                timezone,
                invitationToken,
            };

            const response = await authServiceInstance.signup(req);

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="relative w-full max-w-md">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-primary/[0.04] blur-3xl" />

            {/* Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-7 shadow-2xl backdrop-blur-xl sm:p-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100">
                        Create your account
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Start building a resume that stands out.
                    </p>
                </div>

                {/* Form */}
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
                            className="
                h-11
                border-white/[0.1]
                bg-white/[0.04]
                text-zinc-100
                placeholder:text-zinc-600
                focus-visible:border-primary/50
                focus-visible:ring-primary/20
              "
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
                            placeholder="Create a password"
                            {...register("password")}
                        />

                        {errors.password && (
                            <p className="text-xs text-red-400">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-5 space-y-2">
                        <Label
                            htmlFor="confirmPassword"
                            className="text-xs font-medium text-zinc-300"
                        >
                            Confirm password
                        </Label>

                        <PasswordInput
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            {...register("confirmPassword")}
                        />

                        {errors.confirmPassword && (
                            <p className="text-xs text-red-400">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        size="lg"
                        className="
              mt-6 h-11 w-full bg-white font-medium text-black transition hover:bg-zinc-200
            "
                    >
                        Create your account
                        <span className="ml-1">→</span>
                    </Button>
                </form>

                {/* Sign in */}
                <div className="mt-7 flex items-center justify-center gap-1.5">
                    <p className="text-xs text-zinc-500">
                        Already have an account?
                    </p>

                    <button
                        type="button"
                        onClick={onLogin}
                        className="
              text-xs font-medium
              text-zinc-200
              underline-offset-4
              transition
              hover:text-white
              hover:underline
            "
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;