# Portfolio Website

This is a modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. It showcases skills, projects, and professional experience in an interactive and visually appealing manner.

## Features

- Responsive design
- Animated sections using Framer Motion
- Interactive AI chatbot powered by OpenAI's GPT-3.5 Turbo
- Contact form
- Skills showcase
- Project portfolio
- Professional experience timeline
- Certificates display

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/page.tsx`: Main portfolio page component
- `src/components/AIChatbox.tsx`: AI chatbot component
- `src/components/ui/`: Reusable UI components
- `pages/api/chat.ts`: API route for OpenAI chat completion

## Customization

To customize the portfolio for your own use:

1. Update personal information, skills, projects, and experience in `src/app/page.tsx`:

2. Replace images in the `public/` directory with your own.

3. Modify the AI chatbot prompt in `pages/api/chat.ts` to reflect your expertise:

## Deployment

This project is ready to be deployed on Vercel. For other platforms, refer to the Next.js deployment documentation.

## Built With

- [Next.js](https://nextjs.org/) - The React framework for production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React
- [OpenAI API](https://openai.com/blog/openai-api) - For powering the AI chatbot

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
