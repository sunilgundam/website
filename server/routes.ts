import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message in the database
      const contactMessage = await storage.createContactMessage(contactData);
      
      // Send email notification
      await sendContactEmail(contactData);
      
      res.status(201).json({
        message: "Contact message submitted successfully",
        contactId: contactMessage.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          message: "Failed to submit contact message" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
