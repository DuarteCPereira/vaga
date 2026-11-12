import { Logo } from './Logo'
import { BookingDemo } from './BookingDemo'

export function Header() {
  return (
    <header id="topo" className="on-night">
      <div className="container">
        <nav className="nav" aria-label="Principal">
          <a href="#topo" aria-label="Vaga, início" style={{ textDecoration: 'none' }}>
            <Logo />
          </a>
          <div className="nav__links">
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#planos">Planos</a>
            <a href="#perguntas">Perguntas</a>
          </div>
          <div className="nav__actions">
            <a className="vg-btn vg-btn--on-night" href="#entrar">Entrar</a>
            <a className="vg-btn vg-btn--accent" href="#planos">Criar página</a>
          </div>
        </nav>

        <div className="hero">
          <div className="hero__copy">
            <p className="eyebrow muted">Marcações online para barbearias e restaurantes</p>
            <h1 className="display-xxl">Menos telefonemas. Mais marcações.</h1>
            <p className="body-lg muted">
              A Vaga dá ao teu negócio uma página de marcações simples. Os clientes escolhem a hora em poucos
              toques, sem instalar nada, e tu recebes tudo na agenda.
            </p>
            <a className="vg-btn vg-btn--on-night vg-btn--lg" href="#planos">Criar a minha página</a>
          </div>
          <BookingDemo />
        </div>
      </div>
    </header>
  )
}
