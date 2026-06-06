import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const PORTFOLIO_CONTENT = `
Name: Fuad Hasan (also known as Fuad Hasan Safat)
Location: Harz, Germany
Website: fuadhasan.pro.bd

PROFESSIONAL SUMMARY:
Full-stack developer with 2+ years of professional experience building scalable web applications.
Worked as Software Engineer (Fullstack Web App) at Live Media Ltd, designing backend systems and
responsive frontend applications with a focus on clean architecture and performance.

EDUCATION:
- M.Eng in Technology and Innovation Management, Hochschule Harz (Harz University of Applied Sciences), Germany (current)
- Actively seeking Werkstudent (part-time) roles

TECHNICAL SKILLS:
- Frontend: React, Next.js, TypeScript, Redux
- Backend: Node.js, NestJS, REST APIs
- Databases: MongoDB, MySQL
- Principles: Clean architecture, SOLID principles, production-grade reliability

WORK EXPERIENCE:
- Software Engineer (Fullstack Web App) at Live Media Ltd
  Designed backend systems and responsive frontend applications. Focus on clean architecture and performance.

LANGUAGES: English (Fluent), German (A1, actively learning)

WORK ELIGIBILITY:
- Based in Harz, Germany (Hochschule Harz campus)
- Open to Werkstudent (part-time, up to 20h/week) roles
- Available to contribute to production systems from day one

COLLABORATION STYLE:
Problem-solving mindset, experience in agile teams, comfortable contributing to production systems.

PERSONAL INTERESTS:
- Nurturing a small indoor plant collection
- Constant learner, exploring new tech frontiers
- Appreciator of good design and UX
- Coffee-fueled late-night coding

SOCIAL:
- LinkedIn: linkedin.com/in/fuad-hasan-safat
- Facebook: facebook.com/fuad.safat.7
- Instagram: instagram.com/fuadsafat
`;

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Gemini API key not configured. Add GEMINI_API_KEY to .env.local",
      },
      { status: 500 },
    );
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a helpful assistant summarizing a developer's portfolio website for a visitor.
Based on the portfolio data below, write a friendly and engaging 3-paragraph summary about this person.
Cover: (1) who they are and their background, (2) their technical skills and what they build, (3) what they're looking for and why someone should connect with them.
Keep it concise, warm, and professional. Write in third person.

${PORTFOLIO_CONTENT}`,
      config: {
        maxOutputTokens: 600,
        temperature: 0.7,
        // Disable Gemini 2.5's internal "thinking" so the token budget
        // goes to the actual answer (otherwise it can return empty text).
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    const summary = response.text;

    if (!summary) throw new Error("No summary returned from Gemini");

    return NextResponse.json({ summary });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to generate summary",
      },
      { status: 500 },
    );
  }
}
