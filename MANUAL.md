# Interior Design Generator - Complete User Manual

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Understanding the Interface](#understanding-the-interface)
4. [Step-by-Step Guide](#step-by-step-guide)
5. [Design Styles Explained](#design-styles-explained)
6. [Best Practices](#best-practices)
7. [Tips and Tricks](#tips-and-tricks)
8. [Troubleshooting](#troubleshooting)
9. [Advanced Features](#advanced-features)
10. [FAQ](#frequently-asked-questions)

## Introduction

Welcome to the Interior Design Generator User Manual! This comprehensive guide will help you master the art of transforming floor plans into stunning interior design visualizations using artificial intelligence.

### What is the Interior Design Generator?

The Interior Design Generator is a powerful web application that uses cutting-edge AI technology to convert simple floor plan images into photorealistic interior design renders. Whether you're planning a home renovation, presenting design concepts to clients, or exploring creative possibilities, this tool empowers you to visualize spaces in ways that were previously only possible with expensive 3D rendering software and professional designers.

### Who Can Use This Tool?

- **Homeowners**: Visualize renovation ideas before committing to changes
- **Interior Designers**: Quickly generate design concepts and present options to clients
- **Architects**: Create compelling visualizations for presentations
- **Real Estate Professionals**: Show potential buyers how spaces could look
- **DIY Enthusiasts**: Explore design possibilities for home projects
- **Students**: Learn about interior design and space planning

### Key Benefits

- **Time Savings**: Generate professional renders in minutes instead of hours
- **Cost Effective**: No need for expensive 3D software or professional designers
- **Multiple Options**: Get several design variations to compare
- **Easy to Use**: No technical skills required
- **High Quality**: Professional-grade 1024x1024 resolution images
- **Multiple Styles**: Explore different design aesthetics instantly

## Getting Started

### System Requirements

Before using the Interior Design Generator, ensure your system meets these requirements:

**Hardware:**
- Computer with internet connection
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- At least 4GB RAM (8GB recommended)
- Stable internet connection (for API calls)

**Software:**
- Modern web browser (latest version recommended)
- JavaScript enabled
- Cookies enabled (for session management)

**Account Requirements:**
- OpenAI API account with active API key
- Sufficient API credits for image generation

### First-Time Setup

1. **Obtain an OpenAI API Key**
   - Visit [platform.openai.com](https://platform.openai.com)
   - Sign up or log in to your account
   - Navigate to API Keys section
   - Create a new secret key
   - Copy and securely store your key

2. **Configure the Application**
   - Locate the `.env.local` file in the project directory
   - Add your API key: `OPENAI_API_KEY=sk-your-key-here`
   - Save the file

3. **Start the Application**
   - Open terminal in the project directory
   - Run: `npm run dev`
   - Wait for the server to start
   - Open http://localhost:3000 in your browser

4. **Verify Setup**
   - You should see the Interior Design Generator homepage
   - The upload area should be visible and functional
   - No error messages should appear

## Understanding the Interface

### Main Dashboard

The main dashboard is your workspace for creating interior designs. Let's explore each section:

#### Header Section
- **Title**: "Interior Design Generator" - Main application title
- **Description**: Brief explanation of what the tool does
- **Background**: Gradient background that adapts to light/dark mode

#### Upload Section
- **Upload Area**: Large, prominent area for file uploads
- **Drag and Drop Zone**: Visual indicator for drag-and-drop functionality
- **File Selection Button**: "Choose a file" button for traditional file selection
- **Format Information**: Displays supported file formats (PNG, JPG, WEBP)
- **Size Limit**: Shows maximum file size (10MB)

#### Floor Plan Preview Section
- **Preview Image**: Shows your uploaded floor plan
- **Image Container**: Responsive container that maintains aspect ratio
- **Border Styling**: Visual frame around the preview

#### Style Selection Section
- **Style Grid**: Grid layout showing all available styles
- **Style Cards**: Individual cards for each design style
- **Style Name**: Bold title of each style
- **Style Description**: Brief explanation of the style aesthetic
- **Hover Effects**: Visual feedback when hovering over styles

#### Generation Status Section
- **Loading Spinner**: Animated indicator during generation
- **Status Messages**: Text updates about generation progress
- **Time Estimates**: Information about expected wait time

#### Results Section
- **Main Display**: Large view of selected generated image
- **Download Button**: Prominent button to save images
- **Gallery Grid**: Thumbnail grid of all generated variations
- **Selection Indicator**: Visual highlight of currently selected image

### Navigation and Controls

**Upload Controls:**
- Click "Choose a file" to open file picker
- Drag and drop files directly onto upload area
- Click "Upload a different image" to change file

**Style Selection:**
- Click any style card to start generation
- Hover to see style details
- Only one style can be selected at a time

**Image Viewing:**
- Click thumbnails to view full size
- Selected image highlighted with blue border
- Download button saves current selected image

**Keyboard Shortcuts:**
- `Esc`: Close any modals (if implemented)
- `Tab`: Navigate between interactive elements
- `Enter`: Activate selected button

## Step-by-Step Guide

### Complete Workflow

Follow these detailed steps to create your first interior design:

#### Step 1: Prepare Your Floor Plan

**Before Uploading:**
- Ensure your floor plan is clear and readable
- Remove any unnecessary annotations or clutter
- Use high contrast (dark lines on light background or vice versa)
- Ensure the image is in focus and not blurry
- Recommended resolution: At least 800x600 pixels

**File Preparation:**
- Save as PNG for best quality (especially if it has text)
- Or use JPG for smaller file sizes
- Ensure file size is under 10MB
- Name your file descriptively (e.g., "living-room-floor-plan.png")

#### Step 2: Upload Your Floor Plan

**Method 1: Drag and Drop**
1. Locate your floor plan file on your computer
2. Click and hold the file
3. Drag it over the upload area
4. Release when you see the area highlight
5. Wait for the preview to appear

**Method 2: File Selection**
1. Click the "Choose a file" button
2. Navigate to your floor plan file
3. Select the file
4. Click "Open" or press Enter
5. Wait for the preview to appear

**What Happens Next:**
- The file is read and converted to a data URL
- A preview appears in the "Your Floor Plan" section
- The style selection section becomes available
- You can verify the image looks correct before proceeding

#### Step 3: Review Your Floor Plan

**Check the Preview:**
- Verify the image displays correctly
- Ensure all important details are visible
- Check that the image isn't rotated incorrectly
- Confirm the file is the right one

**If Something's Wrong:**
- Click "Upload a different image"
- Select a new file
- The previous preview will be replaced

#### Step 4: Select a Design Style

**Understanding Styles:**
Each style represents a different interior design aesthetic. Consider:
- The purpose of the space (living room, bedroom, office)
- Your personal preferences
- The architectural style of your home
- The mood you want to create

**Style Selection Process:**
1. Review all six style options
2. Read the description of each style
3. Consider which style matches your vision
4. Click on your chosen style card
5. The card will show visual feedback (hover effect)

**Style Recommendations:**
- **Modern**: Best for contemporary homes, minimalist preferences
- **Scandinavian**: Ideal for small spaces, light and airy feel
- **Industrial**: Perfect for lofts, urban spaces, creative studios
- **Traditional**: Great for classic homes, formal spaces
- **Contemporary**: Versatile, works for most spaces
- **Bohemian**: Best for creative spaces, eclectic tastes

#### Step 5: Generate Your Design

**After Clicking a Style:**
1. The style selection section disappears
2. A loading spinner appears
3. Status messages show generation progress
4. The system processes your request

**What Happens Behind the Scenes:**
1. Your floor plan image is sent to the AI system
2. A detailed prompt is created based on your selected style
3. The AI model (DALL-E 3) generates the first image
4. Three additional variations are generated
5. All images are processed and optimized
6. Results are returned to your browser

**Expected Wait Time:**
- First image: 30-45 seconds
- Additional variations: 15-20 seconds each
- Total time: Approximately 60-90 seconds
- This varies based on API load and internet speed

#### Step 6: View Your Results

**Initial Display:**
- The first generated image appears in the main display area
- It's shown at full resolution (1024x1024)
- A download button appears below it

**Gallery View:**
- All four variations appear as thumbnails below
- Thumbnails are arranged in a grid
- Each shows a preview of the full image
- Selected image is highlighted with a blue border

**Interacting with Results:**
- Click any thumbnail to view it full size
- The main display updates immediately
- Hover over thumbnails to see a "View Full Size" hint
- Selected thumbnail shows a ring highlight

#### Step 7: Download Your Designs

**Downloading Images:**
1. Select the image you want to download
2. Click the "Download Image" button
3. The image downloads to your default download folder
4. File name format: `interior-design-1.png`, `interior-design-2.png`, etc.

**Download Tips:**
- Download all variations you like
- Images are high resolution (1024x1024)
- Suitable for printing or presentations
- Can be used in portfolios or client presentations

#### Step 8: Generate More Variations (Optional)

**Creating Additional Designs:**
- You can upload the same floor plan again
- Try different styles for comparison
- Generate multiple times with the same style for more options
- Each generation creates 4 new unique variations

**Workflow for Multiple Styles:**
1. Keep your floor plan uploaded
2. Select a different style
3. Generate new designs
4. Compare results across styles
5. Download your favorites

## Design Styles Explained

### Modern Style

**Characteristics:**
- Clean, uncluttered spaces
- Minimalist furniture
- Neutral color palette (whites, grays, blacks)
- Geometric shapes and straight lines
- Natural materials (wood, stone, metal)
- Abundant natural light
- Hidden storage solutions

**Best For:**
- Contemporary homes
- Open floor plans
- Minimalist enthusiasts
- Professional workspaces
- Urban apartments

**Key Elements:**
- Sleek furniture with simple forms
- Monochromatic or limited color schemes
- Functional decor items
- Technology integration
- Open shelving with curated items

### Scandinavian Style

**Characteristics:**
- Light, airy spaces
- White and light wood tones
- Cozy textiles (wool, linen, cotton)
- Natural materials
- Hygge (coziness) elements
- Functional furniture
- Plants and natural elements

**Best For:**
- Small spaces
- Northern climates
- Cozy, comfortable living
- Family homes
- Bedrooms and living rooms

**Key Elements:**
- Light wood floors and furniture
- White or light-colored walls
- Textured rugs and throws
- Simple, functional furniture
- Candles and soft lighting
- Natural plants

### Industrial Style

**Characteristics:**
- Raw, unfinished materials
- Exposed brick and concrete
- Metal fixtures and furniture
- High ceilings
- Open spaces
- Utilitarian elements
- Vintage or reclaimed items

**Best For:**
- Lofts and converted spaces
- Urban apartments
- Creative studios
- Restaurants and cafes
- Offices and workspaces

**Key Elements:**
- Exposed ductwork and pipes
- Metal light fixtures
- Concrete floors
- Reclaimed wood
- Vintage industrial furniture
- Large windows
- Minimal window treatments

### Traditional Style

**Characteristics:**
- Classic, timeless design
- Rich colors and patterns
- Ornate details
- Symmetrical arrangements
- Formal furniture
- Antique or reproduction pieces
- Layered textures

**Best For:**
- Classic homes
- Formal living spaces
- Dining rooms
- Libraries and studies
- Heritage properties

**Key Elements:**
- Rich wood furniture
- Patterned fabrics and rugs
- Formal lighting (chandeliers, sconces)
- Artwork and mirrors
- Decorative moldings
- Upholstered furniture
- Traditional color palettes

### Contemporary Style

**Characteristics:**
- Current design trends
- Mix of styles
- Comfortable and stylish
- Neutral base with accent colors
- Clean lines with some curves
- Updated classics
- Personal expression

**Best For:**
- Most spaces
- Family homes
- Versatile applications
- Current trends followers
- Mixed style preferences

**Key Elements:**
- Comfortable seating
- Mix of materials
- Accent colors
- Current furniture trends
- Personal artwork and decor
- Balanced composition
- Functional beauty

### Bohemian Style

**Characteristics:**
- Eclectic mix of patterns
- Vibrant colors
- Artistic elements
- Layered textures
- Global influences
- Vintage and handmade items
- Personal collections

**Best For:**
- Creative spaces
- Bedrooms
- Living rooms
- Artist studios
- Eclectic tastes
- Personal expression

**Key Elements:**
- Pattern mixing
- Colorful textiles
- Plants and natural elements
- Vintage furniture
- Art and collections
- Layered rugs
- Unique lighting

## Best Practices

### Floor Plan Preparation

**Image Quality:**
- Use high-resolution images (minimum 800x600 pixels)
- Ensure good contrast between elements
- Remove unnecessary annotations
- Use clear, readable fonts if text is included
- Save in PNG format for best quality

**Content Guidelines:**
- Include room labels if helpful
- Show door and window locations
- Indicate room dimensions if possible
- Use standard floor plan symbols
- Keep the plan simple and clear

**File Management:**
- Use descriptive file names
- Organize files in folders
- Keep backups of original files
- Maintain a library of floor plans

### Style Selection Strategy

**Consider the Space:**
- Match style to room function
- Consider architectural style of building
- Think about natural light availability
- Consider room size and proportions
- Match to existing furniture (if applicable)

**Experiment:**
- Try multiple styles for the same space
- Compare results side by side
- Mix and match elements from different styles
- Don't be afraid to try unexpected combinations

**Client Presentations:**
- Generate multiple style options
- Show variety to clients
- Explain style characteristics
- Let clients see possibilities

### Generation Workflow

**Efficient Process:**
1. Prepare all floor plans in advance
2. Generate multiple styles for comparison
3. Save all variations you like
4. Organize downloads by project
5. Keep notes on what works

**Quality Control:**
- Review each generated image carefully
- Check if design matches floor plan
- Verify style consistency
- Ensure professional appearance
- Re-generate if needed

### File Organization

**Naming Convention:**
- Use descriptive names: "living-room-modern-1.png"
- Include style in filename
- Add date if needed: "kitchen-scandinavian-2025-01-15.png"
- Use consistent format across projects

**Folder Structure:**
```
Projects/
  ├── Project-Name/
  │   ├── Floor-Plans/
  │   ├── Modern/
  │   ├── Scandinavian/
  │   ├── Industrial/
  │   └── Final-Selections/
```

## Tips and Tricks

### Getting Better Results

**Optimize Your Floor Plan:**
- Use professional floor plan software if possible
- Ensure accurate room proportions
- Include furniture placement hints
- Add room labels for clarity
- Use standard architectural symbols

**Style-Specific Tips:**
- **Modern**: Emphasize open spaces and clean lines
- **Scandinavian**: Highlight natural light and coziness
- **Industrial**: Showcase raw materials and high ceilings
- **Traditional**: Include formal arrangements and rich details
- **Contemporary**: Balance comfort with style
- **Bohemian**: Emphasize color and personal expression

**Generation Strategies:**
- Generate during off-peak hours for faster results
- Try the same style multiple times for variety
- Compare results across different generations
- Save all variations, even if not immediately useful

### Advanced Techniques

**Multiple Generations:**
- Generate 2-3 times with the same style
- Compare results to find best elements
- Combine ideas from different generations
- Build a library of options

**Style Comparison:**
- Generate all 6 styles for the same floor plan
- Create comparison sheets
- Show clients multiple options
- Identify which styles work best for your space

**Presentation Tips:**
- Create before/after comparisons
- Show floor plan alongside generated design
- Add annotations explaining design choices
- Create mood boards with multiple variations

### Time-Saving Strategies

**Batch Processing:**
- Prepare multiple floor plans in advance
- Generate designs in one session
- Organize downloads systematically
- Keep a log of what you've generated

**Template Usage:**
- Save successful floor plan formats
- Reuse layouts for similar spaces
- Build a library of tested designs
- Create style-specific templates

## Troubleshooting

### Upload Issues

**Problem: File won't upload**
- Check file size (must be under 10MB)
- Verify file format (JPG, PNG, WEBP only)
- Try a different browser
- Clear browser cache
- Check internet connection

**Problem: Image preview doesn't show**
- Verify image file isn't corrupted
- Try converting to a different format
- Check browser console for errors
- Ensure JavaScript is enabled

**Problem: Upload is slow**
- Check internet connection speed
- Compress large images before upload
- Try a different file format
- Close other browser tabs

### Generation Issues

**Problem: Generation fails**
- Verify OpenAI API key is correct
- Check API key has sufficient credits
- Verify internet connection
- Check OpenAI API status
- Review error message for details

**Problem: Generation takes too long**
- This is normal (30-90 seconds)
- Check internet connection
- Verify API service status
- Try again during off-peak hours
- Check browser console for errors

**Problem: Results don't match style**
- Try generating again (AI can vary)
- Verify style was selected correctly
- Check if floor plan is clear
- Try a different style for comparison

### Display Issues

**Problem: Images don't display**
- Check internet connection
- Verify images loaded from API
- Try refreshing the page
- Clear browser cache
- Check browser console for errors

**Problem: Images are low quality**
- Generated images are 1024x1024 (high quality)
- Check your display settings
- Verify you're viewing full-size version
- Try downloading and viewing locally

**Problem: Gallery not showing**
- Ensure generation completed successfully
- Check if images array is populated
- Try refreshing the page
- Verify browser supports required features

### Download Issues

**Problem: Download doesn't work**
- Check browser download settings
- Verify pop-up blocker isn't interfering
- Try right-click and "Save As"
- Check download folder permissions
- Try a different browser

**Problem: Downloaded image is corrupted**
- Try downloading again
- Check file size (should be substantial)
- Verify internet connection during download
- Try a different browser

## Advanced Features

### API Integration

**Custom Integration:**
- Use the `/api/generate` endpoint directly
- Integrate with other applications
- Build custom workflows
- Automate generation processes

**API Parameters:**
- `imageUrl`: Base64 or URL of floor plan
- `style`: Design style name
- Returns: Array of image URLs

### Browser Compatibility

**Supported Browsers:**
- Chrome 90+ (recommended)
- Firefox 88+
- Safari 14+
- Edge 90+

**Features by Browser:**
- All browsers support core functionality
- Drag-and-drop works in all modern browsers
- Dark mode adapts to system preferences
- Image display works universally

### Performance Optimization

**For Faster Loading:**
- Use compressed images
- Close unnecessary browser tabs
- Use a fast internet connection
- Clear browser cache regularly
- Update browser to latest version

**For Better Results:**
- Use high-quality source images
- Ensure clear floor plans
- Follow best practices for preparation
- Experiment with different styles

## Frequently Asked Questions

### General Questions

**Q: Is this tool free to use?**
A: The application itself is free, but OpenAI API usage incurs costs. Check OpenAI's pricing for current rates.

**Q: How accurate are the generated designs?**
A: The AI creates realistic visualizations based on your floor plan and selected style. Results are artistic interpretations, not exact architectural plans.

**Q: Can I use these images commercially?**
A: Check OpenAI's usage terms and your API agreement. Generally, generated images can be used for presentations and portfolios.

**Q: How many designs can I generate?**
A: There's no hard limit, but each generation uses API credits. Generate as many as needed for your project.

**Q: Can I edit the generated designs?**
A: The generated images are final renders. You can use image editing software to modify them if needed.

### Technical Questions

**Q: What image formats are supported?**
A: JPG, PNG, and WEBP formats are supported for uploads.

**Q: What's the maximum file size?**
A: Recommended maximum is 10MB, though the system may handle larger files.

**Q: How long does generation take?**
A: Typically 30-90 seconds for all four variations, depending on API load.

**Q: Can I generate designs offline?**
A: No, an internet connection is required for API calls to OpenAI.

**Q: Are my floor plans stored or shared?**
A: Floor plans are processed locally and sent to OpenAI API. Check OpenAI's privacy policy for data handling.

### Style Questions

**Q: Can I combine multiple styles?**
A: Each generation uses one style. Generate multiple times with different styles and compare results.

**Q: Which style is best for small spaces?**
A: Scandinavian style often works well for small spaces due to its light, airy aesthetic.

**Q: Can I customize the styles?**
A: The current version offers six predefined styles. Future versions may include customization options.

**Q: Do styles work for all room types?**
A: Yes, but some styles work better for certain spaces. Experiment to find what works for your specific room.

### Results Questions

**Q: Why do results vary each time?**
A: AI generation is non-deterministic, meaning each generation creates unique variations. This provides more options.

**Q: Can I get the same result twice?**
A: Results are unique each time. If you like a specific result, download and save it.

**Q: How do I get better results?**
A: Use clear, high-quality floor plans, select appropriate styles, and don't hesitate to generate multiple times.

**Q: Can I request specific furniture or colors?**
A: The current version uses style-based generation. Specific requests may be added in future versions.

---

**Need More Help?**
- Check the Tutorial guide for step-by-step examples
- Review the Quick Start guide for rapid setup
- Consult the README for technical details
- Contact support if issues persist

**Last Updated**: 2025  
**Version**: 1.0.0

