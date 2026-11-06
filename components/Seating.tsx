"use client";
import { useMemo, useState } from "react";
import { Input, Empty, Typography } from "antd";
import { tables } from "@/data/tables";
import TableGraphic from "./TableGraphic";

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
const MAX = 4;

export default function Seating() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const tokens = norm(q).split(/\s+/).filter(Boolean);
    if (norm(q).length < 2) return [];
    return Object.entries(tables)
      .map(([no, names]) => ({
        no,
        names,
        hits: names.filter((n) => tokens.every((t) => norm(n).includes(t))),
      }))
      .filter((r) => r.hits.length);
  }, [q]);

  const searching = norm(q).length >= 2;

  return (
    <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }}>
      <Input.Search
        size="large"
        allowClear
        placeholder="Type your name"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ width: "100%" }}
      />
      <div style={{ marginTop: 24 }}>
        {searching && results.length === 0 && (
          <Empty description="No guest found. Try a different spelling." />
        )}
        {results.slice(0, MAX).map((r) => (
          <div key={r.no} style={{ marginBottom: 36, width: "100%" }}>
            <TableGraphic no={r.no} names={r.names} hits={r.hits} />
          </div>
        ))}
        {results.length > MAX && (
          <Typography.Text
            type="secondary"
            style={{ display: "block", textAlign: "center", padding: "0 8px" }}
          >
            Showing {MAX} of {results.length} tables. Type more of the name to
            narrow down.
          </Typography.Text>
        )}
      </div>
    </div>
  );
}
