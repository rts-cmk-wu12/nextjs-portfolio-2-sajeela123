import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
 
export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex items-center justify-center gap-1">
          <p className="text-sm flex items-center">
            Made with <BsHeartFill size={18} color="red" bg="red" className="ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}
 