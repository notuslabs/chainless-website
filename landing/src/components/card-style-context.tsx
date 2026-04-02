"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type CardStyle = "doppelrand" | "modern-dark" | "minimal-dark" | "luxury" | "frosted-glass";

const CardStyleContext = createContext<CardStyle>("doppelrand");
const CardStyleSetContext = createContext<(style: CardStyle) => void>(() => {});

export function CardStyleProvider({
  style: initialStyle,
  children,
}: {
  style: CardStyle;
  children: ReactNode;
}) {
  const [style, setStyle] = useState<CardStyle>(initialStyle);

  return (
    <CardStyleContext.Provider value={style}>
      <CardStyleSetContext.Provider value={setStyle}>
        {children}
      </CardStyleSetContext.Provider>
    </CardStyleContext.Provider>
  );
}

export function useCardStyle() {
  return useContext(CardStyleContext);
}

export function useSetCardStyle() {
  return useContext(CardStyleSetContext);
}
