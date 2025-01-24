import React from 'react';

interface TaskListItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={`ml-2 ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.title}
        </span>
      </div>
      <button onClick={() => onDelete(task.id)} className="text-red-500 hover:underline">
        Delete
      </button>
    </div>
  );
};

export default TaskListItem;
