"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { CaretDown } from "@phosphor-icons/react";

interface Heading {
  level: 2 | 3;
  text: string;
  id: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // IntersectionObserver for active heading tracking
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  // Keyboard: Escape closes drawer and returns focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveId(id);
        setIsOpen(false);
      }
    },
    []
  );

  const NavLinks = () => (
    <ul className="space-y-1">
      {headings.map(({ level, text, id }) => {
        const isActive = activeId === id;
        return (
          <li key={id} className={level === 3 ? "pl-4" : ""}>
            <a
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
              className={`block py-1 text-[15px] leading-snug transition-colors duration-200 border-l-2 pl-3 ${
                isActive
                  ? "text-yellow-500 border-yellow-500"
                  : "text-warm-400 border-transparent hover:text-text-primary"
              }`}
            >
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav
        aria-label="Índice do artigo"
        className="hidden lg:block w-60 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto"
      >
        <p
          className="font-sans font-medium uppercase text-warm-400 mb-4"
          style={{ fontSize: "13px", letterSpacing: "0.1em" }}
        >
          Índice
        </p>
        <NavLinks />
      </nav>

      {/* Mobile: collapsible drawer */}
      <div className="lg:hidden mb-8">
        <nav aria-label="Índice do artigo">
          <button
            ref={triggerRef}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="toc-drawer"
            className="flex items-center gap-2 w-full text-left"
          >
            <span
              className="font-sans font-medium uppercase text-warm-400"
              style={{ fontSize: "13px", letterSpacing: "0.1em" }}
            >
              Índice
            </span>
            <CaretDown
              size={14}
              weight="bold"
              className={`text-warm-400 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            id="toc-drawer"
            role="region"
            aria-label="Índice do artigo"
            hidden={!isOpen}
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "mt-4 opacity-100" : "opacity-0"
            }`}
          >
            <NavLinks />
          </div>
        </nav>
      </div>
    </>
  );
}
