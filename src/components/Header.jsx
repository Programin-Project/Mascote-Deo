"use client"
import { Brain, Menu } from "lucide-react"
import Logo from "./Logo"

const Header = ({ toggleDrawer }) => {
  return (
    <header className="bg-primary-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center relative">
          <button
            className="flex items-center space-x-2 bg-primary-700 hover:bg-primary-800 px-4 py-2 rounded-md transition-colors"
            aria-label="Aprenda com a IA"
          >
            <Brain size={20} className="text-accent-300" />
            <span>Aprenda com a IA</span>
          </button>

          {/* Replaced the text with the Logo component */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Logo />
          </div>

          <button
            className="p-2 rounded-md hover:bg-primary-700 transition-colors"
            onClick={toggleDrawer}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
