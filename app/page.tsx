"use client"

export default function Home() {
  return (
    <>
      <style>{`
        .hero-container {
          width: 100vw;
          max-width: 100vw;
          margin: 0;
          position: relative;
        }
        .hero-video {
          width: 100vw;
          height: calc(100vh - 64px); /* 64px = altezza header */
          background: #fff;
          object-fit: cover;
          display: block;
        }
        .hero-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: unset;
          margin-top: 0;
        }
        .michelin-stars {
          margin-top: 24px;
        }
        .sparkle-star {
          filter: drop-shadow(0 0 8px gold);
          animation: sparkle 1.5s infinite linear;
        }
        @keyframes sparkle {
          0% { filter: drop-shadow(0 0 8px gold) brightness(1); }
          50% { filter: drop-shadow(0 0 24px gold) brightness(1.5); }
          100% { filter: drop-shadow(0 0 8px gold) brightness(1); }
        }
        .whatsapp-fab {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 1000;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
          border-radius: 50%;
          transition: transform 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .whatsapp-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 24px rgba(0,0,0,0.22);
        }
        .menu-btn {
          position: absolute;
          left: 50%;
          bottom: 40px;
          transform: translateX(-50%);
          background: rgba(255,255,255,0.92);
          color: #222;
          font-size: 1.25rem;
          font-weight: 600;
          width: 150px;
          height: 72px;
          padding: 0;
          border: none;
          
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
          cursor: pointer;
          transition: background 0.2s, box-shadow 0.2s;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .menu-btn:hover {
          background: #ffe082;
          box-shadow: 0 4px 24px rgba(0,0,0,0.18);
        }
        @media (max-width: 600px) {
          .hero-container {
            max-width: 100vw;
            margin: 0;
          }
          .hero-video {
            width: 100vw;
            min-width: 100vw;
            max-width: 100vw;
            height: 60vw;
          }
          .hero-main {
            min-height: unset;
            margin-top: 0;
            padding-top: 0;
          }
          .whatsapp-fab {
            right: 12px;
            bottom: 12px;
            width: 48px;
            height: 48px;
          }
          .menu-btn {
            width: 90vw;
            min-width: 0;
            max-width: 30vw;
            height: 48px;
            font-size: 1rem;
          }
        }
      `}</style>
      <div>
        <main className="hero-main">
          <div className="hero-container" style={{ position: 'relative' }}>
            {/* Pulsante Menu centrato in basso sopra il video */}
            <button className="menu-btn" onClick={() => { /* azione menu qui */ }}>
              Menu
            </button>
            <video
              src="/chef-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="hero-video"
            />
          </div>
          {/* Stelle Michelin animate */}
          <div className="michelin-stars" style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 24 }}>
            <svg className="sparkle-star" width="48" height="48" viewBox="0 0 48 48" fill="gold" xmlns="http://www.w3.org/2000/svg">
              <polygon points="24,3 29,18 45,18 32,28 37,43 24,34 11,43 16,28 3,18 19,18" />
            </svg>
            <svg className="sparkle-star" width="48" height="48" viewBox="0 0 48 48" fill="gold" xmlns="http://www.w3.org/2000/svg">
              <polygon points="24,3 29,18 45,18 32,28 37,43 24,34 11,43 16,28 3,18 19,18" />
            </svg>
            <svg className="sparkle-star" width="48" height="48" viewBox="0 0 48 48" fill="gold" xmlns="http://www.w3.org/2000/svg">
              <polygon points="24,3 29,18 45,18 32,28 37,43 24,34 11,43 16,28 3,18 19,18" />
            </svg>
          </div>
        </main>
        {/* Bottone WhatsApp fisso in basso a destra */}
        <a
          href="https://wa.me/393331234567" // Sostituisci con il numero desiderato
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-fab"
          aria-label="Chatta su WhatsApp"
        >
          <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" width="56" height="56" style={{ display: 'block' }} />
        </a>
      </div>
    </>
  );
}
