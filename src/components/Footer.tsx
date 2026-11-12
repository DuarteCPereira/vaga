import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="on-night">
      <div className="container cta">
        <h2 className="display-xl">Abre a agenda. Nós tratamos das vagas.</h2>
        <a className="vg-btn vg-btn--on-night vg-btn--lg" href="#planos">Criar a minha página</a>
      </div>
      <div className="container footer-bar">
        <Logo size="sm" />
        <nav className="footer-bar__links caption" aria-label="Rodapé">
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#planos">Planos</a>
          <a href="#perguntas">Perguntas</a>
          <a href="#privacidade">Privacidade</a>
          <a href="#termos">Termos</a>
        </nav>
        <p className="caption muted">© {new Date().getFullYear()} Vaga</p>
      </div>
    </footer>
  )
}
