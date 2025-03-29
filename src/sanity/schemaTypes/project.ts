import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    // Additional project images
    defineField({
      name: 'additionalImages',
      title: 'Additional Images',
      description: 'Add any number of additional project images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption for the image',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    // GitHub repository link
    defineField({
      name: 'githubRepo',
      title: 'GitHub Repository',
      description: 'Link to the GitHub repository (optional)',
      type: 'object',
      fields: [
        {
          name: 'showButton',
          title: 'Show GitHub Button',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'url',
          title: 'GitHub URL',
          type: 'url',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https']
          }),
        },
      ],
    }),
    // Prototype link
    defineField({
      name: 'prototype',
      title: 'Prototype',
      description: 'Link to the prototype (optional)',
      type: 'object',
      fields: [
        {
          name: 'showButton',
          title: 'Show Prototype Button',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'url',
          title: 'Prototype URL',
          type: 'url',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https']
          }),
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'View Prototype',
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { 
          type: 'block' 
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
    },
  },
})
