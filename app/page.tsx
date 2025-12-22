'use client';

import { useState } from 'react';
import ImageUpload from '@/components/ImageUpload';
import DesignDisplay from '@/components/DesignDisplay';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedDesigns, setGeneratedDesigns] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setGeneratedDesigns([]);
    setError(null);
  };

  const handleGenerate = async (style: string) => {
    if (!uploadedImage) return;

    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: uploadedImage,
          style: style,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate design');
      }

      const data = await response.json();
      setGeneratedDesigns(data.images || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Interior Design Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your floor plan into stunning, photorealistic interior designs with AI.
            Upload a single floor plan and get multiple design variations instantly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
            <ImageUpload onImageUpload={handleImageUpload} />
          </div>

          {uploadedImage && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Your Floor Plan
              </h2>
              <div className="relative w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                <img
                  src={uploadedImage}
                  alt="Uploaded floor plan"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}

          {uploadedImage && !isGenerating && generatedDesigns.length === 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Choose a Design Style
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Modern', description: 'Clean lines and minimalist aesthetic' },
                  { name: 'Scandinavian', description: 'Light, airy, and cozy' },
                  { name: 'Industrial', description: 'Raw materials and urban feel' },
                  { name: 'Traditional', description: 'Classic elegance and warmth' },
                  { name: 'Contemporary', description: 'Current trends and comfort' },
                  { name: 'Bohemian', description: 'Eclectic and artistic' },
                ].map((style) => (
                  <button
                    key={style.name}
                    onClick={() => handleGenerate(style.name)}
                    className="p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all text-left group"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {style.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {style.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {isGenerating && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
              <LoadingSpinner />
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
              <p className="text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}

          {generatedDesigns.length > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
              <DesignDisplay images={generatedDesigns} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

