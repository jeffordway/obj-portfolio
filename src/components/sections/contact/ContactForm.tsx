"use client";

import React, { useState } from 'react';
import { Input, Textarea } from '@/components/ui/form';
import Button from '@/components/ui/button/Button';
import { clsx } from 'clsx';
import { z } from 'zod';

export interface ContactFormProps {
  /**
   * Additional CSS classes
   */
  className?: string;
}

// Define the contact form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message cannot exceed 1000 characters' }),
});

// Infer the type from the schema
type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Contact form component with validation and submission handling
 */
const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  // Form status
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Form errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Validate a single field
  const validateField = (name: keyof ContactFormData, value: string): string | null => {
    // Create a partial schema for just this field
    const fieldSchema = z.object({ [name]: contactFormSchema.shape[name] });
    
    // Validate just this field
    const result = fieldSchema.safeParse({ [name]: value });
    
    if (!result.success) {
      const error = result.error.errors.find(err => err.path[0] === name);
      return error ? error.message : null;
    }
    
    return null;
  };
  
  // Handle input changes with real-time validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ContactFormData;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [fieldName]: value,
    }));
    
    // Validate the field after a short delay (debounce)
    const errorMessage = validateField(fieldName, value);
    
    // Update errors state
    setErrors(prev => {
      const newErrors = { ...prev };
      
      if (errorMessage) {
        newErrors[fieldName] = errorMessage;
      } else {
        delete newErrors[fieldName];
      }
      
      return newErrors;
    });
  };
  
  // Validate form using Zod
  const validateForm = (): boolean => {
    const result = contactFormSchema.safeParse(formData);
    
    if (!result.success) {
      // Convert Zod errors to our error format
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path.length > 0) {
          const field = error.path[0].toString();
          newErrors[field] = error.message;
        }
      });
      
      setErrors(newErrors);
      return false;
    }
    
    // Clear any existing errors
    setErrors({});
    return true;
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate entire form before submission
    if (!validateForm()) {
      // Focus the first field with an error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        if (element) element.focus();
      }
      return;
    }
    
    // Set submitting status
    setStatus('submitting');
    
    try {
      // In a real app, you would send the form data to your API here
      // For now, we'll simulate a successful submission after a delay
      
      // Parse and validate the data one final time to ensure type safety
      const validatedData = contactFormSchema.parse(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Set success status
      setStatus('success');
      
      // Reset to idle after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      // Set error status
      setStatus('error');
      
      // Reset to idle after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };
  
  return (
    <div 
      className={clsx(
        'w-full max-w-2xl mx-auto', // Layout
        'bg-background-alt', // Background and padding
        className
      )}
    >
      {status === 'success' ? (
        <div className="py-8">
          <div className="w-16 h-16 bg-green-100 text-green-500 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-foreground mb-2">Message Sent!</h3>
          <p className="text-muted mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
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
          <div className="w-16 h-16 bg-red-100 text-red-500 flex items-center justify-center mb-4">
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
          <div className="flex flex-col gap-6">
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
            
            <div className="relative">
              <Textarea
                label="Message"
                name="message"
                placeholder="Your message here..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                helperText={!errors.message ? `${formData.message.length}/1000 characters` : undefined}
                required
              />
              {formData.message.length > 900 && (
                <div 
                  className={clsx(
                    'text-xs mt-1',
                    formData.message.length > 1000 ? 'text-[var(--error)]' : 
                    formData.message.length > 950 ? 'text-[var(--warning)]' : 
                    'text-[var(--info)]'
                  )}
                >
                  {formData.message.length > 1000 ? (
                    <span>Character limit exceeded by {formData.message.length - 1000} characters</span>
                  ) : (
                    <span>You have {1000 - formData.message.length} characters remaining</span>
                  )}
                </div>
              )}
            </div>
            
            <div>
              <Button
                type="submit"
                isLoading={status === 'submitting'}
                disabled={status === 'submitting'}
                size="md"
                rounded="none"
                
              >
                Send Message
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
