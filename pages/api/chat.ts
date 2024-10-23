import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { messages } = req.body;

  try {
    console.log('Received request:', messages);

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set');
    }
/* role: "system", content: "You are a 15 year experienced technical architect. Provide information on any technical questions asked by the user." */
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
         {
          role: "system",
          content: `You are an AI assistant for Bharathan Alwarsamy's portfolio website. Here's some information about Bharathan:

          - Bharathan is a Technical Account Manager and Full Stack Enthusiast
          - His skills include React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, GraphQL, REST APIs, Tailwind CSS, Sass, Framer Motion, Jest, Cypress, Git, and Docker
          - He has certifications in AWS Solutions Architect, Google Professional Cloud Developer, and Certified Kubernetes Administrator
          - His portfolio includes projects like [list some of your projects]
          
          Answer questions about Bharathan's skills, experience, projects, and certifications based on this information.`
        } ,
        ...messages
      ],
    });

    console.log('OpenAI response:', response.choices[0].message);

    res.status(200).json({ message: response.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
}
