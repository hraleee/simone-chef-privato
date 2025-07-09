"use client";

export default function ContattamiPage() {
  return (
    <div className="min-h-screen bg-white pt-16 pb-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-2 mt-8">Contattami</h1>
        <p className="text-center text-green-900/80 mb-8 text-lg">Per richieste, prenotazioni o informazioni, puoi usare i recapiti qui sotto o compilare il modulo.</p>

        {/* Info contatto */}
        <div className="bg-gray-100 rounded-xl shadow p-6 mb-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/whatsapp.svg" alt="WhatsApp" className="w-7 h-7" />
            <span className="font-semibold text-green-800">WhatsApp:</span>
            <a href="https://wa.me/3512090347" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-yellow-700 transition">+39 351 209 0347</a>
          </div>
          <div className="flex items-center gap-3">
            <img src="/email.svg" alt="Email" className="w-7 h-7" />
            <span className="font-semibold text-green-800">Email:</span>
            <a href="mailto:info@simoneprivatechef.it" className="text-green-700 underline hover:text-yellow-700 transition">info@simoneprivatechef.it</a>
          </div>
          <div className="flex items-center gap-3">
            <img src="/clock.svg" alt="Orari" className="w-7 h-7" />
            <span className="font-semibold text-green-800">Orari:</span>
            <span className="text-gray-700">Lun-Sab 9:00 - 20:00</span>
          </div>
        </div>

        {/* Form contatto */}
        <form className="bg-green-50 rounded-xl shadow p-6 mb-8 space-y-5">
          <div>
            <label className="block text-green-900 font-medium mb-1">Nome</label>
            <input type="text" className="w-full rounded border border-green-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Il tuo nome" />
          </div>
          <div>
            <label className="block text-green-900 font-medium mb-1">Email</label>
            <input type="email" className="w-full rounded border border-green-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="La tua email" />
          </div>
          <div>
            <label className="block text-green-900 font-medium mb-1">Messaggio</label>
            <textarea className="w-full rounded border border-green-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" rows={4} placeholder="Scrivi qui il tuo messaggio..." />
          </div>
          <button type="submit" className="w-full bg-green-700 text-white font-semibold py-3 rounded-full shadow hover:bg-yellow-300 hover:text-yellow-900 focus-visible:bg-yellow-300 focus-visible:text-yellow-900 active:bg-yellow-300 active:text-yellow-900 transition">Invia richiesta</button>
        </form>

        {/* Mappa statica e info */}
        <div className="bg-gray-100 rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 h-40 md:h-56 rounded-lg overflow-hidden shadow mb-4 md:mb-0">
            <iframe
              title="Mappa Napoli e Caserta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47144.96402405206!2d14.2375946!3d41.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b086f94b1c7b1%3A0x6e5b7b7a9c7e8b1!2sNapoli%20NA!5e0!3m2!1sit!2sit!4v1718030000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-green-800 mb-1">Dove opero</h3>
            <p className="text-gray-700 text-sm">Disponibile su Napoli e provincia, ma valuto richieste in tutta Italia per eventi speciali. Base operativa: Napoli e Caserta.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
