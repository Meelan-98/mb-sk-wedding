"use client";
import { Typography, Row, Col, Divider, Button } from "antd";
import Reveal from "@/components/Reveal";
import Seating from "@/components/Seating";
import Countdown from "@/components/Countdown";
import { wedding } from "@/data/wedding";
import Mandala from "@/components/Mandala";
import Link from "next/link";

const { Title, Text, Link: AntLink } = Typography;
const label = {
  color: "#a07c34",
  fontFamily: "var(--font-display)",
  fontSize: 22,
  display: "block",
  marginBottom: 6,
} as const;

const text = `${wedding.groom} ❤️ ${wedding.bride}`;

export default function Page() {
  return (
    <main>
      <section className="hero">
        <Title
          className="serif"
          style={{
            fontWeight: 300,
            fontSize: "clamp(44px, 10vw, 96px)",
            margin: "24px 0 0",
            color: "#a07c34",
            lineHeight: 1.1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="written-letter"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </Title>
      </section>

      <Divider style={{ borderColor: "#e8d9b0", margin: 0 }}>
        <Mandala size={36} />
      </Divider>

      <section className="section wrap">
        <Reveal>
          <Row gutter={[32, 40]}>
            <Col xs={24} md={8}>
              <Text style={label}>Location</Text>
              <Text style={{ fontSize: 18 }}>{wedding.venue}</Text>
              <br />
              <AntLink
                href={wedding.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ant-typography ant-typography-secondary hover:underline"
              >
                Click here to open in Maps
              </AntLink>
            </Col>
            <Col xs={24} md={8}>
              <Text style={label}>Date</Text>
              <Text style={{ fontSize: 18 }}>{wedding.dateLabel}</Text>
              <br />
              <Text type="secondary">{wedding.dayLabel}</Text>
            </Col>
            <Col xs={24} md={8}>
              <Text style={label}>Time</Text>
              <Text style={{ fontSize: 18 }}>{wedding.time}</Text>
              <br />
              <Text type="secondary">{wedding.poruwa}</Text>
            </Col>
          </Row>
        </Reveal>
      </section>

      <Divider style={{ borderColor: "#e8d9b0", margin: 0 }}>
        <Mandala size={36} />
      </Divider>

      <section className="section wrap" style={{ textAlign: "center" }}>
        <Reveal>
          <Title
            level={2}
            className="serif"
            style={{ fontWeight: 400, color: "#a07c34", marginBottom: 16 }}
          >
            It has been six wonderful years
          </Title>
          <Text
            type="secondary"
            style={{
              display: "block",
              fontSize: 18,
              maxWidth: 600,
              margin: "0 auto 24px",
            }}
          >
            Since 2020.08.31 we shared beautiful moments together. Wanna see a
            glimpse of those moments, click here to tap into our memories
          </Text>
        </Reveal>
        <Reveal delay={0.1}>
          <Link href="/story">
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#a07c34",
                borderColor: "#a07c34",
                fontFamily: "var(--font-display)",
                height: "auto",
                padding: "8px 24px",
                fontSize: 16,
                boxShadow: "none",
              }}
            >
              Our Story
            </Button>
          </Link>
        </Reveal>
      </section>

      <Divider style={{ borderColor: "#e8d9b0", margin: 0 }}>
        <Mandala size={36} />
      </Divider>

      <section className="section wrap">
        <Reveal>
          <Title
            level={2}
            className="serif"
            style={{ fontWeight: 400, color: "#a07c34" }}
          >
            Seating Arrangement
          </Title>
          <Text type="secondary" style={{ display: "block", marginBottom: 24 }}>
            Find your name to see your table.
          </Text>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: 520 }}>
              <Seating />
            </div>
          </div>
        </Reveal>
      </section>

      <Divider style={{ borderColor: "#e8d9b0", margin: 0 }}>
        <Mandala size={36} />
      </Divider>

      <section className="section wrap" style={{ paddingBottom: 120 }}>
        <Reveal>
          <Title
            level={2}
            className="serif"
            style={{ fontWeight: 400, color: "#a07c34" }}
          >
            Counting down to our day
          </Title>
        </Reveal>
        <Reveal delay={0.15}>
          <Countdown />
        </Reveal>
      </section>
    </main>
  );
}
