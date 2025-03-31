import { InsertContactMessage } from "@shared/schema";
import { RESTAURANT_DETAILS } from "@shared/constants";
import nodemailer from "nodemailer";
import { log } from "./vite";

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "sscravekitchen@gmail.com",
    pass: process.env.SMTP_PASSWORD || "",
  },
});

export async function sendContactEmail(contactData: InsertContactMessage): Promise<void> {
  try {
    const { name, email, phone, subject, message } = contactData;

    // Format the email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send the email
    const info = await transporter.sendMail({
      from: `"SS Crave Kitchen Website" <${process.env.SMTP_USER || "sscravekitchen@gmail.com"}>`,
      to: "sscravekitchen@gmail.com",
      subject: `New Contact Form: ${subject}`,
      html: emailContent,
      replyTo: email,
    });

    log(`Email sent: ${info.messageId}`, "email");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send contact email");
  }
}
