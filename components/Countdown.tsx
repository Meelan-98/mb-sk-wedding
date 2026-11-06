'use client';
import { useEffect, useState } from 'react';
import { Row, Col, Statistic, Typography } from 'antd';
import { wedding } from '@/data/wedding';

const target = new Date(wedding.target).getTime();

export default function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  if (now === null) return <div style={{ minHeight: 90 }} />;
  const diff = Math.max(0, target - now);
  if (diff === 0) {
    return <Typography.Title level={3} className="serif" style={{ color: 'var(--gold)', fontWeight: 400 }}>Today we celebrate ❤️</Typography.Title>;
  }
  const s = Math.floor(diff / 1000);
  const units = [
    ['Days', Math.floor(s / 86400)],
    ['Hours', Math.floor((s % 86400) / 3600)],
    ['Minutes', Math.floor((s % 3600) / 60)],
    ['Seconds', s % 60],
  ] as const;

  return (
    <Row gutter={[16, 16]} justify="center" style={{ maxWidth: 560, margin: '0 auto' }}>
      {units.map(([label, v]) => (
        <Col key={label} xs={12} sm={6}>
          <Statistic
            title={label}
            value={String(v).padStart(2, '0')}
            valueStyle={{ fontFamily: 'var(--font-display)', color: '#a07c34', fontSize: 44, fontWeight: 400 }}
          />
        </Col>
      ))}
    </Row>
  );
}
