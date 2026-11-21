import HabitItem from "./HabitItem";

function HabitList({ habits, onDelete }) {
  if (habits.length === 0) {
    return (
      <p className="empty-state">
        No habits yet. Add your first one above to get started.
      </p>
    );
  }

  return (
    <ul className="habit-list">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default HabitList;