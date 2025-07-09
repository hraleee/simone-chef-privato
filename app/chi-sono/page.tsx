"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-white pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Hero con foto chef */}
        <div className="flex flex-col items-center mt-8 mb-8">
          <img
            src="/icona-chef.png"
            alt="Simone Private Chef"
            className="w-32 h-32 rounded-full shadow-lg border-4 border-green-200 object-cover mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-1">SimonePrivateChef</h1>
          <p className="text-gray-600 text-lg mb-2 italic">La vera cucina del confort</p>
        </div>

        {/* Bio */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-black mb-3">Chi sono</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Ciao! Sono Simone Stramazzo</strong>, chef privato.<br/>
            La mia passione per la cucina è nata da un vero <strong>colpo di fulmine</strong> guardando un programma TV. Nessuna storia di nonne o mamme: solo tanta curiosità e voglia di scoprire la <strong>magia</strong> che c’è dietro ogni piatto.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Ho studiato all’Alberghiero, lavorato in brigata, superato ostacoli e trasformato le difficoltà in nuove opportunità. Oggi porto l’alta cucina direttamente a casa tua, con semplicità e passione.
          </p>
          <img
            src="/chef-img.avif"
            alt="Simone in cucina"
            className="w-full max-h-64 object-cover rounded-xl shadow mb-2"
          />
          <p className="text-green-900 text-base italic text-center mb-4">
            Questo sono io: timido, determinato, con il sogno di raccontare la mia cucina attraverso il <strong>nostro territorio</strong>.<br/>
            Persone, cibo, passione. Tutto qui.
          </p>
        </section>

        {/* Valori */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-black mb-3">I miei valori</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="bg-gray-100 rounded-xl p-5 flex flex-col items-center shadow">
              <svg className="mb-2 text-green-700" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7" /></svg>
              <span className="font-semibold text-black mb-1">Sostenibilità</span>
              <span className="text-gray-700 text-sm text-center">Scelgo solo ingredienti biologici e a km zero, rispettando la stagionalità.</span>
            </li>
            <li className="bg-gray-100 rounded-xl p-5 flex flex-col items-center shadow">
              <svg className="mb-2 text-green-700" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" /></svg>
              <span className="font-semibold text-black mb-1">Passione</span>
              <span className="text-gray-700 text-sm text-center">Ogni piatto nasce dall’amore per la cucina e dalla voglia di sorprendere.</span>
            </li>
            <li className="bg-gray-100 rounded-xl p-5 flex flex-col items-center shadow">
              <svg className="mb-2 text-green-700" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="font-semibold text-black mb-1">Qualità</span>
              <span className="text-gray-700 text-sm text-center">Solo materie prime eccellenti e tecniche raffinate per risultati indimenticabili.</span>
            </li>
          </ul>
        </section>

        {/* Esperienza */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-black mb-3">Esperienza</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Executive Chef presso "La Stella Verde" (Milano)</li>
            <li>Sous Chef in ristoranti stellati in Francia e Giappone</li>
            <li>Consulente per eventi privati e cene esclusive</li>
            <li>Formatore in corsi di cucina bio e sostenibile</li>
          </ul>
        </section>

        {/* Call to action */}
        <div className="text-center mt-12">
          <a
            href="contattami"
            className="inline-block bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-yellow-300 hover:text-yellow-900 focus-visible:bg-yellow-300 focus-visible:text-yellow-900 active:bg-yellow-300 active:text-yellow-900 transition"
          >
            Contattami per una consulenza gratuita
          </a>
        </div>
      </div>
    </div>
  );
}