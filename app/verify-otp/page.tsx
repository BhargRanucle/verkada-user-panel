"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { useRouter } from "next/navigation";

const verifyOTPSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

type VerifyOTPFormData = z.infer<typeof verifyOTPSchema>;

export default function VerifyOTPPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyOTPFormData>({
    resolver: zodResolver(verifyOTPSchema),
  });

  const onSubmit = async (data: VerifyOTPFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log("OTP data:", data);
    router.push('/login');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-gray-200">
        <div className="flex justify-center items-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 110 19"
            className="w-[200px]"
          >
            <path d="M8.227 13.638 21.667.217a.739.739 0 0 1 1.045 0l4.384 4.375c.289.29.289.759 0 1.045L14.18 18.535c-.29.289-.76.289-1.049 0l-4.905-4.9v.003ZM.217 5.64a.737.737 0 0 1 0-1.045L4.6.217c.29-.29.76-.29 1.049 0L12.444 7l-5.43 5.423L.218 5.64Z"></path>
            <path d="M36.7 2.467h2.682l4.23 11.231 4.23-11.23h2.683l-5.468 14.424h-2.89L36.7 2.467ZM58.96 15.346s-1.34 1.751-4.23 1.751c-3.301 0-5.847-2.883-5.287-6.162.434-2.532 2.726-4.4 5.298-4.346 2.83.058 4.84 2.303 4.84 5.047 0 .62-.104 1.135-.104 1.135h-7.53c.249 1.134 1.238 2.163 2.89 2.163 1.753 0 2.785-1.258 2.785-1.258l1.341 1.67h-.002ZM57 10.812c-.309-1.135-1.136-1.959-2.477-1.959-1.445 0-2.27.824-2.578 1.96H57ZM61.5 6.794h2.374v1.443h.103s1.033-1.648 2.89-1.648h.412v2.575s-.308-.103-.825-.103c-1.444 0-2.578 1.134-2.578 2.886v4.945h-2.373V6.794H61.5ZM68.768 2.467h2.373v8.76l4.022-4.43h2.89l-3.818 4.225 4.023 5.873h-2.682l-2.89-4.225-1.548 1.75v2.475h-2.373V2.467h.003ZM85.282 15.553h-.104s-.928 1.547-2.99 1.547c-2.062 0-3.302-1.34-3.302-2.886 0-1.648 1.237-2.886 2.99-3.195l3.406-.619c0-.72-.825-1.547-1.961-1.547-1.507 0-2.477 1.236-2.477 1.236l-1.445-1.443s1.445-2.06 4.023-2.06c2.578 0 4.23 1.814 4.23 4.019v6.285H85.28v-1.34l.003.003Zm0-3.298-2.373.412c-1.238.226-1.65.62-1.65 1.236s.62 1.235 1.549 1.235c1.34 0 2.477-1.134 2.477-2.575v-.308h-.003ZM97.205 15.45h-.103s-.93 1.647-3.302 1.647c-2.373 0-4.54-2.163-4.54-5.254 0-3.09 2.166-5.254 4.54-5.254 2.373 0 3.302 1.648 3.302 1.648h.103v-5.77h2.374v14.425h-2.374V15.45Zm0-3.607c0-1.648-1.237-2.886-2.785-2.886-1.549 0-2.786 1.236-2.786 2.886 0 1.65 1.237 2.886 2.786 2.886 1.548 0 2.785-1.236 2.785-2.886ZM107.629 15.553h-.103s-.929 1.547-2.991 1.547c-2.062 0-3.301-1.34-3.301-2.886 0-1.648 1.237-2.886 2.99-3.195l3.405-.619c0-.72-.824-1.547-1.96-1.547-1.505 0-2.477 1.236-2.477 1.236l-1.445-1.443s1.445-2.06 4.023-2.06c2.578 0 4.23 1.814 4.23 4.019v6.285h-2.373v-1.34l.002.003Zm0-3.298-2.373.412c-1.237.226-1.649.62-1.649 1.236s.62 1.235 1.548 1.235c1.341 0 2.477-1.134 2.477-2.575v-.308h-.003Z"></path>
          </svg>
        </div>
        <CardHeader className="space-y-1">
          <CardDescription className="text-gray-600 text-center">
            Enter the 6-digit code sent to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp" className="text-black">
                Verification Code *
              </Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter 6-digit code"
                maxLength={6}
                className="border-gray-300 focus:border-black text-center text-lg tracking-widest"
                {...register("otp")}
              />
              {errors.otp && (
                <p className="text-sm text-red-600">{errors.otp.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify Email"}
            </Button>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                {"Didn't receive the code? "}
                <button
                  type="button"
                  className="text-black hover:underline font-medium"
                >
                  Resend Code
                </button>
              </p>

              <p className="text-sm text-gray-600">
                <Link
                  href="/signup"
                  className="text-black hover:underline font-medium"
                >
                  Back to Sign Up
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
