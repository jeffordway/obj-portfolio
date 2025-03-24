"use client";

import React, { useState } from 'react';
import { PageLayout } from '@/components/layout';
import { Section, Container } from '@/components/layout';
import { Heading } from '@/components/ui/typography/Heading';
import { Text } from '@/components/ui/typography/Text';
import Checkbox from '@/components/ui/form/Checkbox';

export default function DoNotSellPage() {
  const [optOut, setOptOut] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the opt-out request to your backend
    console.log('Do Not Sell request submitted:', { ...formData, optOut });
    setSubmitted(true);
  };

  return (
    <PageLayout showHero={false}>
      <Section className="py-16">
        <Container width="narrow">
          <Heading as="h1" className="mb-8">Do Not Sell or Share My Personal Information</Heading>
          
          <div className="space-y-8">
            <Text>
              Under the California Consumer Privacy Act (CCPA) and other privacy regulations, you have the right to opt out 
              of the sale or sharing of your personal information. This page allows you to exercise that right.
            </Text>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div className="space-y-6 p-6 border border-border rounded-md">
                  <Text weight="medium">Your Information</Text>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-border rounded-md bg-surface"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-border rounded-md bg-surface"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-border rounded-md bg-surface"
                    />
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-start gap-4">
                      <div className="pt-1">
                        <Checkbox
                          id="opt-out"
                          checked={optOut}
                          onChange={(e) => setOptOut((e.target as HTMLInputElement).checked)}
                          aria-label="Opt out of the sale of my personal information"
                        />
                      </div>
                      <div>
                        <Text size="sm">
                          I request to opt out of the sale or sharing of my personal information. I understand that 
                          this will not affect the collection of my information for essential website functionality, 
                          but will prevent my information from being sold to or shared with third parties for 
                          marketing purposes.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-primary-light transition-colors"
                    aria-label="Submit opt-out request"
                    disabled={!optOut}
                  >
                    Submit Request
                  </button>
                </div>
                
                <Text size="sm" className="text-text-muted mt-4">
                  Note: We will process your request within 45 days as required by law. You may be asked to verify your 
                  identity before we can complete your request.
                </Text>
              </form>
            ) : (
              <div className="p-6 border border-border rounded-md bg-surface/50">
                <Heading as="h2" size="lg" className="mb-4">Request Submitted</Heading>
                <Text>
                  Thank you for submitting your request. We have received your opt-out preference and will process it 
                  within 45 days as required by law. You will receive a confirmation email at {formData.email} once your 
                  request has been processed.
                </Text>
                <Text className="mt-4">
                  If you have any questions about your request, please contact our privacy team at privacy@example.com.
                </Text>
              </div>
            )}
            
            <div className="mt-8 p-6 border border-border rounded-md bg-surface/30">
              <Heading as="h2" size="lg" className="mb-4">Your Privacy Rights</Heading>
              <Text size="sm">
                Under various privacy regulations, including the California Consumer Privacy Act (CCPA), the California Privacy 
                Rights Act (CPRA), and the General Data Protection Regulation (GDPR), you have the right to:
              </Text>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><Text size="sm">Know what personal information is being collected about you</Text></li>
                <li><Text size="sm">Know whether your personal information is sold or disclosed and to whom</Text></li>
                <li><Text size="sm">Opt out of the sale or sharing of your personal information</Text></li>
                <li><Text size="sm">Access your personal information that has been collected</Text></li>
                <li><Text size="sm">Request deletion of your personal information</Text></li>
                <li><Text size="sm">Not be discriminated against for exercising your privacy rights</Text></li>
              </ul>
              <Text size="sm" className="mt-4">
                For more information about how we handle your personal information, please read our{' '}
                <a href="/privacy-policy" className="text-primary hover:text-primary-light underline">Privacy Policy</a>.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
