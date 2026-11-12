type Plan = {
  name: string
  summary: string
  price: string
  items: string[]
  cta: string
  href: string
  featured?: boolean
}

// Preços e limites por definir: substitui os valores entre parênteses retos.
const PLANS: Plan[] = [
  {
    name: 'Essencial',
    summary: 'Para quem só precisa de receber marcações.',
    price: '[PREÇO]',
    items: ['Página de marcações com endereço da Vaga', 'Agenda, lembretes e calendário sincronizado', '[N] colaboradores'],
    cta: 'Escolher Essencial',
    href: '#criar-essencial',
  },
  {
    name: 'Profissional',
    summary: 'Para quem quer um site próprio e uma equipa maior.',
    price: '[PREÇO]',
    items: ['Tudo o que está no Essencial', 'Site personalizado com a tua marca', 'Domínio próprio', 'Até [N] colaboradores'],
    cta: 'Escolher Profissional',
    href: '#criar-profissional',
    featured: true,
  },
]

function Check() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10.5 L8 14.5 L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Pricing() {
  return (
    <section id="planos" className="container section" aria-labelledby="planos-titulo">
      <div className="section__intro">
        <h2 id="planos-titulo" className="display-lg">Dois planos, sem surpresas</h2>
        <p className="body-lg muted">Começa pelo essencial e passa para o Profissional quando o negócio crescer.</p>
      </div>
      <div className="plans">
        {PLANS.map((plan) => (
          <article key={plan.name} className={`vg-card plan${plan.featured ? ' plan--featured' : ''}`}>
            <div className="plan__head">
              <h3 className="heading-xl">{plan.name}</h3>
              {plan.featured && <span className="vg-tag vg-tag--ink eyebrow">Recomendado</span>}
            </div>
            <p className={plan.featured ? undefined : 'muted'}>{plan.summary}</p>
            <p className="plan__price">
              {plan.price} €<span className="plan__period"> /mês</span>
            </p>
            <ul className="plan__list">
              {plan.items.map((item) => (
                <li key={item}>
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a className={`vg-btn ${plan.featured ? 'vg-btn--primary' : 'vg-btn--outline'}`} href={plan.href}>
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
