import React from "react"
import image from "../73357.jpg"
export default function Home() {
  return (
    <main>
      <img src={image} className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="libre text-6xl text-green-100 font-bold leading-none lf:leading-snug home-name"> Yash! </h1>
      </section>
    </main>
  )
}