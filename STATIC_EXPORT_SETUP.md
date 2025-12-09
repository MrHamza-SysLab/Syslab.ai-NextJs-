# Static Export Setup Guide

## Overview
This project has been configured for static export. All pages will be pre-rendered as static HTML files that can be hosted on any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

## Important Changes

### 1. API Routes Removed
The `/api/contact` route has been replaced with client-side email solutions because API routes don't work with static export.

### 2. Contact Form Configuration
The contact form now uses one of these options:
- **EmailJS** (Recommended)
- **Formspree** (Alternative)

## Setup Instructions

### Option 1: Using EmailJS (Recommended)

1. **Sign up for EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account

2. **Create a Service**
   - Go to Email Services
   - Connect your email provider (Gmail, Outlook, etc.)
   - Note down your Service ID

3. **Create an Email Template**
   - Go to Email Templates
   - Create a new template
   - Use these variable names:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Note down your Template ID

4. **Get your Public Key**
   - Go to Account → General
   - Copy your Public Key

5. **Configure Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Option 2: Using Formspree

1. **Sign up for Formspree**
   - Go to https://formspree.io/
   - Create a free account

2. **Create a Form**
   - Create a new form
   - Copy the form endpoint URL

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

## Building for Production

### Install Dependencies
```bash
npm install
```

### Build Static Export
```bash
npm run export
```

This will create an `out` directory with all static files.

### Preview Static Export Locally
```bash
npx serve out
```

## Deploying

### GitHub Pages
1. Build the project: `npm run export`
2. Deploy the `out` directory to GitHub Pages

### Netlify
1. Connect your repository
2. Set build command: `npm run export`
3. Set publish directory: `out`

### Vercel
1. Connect your repository
2. Vercel will automatically detect Next.js
3. Set output directory to `out` for static export

### Any Static Host
Simply upload the contents of the `out` directory to any static hosting service.

## Notes

- **Images**: Images are set to `unoptimized: true` for static export compatibility
- **Environment Variables**: Only variables prefixed with `NEXT_PUBLIC_` will be included in the static build
- **API Routes**: Cannot be used with static export - use client-side solutions instead

## Troubleshooting

### Contact Form Not Working
- Make sure you've set up either EmailJS or Formspree
- Verify your environment variables are correct
- Check browser console for errors

### Build Errors
- Ensure all pages are statically renderable
- Remove any server-side code from pages
- Check that all imports are client-side compatible

