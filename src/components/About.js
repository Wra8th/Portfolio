import React, {useEffect, useState }from "react"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "../client"
import vapor from "../73359.jpg"


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
  return builder.image(source)
}


export default function About() {
  
const [ author , setAuthor] =useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type=="author"]{
      name,
      bio,
      image,
      "authorImage": image.asset -> url
    }`)
    .then((data) => setAuthor(data[0]))
    .catch(console.error);
  } , []);


if(!author) return <div>not available</div>

return(
  <main className="relative">
    <section>
    <div>
    <img src={vapor} alt ="vaporwave" className="absolute object-cover h-full w-full"/>
    <div className="p-10 lg:pt-48 container mx-auto relative">
      <img src ={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name}/>
      <div className="text-lg flex flex-col justify-center">
        <h1 className="text-2xl text-green-300 mb-4 libre">Yash Lodhiya</h1>
      <div className="prose lg:prose-xl text-white">
        <BlockContent blocks={author.bio} projectId="66f2s6kq" dataset="production"/>
        </div>
      </div>
      </div>
    </div>
    </section>
  </main>
)}