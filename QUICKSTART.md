# Interior Design Generator - Quick Start Guide

## Get Started in 5 Minutes!

This quick start guide will have you generating stunning interior designs in just a few minutes. Follow these simple steps to transform your floor plans into photorealistic interior visualizations.

## Prerequisites Checklist

Before you begin, make sure you have:

- [ ] Node.js 18+ installed ([Download here](https://nodejs.org/))
- [ ] OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- [ ] A floor plan image (PNG, JPG, or WEBP format)
- [ ] Terminal/Command Prompt access
- [ ] Modern web browser (Chrome, Firefox, Safari, or Edge)

## Step 1: Install Dependencies (2 minutes)

Open your terminal in the project directory and run:

```bash
npm install
```

Wait for installation to complete. You should see a list of installed packages.

**Troubleshooting:**
- If you get errors, make sure Node.js is installed: `node --version`
- On Windows, you may need to run terminal as Administrator

## Step 2: Configure API Key (1 minute)

1. Create a file named `.env.local` in the project root directory

2. Add your OpenAI API key:
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

3. Save the file

**Important:** Never share your API key or commit it to version control!

## Step 3: Start the Application (30 seconds)

Run the development server:

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
```

## Step 4: Open in Browser (10 seconds)

1. Open your web browser
2. Navigate to: **http://localhost:3000**
3. You should see the Interior Design Generator homepage

## Step 5: Create Your First Design (2 minutes)

### Upload Your Floor Plan

**Option A: Drag and Drop**
- Find your floor plan file on your computer
- Drag it onto the upload area
- Release to upload

**Option B: Click to Upload**
- Click "Choose a file" button
- Select your floor plan image
- Click "Open"

### Select a Style

Click on any design style card:
- **Modern** - Clean and minimalist (great for first try!)
- **Scandinavian** - Light and cozy
- **Industrial** - Urban and edgy
- **Traditional** - Classic elegance
- **Contemporary** - Current and comfortable
- **Bohemian** - Eclectic and artistic

### Wait for Generation

- Generation takes 30-90 seconds
- You'll see a loading spinner
- Be patient - quality takes time!

### View and Download

- Four design variations will appear
- Click thumbnails to view full size
- Click "Download Image" to save your favorite

## Congratulations! 🎉

You've created your first AI-powered interior design! 

## Next Steps

- **Try different styles** - Upload the same floor plan and try other styles
- **Generate multiple variations** - Click the same style again for more options
- **Read the Manual** - Check `MANUAL.md` for detailed usage instructions
- **Follow the Tutorial** - See `TUTORIAL.md` for step-by-step examples

## Quick Tips

✅ **Best Results:**
- Use clear, high-quality floor plans
- Ensure good contrast (dark lines on light background)
- Include room labels if helpful
- Use PNG format for best quality

✅ **Faster Workflow:**
- Prepare all floor plans in advance
- Generate multiple styles for comparison
- Download favorites immediately
- Organize files as you go

✅ **Troubleshooting:**
- If upload fails: Check file format (PNG, JPG, WEBP) and size (under 10MB)
- If generation fails: Verify API key is correct and has credits
- If images don't show: Check internet connection and refresh page

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for issues
npm run lint
```

## File Structure Quick Reference

```
interiordesign/
├── app/              # Main application
├── components/       # React components
├── .env.local       # Your API key (create this!)
└── package.json     # Dependencies
```

## Support Resources

- **Detailed Manual**: See `MANUAL.md`
- **Step-by-Step Tutorial**: See `TUTORIAL.md`
- **Technical Details**: See `README.md`
- **OpenAI API Docs**: [platform.openai.com/docs](https://platform.openai.com/docs)

## What You Can Do Now

1. ✅ Generate interior designs from floor plans
2. ✅ Explore 6 different design styles
3. ✅ Get 4 variations per generation
4. ✅ Download high-quality images (1024x1024)
5. ✅ Create professional visualizations

## Ready for More?

- **Tutorial 1**: Create your first design (detailed walkthrough)
- **Tutorial 2**: Explore all design styles
- **Tutorial 3**: Design a complete home
- **Tutorial 4**: Create professional presentations
- **Tutorial 5**: Optimize your results
- **Tutorial 6**: Master advanced techniques

Check `TUTORIAL.md` for complete step-by-step guides!

---

**Need Help?**
- Check the troubleshooting section in `MANUAL.md`
- Review error messages carefully
- Verify your API key is working
- Ensure all prerequisites are met

**Happy Designing!** 🏠✨

---

*Last Updated: 2025 | Version: 1.0.0*

