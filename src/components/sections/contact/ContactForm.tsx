"use client";

import React, { useState } from 'react';
import { Input, Textarea } from '@/components/ui/form';
import Button from '@/components/ui/button/Button';
import { clsx } from 'clsx';

export interface ContactFormProps {
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Contact form component with validation and submission handling
 */
const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  // Form status
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Form errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Set submitting status
    setStatus('submitting');
    
    try {
      // In a real app, you would send the form data to your API here
      // For now, we'll simulate a successful submission after a delay
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
        'bg-background-alt', // Background and padding        className
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
            
            <Textarea
              label="Message"
              name="message"
              placeholder="Your message here..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              required
            />
            
            <div>
              <Button
                type="submit"
                isLoading={status === 'submitting'}
                disabled={status === 'submitting'}
                size="lg"
                rounded="none"
                className="float-right"
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
