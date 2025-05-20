import GoalForm from '../components/GoalForm';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          AR Fitness Workout Generator
        </h1>
        <GoalForm />
      </div>
    </div>
  );
}
