import { SearchBar } from "./components"
// import Image from "next/image";

const Hero = () => {

    return (
        <>
            <main className="h-full w-full  bg-white"> 
               <h1 className="text-7xl text-center font-bold font-sans text-green-900">
               Build & Sell Projects
               </h1>
            <SearchBar />
            </main>
        </>
    )

}

export default Hero