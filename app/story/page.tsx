"use client";
import { Typography, Image, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Reveal from "@/components/Reveal";
import { photos } from "@/data/photos";
import { asset } from "@/lib/asset";

const { Title, Text } = Typography;

export default function Story() {
  const router = useRouter();

  return (
    <main className="wrap" style={{ paddingBottom: 40 }}>
      <Button
        type="text"
        icon={<ArrowLeftOutlined />}
        onClick={() => router.back()}
        style={{ color: "#a07c34", marginTop: 50, padding: 0 }}
      >
        Go Back
      </Button>

      <section className="section" style={{ padding: 0, marginBottom: 50 }}>
        <Title
          className="serif"
          style={{
            fontWeight: 300,
            color: "#a07c34",
            fontSize: "clamp(40px, 8vw, 72px)",
            margin: 0,
          }}
        >
          Our Story
        </Title>
      </section>

      <div className="masonry">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={(i % 3) * 0.08} className="photo">
            <figure style={{ margin: 0 }}>
              <Image
                src={asset(p.src)}
                alt={p.caption}
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
