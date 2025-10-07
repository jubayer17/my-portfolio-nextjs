"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectSliderProps {
  images: string[];
  title: string;
}

export default function ProjectSlider({ images, title }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images.length, isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  if (images.length === 0) {
    return (
      <div className="project-slider-placeholder">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg h-96 flex items-center justify-center">
          <i className="fas fa-image text-6xl text-white opacity-50"></i>
        </div>
      </div>
    );
  }

  return (
    <div className="project-slider">
      <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
        {/* Main Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          {images[currentIndex].includes("code-icon.png") ? (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <i className="fas fa-code text-6xl mb-4"></i>
                <h3 className="text-2xl font-bold">Coming Soon</h3>
                <p className="text-lg opacity-80">Project in Development</p>
              </div>
            </div>
          ) : (
            <Image
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              fill
              className="object-cover transition-all duration-500"
              priority
            />
          )}

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}

          {/* Auto-play indicator */}
          {isAutoPlay && images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              <i className="fas fa-play mr-1"></i>
              Auto
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 p-4 bg-gray-50 dark:bg-gray-700">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-blue-500 scale-110"
                    : "border-gray-300 dark:border-gray-600 hover:border-blue-400"
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                {image.includes("code-icon.png") ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <i className="fas fa-code text-white text-xs"></i>
                  </div>
                ) : (
                  <Image
                    src={image}
                    alt={`${title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
