import { Typography } from "antd";

const C = 170,
  R = 124;

export default function TableGraphic({
  no,
  names,
  hits,
}: {
  no: string;
  names: string[];
  hits: string[];
}) {
  const seatFontSize = names.length > 12 ? "10" : "12";

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 420,
        margin: "0 auto",
        padding: "0 8px",
        boxSizing: "border-box",
      }}
    >
      <svg
        viewBox="0 0 340 340"
        width="100%"
        height="auto"
        role="img"
        aria-label={`Table ${no}`}
        style={{ display: "block", overflow: "visible" }}
      >
        <circle
          cx={C}
          cy={C}
          r={74}
          fill="#fff"
          stroke="#a07c34"
          strokeWidth="1.5"
        />
        <circle cx={C} cy={C} r={66} fill="none" stroke="#e8d9b0" />
        <text
          x={C}
          y={C - 4}
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="15"
          fill="#a07c34"
        >
          Table
        </text>
        <text
          x={C}
          y={C + 26}
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="34"
          fill="#a07c34"
        >
          {no}
        </text>
        {names.map((n, i) => {
          const a = ((-90 + (i * 360) / names.length) * Math.PI) / 180;
          const x = C + R * Math.cos(a),
            y = C + R * Math.sin(a);
          const hit = hits.includes(n);
          return (
            <g key={n}>
              <circle
                cx={x}
                cy={y}
                r={15}
                fill={hit ? "#a07c34" : "#fff"}
                stroke="#a07c34"
                strokeWidth="1.2"
              />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fontSize={seatFontSize}
                fill={hit ? "#fff" : "#a07c34"}
              >
                {i + 1}
              </text>
            </g>
          );
        })}
      </svg>
      <ol
        style={{
          listStyle: "none",
          padding: 0,
          margin: "16px 0 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "6px 12px",
          textAlign: "left",
        }}
      >
        {names.map((n, i) => (
          <li key={n} style={{ wordBreak: "break-word" }}>
            <Typography.Text
              strong={hits.includes(n)}
              style={{
                color: hits.includes(n) ? "#a07c34" : undefined,
                fontSize: "14px",
              }}
            >
              {i + 1}. {n}
            </Typography.Text>
          </li>
        ))}
      </ol>
    </div>
  );
}
