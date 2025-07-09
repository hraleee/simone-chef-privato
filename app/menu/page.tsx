"use client";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-2 mt-8">Menu Bio</h1>
        <p className="text-center text-green-900/80 mb-10 text-lg">Ingredienti selezionati, stagionalità e creatività per un’esperienza unica e naturale.</p>

        {/* Antipasti */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-1">Antipasti</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Tartare di avocado e lime</span>
              <span className="font-semibold text-green-700">€ 10</span>
            </li>
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Crostino integrale con hummus di ceci bio</span>
              <span className="font-semibold text-green-700">€ 8</span>
            </li>
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Insalatina di stagione con semi tostati</span>
              <span className="font-semibold text-green-700">€ 9</span>
            </li>
          </ul>
        </section>

        {/* Primi */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-1">Primi</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Risotto al basilico e limone bio</span>
              <span className="font-semibold text-green-700">€ 14</span>
            </li>
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Tagliolini integrali con crema di zucchine</span>
              <span className="font-semibold text-green-700">€ 13</span>
            </li>
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Vellutata di piselli e menta</span>
              <span className="font-semibold text-green-700">€ 12</span>
            </li>
          </ul>
        </section>

        {/* Secondi */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-1">Secondi</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Burger di ceci e spinaci con salsa allo yogurt</span>
              <span className="font-semibold text-green-700">€ 15</span>
            </li>
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Tofu grigliato con verdure di campo</span>
              <span className="font-semibold text-green-700">€ 14</span>
            </li>
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Polpette di quinoa e carote</span>
              <span className="font-semibold text-green-700">€ 13</span>
            </li>
          </ul>
        </section>

        {/* Dolci */}
        <section>
          <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-1">Dolci</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Mousse di cioccolato fondente bio</span>
              <span className="font-semibold text-green-700">€ 7</span>
            </li>
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Cheesecake al limone e semi di papavero</span>
              <span className="font-semibold text-green-700">€ 8</span>
            </li>
            <li className="flex justify-between items-center bg-green-50 rounded-lg p-4 shadow-sm">
              <span className="font-medium text-green-900">Crumble di mele e avena</span>
              <span className="font-semibold text-green-700">€ 7</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
