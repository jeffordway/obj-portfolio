import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

// Configure SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_CONTACT_FORM_API_KEY || '');

// Define the contact form schema with Zod (same as in the form component)
const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message cannot exceed 1000 characters' }),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the request data
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed', 
          errors: result.error.errors 
        }, 
        { status: 400 }
      );
    }
    
    // Get validated data
    const { name, email, subject, message } = result.data;
    
    // Get environment variables
    const toEmail = process.env.CONTACT_FORM_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;
    
    // Verify environment variables
    if (!toEmail || !fromEmail) {
      console.error('Missing email configuration in environment variables');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    // Create email message
    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<h4>Message:</h4>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // Send email using SendGrid
    await sgMail.send(msg);
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    // Log the error
    console.error('Contact form error:', error);
    
    // Return error response
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
