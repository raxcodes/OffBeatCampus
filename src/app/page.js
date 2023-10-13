'use client'
import {Hero, Explore, Footer} from "./components/components"

export default function Home() {
  return (
    <>
    {/* Navbar */}
       <div className="scroll-smooth bg-black">
       <Hero/>
       <Explore/>
       <Footer/>
       </div>
    </>
  )
}
