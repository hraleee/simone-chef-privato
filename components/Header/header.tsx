"use client";
import { useState, useEffect } from "react";
import { } from "lucide-react";
import {
  UsersIcon,
  LayoutDashboardIcon,
  MessageCircleIcon,
  XIcon,
  MenuIcon
} from "lucide-react";

const navMain = [
  { title: "Home", url: "/", icon: LayoutDashboardIcon },
  { title: "Chi siamo", url: "/chi-siamo", icon: UsersIcon },
  { title: "Contattaci", url: "/contattaci", icon: MessageCircleIcon },
];

export default function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  // Quando apri la sidebar, prima rendila visibile e dopo pochi ms attiva l’animazione
  const openSidebar = () => {
    setSidebarVisible(true);
    setTimeout(() => setSidebarActive(true), 10); // piccolo delay per trigger animazione
  };

  // Quando chiudi la sidebar, disattiva animazione e poi nascondi il DOM
  const closeSidebar = () => {
    setSidebarActive(false);
  };

  // Quando animazione finisce e sidebar non attiva, nascondi il DOM
  useEffect(() => {
    if (!sidebarActive && sidebarVisible) {
      const timeout = setTimeout(() => setSidebarVisible(false), 300); // durata animazione
      return () => clearTimeout(timeout);
    }
  }, [sidebarActive, sidebarVisible]);

  return (
    <>
      {/* HEADER */}
      <header className="bg-green-500 text-white flex items-center justify-between p-4">
        <div className="text-lg font-bold">Logo</div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8">
          {navMain.map(({ title, url, icon: Icon }) => (
            <a
              key={title}
              href={url}
              className="flex items-center space-x-1 hover:text-gray-300"
            >
              <Icon className="w-5 h-5" />
              <span>{title}</span>
            </a>
          ))}
        </nav>

        {/* Bottone menu mobile */}
        <button
          className="md:hidden p-2 bg-white text-green-500 rounded"
          onClick={openSidebar}
          aria-label="Apri menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </header>

      {/* SIDEBAR MOBILE CON ANIMAZIONE SLIDE */}
      {sidebarVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex">
          <aside
            className={`bg-white w-full p-6 relative transform transition-transform duration-300 ease-in-out
            ${sidebarActive ? "translate-x-0" : "translate-x-full"}`}
            style={{ willChange: "transform" }}
          >
            <button
              className="absolute top-4 right-4 p-2"
              onClick={closeSidebar}
              aria-label="Chiudi menu"
            >
              <XIcon className="w-6 h-6" />
            </button>

            <nav className="flex flex-col space-y-4 mt-10">
              {navMain.map(({ title, url, icon: Icon }) => (
                <a
                  key={title}
                  href={url}
                  className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
                  onClick={closeSidebar}
                >
                  <Icon className="w-5 h-5" />
                  <span>{title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Cliccando fuori chiude sidebar */}
          <div className="flex-1" onClick={closeSidebar} aria-hidden="true" />
        </div>
      )}
    </>
  );
}
