import React, { useState } from 'react';
import Profile from './components/profile';
import TaskList from './components/task-list';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTask = () => {
    if (!newTaskTitle) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: newTaskTitle, completed: false },
    ]);
    setNewTaskTitle('');
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-600">Agenda Master</h1>
        <Profile />
      </header>
      <main className="bg-white rounded shadow p-6">
        <div className="mb-4">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="New task..."
          />
          <button
            onClick={addTask}
            className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-600"
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
