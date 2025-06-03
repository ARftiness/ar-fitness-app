// components/GoalForm.js
import { useState } from "react";

export default function GoalForm() {
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [workout, setWorkout] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!goal.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal }),
      });
      const data = await res.json();
      setWorkout(data.workout);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Enter your goal (e.g. build muscle)"
        className="w-full p-3 rounded-lg border border-gray-600 bg-secondary text-accent focus:outline-none focus:border-primary"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-primary-dark disabled:opacity-50 flex justify-center items-center"
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 mr-2 text-secondary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        ) : (
          "Generate Workout"
        )}
      </button>
      {workout && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg text-accent whitespace-pre-wrap">
          {workout}
        </div>
      )}
    </form>
  );
}
