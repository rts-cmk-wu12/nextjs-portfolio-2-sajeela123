'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, mobile, message });
  };

  return (
    <>
     <Header /> 
    <section className="w-full h-[87vh] bg-black text-white px-6 py-10">
  

      {/* Header and Form */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-300 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-600 text-black bg-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Mobile</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile"
              className="w-full px-4 py-2 rounded-md border border-gray-600 text-black bg-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-gray-600 text-black bg-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-green-500 text-black font-semibold hover:bg-green-400 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
    <Footer />
    </>
  );
}
