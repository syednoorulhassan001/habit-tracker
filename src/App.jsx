import { useLocalStorage } from "./hooks/useLocalStorage";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useLocalStorage("habit-tracker:habits", []);

  const addHabit = (name) => {
    const habit = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date().toISOString(),
      completions: [],
    };
    setHabits((prev) => [...prev, habit]);
  };

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  return (
    <main className="app">
      <h1>Habit Tracker</h1>
      <p className="subtitle">Build habits, one day at a time.</p>
      <HabitForm onAdd={addHabit} />
      <HabitList habits={habits} onDelete={deleteHabit} />
    </main>
  );
}

export default App;