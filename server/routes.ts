import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";

const profileInfo = `Mallikarjun Gudumagatte Nagaraja is a data professional with experience building dashboards, ETL pipelines and analytics solutions. You can contact him via email Mallikarjun.Gudum@gmail.com or phone 555-123-4567. He is based in the United States.`;

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  app.post("/api/chat", async (req: Request, res: Response) => {
    const message: string | undefined = req.body?.message;
    if (!message) {
      return res.status(400).json({ message: "Message required" });
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: profileInfo },
          { role: "user", content: message },
        ],
      });
      const response = completion.choices[0]?.message?.content || "";
      res.json({ message: response });
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch response" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
