"use client";
import { useState, useEffect } from "react";
import {
  UsersIcon,
  LayoutDashboardIcon,
  MessageCircleIcon,
  XIcon,
  MenuIcon
} from "lucide-react";

const navMain = [
  { title: "Home", url: "/", icon: LayoutDashboardIcon },
  { title: "Chi sono", url: "/chi-sono", icon: UsersIcon },
  { title: "Contattami", url: "/contattami", icon: MessageCircleIcon },
  { title: "Menù", url: "/menu", icon: MessageCircleIcon },
];

export default function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  const openSidebar = () => {
    setSidebarVisible(true);
    setTimeout(() => setSidebarActive(true), 10);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  };

  useEffect(() => {
    if (!sidebarActive && sidebarVisible) {
      const timeout = setTimeout(() => setSidebarVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [sidebarActive, sidebarVisible]);

  return (
    <>
      {/* HEADER FIXED */}
      <header className="fixed top-0 left-0 w-full bg-green-500 text-white flex items-center justify-between p-4 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <img src="/icona-chef.png" alt="Simone Private Chef" className="w-9 h-9 rounded-full bg-white p-1" />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold">SimonePrivateChef</span>
            <span className="text-xs text-gray-200 -mt-1">la vera cucina del confort</span>
          </div>
        </div>
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
