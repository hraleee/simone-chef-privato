
const data = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-100 py-8 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="text-lg font-semibold tracking-wide">Simone Chef Privato</div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm">
          <span>&copy; {data} Tutti i diritti riservati</span>
          <a href="/contattami" className="hover:underline hover:text-yellow-300 transition">Contattami</a>
          <a href="https://wa.me/3512090347" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-400 transition">
            <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-5 h-5 inline" /> WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
