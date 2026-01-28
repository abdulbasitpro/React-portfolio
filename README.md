# Abdul Basit - MERN Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a MERN Stack Developer. Built with React, Vite, and Tailwind CSS, featuring a sleek dark/light mode design with smooth animations and professional presentation.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app) *(Replace with your actual deployment URL)*

## ✨ Features

- **Responsive Design**: Works seamlessly across all devices
- **Dark/Light Mode**: Toggle between themes based on preference
- **Professional Layout**: Clean, modern design with excellent user experience
- **Animated Components**: Smooth animations using Framer Motion
- **Contact Form**: Integrated EmailJS-powered contact form
- **Project Showcase**: Beautifully presented project gallery
- **Skills Visualization**: Interactive and animated skills section
- **Loading Animation**: Professional SaaS-level loading experience

## 🛠️ Tech Stack

- **Frontend**: React, JavaScript, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **UI Library**: Lucide React Icons
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📋 Skills & Technologies

### Frontend
- React & Hooks
- TypeScript
- JavaScript (ES6+)
- HTML5 & CSS3
- Tailwind CSS
- Responsive Design

### Backend
- Node.js
- Express.js
- REST APIs
- Database Integration

### Tools & Others
- Git & GitHub
- VS Code
- Postman
- MongoDB Compass

## 📁 Project Structure

```
src/
├── components/         # Reusable React components
│   ├── AppLoader.jsx   # Professional loading animation
│   ├── Contact.jsx     # Contact form with EmailJS
│   ├── Footer.jsx      # Footer component
│   ├── Hero.jsx        # Hero section with particles background
│   ├── Navbar.jsx      # Navigation component
│   ├── Projects.jsx    # Project showcase
│   ├── Resume.jsx      # Resume/Experience section
│   ├── Skills.jsx      # Animated skills section
│   └── ParticlesBackground.jsx # Animated particle background
├── contexts/           # React context providers
├── assets/            # Static assets (images, etc.)
└── App.jsx            # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Connect your email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email (for reply functionality)
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
4. Update your `.env` file with your credentials

### Deployment

The project is optimized for Vercel deployment:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

## 📱 Mobile Responsiveness

The portfolio is fully responsive and optimized for mobile, tablet, and desktop viewing. All components adapt gracefully to different screen sizes.

## 🎨 Customization

- Update personal information in the `Hero`, `About`, and `Contact` components
- Modify project data in the `Projects` component
- Customize skills in the `Skills` component
- Update resume/experience in the `Resume` component

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

I'm Abdul Basit, a passionate MERN Stack Developer with expertise in building modern web applications. I focus on creating clean, efficient, and user-friendly experiences with attention to detail and performance optimization.

## 📞 Contact

- **Email**: abdulbasitdevx@gmail.com
- **LinkedIn**: [linkedin.com/in/abdul-basit-8616aa294](https://www.linkedin.com/in/abdul-basit-8616aa294/)
- **GitHub**: [github.com/abdulbasitpro](https://github.com/abdulbasitpro)

---

⭐ If you find this portfolio template useful, please give it a star!