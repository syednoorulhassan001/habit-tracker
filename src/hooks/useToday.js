import { useState, useEffect } from "react";
import { toDateKey } from "../utils/dates";

export function useToday() {
  const [today, setToday] = useState(() => toDateKey());

  useEffect(() => {
    const update = () => setToday(toDateKey());

    const intervalId = setInterval(update, 60 * 1000);
    document.addEventListener("visibilitychange", update);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return today;
}