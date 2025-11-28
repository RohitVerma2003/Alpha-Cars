"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#2e054e] group-hover:text-[#5b21b6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#2e054e] group-hover:text-[#5b21b6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

const ThumbnailSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const mainSliderRef = useRef<any>(null);
  const thumbSliderRef = useRef<any>(null);

  const images = Array.from({ length: 65 }, (_, i) => `/images/image_${i}.jpg`);

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: number, next: number) => setSelectedIndex(next),
  };

  const thumbSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    mainSliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="mb-6 relative group">
        <Slider ref={mainSliderRef} {...mainSettings}>
          {images.map((src, index) => (
            <div key={`main-${src}`} className="px-2">
              <div className="relative w-full h-[500px] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={src}
                  alt={`main image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </Slider>
              
        <Link
          href="/view360"
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          360° View
        </Link>

        <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1.5 rounded-full text-sm font-medium">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      <div className="w-full">
        <Slider ref={thumbSliderRef} {...thumbSettings}>
          {images.map((src, index) => (
            <div
              key={`thumb-${src}`}
              className="px-2 cursor-pointer"
              onClick={() => handleThumbnailClick(index)}
            >
              <div
                className={`relative w-full h-24 overflow-hidden rounded-lg transition-all duration-300 ${
                  selectedIndex === index
                    ? "border-4 border-[#5b21b6] shadow-lg scale-105"
                    : "border-2 border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-300"
                }`}
              >
                <Image
                  src={src}
                  alt={`thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ThumbnailSlider;