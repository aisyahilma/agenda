import { useState } from "react";

import { Profile } from "./components/profile";
import { TaskList } from "./components/task-list";
import { Task } from "./types/task";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Makan pagi",
      date: new Date(),
      completed: false,
    },
  ]);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const taskFormData = new FormData(event.currentTarget);
    const taskValues = Object.fromEntries(taskFormData);

    const newTask = {
      id: Date.now(),
      title: String(taskValues.title),
      date: new Date(String(taskFormData.get("date"))),
      completed: false,
    };

    console.log({ newTask });

    setTasks([...tasks, newTask]);
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
        <h1 className="text-primary text-2xl font-bold">Agenda Master</h1>
        <Profile />
      </header>

      <main className="rounded bg-white p-6 shadow">
        <div className="mb-4 max-w-xs">
          <form onSubmit={addTask} className="space-y-2">
            <Input name="title" type="text" placeholder="New task..." />
            <Input name="date" type="date" />
            <Button type="submit">Add Task</Button>
          </form>
        </div>

        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </main>
    </div>
  );
}

export default App;
