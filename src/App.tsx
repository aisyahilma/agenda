import { useState } from "react";

import { Profile } from "./components/profile";
import { TaskList } from "./components/task-list";
import { Task } from "./types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

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
        <h1 className="text-2xl font-bold text-red-600">Agenda Master</h1>
        <Profile />
      </header>

      <main className="rounded bg-white p-6 shadow">
        <div className="mb-4 max-w-lg">
          <form onSubmit={addTask}>
            <input
              name="title"
              type="text"
              className="w-full rounded border p-2"
              placeholder="New task..."
            />
            <input
              name="date"
              type="date"
              className="w-full rounded border p-2"
            />
            <button
              type="submit"
              className="mt-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Add Task
            </button>
          </form>
        </div>

        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </main>
    </div>
  );
}

export default App;
