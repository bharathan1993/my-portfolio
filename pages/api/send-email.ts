import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    try {
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "itzbharathan@gmail.com",
        subject: "New Contact Form Submission",
        text: `Hi Bharathan,

There's a new visitor who wants to get in touch with you. Their details are as follows:

Name: ${name}
Email: ${email}
Message: ${message}`,
      })

      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error('Error sending email:', error)
      if (error instanceof Error) {
        res.status(500).json({ message: 'Error sending email', error: error.message })
      } else {
        res.status(500).json({ message: 'Error sending email', error: 'An unknown error occurred' })
      }
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
