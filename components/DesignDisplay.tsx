'use client';

import { useState } from 'react';

interface DesignDisplayProps {
  images: string[];
}

export default function DesignDisplay({ images }: DesignDisplayProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    images.length > 0 ? images[0] : null
  );

  const downloadImage = (imageUrl: string, index: number) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `interior-design-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Generated Interior Designs
      </h2>

      {selectedImage && (
        <div className="mb-6">
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
            <img
              src={selectedImage}
              alt="Generated interior design"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => downloadImage(selectedImage, images.indexOf(selectedImage))}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Download Image
            </button>
          </div>
        </div>
      )}

      {images.length > 1 && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            All Variations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                  selectedImage === image
                    ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Design variation ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity flex items-center justify-center">
                  <span className="text-white opacity-0 hover:opacity-100 transition-opacity text-sm font-medium">
                    View Full Size
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

