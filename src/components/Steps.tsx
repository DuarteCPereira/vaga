const STEPS = [
  { title: 'Cria a tua página', text: 'Indica os serviços, os horários e quem atende. A página fica pronta a receber marcações.' },
  { title: 'Partilha o link', text: 'No Instagram, no WhatsApp ou no Google. Os clientes marcam no navegador, sem instalar nenhuma app.' },
  { title: 'Recebe as marcações', text: 'Cada marcação entra na agenda e no calendário, no teu e no do cliente.' },
]

export function Steps() {
  return (
    <section className="container section section--tight-bottom" aria-labelledby="passos-titulo">
      <h2 id="passos-titulo" className="display-lg">Pronto em três passos</h2>
      <ol className="steps">
        {STEPS.map((step, i) => (
          <li key={step.title} className="step">
            <span className="step__num" aria-hidden="true">{i + 1}</span>
            <h3 className="heading-md">{step.title}</h3>
            <p className="muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
