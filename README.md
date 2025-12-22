# Interior Design Generator - Complete Documentation

Transform your floor plan into stunning, photorealistic interior designs with AI-powered technology. This comprehensive Next.js application revolutionizes the way you visualize interior spaces by allowing you to upload a single floor plan image and generate multiple professional-grade interior design variations in various styles instantly.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation Guide](#installation-guide)
- [Configuration](#configuration)
- [Usage Guide](#usage-guide)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)
- [Performance Optimization](#performance-optimization)
- [Security Considerations](#security-considerations)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Interior Design Generator is a cutting-edge web application that leverages artificial intelligence to transform simple floor plan images into breathtaking, photorealistic interior design visualizations. Whether you're a homeowner planning a renovation, an interior designer exploring design options, or an architect presenting concepts to clients, this tool empowers you to create professional-quality renders in minutes rather than hours.

### What Makes This Tool Special?

- **One-Click Transformation**: Upload a floor plan and get multiple design variations instantly
- **AI-Powered Intelligence**: Utilizes OpenAI's DALL-E 3, one of the most advanced image generation models available
- **Professional Quality**: Generates 1024x1024 high-resolution images suitable for presentations and portfolios
- **Multiple Style Options**: Choose from six distinct interior design styles to match your vision
- **User-Friendly Interface**: Intuitive drag-and-drop interface that requires no technical expertise
- **Responsive Design**: Works seamlessly across all devices - desktop, tablet, and mobile

## Features

### Core Functionality

- 🏠 **Intuitive Image Upload**: Drag and drop or click to upload floor plan images in multiple formats (JPG, PNG, WEBP)
- 🎨 **Six Design Styles**: Choose from Modern, Scandinavian, Industrial, Traditional, Contemporary, and Bohemian styles
- ✨ **AI-Powered Generation**: Uses OpenAI's DALL-E 3 to create photorealistic interior renders with professional quality
- 📱 **Fully Responsive**: Beautiful, modern UI that adapts to any screen size
- 🌙 **Dark Mode Support**: Automatic dark mode that respects system preferences for comfortable viewing
- 💾 **High-Quality Downloads**: Save generated designs as 1024x1024 PNG images
- 🔄 **Multiple Variations**: Get 4 different design variations per generation to explore options
- ⚡ **Fast Processing**: Generate designs in 30-60 seconds per variation
- 🎯 **Style-Specific Prompts**: Each style uses optimized prompts for authentic design aesthetics

### Advanced Features

- **Real-time Preview**: See your uploaded floor plan before generation
- **Gallery View**: Browse all generated variations in an elegant grid layout
- **Full-Screen View**: Click any variation to view it in high resolution
- **Error Handling**: Comprehensive error messages and validation
- **Loading States**: Beautiful loading animations during generation
- **Accessibility**: Built with accessibility best practices in mind

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js 18 or higher**: Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` (should show v18.0.0 or higher)
   - Verify npm: `npm --version` (should show 9.0.0 or higher)

2. **OpenAI API Key**: Required for AI image generation
   - Sign up at [platform.openai.com](https://platform.openai.com/)
   - Navigate to API Keys section
   - Create a new secret key
   - Copy and securely store your API key
   - **Important**: Keep your API key private and never commit it to version control

3. **Code Editor** (Optional but recommended):
   - Visual Studio Code
   - WebStorm
   - Or any editor of your choice

4. **Git** (Optional, for version control):
   - Download from [git-scm.com](https://git-scm.com/)

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **RAM**: Minimum 4GB, recommended 8GB+
- **Disk Space**: At least 500MB free space
- **Internet Connection**: Required for API calls and package installation
- **Browser**: Modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

## Installation Guide

### Step 1: Clone or Download the Project

If you have the project in a Git repository:
```bash
git clone <repository-url>
cd interiordesign
```

If you have the project files directly, navigate to the project directory:
```bash
cd /path/to/interiordesign
```

### Step 2: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This command will:
- Install all required dependencies listed in `package.json`
- Create a `node_modules` directory with all packages
- Install Next.js, React, TypeScript, Tailwind CSS, and OpenAI SDK
- Set up the development environment

**Expected Output**: You should see a list of installed packages. The process typically takes 1-3 minutes depending on your internet connection.

**Troubleshooting**: If you encounter errors:
- Ensure you have Node.js 18+ installed
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- Check your internet connection
- On Windows, you may need to run the terminal as Administrator

### Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory of the project:

**On macOS/Linux:**
```bash
touch .env.local
```

**On Windows:**
```bash
type nul > .env.local
```

Or create it manually using your text editor.

Add the following content to `.env.local`:
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

**Important Security Notes**:
- Never commit `.env.local` to version control (it's already in `.gitignore`)
- Never share your API key publicly
- Each API key has usage limits and costs associated with it
- Consider using environment variable management tools for production

### Step 4: Verify Installation

Run the development server to verify everything is set up correctly:

```bash
npm run dev
```

You should see output similar to:
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- Ready in 2.3s
```

### Step 5: Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser. You should see the Interior Design Generator homepage.

## Configuration

### Environment Variables

The application uses the following environment variables:

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `OPENAI_API_KEY` | Yes | Your OpenAI API key for image generation | `sk-proj-...` |

### Next.js Configuration

The `next.config.js` file contains image optimization settings:

```javascript
module.exports = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
```

This allows the application to:
- Load images from localhost during development
- Load images from any HTTPS source (for generated images from OpenAI)

### Tailwind CSS Configuration

The `tailwind.config.ts` file configures:
- Content paths for purging unused styles
- Custom color variables for dark mode
- Theme extensions

## Usage Guide

### Basic Workflow

1. **Launch the Application**
   - Start the dev server: `npm run dev`
   - Open http://localhost:3000 in your browser

2. **Upload Your Floor Plan**
   - Click "Choose a file" button or drag and drop an image
   - Supported formats: JPG, PNG, WEBP
   - Maximum file size: 10MB (recommended)
   - The image will be displayed in a preview area

3. **Select a Design Style**
   - Choose from six available styles:
     - **Modern**: Clean lines, minimalist aesthetic, neutral colors
     - **Scandinavian**: Light, airy spaces with natural materials
     - **Industrial**: Raw materials, exposed elements, urban feel
     - **Traditional**: Classic elegance, warm tones, timeless appeal
     - **Contemporary**: Current trends, comfortable, stylish
     - **Bohemian**: Eclectic, artistic, vibrant colors

4. **Generate Designs**
   - Click on your desired style
   - Wait 30-60 seconds for generation
   - The system creates 4 variations automatically

5. **View and Download**
   - Browse all variations in the gallery
   - Click any image to view full size
   - Click "Download Image" to save your favorite designs

### Advanced Tips

- **Best Floor Plan Images**: Use clear, well-lit floor plans with good contrast
- **File Format**: PNG works best for floor plans with text and lines
- **Image Quality**: Higher resolution floor plans produce better results
- **Style Selection**: Try multiple styles to see which works best for your space
- **Multiple Generations**: Generate multiple times with the same style for more variations

## Project Structure

```
interiordesign/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   │   └── generate/             # Image generation endpoint
│   │       └── route.ts          # POST handler for AI generation
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main homepage component
├── components/                   # React components
│   ├── DesignDisplay.tsx         # Gallery and full-size image viewer
│   ├── ImageUpload.tsx           # Drag-and-drop upload component
│   └── LoadingSpinner.tsx       # Loading animation component
├── public/                       # Static assets (if any)
├── .env.local                    # Environment variables (not in git)
├── .gitignore                   # Git ignore rules
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

### Component Architecture

- **page.tsx**: Main application logic, state management, API calls
- **ImageUpload.tsx**: Handles file selection, drag-and-drop, preview
- **DesignDisplay.tsx**: Manages image gallery, full-size viewing, downloads
- **LoadingSpinner.tsx**: Provides visual feedback during generation

## Technologies Used

### Frontend Framework
- **Next.js 14.2.5**: React framework with App Router for server-side rendering and API routes
- **React 18.3.1**: UI library for building interactive interfaces
- **TypeScript 5.5.3**: Type-safe JavaScript for better development experience

### Styling
- **Tailwind CSS 3.4.4**: Utility-first CSS framework for rapid UI development
- **PostCSS 8.4.38**: CSS processing tool
- **Autoprefixer 10.4.19**: Automatic vendor prefixing

### AI Integration
- **OpenAI SDK 4.47.1**: Official SDK for DALL-E 3 image generation
- **DALL-E 3 Model**: State-of-the-art text-to-image AI model

### Utilities
- **Axios 1.7.2**: HTTP client for API requests (if needed for future features)

## API Documentation

### POST /api/generate

Generates interior design images based on a floor plan and style preference.

**Request Body:**
```json
{
  "imageUrl": "data:image/png;base64,...",
  "style": "Modern"
}
```

**Parameters:**
- `imageUrl` (string, required): Base64-encoded image data URL or image URL
- `style` (string, optional): Design style name (default: "Modern")

**Response:**
```json
{
  "images": [
    "https://oaidalleapiprodscus.blob.core.windows.net/...",
    "https://oaidalleapiprodscus.blob.core.windows.net/...",
    "https://oaidalleapiprodscus.blob.core.windows.net/...",
    "https://oaidalleapiprodscus.blob.core.windows.net/..."
  ]
}
```

**Error Responses:**
- `400 Bad Request`: Missing imageUrl
- `500 Internal Server Error`: API key not configured or generation failed

**Rate Limits:**
- Subject to OpenAI API rate limits
- Check [OpenAI's usage policies](https://openai.com/api/policies/) for details

## Troubleshooting

### Common Issues and Solutions

#### Issue: "OpenAI API key is not configured"
**Solution**: 
- Ensure `.env.local` exists in the root directory
- Verify the API key is correctly formatted (starts with `sk-`)
- Restart the development server after adding the key

#### Issue: "Failed to generate image"
**Solution**:
- Check your OpenAI API key has sufficient credits
- Verify your internet connection
- Check OpenAI API status at [status.openai.com](https://status.openai.com)
- Review browser console for detailed error messages

#### Issue: Images not displaying
**Solution**:
- Check browser console for CORS errors
- Verify `next.config.js` image configuration
- Ensure images are loading from allowed domains

#### Issue: Slow generation times
**Solution**:
- This is normal - DALL-E 3 generation takes 30-60 seconds
- Check your internet connection speed
- Verify OpenAI API is not experiencing high load

#### Issue: Port 3000 already in use
**Solution**:
```bash
# Kill process on port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
PORT=3001 npm run dev
```

## Performance Optimization

### Best Practices

1. **Image Optimization**: Compress floor plan images before upload
2. **Caching**: Generated images are cached by OpenAI CDN
3. **Lazy Loading**: Images load on demand in the gallery
4. **Code Splitting**: Next.js automatically splits code for optimal loading

### Production Optimizations

- Enable Next.js Image Optimization
- Use CDN for static assets
- Implement rate limiting for API routes
- Add caching headers for generated images
- Monitor API usage and costs

## Security Considerations

### API Key Security
- Never expose API keys in client-side code
- Use environment variables for all secrets
- Rotate API keys regularly
- Monitor API usage for unusual activity

### Input Validation
- Validate image file types and sizes
- Sanitize user inputs
- Implement rate limiting
- Add request size limits

### Best Practices
- Keep dependencies updated
- Use HTTPS in production
- Implement proper error handling
- Don't log sensitive information

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy automatically

### Other Platforms

**Netlify:**
- Build command: `npm run build`
- Publish directory: `.next`
- Add environment variables in dashboard

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support and Resources

- **Documentation**: See `MANUAL.md` for detailed usage guide
- **Tutorial**: See `TUTORIAL.md` for step-by-step examples
- **Quick Start**: See `QUICKSTART.md` for rapid setup
- **Issues**: Report bugs and request features via GitHub Issues
- **OpenAI Documentation**: [platform.openai.com/docs](https://platform.openai.com/docs)

## Acknowledgments

- OpenAI for the DALL-E 3 API
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and users of this project

---

**Version**: 1.0.0  
**Last Updated**: 2025  
**Maintained by**: Interior Design Generator Team
