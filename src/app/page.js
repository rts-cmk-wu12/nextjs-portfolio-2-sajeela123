import Image from "next/image";
import Link from "next/link";
import Header from './components/Header';
import Footer from './components/Footer';
export default function Home() {
  return (
    <main>
        <Header />
      <section className=" text-gray-900 py-25  bg-black w-full h-[87vh] ">
      
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around px-8  py-8">
          <div className="md:w-1/2 text-center md:text-left space-y-6" >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white " >
              Amina
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Hej, jeg hedder Amina og er studerende på Center for Medie og
              Kommunikation (CMK) på Roskilde Tekniske Skole. Jeg fokuserer på
              at bygge kreative og brugervenlige websites, og jeg nyder at
              arbejde med både de visuelle og tekniske aspekter af webudvikling.
            </p>
            <button className=" bg-green-600 text-white px-19 py-3 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
          <div className="md:w-1/3 mt-10 md:mt-0">
            <Image
              src="/amina.png"
              width={200}
              height={100}
              className="w-full h-auto border rounded-[50em]"
              alt="Hero"
            />
          </div>
        </div>
       
      </section>
      <Footer />
    </main>
  );
}
