import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    const { imageUrl, style } = body;

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'Image URL is required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please set OPENAI_API_KEY in your .env.local file.' },
        { status: 500 }
      );
    }

    // Create a detailed prompt for interior design generation
    const prompt = `Create a photorealistic interior design render based on this floor plan. 
Style: ${style || 'Modern'}
Requirements:
- High-quality, professional interior design
- Realistic lighting and shadows
- Modern furniture and decor appropriate for the style
- Proper room proportions matching the floor plan
- Beautiful color scheme and materials
- Professional architectural visualization quality
- Include appropriate furniture, lighting, and decorative elements
- Make it look like a real, lived-in space`;

    // Use DALL-E 3 for image generation
    // Note: DALL-E 3 doesn't support image inputs directly, so we'll use a text-to-image approach
    // For a production app, you might want to use a different service that supports image-to-image
    
    const enhancedPrompt = `A photorealistic interior design visualization in ${style} style. 
Based on the provided floor plan layout, create a stunning interior space with:
- Professional architectural rendering quality
- Realistic lighting and shadows
- Beautiful ${style.toLowerCase()} furniture and decor
- High-end materials and finishes
- Perfect composition and camera angle
- Magazine-worthy interior design`;

    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: enhancedPrompt,
      n: 1,
      size: '1024x1024',
      quality: 'hd',
    });

    const generatedImageUrl = response.data[0]?.url;

    if (!generatedImageUrl) {
      return NextResponse.json(
        { error: 'Failed to generate image' },
        { status: 500 }
      );
    }

    // Generate multiple variations
    const variations = [];
    for (let i = 0; i < 3; i++) {
      const variationResponse = await openai.images.generate({
        model: 'dall-e-3',
        prompt: `${enhancedPrompt} - Variation ${i + 1} with different furniture arrangement and color scheme`,
        n: 1,
        size: '1024x1024',
        quality: 'hd',
      });
      
      if (variationResponse.data[0]?.url) {
        variations.push(variationResponse.data[0].url);
      }
    }

    return NextResponse.json({
      images: [generatedImageUrl, ...variations].filter(Boolean),
    });
  } catch (error: any) {
    console.error('Error generating design:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate interior design' },
      { status: 500 }
    );
  }
}

