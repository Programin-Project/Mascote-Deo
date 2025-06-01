"use client"

import { useState, useRef } from "react"
import Mascot from "./Mascot"

const MascotWithSpeech = () => {
  const [showSpeech, setShowSpeech] = useState(false)
  const [speechText, setSpecchText] = useState("")
  const speechRef = useRef(null)

  const messages = [
    "Olá! Vamos aprender a programar?",
    "Que tal começar com HTML hoje?",
    "CSS é incrível para estilizar suas páginas!",
    "JavaScript dá vida aos seus projetos!",
    "Não esqueça de praticar todos os dias!",
    "Você está indo muito bem!",
    "Programação é como um superpoder!",
    "Vamos continuar aprendendo juntos?",
    "Tente completar um desafio hoje!",
  ]

  const handleMascotClick = () => {
    // Get random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    setSpecchText(randomMessage)

    // Show speech bubble
    setShowSpeech(true)

    // Hide after 4 seconds
    setTimeout(() => {
      setShowSpeech(false)
    }, 4000)
  }

  return (
    <div className="mascot-speech-container">
      <Mascot onClick={handleMascotClick} />

      {/* Speech bubble */}
      <div ref={speechRef} className={`speech-bubble ${showSpeech ? "visible" : ""}`}>
        <p>{speechText}</p>
      </div>

      <style jsx>{`
        .mascot-speech-container {
          position: relative;
          width: 200px;
          height: 250px;
          margin: 0 auto;
        }
        
        .speech-bubble {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateY(-100%);
          background-color: white;
          border-radius: 20px;
          padding: 10px 15px;
          min-width: 200px;
          max-width: 250px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: 10;
        }
        
        .speech-bubble:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid white;
        }
        
        .speech-bubble.visible {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(-110%);
        }
        
        .speech-bubble p {
          margin: 0;
          font-size: 14px;
          color: #333;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default MascotWithSpeech
