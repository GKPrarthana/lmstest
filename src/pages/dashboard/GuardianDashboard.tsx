
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  BookOpen, 
  Plus, 
  Eye, 
  Settings, 
  Award,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  GraduationCap,
  Target
} from "lucide-react";

const GuardianDashboard = () => {
  const [students] = useState([
    {
      id: 1,
      name: "Emma Johnson",
      age: 14,
      grade: "9th Grade",
      avatar: "/placeholder-avatar.png",
      totalAssignments: 24,
      completedAssignments: 22,
      averageGrade: 92,
      recentActivity: "Completed Physics Quiz #3",
      strengths: ["Mathematics", "Science"],
      needsAttention: ["English Writing"],
      streak: 15
    },
    {
      id: 2,
      name: "Luke Johnson", 
      age: 12,
      grade: "7th Grade",
      avatar: "/placeholder-avatar.png",
      totalAssignments: 18,
      completedAssignments: 16,
      averageGrade: 87,
      recentActivity: "Submitted Math Problem Set",
      strengths: ["Art", "History"],
      needsAttention: ["Mathematics", "Time Management"],
      streak: 8
    }
  ]);

  const [weeklyReports] = useState([
    {
      week: "This Week",
      student: "Emma Johnson",
      assignmentsCompleted: 4,
      averageGrade: 94,
      timeSpent: "12h 30m",
      highlights: ["Excellent performance in Chemistry", "Improved essay writing skills"],
      concerns: ["Needs more practice with calculus problems"]
    },
    {
      week: "This Week", 
      student: "Luke Johnson",
      assignmentsCompleted: 3,
      averageGrade: 88,
      timeSpent: "8h 45m",
      highlights: ["Great creativity in art projects", "Strong historical analysis"],
      concerns: ["Math homework often submitted late", "Needs help with fractions"]
    }
  ]);

  const [upcomingEvents] = useState([
    { type: "assignment", title: "Emma's History Essay Due", date: "Tomorrow", priority: "high" },
    { type: "test", title: "Luke's Math Test", date: "Friday", priority: "medium" },
    { type: "meeting", title: "Parent-Teacher Conference", date: "Next week", priority: "low" },
    { type: "assignment", title: "Emma's Science Project Due", date: "In 5 days", priority: "medium" }
  ]);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'assignment': return BookOpen;
      case 'test': return GraduationCap;
      case 'meeting': return Users;
      default: return Calendar;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-emerald-800">Active Students</CardTitle>
            <Users className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-900">{students.length}</div>
            <p className="text-xs text-emerald-700">All students active this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky-50 to-sky-100/50 border-sky-200/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-sky-800">Total Assignments</CardTitle>
            <BookOpen className="h-4 w-4 text-sky-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-sky-900">42</div>
            <p className="text-xs text-sky-700">38 completed this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-indigo-200/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-indigo-800">Average Grade</CardTitle>
            <TrendingUp className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-indigo-900">89.5%</div>
            <p className="text-xs text-indigo-700">+2.3% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">21h 15m</div>
            <p className="text-xs text-purple-700">This week</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="students" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm">
          <TabsTrigger value="students">My Students</TabsTrigger>
          <TabsTrigger value="reports">Weekly Reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="students" className="space-y-6">
          {/* Add Student Button */}
          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200/60">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-800">Manage Student Accounts</h3>
                  <p className="text-sm text-emerald-700">Add new students or manage existing accounts</p>
                </div>
                <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Student
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Student Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {students.map((student) => (
              <Card key={student.id} className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback className="bg-gradient-to-br from-sky-400 to-indigo-500 text-white">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{student.name}</CardTitle>
                        <CardDescription>{student.age} years old • {student.grade}</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800">
                      {student.streak} day streak
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-sky-600">{student.averageGrade}%</div>
                      <div className="text-xs text-slate-600">Avg Grade</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-600">{student.completedAssignments}</div>
                      <div className="text-xs text-slate-600">Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">{student.totalAssignments}</div>
                      <div className="text-xs text-slate-600">Total</div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Assignment Progress</span>
                      <span>{Math.round((student.completedAssignments / student.totalAssignments) * 100)}%</span>
                    </div>
                    <Progress value={(student.completedAssignments / student.totalAssignments) * 100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium text-emerald-700">Strengths</p>
                      <div className="flex flex-wrap gap-2">
                        {student.strengths.map((strength, index) => (
                          <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-amber-700">Needs Attention</p>
                      <div className="flex flex-wrap gap-2">
                        {student.needsAttention.map((area, index) => (
                          <Badge key={index} variant="secondary" className="bg-amber-100 text-amber-800">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          {/* Upcoming Events */}
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-sky-600" />
                <span>Upcoming Events</span>
              </CardTitle>
              <CardDescription>Important dates and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => {
                  const IconComponent = getEventIcon(event.type);
                  return (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/60">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-sky-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{event.title}</p>
                          <p className="text-sm text-slate-600">{event.date}</p>
                        </div>
                      </div>
                      <Badge className={getPriorityColor(event.priority)}>
                        {event.priority}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Reports */}
          <div className="space-y-6">
            {weeklyReports.map((report, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{report.week} - {report.student}</span>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-sky-100 text-sky-800">
                        {report.averageGrade}% Average
                      </Badge>
                      <Badge variant="outline">
                        {report.assignmentsCompleted} Completed
                      </Badge>
                    </div>
                  </CardTitle>
                  <CardDescription>Study time: {report.timeSpent}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-emerald-700 mb-3 flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Highlights</span>
                      </h4>
                      <ul className="space-y-2">
                        {report.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-slate-700 flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-700 mb-3 flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Areas for Improvement</span>
                      </h4>
                      <ul className="space-y-2">
                        {report.concerns.map((concern, i) => (
                          <li key={i} className="text-sm text-slate-700 flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{concern}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Comparison */}
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-indigo-600" />
                  <span>Performance Comparison</span>
                </CardTitle>
                <CardDescription>Compare your students' progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {students.map((student, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800">{student.name}</span>
                        <span className="text-sm text-slate-600">{student.averageGrade}%</span>
                      </div>
                      <Progress value={student.averageGrade} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Goals */}
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <span>Learning Goals</span>
                </CardTitle>
                <CardDescription>Track progress towards set objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-emerald-50/60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-emerald-800">Emma - Mathematics Mastery</span>
                      <Badge className="bg-emerald-100 text-emerald-800">85%</Badge>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-sm text-emerald-700 mt-2">Target: 90% by end of month</p>
                  </div>
                  <div className="p-4 rounded-lg bg-sky-50/60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sky-800">Luke - Time Management</span>
                      <Badge className="bg-sky-100 text-sky-800">60%</Badge>
                    </div>
                    <Progress value={60} className="h-2" />
                    <p className="text-sm text-sky-700 mt-2">Target: 80% by end of month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Account Settings */}
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your guardian account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Email Notifications</label>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Daily progress reports</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Assignment due reminders</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Weekly summary reports</span>
                    </label>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600">
                  Save Settings
                </Button>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Manage data privacy and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Data Sharing</label>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Share progress with teachers</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Anonymous analytics data</span>
                    </label>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Export Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GuardianDashboard;
