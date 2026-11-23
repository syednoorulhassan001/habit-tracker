function HabitItem({ habit, isDone, onToggle, onDelete }) {
  return (
    <li className={`habit-item ${isDone ? "done" : ""}`}>
      <label className="habit-check">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => onToggle(habit.id)}
        />
        <span className="habit-name">{habit.name}</span>
      </label>
      <button
        className="btn-delete"
        onClick={() => onDelete(habit.id)}
        aria-label={`Delete habit ${habit.name}`}
      >
        ✕
      </button>
    </li>
  );
}

export default HabitItem;