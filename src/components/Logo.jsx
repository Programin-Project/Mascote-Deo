"use client"
import { useEffect, useRef } from "react"

export default function Logo() {
  const starsContainerRef = useRef(null)

  useEffect(() => {
    const createStar = () => {
      if (!starsContainerRef.current) return

      const star = document.createElement("div")

      // Random position around the logo
      const tx = (Math.random() - 0.5) * 100
      const ty = (Math.random() - 0.5) * 100
      const rotation = Math.random() * 360

      star.className = "absolute w-2.5 h-2.5 opacity-0 pointer-events-none"
      star.style.backgroundColor = "#FFD700"
      star.style.boxShadow = "0 0 5px 2px rgba(255, 215, 0, 0.7)"
      star.style.clipPath =
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
      star.style.setProperty("--tx", `${tx}px`)
      star.style.setProperty("--ty", `${ty}px`)
      star.style.setProperty("--rotation", `${rotation}deg`)
      star.style.animation = "starAnimation 0.8s ease-out forwards"

      starsContainerRef.current.appendChild(star)

      // Remove star after animation completes
      setTimeout(() => {
        if (star.parentNode === starsContainerRef.current) {
          starsContainerRef.current.removeChild(star)
        }
      }, 800)
    }

    // Create stars on hover
    const handleMouseEnter = () => {
      // Create multiple stars with slight delay
      for (let i = 0; i < 8; i++) {
        setTimeout(() => createStar(), i * 50)
      }
    }

    const logoButton = document.getElementById("logo-button")
    if (logoButton) {
      logoButton.addEventListener("mouseenter", handleMouseEnter)

      return () => {
        logoButton.removeEventListener("mouseenter", handleMouseEnter)
      }
    }
  }, [])

  return (
    <div className="relative z-50">
      <button
        id="logo-button"
        className="bg-transparent border-none cursor-pointer p-0 relative outline-none transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
      >
        <h1 className="font-bold text-3xl text-white opacity-0 -translate-y-2.5 shadow-md animate-logoEntrance">
          Programin
        </h1>
        <div
          ref={starsContainerRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible z-10"
        ></div>
      </button>

      <style jsx>{`
        @keyframes logoEntrance {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes starAnimation {
          0% {
            transform: translate(0, 0) scale(0) rotate(var(--rotation));
            opacity: 0;
          }
          40% {
            opacity: 1;
            transform: translate(calc(var(--tx) * 0.4), calc(var(--ty) * 0.4)) scale(1) rotate(var(--rotation));
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0) rotate(var(--rotation));
            opacity: 0;
          }
        }
        
        .animate-logoEntrance {
          animation: logoEntrance 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
