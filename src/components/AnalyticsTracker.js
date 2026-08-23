"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "";
const sessionKey = "trustence-analytics-session";

function getSessionId() {
  const existing = sessionStorage.getItem(sessionKey);
  if (existing) return existing;
  const created = crypto.randomUUID();
  sessionStorage.setItem(sessionKey, created);
  return created;
}

function getExternalReferrer() {
  if (!document.referrer) return "";
  try {
    const referrer = new URL(document.referrer);
    return referrer.origin === window.location.origin ? "" : referrer.origin;
  } catch {
    return "";
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!apiBase || !pathname || pathname.startsWith("/admin")) return;

    fetch(`${apiBase}/analytics/visit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        session_id: getSessionId(),
        path: pathname,
        referrer: getExternalReferrer(),
      }),
      keepalive: true,
    }).catch(() => {
      // Analytics must never interrupt the visitor experience.
    });
  }, [pathname]);

  return null;
}
