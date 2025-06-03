// pages/index.js
import Head from "next/head";
import GoalForm from "../components/GoalForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>AR Fitness Workout Generator</title>
      </Head>
      <div className="max-w-2xl mx-auto bg-secondary p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          AR Fitness Workout Generator
        </h1>
        <GoalForm />
      </div>
    </>
  );
}
