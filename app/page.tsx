"use client";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white pt-16">
      {/* HERO VIDEO FULLSCREEN DESKTOP, PIU' BASSO SU MOBILE */}
      <div className="relative w-screen overflow-hidden">
        {/* Pulsante Menu centrato in basso sopra il video */}
        <a
          href="/menu"
          className="absolute left-1/2 bottom-10 -translate-x-1/2 bg-white/90 text-gray-900 font-semibold text-lg md:text-xl w-[150px] h-[72px] md:w-[150px] md:h-[72px] rounded-xl shadow-md flex items-center justify-center transition hover:bg-yellow-300 hover:text-yellow-900 focus-visible:bg-yellow-300 focus-visible:text-yellow-900 active:bg-yellow-300 active:text-yellow-900 z-20 max-md:w-[90vw] max-md:h-12 max-md:text-base"
        >
          Menu
        </a>
        <video
          src="/chef-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-screen object-cover bg-white block
            h-[calc(100vh-64px)] max-md:h-[60vw]"
        />
      </div>

      {/* Stelle Michelin animate */}
      <div className="flex justify-center gap-4 mt-6">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            className="animate-pulse drop-shadow-[0_0_8px_gold]"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="gold"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="24,3 29,18 45,18 32,28 37,43 24,34 11,43 16,28 3,18 19,18" />
          </svg>
        ))}
      </div>

      {/* Sezione Chef Privato */}
      <section className="mx-auto max-w-3xl text-center mt-12 px-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">Il tuo Chef Privato a Casa</h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Esperienza stellata direttamente nella tua cucina: menu personalizzati, ingredienti selezionati, servizio esclusivo.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-100 rounded-xl shadow p-5 w-60 flex flex-col items-center animate-fadeInUp">
            {/* Cappello da chef */}
            <svg className="mb-3 animate-bounce" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="24" cy="20" rx="16" ry="10" fill="#fff" stroke="#222" strokeWidth="2"/>
              <rect x="14" y="28" width="20" height="8" rx="4" fill="#fff" stroke="#222" strokeWidth="2"/>
            </svg>
            <div className="font-semibold text-base mb-1 text-black">Cucina a domicilio</div>
            <div className="text-gray-700 text-sm">Porto l’alta cucina direttamente a casa tua.</div>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-100 rounded-xl shadow p-5 w-60 flex flex-col items-center animate-fadeInUp">
            {/* Piatto gourmet */}
            <svg className="mb-3 animate-bounce" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="28" r="12" fill="#fff" stroke="#222" strokeWidth="2"/>
              <circle cx="24" cy="28" r="4" fill="#ffe082" />
            </svg>
            <div className="font-semibold text-base mb-1 text-black">Menu personalizzati</div>
            <div className="text-gray-700 text-sm">Creo piatti su misura per ogni occasione.</div>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-100 rounded-xl shadow p-5 w-60 flex flex-col items-center animate-fadeInUp">
            {/* Casa */}
            <svg className="mb-3 animate-bounce" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="22" width="24" height="14" fill="#fff" stroke="#222" strokeWidth="2"/>
              <polygon points="24,10 8,24 40,24" fill="#ffe082" stroke="#222" strokeWidth="2"/>
            </svg>
            <div className="font-semibold text-base mb-1 text-black">Esperienza esclusiva</div>
            <div className="text-gray-700 text-sm">Un servizio dedicato solo a te e ai tuoi ospiti.</div>
          </div>
        </div>
      </section>

      {/* Bottone WhatsApp fisso in basso a destra */}
      <a
        href="https://wa.me/3512090347"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 shadow-lg rounded-full transition hover:scale-110 w-14 h-14 max-md:w-12 max-md:h-12 flex items-center justify-center bg-white"
        aria-label="Chatta su WhatsApp"
      >
        <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-10 h-10 max-md:w-8 max-md:h-8" />
      </a>

      {/* Carousel recensioni elegante */}
      <ReviewsCarousel />
    </div>
  );
}

// Carousel recensioni elegante
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Giulia R.",
    text: "Esperienza indimenticabile! Piatti raffinati e servizio impeccabile. Simone ha reso la nostra serata speciale.",
    city: "Napoli",
    rating: 5,
  },
  {
    name: "Marco B.",
    text: "Cucina creativa, ingredienti freschissimi e attenzione ai dettagli. Consigliatissimo!",
    city: "Caserta",
    rating: 5,
  },
  {
    name: "Elena F.",
    text: "Un vero chef privato: menu personalizzato, atmosfera rilassata e sapori sorprendenti.",
    city: "Milano",
    rating: 4,
  },
  {
    name: "Luca S.",
    text: "Simone ha portato l’alta cucina a casa nostra. Professionalità e passione in ogni piatto.",
    city: "Roma",
    rating: 5,
  },
  {
    name: "Francesca D.",
    text: "Serata perfetta! Dall’antipasto al dolce, tutto curato nei minimi dettagli. Da ripetere!",
    city: "Bologna",
    rating: 4,
  },
];

function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setFade(false);
    const fadeTimeout = setTimeout(() => setFade(true), 100); // trigger fade-in
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFade(false);
      setTimeout(() => setIndex((prev) => (prev + 1) % reviews.length), 300); // fade-out before change
    }, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(fadeTimeout);
    };
  }, [index]);

  return (
    <div className="w-full flex justify-center mt-20 mb-8">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center transition-all duration-500 min-h-[230px]">
        <div className="flex flex-col items-center mb-2">
          <div className="flex justify-center gap-1">
            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
          </div>
          <div className="flex justify-center">
            <svg className="w-8 h-8 text-yellow-400 mt-[-10px]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
          </div>
        </div>
        <strong><h1 className="text-black">Recensioni</h1></strong>
        <div className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`} style={{ minHeight: 110 }}>
          <p className="text-lg text-gray-800 italic text-center mb-4">“{reviews[index].text}”</p>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-green-800 flex items-center gap-2">
              {reviews[index].name}
              <span className="flex">
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                ))}
              </span>
            </span>
            <span className="text-sm text-gray-500">{reviews[index].city}</span>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 rounded-full transition-all duration-300 ${i === index ? "bg-yellow-400" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
