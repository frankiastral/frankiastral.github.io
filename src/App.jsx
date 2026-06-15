import React from 'react'

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="mystery-glitch">
          Franki Astral
          <span aria-hidden="true">Franki Astral</span>
          <span aria-hidden="true">Franki Astral</span>
        </h1>
        <p className="motto">Inspirado en hechos imposibles</p>
      </header>

      <section id="audio-release">
        <div className="card">
          <h3>Nido de ratas V1</h3>
          <p style={{marginBottom: '1rem', opacity: 0.4, fontSize: '0.7rem', fontFamily: 'Orbitron'}}>ENCRYPTED_SIGNAL_STREAM</p>
          <div className="audio-player" style={{marginBottom: '1rem'}}>
            <audio controls>
              <source src="/nido_ratas_alter.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <a 
            href="/nido_ratas_alter.mp3" 
            download="Franki Astral - Nido de ratas v1.mp3"
            className="download-btn"
          >
            [ EXTRACCION DE DATOS ]
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 ARCHITECT | ENCRYPTED CONNECTION | NODE: ASTRAL_01</p>
      </footer>
    </div>
  )
}

export default App
