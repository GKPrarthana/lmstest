"use client";
import { useEffect } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function DashboardRedirect() {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const setRoleAndRedirect = async () => {
      if (!isLoaded || !user) return;

      // Check if role is already set
      let role = user.publicMetadata?.role;

      // If not set, get from localStorage and update Clerk
      if (!role && typeof window !== "undefined") {
        const pendingRole = localStorage.getItem("pendingRole");
        if (pendingRole) {
          // Update Clerk metadata via API
          const token = await getToken();
          await fetch("/api/set-role", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ role: pendingRole }),
          });
          role = pendingRole;
          localStorage.removeItem("pendingRole");
        }
      }

      // Redirect to the correct dashboard
      router.replace(`/dashboard/${role || "student"}`);
    };

    setRoleAndRedirect();
  }, [isLoaded, user, getToken, router]);

  return <div>Redirecting to your dashboard...</div>;
}