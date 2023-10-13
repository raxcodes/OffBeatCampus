import Link from 'next/link';
import { SearchBar } from './components'
const Navbar = () => {
    return (
        <nav className="bg-slate-900
                flex
                 shadow-lg
                 py-3
                 px-9
                 justify-between
                align-text-bottom">
            <h2 className="
                 logo
                text-white
                 text-xl
                 font-bold
                 cursor-pointer
            ">Off Beat Campus</h2>
            <ul className='flex space-x-10 text-white-400 font-bold'>
                <li className='hover:text-slate-300'><Link href="#">Home</Link></li>
                <li className='hover:text-slate-300'><Link href="#">Explore</Link></li>
                <li className='hover:text-slate-300'><Link href="#">About</Link></li>
                <li className='hover:text-slate-300'><Link href="#">Contact</Link></li>
            </ul>

            <button
                type="button"
                class="boder bg-gradient-to-r
                from-green-400 to-blue-400
                hover:from-blue-500
                hover:to-green-500
                px-5 py-1 rounded-xl
                font-bold
                text-center">
                Join
            </button>
        </nav>
    )
}

export default Navbar