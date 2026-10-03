"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "../forms/password-input";

import * as AuthSchema from "@/schemas/auth.schema";
import { authServiceInstance, authService } from "@/features/auth/services";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type RegisterFormParams = {
    onLogin: () => void;
};

const RegisterForm = ({ onLogin }: RegisterFormParams) => {
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

    const onSubmit = async (
        values: AuthSchema.SignupFormValues
    ) => {
        try {
            const timezone =
                Intl.DateTimeFormat().resolvedOptions().timeZone;

            const invitationToken = null;
            const emailParts = values.email.split("@");
            let firstName: any = "";
            if (emailParts.length > 0) firstName = emailParts[0];

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
        <div>
            <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-center">
                Create Your Account
            </h1>

            <p className="mt-2 max-w-lg text-sm leading-7 text-muted-foreground">
                Create your account and start building smarter
                sequences.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="my-7"
            >
                {/* Email */}
                <div className="mt-5 space-y-2">
                    <Label
                        htmlFor="email"
                        className="text-xs"
                    >
                        Email
                    </Label>

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
                    <Label
                        htmlFor="password"
                        className="text-xs"
                    >
                        Password
                    </Label>

                    <PasswordInput
                        id="password"
                        placeholder="Create a password"
                        {...register("password")}
                    />

                    {errors.password && (
                        <p className="text-xs text-destructive">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full mt-6"
                    size="lg"
                >
                    Create Account
                </Button>
            </form>

            <div className="flex gap-2 items-center justify-center">
                <p className="text-xs leading-7 text-muted-foreground text-center">
                    Already have an account?
                </p>

                <button
                    type="button"
                    onClick={onLogin}
                    className="text-xs font-medium text-primary hover:text-primary/80"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;