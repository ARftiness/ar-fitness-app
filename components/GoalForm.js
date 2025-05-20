import { useState } from 'react';

export default function GoalForm() {
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [workout, setWorkout] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ goal }),
    });
    const data = await res.json();
    setWorkout(data.workout);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Enter your goal (e.g. build muscle)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {loading ? 'Generating...' : 'Generate Workout'}
      </button>
      {workout && (
        <pre className="mt-4 p-4 bg-gray-100 rounded">{workout}</pre>
      )}
    </form>
);
}
