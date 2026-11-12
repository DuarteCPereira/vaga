import { useState } from 'react'

const SLOTS = [
  { time: '14:30', taken: false },
  { time: '15:00', taken: false },
  { time: '15:30', taken: false },
  { time: '16:00', taken: true },
  { time: '16:30', taken: false },
  { time: '17:00', taken: false },
]

export function BookingDemo() {
  const [selected, setSelected] = useState('15:00')
  const [confirmed, setConfirmed] = useState<string | null>(null)

  function pick(time: string) {
    setSelected(time)
    setConfirmed(null)
  }

  return (
    <section className="demo" aria-labelledby="demo-titulo">
      <div className="demo__head">
        <p className="eyebrow muted">Exemplo de página de marcações</p>
        <h2 id="demo-titulo" className="demo__shop">Barbearia do Bairro</h2>
        <p className="caption muted">Corte e barba, 45 minutos, com o Rui</p>
      </div>

      <fieldset className="demo__slots">
        <legend className="caption">Quinta, 12 de novembro</legend>
        {SLOTS.map(({ time, taken }) => (
          <button
            key={time}
            type="button"
            className="vg-slot"
            disabled={taken}
            aria-pressed={!taken && selected === time}
            aria-label={taken ? `${time}, ocupado` : time}
            onClick={() => pick(time)}
          >
            {time}
          </button>
        ))}
      </fieldset>

      <button type="button" className="vg-btn vg-btn--accent vg-btn--lg demo__confirm" onClick={() => setConfirmed(selected)}>
        Confirmar para as {selected}
      </button>
      <p className="caption muted demo__status" role="status">
        {confirmed ? `Marcado para as ${confirmed}. O convite seguiu para o teu calendário.` : ''}
      </p>
    </section>
  )
}
