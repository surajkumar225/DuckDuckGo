import Link from "next/link";
// import Image from "next/image";
import { GiHamburgerMenu, } from 'react-icons/gi';
import { AiFillTwitterSquare, } from 'react-icons/ai';
import { FaReddit } from 'react-icons/fa';
import { FaBloggerB } from 'react-icons/fa';
import { PiNewspaperLight } from 'react-icons/pi';

const Header: React.FC = () => {
    const url: string = "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
    
    return (
        <div className="flex justify-end tex-sm pr-4 pt-3 space-x-4 items-center">
            {/* <Link href='https://gmail.com' className="hover:underline text-sm">Gmail</Link> */}
            <Link href='https://twitter.com'> <AiFillTwitterSquare className="text-xl text-cyan-500"/> </Link>
            <Link href='https://www.reddit.com/r/duckduckgo/'><FaReddit className="text-xl text-orange-500"/> </Link>
            <Link href="https://spreadprivacy.com/"><FaBloggerB className="text-xl text-blue-400"/> </Link>
            <Link href="https://duckduckgo.com/newsletter"><PiNewspaperLight className="text-2xl text-orange-600"/></Link>
            <GiHamburgerMenu className="text-4xl hover:bg-amber-400 p-2 rounded-full" />
          
        </div>
    )
}

export default Header;