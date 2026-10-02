"use client";

import dynamic from "next/dynamic";

const MythLocationMapInner = dynamic(() => import("./MythLocationMapInner"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-2xl bg-ink-100/60" />
  ),
});

export default function MythLocationMapClient(props) {
  return <MythLocationMapInner {...props} />;
}
