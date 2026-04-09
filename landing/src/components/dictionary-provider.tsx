"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/lib/i18n";

type Dictionary = Record<string, any>;

const DictionaryContext = createContext<{
  dict: Dictionary;
  locale: Locale;
} | null>(null);

export function DictionaryProvider({
  dict,
  locale,
  children,
}: {
  dict: Dictionary;
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext value={{ dict, locale }}>{children}</DictionaryContext>
  );
}

export function useDictionary() {
  const ctx = useContext(DictionaryContext);
  if (!ctx)
    throw new Error("useDictionary must be used within DictionaryProvider");
  return ctx;
}
