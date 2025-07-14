"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  { key: "antipasto", label: "Antipasto" },
  { key: "primo", label: "Primo" },
  { key: "secondo", label: "Secondo" },
  { key: "dolce", label: "Dolce" },
];

const MOCK_USER = {
  username: "admin",
  password: "12341234",
};

export default function AdminPage() {
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [addForm, setAddForm] = useState({ name: "", price: "", type: "antipasto", description: "" });
  const [addError, setAddError] = useState("");
  const [addLoading, setAddLoading] = useState(false);

  // Login mockato
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      setLogged(true);
      setError("");
    } else {
      setError("Credenziali non valide");
    }
  }

  // Fetch menu
  useEffect(() => {
    if (!logged) return;
    setLoading(true);
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, [logged]);

  // Modifica piatto
  async function handleSave(item: MenuItem) {
    if (!item.name.trim() || isNaN(item.price) || item.price < 0) return;
    setSavingId(item.id);
    await fetch(`/api/menu/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: item.name,
        price: item.price,
        type: item.type,
        description: item.description,
      }),
    });
    setSavingId(null);
  }

  // Elimina piatto
  async function handleDelete(id: string) {
    setDeletingId(id);
    await fetch(`/api/menu/${id}`, { method: "DELETE" });
    setMenu(menu.filter((item) => item.id !== id));
    setDeletingId(null);
  }

  // Aggiungi nuovo piatto
  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setAddError("");
    if (!addForm.name.trim() || isNaN(Number(addForm.price)) || Number(addForm.price) < 0) {
      setAddError("Nome e prezzo validi obbligatori");
      return;
    }
    setAddLoading(true);
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: addForm.name,
        price: Number(addForm.price),
        type: addForm.type,
        description: addForm.description,
      }),
    });
    const newItem = await res.json();
    setMenu([...menu, newItem]);
    setAddForm({ name: "", price: "", type: "antipasto", description: "" });
    setAddLoading(false);
  }

  if (!logged) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <AnimatePresence>
          <motion.form
            key="login"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleLogin}
            className="bg-white p-8 rounded-xl shadow max-w-xs w-full flex flex-col gap-4"
          >
            <h1 className="text-2xl font-bold text-center text-green-800 mb-2">Login Admin</h1>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoFocus
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {error && <div className="text-red-600 text-base text-center font-bold">{error}</div>}
            <Button type="submit" className="font-bold">Accedi</Button>
          </motion.form>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-8 mt-8">Gestione Menu</h1>
        {/* Form aggiunta nuovo piatto */}
        <Card className="mb-8">
          <CardContent className="p-4 flex flex-col sm:flex-row sm:items-end gap-4">
            <form onSubmit={handleAdd} className="w-full flex flex-col sm:flex-row sm:items-end gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <Input
                  type="text"
                  placeholder="Nome piatto"
                  value={addForm.name}
                  onChange={e => setAddForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
                <Input
                  type="number"
                  min={0}
                  step={0.01}
                  placeholder="Prezzo"
                  value={addForm.price}
                  onChange={e => setAddForm(f => ({ ...f, price: e.target.value }))}
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <Select value={addForm.type} onValueChange={val => setAddForm(f => ({ ...f, type: val }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIPOLOGIE.map(t => <SelectItem key={t.key} value={t.key}>{t.label}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Descrizione"
                  value={addForm.description}
                  onChange={e => setAddForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
              <Button type="submit" className="min-w-[120px] font-bold" disabled={addLoading}>
                {addLoading ? "Aggiunta..." : "Aggiungi"}
              </Button>
            </form>
          </CardContent>
        </Card>
        {addError && <div className="text-red-600 text-base mb-4 text-center font-bold">{addError}</div>}
        {loading ? (
          <div className="text-center text-gray-500 py-12">Caricamento menu...</div>
        ) : (
          <ul className="space-y-4">
            <AnimatePresence>
              {menu.map((item, idx) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Card className="bg-green-50">
                    <CardContent className="p-4 flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                      <div className="flex-1 flex flex-col gap-1">
                        <Input
                          type="text"
                          className="font-bold"
                          value={item.name}
                          onChange={e => setMenu(menu.map(m => m.id === item.id ? { ...m, name: e.target.value } : m))}
                        />
                        <Input
                          type="text"
                          className="text-sm font-semibold"
                          value={item.description || ""}
                          onChange={e => setMenu(menu.map(m => m.id === item.id ? { ...m, description: e.target.value } : m))}
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-2">
                        <Input
                          type="number"
                          min={0}
                          step={0.01}
                          className="w-20 text-right font-bold"
                          value={isNaN(item.price) ? "" : item.price}
                          onChange={e => {
                            const val = parseFloat(e.target.value);
                            setMenu(menu.map(m => m.id === item.id ? { ...m, price: isNaN(val) ? 0 : val } : m));
                          }}
                        />
                        <Select value={item.type} onValueChange={val => setMenu(menu.map(m => m.id === item.id ? { ...m, type: val } : m))}>
                          <SelectTrigger className="font-semibold">
                            <SelectValue placeholder="Tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            {TIPOLOGIE.map(t => <SelectItem key={t.key} value={t.key}>{t.label}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <Button
                          onClick={() => handleSave(item)}
                          disabled={savingId === item.id}
                          className="font-bold"
                        >
                          {savingId === item.id ? "Salvataggio..." : "Salva"}
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(item.id)}
                          disabled={deletingId === item.id}
                          className="font-bold"
                        >
                          {deletingId === item.id ? "Eliminazione..." : "Elimina"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>
    </div>
  );
} 