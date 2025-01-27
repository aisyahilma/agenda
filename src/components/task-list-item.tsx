import { Task } from "../types/task";

interface TaskListItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskListItem({ task, onToggle, onDelete }: TaskListItemProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="inline-flex gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <p
          className={
            task.completed
              ? "space-x-4 text-gray-500 line-through"
              : "space-x-4"
          }
        >
          <span>{task.title}</span>
          <span>{task.date.toDateString()}</span>
        </p>
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
