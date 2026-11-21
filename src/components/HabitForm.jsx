import { useState } from "react";

function HabitForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName("");
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New habit, e.g. Read 20 pages"
        aria-label="Habit name"
        maxLength={60}
      />
      <button type="submit" disabled={!name.trim()}>
        Add
      </button>
    </form>
  );
}

export default HabitForm;