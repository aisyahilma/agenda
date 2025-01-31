import { Task } from "../types/task";

interface TaskListItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskListItem({ task, onToggle, onDelete }: TaskListItemProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="inline-flex gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <p className={`${task.completed ? "text-gray-500 line-through" : ""}`}>
          {task.title}
        </p>
        <p>{task.date.toDateString()}</p>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskListItem;
