"use client";

import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const browserLang = navigator.language || "";
    const locale = browserLang.startsWith("pt") ? "pt" : "en";
    window.location.replace(`${basePath}/${locale}`);
  }, []);

  return null;
}
