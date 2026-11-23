import { formatLongDate } from "../utils/dates";

function DailySummary({ habits, today }) {
  const total = habits.length;
  const done = habits.filter((habit) => habit.completions.includes(today)).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <section className="daily-summary" aria-label="Today's progress">
      <div className="daily-summary-header">
        <h2>{formatLongDate()}</h2>
        <span className="daily-summary-count">
          {done} of {total} done
        </span>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </section>
  );
}

export default DailySummary;