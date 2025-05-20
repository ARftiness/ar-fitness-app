import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { goal } = req.body;
  if (!goal || goal.length === 0) {
    return res.status(400).json({ error: "Please provide a goal" });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You’re a fitness coach that writes workouts." },
        { role: "user", content: `Generate a workout plan for the goal: ${goal}` },
      ],
    });

    const workout = completion.data.choices[0].message.content;
    res.status(200).json({ workout });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "OpenAI API request failed" });
  }
}
