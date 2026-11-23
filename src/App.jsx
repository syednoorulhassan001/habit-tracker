import { useLocalStorage } from "./hooks/useLocalStorage";
import { useToday } from "./hooks/useToday";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import DailySummary from "./components/DailySummary";

function App() {
  const [habits, setHabits] = useLocalStorage("habit-tracker:habits", []);
  const today = useToday();

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

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;
        const isDone = habit.completions.includes(today);
        return {
          ...habit,
          completions: isDone
            ? habit.completions.filter((date) => date !== today)
            : [...habit.completions, today],
        };
      })
    );
  };

  return (
    <main className="app">
      <h1>Habit Tracker</h1>
      <p className="subtitle">Build habits, one day at a time.</p>
      <HabitForm onAdd={addHabit} />
      <DailySummary habits={habits} today={today} />
      <HabitList
        habits={habits}
        today={today}
        onToggle={toggleHabit}
        onDelete={deleteHabit}
      />
    </main>
  );
}

export default App;