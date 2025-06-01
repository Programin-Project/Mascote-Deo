"use client"

import Logo from "../components/Logo"
import Header from "../components/Header"
import "./globals.css"

export default function Page() {
  const toggleDrawer = () => {
    // Placeholder function for toggling the drawer
    alert("Drawer toggle function not implemented.")
  }

  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Programin!</h1>
        <p className="mb-4">This is a simple landing page.</p>
        <Logo />
      </main>
    </div>
  )
}
