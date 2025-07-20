
import { useState } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Menu, 
  X, 
  Bell, 
  Settings, 
  LogOut, 
  User,
  Home,
  FileText,
  BarChart3,
  Upload,
  CheckSquare,
  TrendingUp,
  UserPlus
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DashboardLayout = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationCount] = useState(3);

  const roleConfig = {
    teacher: {
      title: "Teacher Dashboard",
      icon: GraduationCap,
      color: "from-indigo-500 to-indigo-600",
      menuItems: [
        { icon: Home, label: "Overview", path: `/dashboard/teacher` },
        { icon: Upload, label: "Upload Resources", path: `/dashboard/teacher/upload` },
        { icon: FileText, label: "Generate Questions", path: `/dashboard/teacher/questions` },
        { icon: BarChart3, label: "Student Analytics", path: `/dashboard/teacher/analytics` },
        { icon: CheckSquare, label: "Grading", path: `/dashboard/teacher/grading` },
      ]
    },
    student: {
      title: "Student Dashboard", 
      icon: BookOpen,
      color: "from-sky-500 to-sky-600",
      menuItems: [
        { icon: Home, label: "Overview", path: `/dashboard/student` },
        { icon: FileText, label: "Assignments", path: `/dashboard/student/assignments` },
        { icon: Upload, label: "Submit Work", path: `/dashboard/student/submit` },
        { icon: TrendingUp, label: "Progress", path: `/dashboard/student/progress` },
        { icon: CheckSquare, label: "Feedback", path: `/dashboard/student/feedback` },
      ]
    },
    guardian: {
      title: "Guardian Dashboard",
      icon: Users,
      color: "from-emerald-500 to-emerald-600", 
      menuItems: [
        { icon: Home, label: "Overview", path: `/dashboard/guardian` },
        { icon: UserPlus, label: "Manage Students", path: `/dashboard/guardian/students` },
        { icon: BarChart3, label: "Progress Reports", path: `/dashboard/guardian/reports` },
        { icon: TrendingUp, label: "Analytics", path: `/dashboard/guardian/analytics` },
        { icon: Settings, label: "Settings", path: `/dashboard/guardian/settings` },
      ]
    }
  };

  const currentRole = roleConfig[role as keyof typeof roleConfig];
  const IconComponent = currentRole?.icon || BookOpen;

  if (!currentRole) {
    return <div>Invalid role</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-sky-50/30">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-white/90 backdrop-blur-md border-r border-slate-200/60 transition-all duration-300 z-40 ${
        sidebarOpen ? 'w-64' : 'w-16'
      }`}>
        <div className="p-4 border-b border-slate-200/60">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 ${!sidebarOpen && 'justify-center'}`}>
              <div className={`w-10 h-10 bg-gradient-to-br ${currentRole.color} rounded-xl flex items-center justify-center`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              {sidebarOpen && (
                <div>
                  <h2 className="font-bold text-slate-800">EduAI</h2>
                  <p className="text-xs text-slate-600 capitalize">{role}</p>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-600 hover:text-slate-800"
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {currentRole.menuItems.map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className={`w-full justify-start text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 ${!sidebarOpen && 'px-2'}`}
                onClick={() => navigate(item.path)}
              >
                <ItemIcon className={`w-4 h-4 ${sidebarOpen ? 'mr-3' : ''}`} />
                {sidebarOpen && <span>{item.label}</span>}
              </Button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-30">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">{currentRole.title}</h1>
                <p className="text-sm text-slate-600">Welcome back! Here's what's happening today.</p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5 text-slate-600" />
                  {notificationCount > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs"
                    >
                      {notificationCount}
                    </Badge>
                  )}
                </Button>

                {/* Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-avatar.png" alt="Profile" />
                        <AvatarFallback className={`bg-gradient-to-br ${currentRole.color} text-white`}>
                          {role?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-sm" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-xs leading-none text-muted-foreground capitalize">
                          {role} Account
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/')}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
