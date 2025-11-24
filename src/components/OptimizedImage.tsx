import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // For above-the-fold images
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px", // Start loading 100px before entering viewport
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder - shown while loading */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse"
          style={{
            backgroundSize: "200% 200%",
            animation: "shimmer 2s infinite",
          }}
        />
      )}

      {/* Actual image - only load when in view or priority */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`
            w-full h-full object-${objectFit} transition-opacity duration-500
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
        />
      )}
    </div>
  );
}

// Add this to your global CSS (index.css)
// @keyframes shimmer {
//   0% { background-position: 0% 0%; }
//   50% { background-position: 100% 100%; }
//   100% { background-position: 0% 0%; }
// }
