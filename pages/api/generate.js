import OpenAI from "openai";

// Log once on import to verify the key
console.log("🔑 OPENAI_API_KEY is:", process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  console.log("🧠 Using model gpt-3.5-turbo for goal:", req.body.goal);
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { goal } = req.body;
  if (!goal || goal.trim().length === 0) {
    return res.status(400).json({ error: "Please provide a goal" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You’re a fitness coach that writes workouts." },
        { role: "user", content: `Generate a workout plan for the goal: ${goal}` },
      ],
    });
    const workout = completion.choices[0].message.content;
    return res.status(200).json({ workout });
  } catch (error) {
    console.error("❌ OpenAI API error:", error);
    return res.status(500).json({ error: error.message || "OpenAI API request failed" });
  }
}
