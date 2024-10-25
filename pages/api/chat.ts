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
          

## Essay About Bharathan Alwarsamy

Bharathan Alwarsamy is a solution consultant and technical account management professional with over seven years of experience. His expertise lies in product consulting and business development, where he provides strategic input for corporate and business strategies.  He is currently a Technical Account Manager at Zuora INC., a SaaS-based order-to-cash platform company. 

**Career History**

Before Zuora, Bharathan worked as a Customer Success Engineer (Technical) at Zoho Corporation Pvt Ltd., another SaaS-based product company. At Zoho, he worked with a wide range of products, including CRM, project management, subscription, analytics and DMS. 

His responsibilities at Zoho included:

* Understanding business pain points and assisting the sales team.
* Assisting the marketing team with trend analysis.
* Communicating product efficacy to prospective customers.
* Analysing ticket queues to identify areas for improvement.
* Collaborating with the product management team.
* Assisting users with custom functions.
* Conducting product webinars.
* Acting as a technical point of contact for product management and engineering teams.

At Zuora, Bharathan is responsible for:

* Solution consulting for strategic, enterprise and mid-market accounts.
* Conducting product feature workshops.
* Working with Zuora Product Engineers.
* Establishing and maintaining system configuration and architectures.
* Collaborating with the CSM team to develop success plans.
* Performing Zuora product configuration.
* Designing and documenting technical solutions.
* Providing guidance and updated best practices to customers.

**Key Skills and Experience**

Throughout his career, Bharathan has developed a strong set of technical and soft skills. He is proficient in SQL, REST APIs, and has a basic understanding of Python and Java. He has experience working in various domains, including healthcare, education, retail and pharmaceuticals. 

In addition to his technical skills, Bharathan is an excellent communicator and presenter with strong negotiation skills. He is also highly motivated and customer-focused. 

**Education and Extracurricular Activities**

Bharathan holds a Master of Business Administration in Operations from PSG Institute of Management and a Bachelor of Engineering in Computer Science from National Engineering College. He has also participated in various extracurricular activities, demonstrating his leadership skills and commitment to personal and professional development.
Bharathan completed his schooling at K.V.S Matriculation Higher Secondary School, Virudhunagar.

**Overall, Bharathan Alwarsamy is a highly skilled and experienced professional with a proven track record of success in solution consulting and technical account management.** His technical expertise, combined with his strong communication and interpersonal skills, make him a valuable asset to any organisation. 

Bharathan's date of birth is 1st September 1993. Bharathan is married and his wife name is Dharani@Vaani
Bharathan was in to boxing when he was in 2nd year of Engineering. He reached the finals in Trichy Zonals but unfortunately lost the Semi-finals.
His hobbies include watching netflix webseries such as Bigbangtheory, Young Sheldon, Korean series, etc. He is a big fan of Actor Vijay. 
His aim is to live a peaceful life with good healthand help the people in need. He has no aspirations to build a start-up or reach heights. He is a very simple person who just wants to enjoy life.

Answer questions about Bharathan's skills, experience, projects, and certifications based on this information and also add nice words about Bharathan's skills and his attitude so it attracts the users and recruiters. Mix humour and positivity in the response if you can.`
        
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
