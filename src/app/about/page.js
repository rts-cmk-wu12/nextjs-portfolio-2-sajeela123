// app/page.js or pages/index.js (depending on your Next.js structure)
import Footer from '../components/Footer';
import Header from '../components/Header';
export default function AboutPage() {
  return (
    <>
      <Header />
      
    <section className="w-full h-[87vh] bg-black text-white px-6 py-10 flex flex-col">
       

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center  text-center pt-2em">
        <h1 className="text-4xl font-bold mb-4">About me</h1>
        <p className="text-gray-300 leading-relaxed max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

     
 
    </section>
    <Footer />
    </>
  );
}
