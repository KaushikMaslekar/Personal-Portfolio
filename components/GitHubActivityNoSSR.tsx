"use client";

import dynamic from "next/dynamic";

const GitHubActivity = dynamic(
  () => import("@/components/GitHubActivity").then((m) => m.GitHubActivity),
  { ssr: false },
);

export function GitHubActivityNoSSR() {
  return <GitHubActivity />;
}
