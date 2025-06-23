"use client";
import { MainLayout } from "@/components/layout/main-layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import "react-quill-new/dist/quill.core.css";
import "react-quill-new/dist/quill.bubble.css";
import "react-quill-new/dist/quill.snow.css";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { z } from "zod";

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company_name: z.string().min(1, "Company name is required"),
});

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;
type ProfileFormData = z.infer<typeof profileSchema>;

export default function MyProfile({ params }: { params: { id: string } }) {
  const [openItems, setOpenItems] = useState([
    "general",
    "products",
    "execution",
  ]) as any;

  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);

  const profileForm = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      company_name: "Ranulce Pvt Ltd.",
    },
  });

  const passwordForm = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onProfileSubmit = async (data: ProfileFormData) => {
    setIsLoadingProfile(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoadingProfile(false);
  };

  const onPasswordSubmit = async (data: ChangePasswordFormData) => {
    setIsLoadingPassword(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoadingPassword(false);
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-7 w-7" asChild>
              <Link href="/dashboard">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                My Profile
              </h1>
            </div>
          </div>
        </div>

        <Tabs defaultValue="basic-info" className="w-full">
          <TabsList className="mb-4 stormtrooper-glass border border-white/20 shadow-sm h-8">
            <TabsTrigger
              value="basic-info"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs"
            >
              Basic Info
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs"
            >
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basic-info" className="space-y-6">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">
                  Personal Information
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Update your personal details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={profileForm.handleSubmit(onProfileSubmit)}
                  className="space-y-4"
                >
                  <CardContent className="flex items-center space-x-4 !p-0 !pb-3">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" />
                      <AvatarFallback className="bg-gray-200 text-black text-xl">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-gray-300 text-black hover:bg-gray-50"
                      >
                        Change Photo
                      </Button>
                      <p className="text-sm text-gray-600">
                        JPG, PNG or GIF. Max size 2MB.
                      </p>
                    </div>
                  </CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-black">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        className="border-gray-300 focus:border-black"
                        {...profileForm.register("name")}
                      />
                      {profileForm.formState.errors.name && (
                        <p className="text-sm text-red-600">
                          {profileForm.formState.errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-black">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="border-gray-300 focus:border-black"
                        {...profileForm.register("email")}
                      />
                      {profileForm.formState.errors.email && (
                        <p className="text-sm text-red-600">
                          {profileForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company_name" className="text-black">
                        Company Name *
                      </Label>
                      <Input
                        id="company_name"
                        className="border-gray-300 focus:border-black"
                        {...profileForm.register("company_name")}
                      />
                      {profileForm.formState.errors.company_name && (
                        <p className="text-sm text-red-600">
                          {profileForm.formState.errors.company_name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-black">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-black"
                        {...profileForm.register("phone")}
                      />
                      {profileForm.formState.errors.phone && (
                        <p className="text-sm text-red-600">
                          {profileForm.formState.errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <Button
                      type="submit"
                      className="h-8 text-xs black-glass text-white hover:bg-gray-900 angular-border-small"
                       disabled={isLoadingProfile}
                    >
                       {isLoadingProfile ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            {/* Change Password */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Change Password</CardTitle>
                <CardDescription className="text-gray-600">Update your account password</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-2">
                    <Label htmlFor="currentPassword" className="text-black">
                      Current Password *
                    </Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="Enter current password"
                      className="border-gray-300 focus:border-black"
                      {...passwordForm.register("currentPassword")}
                    />
                    {passwordForm.formState.errors.currentPassword && (
                      <p className="text-sm text-red-600">{passwordForm.formState.errors.currentPassword.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-black">
                      New Password *
                    </Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Enter new password"
                      className="border-gray-300 focus:border-black"
                      {...passwordForm.register("newPassword")}
                    />
                    {passwordForm.formState.errors.newPassword && (
                      <p className="text-sm text-red-600">{passwordForm.formState.errors.newPassword.message}</p>
                    )}
                  </div>
                  </div>
                  

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-black">
                      Confirm New Password *
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm new password"
                      className="border-gray-300 focus:border-black"
                      {...passwordForm.register("confirmPassword")}
                    />
                    {passwordForm.formState.errors.confirmPassword && (
                      <p className="text-sm text-red-600">{passwordForm.formState.errors.confirmPassword.message}</p>
                    )}
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special
                      characters.
                    </p>
                  </div>

                  {/* <Button type="submit" className="bg-black text-white hover:bg-gray-800" disabled={isLoadingPassword}>
                    {isLoadingPassword ? "Updating..." : "Update Password"}
                  </Button> */}

                  <div className="flex justify-end mt-4">
                    <Button
                      type="submit"
                      className="h-8 text-xs black-glass text-white hover:bg-gray-900 angular-border-small"
                       disabled={isLoadingPassword}
                    >
                       {isLoadingPassword ? "Updating..." : "Update Password"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
