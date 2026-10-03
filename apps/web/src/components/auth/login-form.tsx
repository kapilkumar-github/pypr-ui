"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"
import PasswordInput from "../forms/password-input";
import { authServiceInstance, authService } from "@/features/auth/services";
import * as AuthSchema from "@/schemas/auth.schema";

type LoginFormParams = {
    onSignup: () => void
}

const LoginForm = ({ onSignup }: LoginFormParams) => {
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
                password: values.password
            }
            const response = await authServiceInstance.login(req);

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return <div >
        <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-center">
            Welcome Back!
        </h1>
        <p className="mt-2 max-w-lg text-sm leading-7 text-muted-foreground">
            Enter your email and password to access your account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="my-7" >
            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="email" className="text-xs">Email</Label>

                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                />

                {errors.email && (
                    <p className="text-xs text-destructive">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Password */}
            <div className="mt-5 space-y-2">
                <Label htmlFor="password" className="text-xs">Password</Label>
                <PasswordInput
                    id="password"
                    {...register("password")} />

                {errors.password && (
                    <p className="text-xs text-destructive">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                    <Checkbox id="remember-me"
                        checked={rememberMe}
                        onCheckedChange={(checked) =>
                            setValue("rememberMe", checked === true)
                        } />

                    <label
                        htmlFor="remember-me"
                        className="text-xs text-muted-foreground"
                    >
                        Remember me
                    </label>
                </div>

                <button
                    type="button"
                    className="text-xs font-medium text-primary hover:text-primary/80"
                >
                    Forgot password?
                </button>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full mt-5" size="lg">
                Sign in
            </Button>
        </form>

        <div className="flex gap-2 items-center justify-center">
            <p className="max-w-lg text-xs leading-7 text-muted-foreground text-center">
                Don't have an account?
            </p>
            <button
                onClick={onSignup}
                type="button"
                className="text-xs font-medium text-primary hover:text-primary/80"

            >
                Register Now
            </button>
        </div>
    </div>
}

export default LoginForm