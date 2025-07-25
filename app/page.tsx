"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../src/components/ui/card";
import { Button } from "../src/components/ui/button";
import { BookOpen, Users, UserCheck, GraduationCap, TrendingUp, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "teacher",
      title: "Teacher",
      description: "Create assignments, manage students, and track progress",
      icon: GraduationCap,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      features: ["Upload Resources", "Auto-Generate Questions", "Student Analytics", "Grade Management"]
    },
    {
      id: "student", 
      title: "Student",
      description: "Complete assignments, receive feedback, and track your learning journey",
      icon: BookOpen,
      color: "bg-gradient-to-br from-sky-500 to-sky-600",
      features: ["View Assignments", "Submit Answers", "AI Feedback", "Progress Tracking"]
    },
    {
      id: "guardian",
      title: "Guardian", 
      description: "Monitor your child's progress and manage their educational journey",
      icon: Users,
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      features: ["Manage Students", "View Progress", "Weekly Reports", "Account Management"]
    }
  ];

  const handleRoleSelect = (roleId: string) => {
    router.push(`/dashboard/${roleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-sky-50/30">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  EduAI Platform
                </h1>
                <p className="text-sm text-slate-600">Intelligent Education Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                className="border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                onClick={() => router.push('/sign-in')}
              >Sign In</Button>
              <Button 
                className="bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-medium py-2.5"
                onClick={() => router.push('/sign-up/role')}
              >Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Choose Your <span className="bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent">Dashboard</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select your role to access personalized tools and insights designed for your educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={role.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:shadow-indigo-100/50 hover:-translate-y-1 bg-white/60 backdrop-blur-sm"
                onClick={() => handleRoleSelect(role.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${role.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                    {role.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {role.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3 text-slate-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-sky-400 rounded-full"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-medium py-2.5"
                    onClick={() => handleRoleSelect(role.id)}
                  >
                    Access {role.title} Dashboard
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">AI-Powered Analytics</h3>
            <p className="text-sm text-slate-600">Get insights into learning patterns and progress</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Bell className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Real-time Notifications</h3>
            <p className="text-sm text-slate-600">Stay updated with instant alerts and reminders</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Multi-Role Support</h3>
            <p className="text-sm text-slate-600">Seamless experience for all education stakeholders</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Smart Content Generation</h3>
            <p className="text-sm text-slate-600">Auto-generate questions and assessments</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
