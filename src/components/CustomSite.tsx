export function CustomSite() {
  return (
    <section className="band" aria-labelledby="site-titulo">
      <div className="container band__inner">
        <div className="band__copy">
          <span className="vg-tag vg-tag--ink eyebrow">Plano Profissional</span>
          <h2 id="site-titulo" className="display-md">Um site com a cara do teu negócio</h2>
          <p className="body-lg">
            Escolhe um modelo, põe o teu logótipo, as tuas cores e as tuas fotografias, e liga o teu domínio.
            As marcações ficam dentro do teu site.
          </p>
        </div>
        <figure className="browser" style={{ margin: 0 }} aria-label="Exemplo de site personalizado">
          <div className="browser__url">barbeariadobairro.pt</div>
          <div className="browser__page on-night">
            <p className="browser__title">Barbearia do Bairro</p>
            <p className="caption muted">Cortes clássicos no centro da cidade</p>
            <span className="browser__cta">Marcar agora</span>
          </div>
        </figure>
      </div>
    </section>
  )
}
