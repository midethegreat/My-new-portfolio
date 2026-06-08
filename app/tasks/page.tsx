"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Check, Trash2, Calendar, Clock, Filter } from "lucide-react"

interface Task {
  id: number
  title: string
  description: string
  priority: "low" | "medium" | "high"
  status: "todo" | "in-progress" | "completed"
  dueDate: string
  createdAt: string
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Design new landing page",
      description: "Create wireframes and mockups for the new product landing page",
      priority: "high",
      status: "in-progress",
      dueDate: "2024-01-15",
      createdAt: "2024-01-10",
    },
    {
      id: 2,
      title: "Update user dashboard",
      description: "Implement new analytics widgets and improve UX",
      priority: "medium",
      status: "todo",
      dueDate: "2024-01-20",
      createdAt: "2024-01-11",
    },
    {
      id: 3,
      title: "Code review session",
      description: "Review pull requests from team members",
      priority: "low",
      status: "completed",
      dueDate: "2024-01-12",
      createdAt: "2024-01-09",
    },
  ])

  const [newTask, setNewTask] = useState({ title: "", description: "", priority: "medium" as const })
  const [filter, setFilter] = useState<"all" | "todo" | "in-progress" | "completed">("all")

  const addTask = () => {
    if (!newTask.title.trim()) return

    const task: Task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
      status: "todo",
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      createdAt: new Date().toISOString().split("T")[0],
    }

    setTasks([task, ...tasks])
    setNewTask({ title: "", description: "", priority: "medium" })
  }

  const updateTaskStatus = (id: number, status: Task["status"]) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => filter === "all" || task.status === filter)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "low":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "in-progress":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "todo":
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold">Task Manager</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Add Task Section */}
        <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add New Task
            </CardTitle>
            <CardDescription className="text-gray-200">Create a new task to keep track of your work</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Task title..."
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Input
              placeholder="Task description..."
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <div className="flex gap-4">
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as any })}
                className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
              <Button onClick={addTask} className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filter Section */}
        <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-300" />
              <div className="flex gap-2">
                {["all", "todo", "in-progress", "completed"].map((status) => (
                  <Button
                    key={status}
                    variant={filter === status ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setFilter(status as any)}
                    className={filter === status ? "bg-purple-600" : "text-gray-300 hover:bg-white/10"}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks Grid */}
        <div className="grid gap-6">
          {filteredTasks.map((task) => (
            <Card key={task.id} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{task.title}</h3>
                    <p className="text-gray-300 mb-4">{task.description}</p>

                    <div className="flex items-center gap-4 mb-4">
                      <Badge className={getPriorityColor(task.priority)}>{task.priority} priority</Badge>
                      <Badge className={getStatusColor(task.status)}>{task.status.replace("-", " ")}</Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Created: {new Date(task.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    {task.status !== "completed" && (
                      <Button
                        size="sm"
                        onClick={() => updateTaskStatus(task.id, task.status === "todo" ? "in-progress" : "completed")}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 text-center">
              <p className="text-gray-300">No tasks found for the selected filter.</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 bg-black/20 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">Task Manager by Soremi Ayomide • Built with Next.js</p>
        </div>
      </footer>
    </div>
  )
}
