"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GuardianDashboard from "../GuardianDashboard";

export default function Page() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const role = user?.publicMetadata?.role;
    if (role !== "guardian") {
      router.replace("/not-authorized");
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) return null;
  return <GuardianDashboard />;
} 