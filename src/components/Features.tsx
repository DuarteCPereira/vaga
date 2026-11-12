const FEATURES = [
  { title: 'Página de marcações', text: 'Os clientes escolhem o serviço, o profissional e a hora a partir do telemóvel.' },
  { title: 'Lembretes por WhatsApp', text: 'Confirmação e lembrete automáticos antes da hora marcada, para haver menos faltas.' },
  { title: 'Calendário sincronizado', text: 'A marcação aparece no Google Calendar do profissional e o cliente recebe um convite.' },
  { title: 'Cancelar sem telefonar', text: 'O cliente cancela por um link e a vaga volta a ficar livre para outra pessoa.' },
  { title: 'Agenda por colaborador', text: 'Cada profissional vê o seu dia. O dono vê a equipa toda e gere serviços e horários.' },
  { title: 'Site com a tua marca', text: 'No plano Profissional, um site personalizado no teu próprio domínio.' },
]

export function Features() {
  return (
    <section id="funcionalidades" className="container section section--tight-top" aria-labelledby="func-titulo">
      <h2 id="func-titulo" className="display-lg" style={{ maxWidth: 720 }}>
        O essencial para gerir marcações, sem complicar
      </h2>
      <ul className="features">
        {FEATURES.map((f) => (
          <li key={f.title}>
            <div className="vg-card">
              <h3 className="heading-md">{f.title}</h3>
              <p className="muted">{f.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
