# EmailJS Setup Guide

To make the contact form work properly, you need to configure EmailJS with your own account credentials.

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Connect Your Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.) or SMTP
4. Follow the instructions to connect your email account

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these settings:
   - To Email: Your email address (e.g., abdulbasitdevx@gmail.com)
   - From Name: `{{from_name}}` (or "Portfolio Contact: {{from_name}}")
   - Reply To: `{{reply_to}}` (this allows you to reply directly to the sender)
   - Subject: `{{subject}}` (or "Portfolio Contact: {{subject}}")
   - Template Content: Include the `{{message}}` variable where you want the message to appear

## Step 4: Get Your Credentials

After setting up, you'll have:
- Service ID: Found in "Email Services" section
- Template ID: Found in "Email Templates" section
- Public Key: Found in "Account" → "API Keys" section

## Step 5: Update the Contact Component

In `src/components/Contact.jsx`, replace the placeholders:

```javascript
emailjs
  .send(
    'YOUR_SERVICE_ID', // Replace with your actual service ID
    'YOUR_TEMPLATE_ID', // Replace with your actual template ID
    templateParams,
    'YOUR_PUBLIC_KEY' // Replace with your actual public key
  )
```

## Environment Variables (Recommended)

For better security, create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Then update the component to use environment variables:

```javascript
emailjs
  .send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
```

Remember to add `.env` to your `.gitignore` file to keep your credentials secure!

## Testing

After setting up with your credentials, test the contact form to ensure it works properly.