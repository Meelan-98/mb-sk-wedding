"use client";
import { Typography, Image } from "antd";
import Lotus from "@/components/Mandala";
import Reveal from "@/components/Reveal";
import { photos } from "@/data/photos";
import { asset } from "@/lib/asset";

const { Title, Text } = Typography;

const fallback =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#fbf6e9"/><rect x="8" y="8" width="384" height="284" fill="none" stroke="#e8d9b0"/></svg>',
  );

export default function Story() {
  return (
    <main className="wrap" style={{ paddingBottom: 96 }}>
      <section className="section" style={{ paddingBottom: 40 }}>
        <Lotus size={90} />
        <Title
          className="serif"
          style={{
            fontWeight: 300,
            color: "#a07c34",
            fontSize: "clamp(40px, 8vw, 72px)",
            margin: "16px 0 0",
          }}
        >
          Our Story
        </Title>
        <hr className="rule" />
      </section>

      <div className="masonry">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={(i % 3) * 0.08} className="photo">
            <figure style={{ margin: 0 }}>
              <Image
                src={asset(p.src)}
                alt={p.caption}
                fallback={fallback}
                style={{ width: "100%", height: "auto" }}
              />
              <figcaption style={{ paddingTop: 10 }}>
                <Text
                  className="serif"
                  style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    display: "block",
                  }}
                >
                  {p.caption}
                </Text>
                <Text style={{ color: "#a07c34", fontSize: 13 }}>
                  {p.location}
                </Text>
                <br />
                <Text type="secondary" style={{ fontSize: 13 }}>
                  {p.date}
                </Text>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
