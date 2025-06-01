"use client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import CourseCard from "../components/CourseCard"
import Footer from "../components/Footer"
import Drawer from "../components/Drawer"
import MascotWithSpeech from "../components/MascotWithSpeech"

const Home = ({ onLogout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate()
  const courses = [
    {
      id: 1,
      title: "Aprenda HTML",
      description:
        "Domine a linguagem de marcação fundamental para a web. Aprenda a estruturar páginas, criar formulários e entender os elementos semânticos do HTML5.",
      image: "/images/html-course.png", // Imagem específica para HTML
      progress: 75, // 75% completo
      isLocked: false,
    },
    {
      id: 2,
      title: "Aprenda CSS",
      description:
        "Transforme suas páginas HTML com estilos incríveis. Aprenda layouts flexbox, grid, animações e técnicas de design responsivo para todos os dispositivos.",
      image: "/images/css-course.png", // Imagem específica para CSS
      progress: 30, // 30% completo
      isLocked: true,
    },
    {
      id: 3,
      title: "Aprenda JavaScript",
      description:
        "Dê vida às suas páginas web com interatividade. Aprenda a manipular o DOM, criar animações, validar formulários e construir aplicações dinâmicas.",
      image: "/images/javascript-course.png", // Imagem específica para JavaScript
      progress: 0, // 0% completo (não iniciado)
      isLocked: true,
    },
  ]

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} onLogout={onLogout} />

      {/* Mascot positioned in the bottom right corner */}
      <div className="fixed bottom-4 right-4 z-50">
        <MascotWithSpeech />
      </div>

      <main className="flex-grow container mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Cursos Disponíveis</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 justify-items-center">
            {courses.map((course) => (
              <div key={course.id} className="w-full flex justify-center">
                <CourseCard
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  progress={course.progress}
                  onClick={() => {
                    if (course.title === "Aprenda HTML") navigate("/trilha-html")
                    else if (course.title === "Aprenda CSS") navigate("/trilha-css")
                    else if (course.title === "Aprenda JavaScript") navigate("/trilha-javascript")
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
