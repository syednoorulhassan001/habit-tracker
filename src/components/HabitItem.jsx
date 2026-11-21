function HabitItem({ habit, onDelete }) {
  return (
    <li className="habit-item">
      <span className="habit-name">{habit.name}</span>
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