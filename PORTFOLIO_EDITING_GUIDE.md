# Portfolio Editing Guide

This guide provides complete instructions for customizing and updating your React portfolio website. All files are organized with extensive comments to make editing straightforward.

## 📁 Project Structure

```
portfolio/
├── client/src/
│   ├── components/          # All React components
│   │   ├── Hero.tsx        # Profile image and introduction
│   │   ├── Skills.tsx      # Skills bars and certifications
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Education.tsx   # Education and learning
│   │   ├── About.tsx       # Personal story
│   │   ├── Projects.tsx    # Project showcases
│   │   ├── Process.tsx     # Business analysis process
│   │   ├── Contact.tsx     # Contact form
│   │   ├── ChatBot.tsx     # Portfolio chatbot
│   │   └── Navigation.tsx  # Top navigation menu
│   ├── pages/
│   │   └── Portfolio.tsx   # Main page layout
│   └── index.css          # Global styles and colors
├── attached_assets/        # Your uploaded files
├── package.json           # Project dependencies
└── replit.md             # Project documentation
```

## 🎯 Quick Start - Most Common Edits

### 1. Update Your Personal Information

**File:** `client/src/components/Hero.tsx`
```javascript
// Line 73-74: Update your name
Mallikarjun<br />
<span className="text-gradient">Gudumagatte Nagaraja</span>

// Line 86: Update your headline
MS in Business Analytics & AI candidate with hands-on experience...

// Line 97: Update your bio
I thrive at the intersection of business and technology...

// Line 37: Replace profile image
src="YOUR_IMAGE_URL_HERE" 
```

### 2. Add Your Projects

**File:** `client/src/components/Projects.tsx`
```javascript
// Line 29-90: Update the projects array
const projects: Project[] = [
  {
    id: "your-project-id",
    title: "Your Project Title",
    subtitle: "Project Subtitle",
    description: "Project description...",
    businessProblem: "What business problem does this solve?",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
    demoUrl: "https://your-demo-url.com",     // Your live demo
    codeUrl: "https://github.com/your-repo",  // Your GitHub repo
    dashboardUrl: "https://your-dashboard",   // Your dashboard
    // ... other properties
  }
];
```

### 3. Update Your Skills

**File:** `client/src/components/Skills.tsx`
```javascript
// Line 26-32: Update skills and percentages
const skills: Skill[] = [
  { name: "Your Skill", percentage: 95, category: "technical" },
  // Add more skills...
];

// Line 35-44: Update certifications
const certifications: Certification[] = [
  { name: "Your Certification", icon: "fab fa-aws", color: "text-orange-500", description: "Description" },
  // Add more certifications...
];
```

### 4. Update Work Experience

**File:** `client/src/components/Experience.tsx`
```javascript
// Line 22-52: Update experiences array
const experiences: Experience[] = [
  {
    id: "company-id",
    title: "Your Job Title",
    company: "Company Name", 
    period: "2023 - Present",
    description: "What you did at this company...",
    achievements: [
      { value: "50+", label: "Projects Done", color: "text-blue-600" },
      // Add your metrics...
    ],
    technologies: ["Tech1", "Tech2"],
    techColor: "bg-blue-100 text-blue-800"
  }
];
```

### 5. Update Education

**File:** `client/src/components/Education.tsx`
```javascript
// Line 74-76: Update degree info
<h3 className="text-xl font-bold text-slate-800">Your Degree</h3>
<p className="text-blue-600 font-semibold">Your Field of Study</p>

// Line 81-86: Update university details
<p className="text-slate-700 font-medium mb-2">Your University Name</p>
<p className="text-sm text-slate-600 mb-4">Expected Graduation: 2024</p>
<span>Your Location</span>

// Line 35-38: Update certifications
const certifications: Certification[] = [
  { name: "Your Certification", icon: "fab fa-aws", iconColor: "text-orange-500", year: "2023" },
];
```

## 🎨 Customizing Colors and Styling

**File:** `client/src/index.css`
```css
/* Line 16-32: Update color scheme */
:root {
  --portfolio-primary: hsl(207, 90%, 54%);    /* Main blue color */
  --portfolio-secondary: hsl(220, 14%, 16%);  /* Dark color */
  --portfolio-accent: hsl(45, 94%, 51%);      /* Accent color */
  /* Change these values to match your brand colors */
}
```

## 🔗 Adding Your Links and Contact Info

### Social Media Links
**File:** `client/src/components/Contact.tsx`
```javascript
// Line 28-47: Update contact information
const contactInfo: ContactInfo[] = [
  {
    title: "Email",
    value: "your.actual.email@example.com"  // Replace with your email
  },
  {
    title: "LinkedIn", 
    value: "/in/yourlinkedinprofile"        // Replace with your LinkedIn
  },
  {
    title: "GitHub",
    value: "github.com/yourusername"        // Replace with your GitHub
  }
];
```

### Resume Download
**File:** `client/src/components/Hero.tsx`
```javascript
// Line 13-16: Add resume download functionality
const downloadResume = () => {
  window.open('/path/to/your/resume.pdf', '_blank');  // Add your resume file path
};
```

## 📱 Updating Navigation

**File:** `client/src/components/Navigation.tsx`
```javascript
// Line 25-33: Current navigation items (modify if needed)
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'process', label: 'Process' },
];
```

## 🤖 Customizing the Chatbot

**File:** `client/src/components/ChatBot.tsx`
```javascript
// Line 25-29: Update quick questions
const quickQuestions = [
  "Tell me about the emotion detection project",
  "What technologies do you use?", 
  "Show me your experience"
];

// Line 46-69: Update bot responses
// Add your own logic for handling different questions
```

## 🖼️ Adding Images and Assets

### Method 1: Using External URLs
```javascript
// In any component, replace image src with your URL
src="https://your-image-hosting-service.com/your-image.jpg"
```

### Method 2: Adding Local Images
1. Add your images to the `attached_assets/` folder
2. Import them in your component:
```javascript
import yourImage from "@assets/your-image.jpg";
// Then use: src={yourImage}
```

## 🎯 Section-Specific Customization

### Adding New Projects
1. Open `client/src/components/Projects.tsx`
2. Add a new object to the `projects` array (line 30)
3. Follow the existing structure
4. Update the `renderProjectDemo` function (line 100) if you want custom demos

### Adding New Skills
1. Open `client/src/components/Skills.tsx`
2. Add to the `skills` array (line 26)
3. Add to the `certifications` array (line 35)

### Modifying Process Steps
1. Open `client/src/components/Process.tsx`
2. Update the `processSteps` array (line 16)
3. Update company examples (line 128-204)

### Updating About Section
1. Open `client/src/components/About.tsx`
2. Update personal story (line 84-93)
3. Update current focus areas (line 33-55)
4. Update stats (line 57-61)

## 🚀 Running and Testing Changes

### Development Mode
```bash
npm run dev
```
This starts the development server with hot reload - changes appear instantly.

### Building for Production
```bash
npm run build
```

## 📝 Content Guidelines

### Writing Project Descriptions
- **Business Problem**: Start with the problem you solved
- **Achievements**: Use specific metrics (percentages, numbers)
- **Technologies**: List the main tools/languages used

### Writing Experience Descriptions
- Focus on impact and results
- Include quantifiable achievements
- Mention specific technologies used

### Skill Percentages
- Be realistic about your skill levels
- 90%+ should be for expert-level skills
- 70-89% for proficient skills
- 50-69% for intermediate skills

## 🎨 Animation Customization

**File:** `client/src/lib/animations.ts`
```javascript
// Modify existing animation timings and effects
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }  // Change duration here
  }
};
```

## 🔧 Common Issues and Solutions

### Images Not Loading
- Check the file path in `attached_assets/`
- Ensure image URLs are accessible
- Use proper import syntax for local images

### Sections Not Appearing
- Check that section IDs match navigation IDs
- Ensure components are imported in `Portfolio.tsx`

### Animations Not Working
- Check that Framer Motion is properly installed
- Verify `AnimatedSection` wrapper is used
- Check browser console for errors

## 📞 Support and Troubleshooting

### Making Changes
1. Edit the relevant file
2. Save the file
3. Check your browser - changes should appear automatically
4. If something breaks, check the browser console (F12)

### File Locations Quick Reference
- **Personal Info**: `Hero.tsx`, `About.tsx`, `Contact.tsx`
- **Professional Content**: `Experience.tsx`, `Education.tsx`, `Skills.tsx`
- **Projects**: `Projects.tsx`
- **Colors/Styling**: `index.css`
- **Navigation**: `Navigation.tsx`

Remember: All files contain extensive comments marked with `// TODO:` indicating exactly what to update with your personal information.

---

## 🎯 Quick Checklist for Customization

- [ ] Update name and bio in Hero section
- [ ] Replace profile image with your photo
- [ ] Add your actual projects with live URLs
- [ ] Update skills and certifications
- [ ] Add your work experience details
- [ ] Update education information
- [ ] Add your contact information and social links
- [ ] Customize colors to match your brand
- [ ] Test all navigation links
- [ ] Verify all external links work
- [ ] Add your resume file for download

Your portfolio is now ready to be fully customized with your personal information and branding!