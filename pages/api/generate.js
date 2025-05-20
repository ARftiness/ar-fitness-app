import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { goal } = req.body;
  if (!goal || goal.length === 0) {
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

    // The generated workout text is in completion.choices[0].message.content
    const workout = completion.choices[0].message.content;
    res.status(200).json({ workout });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "OpenAI API request failed" });
  }
}

}
