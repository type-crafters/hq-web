"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogCard({
  blogs = [
    {
      id: 1,
      title: "Introducing Our New Game: Adventure Quest",
      date: "2024-06-15",
      description:
        "We are thrilled to announce our latest project, Adventure Quest, an epic journey through mystical lands filled with challenges and treasures.",
      image: "/images/blog/adventure-quest.jpg",
      url: "#",
    },
  ],
}: Readonly<BlogCardProps>): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const showCarousel = blogs.length > itemsPerView;
  const maxIndex = Math.max(0, blogs.length - itemsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative">
          {/* Carrusel content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className={`flex-shrink-0 px-3 ${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden bg-secondary-600/20 border-2 border-secondary-700 shadow-lg hover:shadow-xl transition flex flex-col h-full">
                    {/* Blog Image */}
                    <div className="relative w-full h-48 bg-secondary-800 flex items-center justify-center flex-shrink-0">
                      {blog.image ? (
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-secondary-400 text-sm">
                          No Image
                        </span>
                      )}
                    </div>

                    {/* Blog Content */}
                    <div className="p-6 text-left flex flex-col flex-grow">
                      <p className="text-sm text-secondary-300 mb-2 flex items-center gap-2">
                        {blog.date}
                      </p>
                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-secondary-200 mb-4 flex-grow">
                        {blog.description}
                      </p>
                      <Link
                        href={blog.url}
                        className="text-secondary-400 hover:text-secondary-200 transition flex items-center gap-1 mt-auto"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carrusel controls */}
          {showCarousel && (
            <>
              {/* Navigation Buttons */}
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-secondary-700 hover:bg-secondary-600 text-white p-3 rounded-full shadow-lg transition z-10"
                aria-label="Previous blogs"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-secondary-700 hover:bg-secondary-600 text-white p-3 rounded-full shadow-lg transition z-10"
                aria-label="Next blogs"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Point indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      index === currentIndex
                        ? "bg-secondary-300"
                        : "bg-secondary-600 hover:bg-secondary-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

interface Blog {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  url: string;
}

interface BlogCardProps {
  blogs: Blog[];
}
