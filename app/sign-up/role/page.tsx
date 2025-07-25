"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const roles = [
  { id: "student", label: "Student" },
  { id: "teacher", label: "Teacher" },
  { id: "guardian", label: "Guardian" },
];

export default function RoleSelectPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (selectedRole) {
      // Store the role in localStorage or sessionStorage for retrieval after sign up
      localStorage.setItem("pendingRole", selectedRole);
      router.push("/sign-up");
    }
  };

  return (
    <div>
      <h2>Select your role</h2>
      {roles.map((role) => (
        <button
          key={role.id}
          onClick={() => setSelectedRole(role.id)}
          style={{
            background: selectedRole === role.id ? "#4f46e5" : "#e5e7eb",
            color: selectedRole === role.id ? "#fff" : "#000",
            margin: "0.5rem",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          {role.label}
        </button>
      ))}
      <br />
      <button onClick={handleContinue} disabled={!selectedRole}>
        Continue to Sign Up
      </button>
    </div>
  );
}