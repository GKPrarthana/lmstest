
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Upload, 
  CheckCircle, 
  Clock, 
  Trophy, 
  Target, 
  TrendingUp,
  Book,
  Star,
  Calendar,
  AlertCircle
} from "lucide-react";

const StudentDashboard = () => {
  const [assignments] = useState([
    { 
      title: "Physics Quiz #3", 
      subject: "Physics", 
      dueDate: "Tomorrow", 
      status: "pending", 
      difficulty: "Medium",
      points: 25 
    },
    { 
      title: "Math Problem Set", 
      subject: "Mathematics", 
      dueDate: "In 3 days", 
      status: "in-progress", 
      difficulty: "Hard",
      points: 40 
    },
    { 
      title: "Chemistry Lab Report", 
      subject: "Chemistry", 
      dueDate: "Next week", 
      status: "completed", 
      difficulty: "Easy",
      points: 30,
      grade: 94 
    },
    { 
      title: "English Essay", 
      subject: "English", 
      dueDate: "In 5 days", 
      status: "not-started", 
      difficulty: "Medium",
      points: 35 
    }
  ]);

  const [recentFeedback] = useState([
    {
      assignment: "Biology Test #2",
      grade: 92,
      feedback: "Excellent understanding of cellular processes. Minor improvements needed in diagram labeling.",
      strengths: ["Conceptual clarity", "Problem solving"],
      improvements: ["Diagram accuracy", "Time management"]
    },
    {
      assignment: "History Essay",
      grade: 87,
      feedback: "Well-researched content with good structure. Consider adding more primary sources.",
      strengths: ["Research quality", "Writing structure"],
      improvements: ["Source diversity", "Citation format"]
    }
  ]);

  const [streakData] = useState({
    currentStreak: 12,
    longestStreak: 28,
    totalAssignments: 47,
    averageGrade: 89
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'not-started': return 'bg-slate-100 text-slate-800 border-slate-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Welcome Card */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-sky-50 to-indigo-50 border-sky-200/60">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800">Welcome back, Alex! 🎯</CardTitle>
            <CardDescription className="text-slate-600">
              You have 3 assignments due this week. Keep up the great work!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-600">{streakData.currentStreak}</div>
                <div className="text-sm text-slate-600">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">{streakData.averageGrade}%</div>
                <div className="text-sm text-slate-600">Avg Grade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">{streakData.totalAssignments}</div>
                <div className="text-sm text-slate-600">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{streakData.longestStreak}</div>
                <div className="text-sm text-slate-600">Best Streak</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievement Badge */}
        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/60">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-lg">Achievement Unlocked!</CardTitle>
            <CardDescription>Consistent Learner</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-slate-600">12 days in a row of completing assignments</p>
            <Button size="sm" variant="outline" className="mt-3">
              View All Badges
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="assignments" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm">
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="submit">Submit Work</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="assignments" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-sky-600" />
                <span>Your Assignments</span>
              </CardTitle>
              <CardDescription>Track your upcoming and completed assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments.map((assignment, index) => (
                  <div key={index} className="p-4 rounded-lg border border-slate-200/60 bg-white/40 hover:bg-white/60 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-slate-800">{assignment.title}</h3>
                          <Badge className={getStatusColor(assignment.status)}>
                            {assignment.status.replace('-', ' ')}
                          </Badge>
                          <Badge className={getDifficultyColor(assignment.difficulty)}>
                            {assignment.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-slate-600">
                          <span className="flex items-center space-x-1">
                            <Book className="w-4 h-4" />
                            <span>{assignment.subject}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due {assignment.dueDate}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Target className="w-4 h-4" />
                            <span>{assignment.points} points</span>
                          </span>
                          {assignment.grade && (
                            <span className="flex items-center space-x-1 text-emerald-600 font-medium">
                              <Star className="w-4 h-4" />
                              <span>{assignment.grade}%</span>
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {assignment.status === 'completed' ? (
                          <Button size="sm" variant="outline">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            View Results
                          </Button>
                        ) : assignment.status === 'in-progress' ? (
                          <Button size="sm" className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600">
                            Continue
                          </Button>
                        ) : (
                          <Button size="sm" className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600">
                            Start
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submit" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* File Upload */}
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Submit Assignment</CardTitle>
                <CardDescription>Upload your completed work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Select Assignment</label>
                    <select className="w-full mt-2 p-2 border border-slate-300 rounded-lg">
                      <option>Physics Quiz #3</option>
                      <option>Math Problem Set</option>
                      <option>English Essay</option>
                    </select>
                  </div>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-sky-400 transition-colors">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-600 mb-2">Drop your files here or click to browse</p>
                    <p className="text-xs text-slate-500">Supports PDF, DOC, DOCX, TXT files</p>
                    <Button size="sm" className="mt-3 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600">
                      Choose Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Text Submission */}
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Text Submission</CardTitle>
                <CardDescription>Type your answer directly</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <textarea 
                    className="w-full h-32 p-3 border border-slate-300 rounded-lg resize-none"
                    placeholder="Type your answer here..."
                  />
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">Word count: 0</p>
                    <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
                      Submit Answer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <div className="space-y-6">
            {recentFeedback.map((feedback, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                        {feedback.grade}
                      </div>
                      <div>
                        <h3 className="font-semibold">{feedback.assignment}</h3>
                        <p className="text-sm text-slate-600">Grade: {feedback.grade}%</p>
                      </div>
                    </CardTitle>
                    <Badge variant="default" className="bg-emerald-100 text-emerald-800">
                      Completed
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">AI Feedback</h4>
                      <p className="text-slate-700 bg-slate-50/60 p-3 rounded-lg">{feedback.feedback}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-emerald-700 mb-2">Strengths</h4>
                        <ul className="space-y-1">
                          {feedback.strengths.map((strength, i) => (
                            <li key={i} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-emerald-500" />
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-amber-700 mb-2">Areas for Improvement</h4>
                        <ul className="space-y-1">
                          {feedback.improvements.map((improvement, i) => (
                            <li key={i} className="flex items-center space-x-2 text-sm">
                              <AlertCircle className="w-4 h-4 text-amber-500" />
                              <span>{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Overall Progress */}
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-sky-600" />
                  <span>Overall Progress</span>
                </CardTitle>
                <CardDescription>Your learning journey overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Mathematics</span>
                      <span className="text-sm text-slate-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Physics</span>
                      <span className="text-sm text-slate-600">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Chemistry</span>
                      <span className="text-sm text-slate-600">94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">English</span>
                      <span className="text-sm text-slate-600">89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievement Progress */}
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-amber-600" />
                  <span>Achievements</span>
                </CardTitle>
                <CardDescription>Your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-amber-50/60">
                    <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Consistent Learner</p>
                      <p className="text-sm text-slate-600">12 day streak</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-emerald-50/60">
                    <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">High Achiever</p>
                      <p className="text-sm text-slate-600">90%+ average grade</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-sky-50/60 opacity-60">
                    <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-600">Assignment Master</p>
                      <p className="text-sm text-slate-500">Complete 50 assignments (47/50)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentDashboard;
