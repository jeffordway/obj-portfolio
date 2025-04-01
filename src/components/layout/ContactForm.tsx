"use client";

import React, { useState } from "react";
import { Input, Textarea } from "@/components/ui/form";
import Button from "@/components/ui/button/Button";
import { clsx } from "clsx";
import { z } from "zod";

export interface ContactFormProps {
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Contact form validation schema
 * Defines validation rules for each form field
 */
const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message cannot exceed 1000 characters" }),
});

// Infer the type from the schema
type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Contact Form Component
 * 
 * Provides a complete contact form with client-side validation using Zod schema.
 * Handles form submission to the /api/contact endpoint and displays success/error states.
 * Includes field-level validation with error messages and form-level validation on submit.
 */
const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  // Form status
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Form errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Validate a single field
  const validateField = (name: keyof ContactFormData, value: string): string | null => {
    // Create a partial schema for just this field
    const fieldSchema = z.object({ [name]: contactFormSchema.shape[name] });
    
    try {
      fieldSchema.parse({ [name]: value });
      return null;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.errors[0]?.message;
        return fieldError || 'Invalid input';
      }
      return 'Validation error';
    }
  };
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Validate field on change
    const error = validateField(name as keyof ContactFormData, value);
    
    // Update errors state
    setErrors(prev => ({
      ...prev,
      [name]: error || '',
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    let hasErrors = false;
    const newErrors: Record<string, string> = {};
    
    // Check each field
    (Object.keys(formData) as Array<keyof ContactFormData>).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        hasErrors = true;
        newErrors[field] = error;
      }
    });
    
    // Update errors state
    setErrors(newErrors);
    
    // If there are errors, focus the first field with an error
    if (hasErrors) {
      const firstErrorField = Object.keys(newErrors)[0];
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        if (element) element.focus();
      }
      return;
    }
    
    // Set submitting status
    setStatus('submitting');
    
    try {
      // Parse and validate the data one final time to ensure type safety
      const validatedData = contactFormSchema.parse(formData);
      
      // Send data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });
      
      // Parse the response
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }
      
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Set success status
      setStatus('success');
      
      // Reset to idle after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      // Set error status
      setStatus('error');
      
      // Reset to idle after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };
  
  return (
    <div 
      className={clsx(
        "w-full mx-auto", // Layout
        "bg-background-alt", // Background and padding
        className
      )}
    >
      {status === 'success' ? (
        <div className="py-8">
          <div className="w-16 h-16 bg-green-100 text-[var(--success)] flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-foreground mb-2">Message Sent!</h3>
          <p className="text-muted mb-6">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
          <Button 
            onClick={() => setStatus('idle')}
            variant="outline"
            rounded="none"
          >
            Send Another Message
          </Button>
        </div>
      ) : status === 'error' ? (
        <div className="py-8">
          <div className="w-16 h-16 bg-red-100 text-[var(--error)] flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-foreground mb-2">Something Went Wrong</h3>
          <p className="text-muted mb-6">There was an error sending your message. Please try again.</p>
          <Button 
            onClick={() => setStatus('idle')}
            variant="outline"
            rounded="none"
          >
            Try Again
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-8" style={{ alignItems: 'flex-start' }}>
            <Input
              label="Name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            
            <Input
              label="Subject"
              name="subject"
              placeholder="What is this regarding?"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              required
            />
            
            <Textarea
              label="Message"
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              rows={6}
              required
            />
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth={false}
              className="w-auto min-w-[180px]"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
