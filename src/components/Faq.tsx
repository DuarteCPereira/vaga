const QUESTIONS = [
  { q: 'Os meus clientes precisam de instalar uma app?', a: 'Não. Marcam a partir de um link, no navegador do telemóvel ou do computador.' },
  { q: 'Posso usar o meu próprio domínio?', a: 'Sim, no plano Profissional. Nos planos Grátis e Essencial, a tua página fica num endereço da Vaga.' },
  { q: 'O plano Grátis é mesmo grátis?', a: 'Sim, sem prazo e sem cartão. Tem um limite de marcações por semana e um só colaborador.' },
  { q: 'Como é que os clientes cancelam?', a: 'Pelo link que recebem na confirmação. A vaga fica logo livre para outra pessoa.' },
  { q: 'A Vaga serve para o meu tipo de negócio?', a: 'A Vaga foi pensada primeiro para barbearias e restaurantes, e funciona para qualquer negócio que atenda por marcação.' },
]

export function Faq() {
  return (
    <section id="perguntas" className="faq-wrap" aria-labelledby="faq-titulo">
      <div className="faq">
        <h2 id="faq-titulo" className="display-md">Perguntas frequentes</h2>
        <div>
          {QUESTIONS.map(({ q, a }, i) => (
            <details key={q} open={i === 0}>
              <summary>{q}</summary>
              <p className="muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
