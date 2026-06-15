import React from 'react'

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="mystery-glitch">Franki Astral</h1>
        <p className="motto">Inspirado en hechos imposibles</p>
      </header>

      <section id="audio-release">
        <div className="card">
          <h3>Nido de ratas V1</h3>
          <p style={{marginBottom: '1rem', opacity: 0.6}}>Frecuencia alterada.</p>
          <div className="audio-player" style={{marginBottom: '1rem'}}>
            <audio controls>
              <source src="/nido_ratas_alter.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <a 
            href="/nido_ratas_alter.mp3" 
            download="Franki Astral - Nido de ratas v1.mp3"
            style={{
              color: 'var(--accent-color)', 
              textDecoration: 'none', 
              fontSize: '0.8rem',
              border: '1px solid var(--accent-color)',
              padding: '0.4rem 0.8rem',
              display: 'inline-block'
            }}
          >
            [ DESCARGAR ARCHIVO ]
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 ARCHITECT | ENCRYPTED CONNECTION</p>
      </footer>
    </div>
  )
}

export default App
