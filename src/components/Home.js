import React from "react"
import image from "../73357.jpg"
export default function Home() {
  return (
    <main className="h-full flex items-center px-6 lg:px-32 bg-purple-900">
      <img src={image} alt="Vapor" className="absolute object-cover lg:w-full lg:h-full"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="libre text-6xl text-green-100 font-bold leading-none lf:leading-snug home-name"> Welcome! </h1>
      </section>
    </main>
  )
}