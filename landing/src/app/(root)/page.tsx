"use client";

import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    // PT is the default — only go EN if the user's language(s) are explicitly English.
    const langs = (navigator.languages && navigator.languages.length
      ? Array.from(navigator.languages)
      : [navigator.language || ""]
    ).map((x) => (x || "").toLowerCase());
    const isEnglish = langs.length > 0 && langs.every((x) => x.startsWith("en"));
    const locale = isEnglish ? "en" : "pt";
    window.location.replace(`${basePath}/${locale}`);
  }, []);

  return null;
}
