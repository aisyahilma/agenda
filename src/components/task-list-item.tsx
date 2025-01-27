interface TaskListItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskListItem({ task, onToggle, onDelete }: TaskListItemProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span
          className={`ml-2 ${task.completed ? "text-gray-500 line-through" : ""}`}
        >
          {task.title}
        </span>
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
