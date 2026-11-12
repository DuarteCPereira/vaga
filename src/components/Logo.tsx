type LogoProps = { size?: 'md' | 'sm' }

export function WaveMark({ width = 48, color = 'var(--accent)' }: { width?: number; color?: string }) {
  return (
    <svg aria-hidden="true" width={width} height={width / 2} viewBox="0 0 112 56" fill="none">
      <path
        d="M8 34 C18 34 20 16 32 16 C46 16 46 40 60 40 C74 40 74 16 88 16 C96 16 100 24 104 28"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Logo({ size = 'md' }: LogoProps) {
  const small = size === 'sm'
  return (
    <span className="logo">
      <WaveMark width={small ? 40 : 48} />
      <span className="logo__word" style={small ? { fontSize: 24 } : undefined}>vaga</span>
    </span>
  )
}
