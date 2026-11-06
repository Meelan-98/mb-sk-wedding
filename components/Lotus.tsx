const petal = 'M60 70 C 44 52, 44 22, 60 6 C 76 22, 76 52, 60 70 Z';
const petals = [-62, 62, -32, 32, 0];

export default function Lotus({ size = 120, light = false }: { size?: number; light?: boolean }) {
  return (
    <svg className="lotus" width={size} height={size * 0.72} viewBox="0 0 120 86" aria-hidden="true">
      {petals.map((a, i) => (
        <path
          key={a}
          d={petal}
          transform={`rotate(${a} 60 70)`}
          fill="#fff"
          stroke="#a07c34"
          strokeWidth={light ? 1 : 1.5}
          style={{ ['--pd' as string]: `${i * 0.18}s` }}
        />
      ))}
      <path d="M30 78 Q60 86 90 78" fill="none" stroke="#e8d9b0" strokeWidth="1.5" />
    </svg>
  );
}
