"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../src/components/ui/card";
import { Button } from "../../src/components/ui/button";
import { Badge } from "../../src/components/ui/badge";
import { Progress } from "../../src/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../src/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  BookOpen,
  BarChart3,
  Download
} from "lucide-react";

const TeacherDashboard = () => {
  const [recentUploads] = useState([
    { name: "Physics Chapter 5.pdf", date: "2 hours ago", status: "processed" },
    { name: "Math Problems Set 3.docx", date: "1 day ago", status: "processing" },
    { name: "Chemistry Lab Manual.pdf", date: "3 days ago", status: "processed" }
  ]);

  const [studentStats] = useState([
    { name: "Alice Johnson", grade: 94, submissions: 12, status: "excellent" },
    { name: "Bob Smith", grade: 87, submissions: 11, status: "good" },
    { name: "Carol Davis", grade: 76, submissions: 9, status: "needs-attention" },
    { name: "David Wilson", grade: 91, submissions: 12, status: "excellent" }
  ]);

  const [pendingGrading] = useState([
    { assignment: "Physics Quiz #3", submissions: 24, dueDate: "Tomorrow" },
    { assignment: "Math Problem Set", submissions: 18, dueDate: "In 3 days" },
    { assignment: "Chemistry Lab Report", submissions: 15, dueDate: "Next week" }
  ]);

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-indigo-200/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-indigo-800">Total Students</CardTitle>
            <Users className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-indigo-900">247</div>
            <p className="text-xs text-indigo-700">+12 from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky-50 to-sky-100/50 border-sky-200/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-sky-800">Questions Generated</CardTitle>
            <FileText className="h-4 w-4 text-sky-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-sky-900">1,347</div>
            <p className="text-xs text-sky-700">+203 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-emerald-800">Avg. Grade</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-900">87.3%</div>
            <p className="text-xs text-emerald-700">+2.1% improvement</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-amber-800">Pending Reviews</CardTitle>
            <Clock className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-900">23</div>
            <p className="text-xs text-amber-700">5 due today</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="upload">Upload & Generate</TabsTrigger>
          <TabsTrigger value="analytics">Student Analytics</TabsTrigger>
          <TabsTrigger value="grading">Grading Queue</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Uploads */}
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5 text-indigo-600" />
                <span>Recent Uploads</span>
              </CardTitle>
              <CardDescription>Your latest uploaded resources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentUploads.map((upload, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/60">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{upload.name}</p>
                      <p className="text-sm text-slate-600">{upload.date}</p>
                    </div>
                  </div>
                  <Badge variant={upload.status === 'processed' ? 'default' : 'secondary'}>
                    {upload.status === 'processed' ? 'Ready' : 'Processing'}
                  </Badge>
                </div>
              ))}
              <Button className="w-full bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600">
                <Upload className="w-4 h-4 mr-2" />
                Upload New Resource
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <FileText className="w-6 h-6 text-indigo-600" />
                <span className="text-sm">Generate Quiz</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <BarChart3 className="w-6 h-6 text-sky-600" />
                <span className="text-sm">View Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                <span className="text-sm">Grade Work</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Download className="w-6 h-6 text-purple-600" />
                <span className="text-sm">Export Data</span>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upload" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upload Area */}
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Upload Resources</CardTitle>
                <CardDescription>Upload PDF or text files to generate questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-700 mb-2">Drop files here</h3>
                  <p className="text-slate-500 mb-4">or click to browse</p>
                  <Button className="bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600">
                    Choose Files
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Generation Options */}
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>AI Generation Settings</CardTitle>
                <CardDescription>Customize your question generation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Question Types</label>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Multiple Choice</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Short Answer</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Essay Questions</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Difficulty Level</label>
                  <select className="w-full mt-2 p-2 border border-slate-300 rounded-lg">
                    <option>Mixed</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
                  Generate Questions
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Student Performance Overview</CardTitle>
              <CardDescription>Track individual student progress and identify areas for improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentStats.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-slate-50/60">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-sky-400 rounded-full flex items-center justify-center text-white font-medium">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{student.name}</p>
                        <p className="text-sm text-slate-600">{student.submissions} submissions</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-lg font-bold text-slate-800">{student.grade}%</p>
                        <Progress value={student.grade} className="w-24 h-2" />
                      </div>
                      <Badge 
                        variant={student.status === 'excellent' ? 'default' : 
                                student.status === 'good' ? 'secondary' : 'destructive'}
                      >
                        {student.status === 'excellent' ? 'Excellent' : 
                         student.status === 'good' ? 'Good' : 'Needs Attention'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grading" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <span>Pending Grading Queue</span>
              </CardTitle>
              <CardDescription>Assignments waiting for your review</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingGrading.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-slate-50/60 border-l-4 border-amber-400">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{item.assignment}</p>
                      <p className="text-sm text-slate-600">{item.submissions} submissions • Due {item.dueDate}</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600">
                    Start Grading
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeacherDashboard;
