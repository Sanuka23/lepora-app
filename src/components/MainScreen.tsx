import React, { useState, useEffect } from 'react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Mountain Landscape",
    description: "Majestic Mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Serene Sunset",
    description: "Serene Sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Beautiful Forest",
    description: "Beautiful Forest",
  },
];

const MainScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black min-h-[70vh]">
      {/* Welcome Text */}
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 p-8">
        Welcome to Lepora!
      </h1>

      {/* Photo Slider */}
      <div className="relative w-full max-w-4xl h-[400px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute bottom-4 left-4 text-lg font-medium text-white bg-black bg-opacity-50 px-3 py-1 rounded">
              {image.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainScreen;
