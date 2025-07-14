"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  type: string;
  description?: string;
}

const TIPOLOGIE = [
  { key: "antipasto", label: "Antipasti" },
  { key: "primo", label: "Primi" },
  { key: "secondo", label: "Secondi" },
  { key: "dolce", label: "Dolci" },
];

export default function MenuPage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-2 mt-8">Menu Bio</h1>
        <p className="text-center text-green-900/80 mb-10 text-lg">Ingredienti selezionati, stagionalità e creatività per un’esperienza unica e naturale.</p>

        {loading ? (
          <div className="text-center text-gray-500 py-12">Caricamento menu...</div>
        ) : (
          <AnimatePresence>
            {TIPOLOGIE.map(({ key, label }, idx) => {
              const items = menu.filter((item) => item.type.toLowerCase() === key);
              if (items.length === 0) return null;
              return (
                <motion.section
                  key={key}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="mb-10"
                >
                  <h2 className="text-xl font-bold text-green-700 mb-4 border-b border-green-200 pb-1 tracking-wide uppercase letter-spacing-[0.05em]">{label}</h2>
                  <ul className="space-y-4">
                    <AnimatePresence>
                      {items.map((item, i) => (
                        <motion.li
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          <Card className="bg-green-50/80 hover:shadow-lg transition-shadow">
                            <CardContent className="p-4 flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                              <div className="flex-1">
                                <span className="font-bold text-green-900 text-lg block mb-1">{item.name}</span>
                                {item.description && (
                                  <span className="block text-gray-600 text-sm italic mb-1">{item.description}</span>
                                )}
                              </div>
                              <span className="font-bold text-green-700 text-lg mt-2 sm:mt-0">€ {item.price}</span>
                            </CardContent>
                          </Card>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </motion.section>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
