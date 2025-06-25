// components/Header.jsx

/*import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 py-8  flex justify-between items-center ">
      <div className=" text-white  flex text-lg font-medium">
        <nav className="flex gap-6 text-lg font-medium">
          <Link href="/">
            <span className="hover:text-green-400 cursor-pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-green-400 font-bold">About</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-green-400 font-bold">About</span>
          </Link>
        </nav>
      
      Social Icons (use emojis or replace with <Image> or <svg> icons later) 
      <div className="flex gap-4 text-xl">
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
          🔗
        </a>
        <a href="#" aria-label="Behance" className="hover:text-purple-400">
          🎨
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-sky-400">
          🐦
        </a>
      </div>
      </div>
    </header>
  );
}*/
import Link from "next/link";
import { SlSocialTwitter } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";
 
 
export default function Header() {
  return (
    <header className="bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-foreground text-white py-4  w-[1110px] h-[70px] rounded-b-lg">
        <div className="flex items-center justify-between h-16">
            <nav className="space-x-4">
          <Link href="/">
            <span className="hover:text-green-400 cursor-pointer">Home</span>
          </Link>
             <Link href="/about">
            <span className="hover:text-green-400 cursor-pointer">About</span>
          </Link>
          <Link href="/contact">
          <span className="hover:text-green-400 cursor-pointer">Contact</span>
        </Link>
          </nav>
          <div className="flex items-center gap-6">
            <FiLinkedin size={25} color="gray" />
           <SlSocialBehance size={25} color="gray"/>
 
           <SlSocialTwitter size={25} color="gray"/>
          </div>
         
        </div>
      </div>
    </header>
  );
}