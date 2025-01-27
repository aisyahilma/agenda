import React, { useState } from "react";
import Profile from "./components/profile";
import TaskList from "./components/task-list";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    if (!newTaskTitle) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: newTaskTitle, completed: false },
    ]);
    setNewTaskTitle("");
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-red-600">Agenda Master</h1>
        <Profile />
      </header>
      <main className="rounded bg-white p-6 shadow">
        <div className="mb-4">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="w-full rounded border p-2"
            placeholder="New task..."
          />
          <button
            onClick={addTask}
            className="mt-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Add Task
          </button>
        </div>
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </main>
    </div>
  );
};

export default App;
