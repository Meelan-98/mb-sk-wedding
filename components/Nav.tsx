'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'antd';

export default function Nav() {
  const path = usePathname() || '/';
  const current = path.startsWith('/story') ? 'story' : 'details';
  return (
    <Menu
      mode="horizontal"
      selectedKeys={[current]}
      style={{ justifyContent: 'center', borderBottom: '1px solid #e8d9b0', fontFamily: 'var(--font-display)', fontSize: 18 }}
      items={[
        { key: 'details', label: <Link href="/">Wedding Details</Link> },
        { key: 'story', label: <Link href="/story/">Our Story</Link> },
      ]}
    />
  );
}
