"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Image360Viewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  const images = Array.from({ length: 65 }, (_, i) => `/images/image_${i}.jpg`);
  const totalImages = images.length;
  const sensitivity = 5;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const imageChange = Math.floor(deltaX / sensitivity);

    if (imageChange !== 0) {
      setCurrentIndex((prev) => {
        let newIndex = prev + imageChange;
        if (newIndex < 0) newIndex = totalImages + newIndex;
        if (newIndex >= totalImages) newIndex = newIndex - totalImages;
        return newIndex;
      });
      setStartX(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    const imageChange = Math.floor(deltaX / sensitivity);

    if (imageChange !== 0) {
      setCurrentIndex((prev) => {
        let newIndex = prev - imageChange;
        if (newIndex < 0) newIndex = totalImages + newIndex;
        if (newIndex >= totalImages) newIndex = newIndex - totalImages;
        return newIndex;
      });
      setStartX(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalTouchEnd);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[950px] max-w-[90vw] bg-white rounded-lg shadow-lg p-4">
        <div
          ref={containerRef}
          className={`relative w-full h-[280px] md:h-[550px] overflow-hidden rounded-lg ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={images[currentIndex]}
            alt={`360 view - frame ${currentIndex}`}
            fill
            className="md:object-cover object-contain select-none pointer-events-none"
            sizes="600px"
            priority
            draggable={false}
          />

          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
            Drag to rotate
          </div>
        </div>
      </div>
    </div>
  );
}
