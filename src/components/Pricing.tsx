type Plan = {
  name: string
  summary: string
  price: string
  period: string
  items: string[]
  cta: string
  href: string
  featured?: boolean
}

// Os limites de marcações por semana são uma proposta inicial: ajusta-os aqui.
const PLANS: Plan[] = [
  {
    name: 'Grátis',
    summary: 'Para experimentar ou para quem trabalha sozinho.',
    price: '0 €',
    period: 'para sempre',
    items: ['Página de marcações com endereço da Vaga', '1 colaborador', 'Até 15 marcações por semana'],
    cta: 'Começar grátis',
    href: '#criar-gratis',
  },
  {
    name: 'Essencial',
    summary: 'Para uma equipa pequena com a agenda cheia.',
    price: '7,99 €',
    period: '/mês',
    items: ['Tudo o que está no Grátis', 'Até 3 colaboradores', 'Até 100 marcações por semana'],
    cta: 'Escolher Essencial',
    href: '#criar-essencial',
  },
  {
    name: 'Profissional',
    summary: 'Para quem quer um site próprio e não quer limites.',
    price: '19,99 €',
    period: '/mês',
    items: ['Tudo o que está no Essencial', 'Site personalizado com a tua marca', 'Domínio próprio', 'Colaboradores e marcações sem limite'],
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
        <h2 id="planos-titulo" className="display-lg">Três planos, sem surpresas</h2>
        <p className="body-lg muted">Começa de graça e muda de plano quando o negócio crescer.</p>
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
              {plan.price}<span className="plan__period"> {plan.period}</span>
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
