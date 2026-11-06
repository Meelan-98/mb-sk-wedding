"use client";
import { Typography, Row, Col, Divider } from "antd";
import Reveal from "@/components/Reveal";
import Seating from "@/components/Seating";
import Countdown from "@/components/Countdown";
import { wedding } from "@/data/wedding";
import Mandala from "@/components/Mandala";

const { Title, Text, Link } = Typography;
const label = {
  color: "#a07c34",
  fontFamily: "var(--font-display)",
  fontSize: 22,
  display: "block",
  marginBottom: 6,
} as const;

export default function Page() {
  return (
    <main>
      <section className="hero">
        <Mandala size={150} />
        <Title
          className="serif"
          style={{
            fontWeight: 300,
            fontSize: "clamp(44px, 10vw, 96px)",
            margin: "24px 0 0",
            color: "#a07c34",
            lineHeight: 1.1,
          }}
        >
          {wedding.bride} ❤️ {wedding.groom}
        </Title>
        <hr className="rule" />
        <Text
          className="serif"
          style={{ fontSize: "clamp(22px, 4vw, 30px)", letterSpacing: 4 }}
        >
          {wedding.dateLabel}
        </Text>
      </section>

      <section className="section wrap">
        <Reveal>
          <Row gutter={[32, 40]}>
            <Col xs={24} md={8}>
              <Text style={label}>Location</Text>
              <Text style={{ fontSize: 18 }}>{wedding.venue}</Text>
              <br />
              <Link
                href={wedding.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to open in Maps
              </Link>
            </Col>
            <Col xs={24} md={8}>
              <Text style={label}>Date</Text>
              <Text style={{ fontSize: 18 }}>{wedding.dateLabel}</Text>
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
