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
  fontSize: "clamp(18px, 4vw, 22px)",
  display: "block",
  marginBottom: 6,
} as const;

const text = `${wedding.groom} ❤️ ${wedding.bride}`;

export default function Page() {
  return (
    <main style={{ overflowX: "hidden", width: "100%" }}>
      {/* Hero Section */}
      <section className="hero" style={{ padding: "0 16px" }}>
        <Title
          className="serif"
          style={{
            fontWeight: 300,
            fontSize: "clamp(32px, 8vw, 96px)",
            margin: 0,
            color: "#a07c34",
            lineHeight: 1.2,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
            wordBreak: "break-word",
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

      {/* Details Section */}
      <section className="section wrap" style={{ padding: "40px 16px" }}>
        <Reveal>
          <Row gutter={[32, 24]} style={{ textAlign: "center" }}>
            <Col xs={24} md={8}>
              <Text style={label}>Location</Text>
              <Text style={{ fontSize: "clamp(16px, 3.5vw, 18px)" }}>
                {wedding.venue}
              </Text>
              <br />
              <AntLink
                href={wedding.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ant-typography ant-typography-secondary hover:underline"
                style={{ display: "inline-block", marginTop: 4 }}
              >
                Click here to open in Maps
              </AntLink>
            </Col>
            <Col xs={24} md={8}>
              <Text style={label}>Date</Text>
              <Text style={{ fontSize: "clamp(16px, 3.5vw, 18px)" }}>
                {wedding.dateLabel}
              </Text>
              <br />
              <Text type="secondary">{wedding.dayLabel}</Text>
            </Col>
            <Col xs={24} md={8}>
              <Text style={label}>Time</Text>
              <Text style={{ fontSize: "clamp(16px, 3.5vw, 18px)" }}>
                {wedding.time}
              </Text>
              <br />
              <Text type="secondary">{wedding.poruwa}</Text>
            </Col>
          </Row>
        </Reveal>
      </section>

      <Divider style={{ borderColor: "#e8d9b0", margin: 0 }}>
        <Mandala size={36} />
      </Divider>

      {/* Story Section */}
      <section
        className="section wrap"
        style={{ textAlign: "center", padding: "40px 16px" }}
      >
        <Reveal>
          <Title
            level={2}
            className="serif"
            style={{
              fontWeight: 400,
              color: "#a07c34",
              marginBottom: 16,
              fontSize: "clamp(24px, 5vw, 36px)",
            }}
          >
            It has been six wonderful years
          </Title>
          <Text
            type="secondary"
            style={{
              display: "block",
              fontSize: "clamp(15px, 3.5vw, 18px)",
              maxWidth: 600,
              margin: "0 auto 24px",
              padding: "0 8px",
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

      {/* Seating Section */}
      <section
        className="section wrap"
        style={{ textAlign: "center", padding: "40px 16px" }}
      >
        <Reveal>
          <Title
            level={2}
            className="serif"
            style={{
              fontWeight: 400,
              color: "#a07c34",
              fontSize: "clamp(24px, 5vw, 36px)",
            }}
          >
            Seating Arrangement
          </Title>
          <Text type="secondary" style={{ display: "block", marginBottom: 24 }}>
            Enter your name to find your table.
          </Text>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div style={{ width: "100%", maxWidth: 520 }}>
              <Seating />
            </div>
          </div>
        </Reveal>
      </section>

      <Divider style={{ borderColor: "#e8d9b0", margin: 0 }}>
        <Mandala size={36} />
      </Divider>

      {/* Countdown Section */}
      <section
        className="section wrap"
        style={{
          textAlign: "center",
          padding: "40px 16px 80px",
        }}
      >
        <Reveal>
          <Title
            level={2}
            className="serif"
            style={{
              fontWeight: 400,
              color: "#a07c34",
              fontSize: "clamp(24px, 5vw, 36px)",
              marginBottom: 60,
            }}
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
