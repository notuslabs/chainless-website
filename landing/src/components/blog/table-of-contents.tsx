"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

interface Heading {
  level: 2 | 3;
  text: string;
  id: string;
}

interface Section {
  h2: Heading;
  children: Heading[];
}

interface TableOfContentsProps {
  headings: Heading[];
}

function groupIntoSections(headings: Heading[]): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const h of headings) {
    if (h.level === 2) {
      current = { h2: h, children: [] };
      sections.push(current);
    } else if (h.level === 3 && current) {
      current.children.push(h);
    }
  }

  return sections;
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const t = useTranslations("blog.toc");
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const sections = useMemo(() => groupIntoSections(headings), [headings]);

  const activeSectionIndex = useMemo(() => {
    if (!activeId) return 0;
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      if (s.h2.id === activeId) return i;
      if (s.children.some((c) => c.id === activeId)) return i;
    }
    return 0;
  }, [sections, activeId]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

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

  const SectionList = () => (
    <ol className="space-y-0.5">
      {sections.map((section, idx) => {
        const isSectionActive = idx === activeSectionIndex;
        const isH2Active = activeId === section.h2.id;
        const hasChildren = section.children.length > 0;

        return (
          <li key={section.h2.id}>
            <a
              href={`#${section.h2.id}`}
              onClick={(e) => handleLinkClick(e, section.h2.id)}
              title={section.h2.text}
              className={`group/toc flex gap-2.5 py-2 pl-3 pr-1 text-[14px] leading-[1.4] transition-colors duration-300 border-l-2 ${
                isH2Active
                  ? "text-yellow-500 border-yellow-500"
                  : isSectionActive
                    ? "text-text-primary border-warm-600/50"
                    : "text-warm-400 border-transparent hover:text-text-primary hover:border-warm-700/40"
              }`}
            >
              <span
                className={`font-mono text-[11px] tabular-nums pt-[4px] shrink-0 transition-colors duration-300 ${
                  isH2Active || isSectionActive
                    ? "text-yellow-500/70"
                    : "text-warm-600"
                }`}
                aria-hidden="true"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="line-clamp-2 flex-1">{section.h2.text}</span>
            </a>

            {hasChildren && (
              <div
                className={`grid transition-all duration-500 ease-[var(--ease-premium)] ${
                  isSectionActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
                aria-hidden={!isSectionActive}
              >
                <ul className="overflow-hidden">
                  <li className="h-1" aria-hidden="true" />
                  {section.children.map((child) => {
                    const isChildActive = activeId === child.id;
                    return (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          onClick={(e) => handleLinkClick(e, child.id)}
                          title={child.text}
                          tabIndex={isSectionActive ? 0 : -1}
                          className={`block py-1.5 pl-9 pr-2 text-[13px] leading-[1.4] line-clamp-1 transition-colors duration-200 ${
                            isChildActive
                              ? "text-yellow-500/90"
                              : "text-warm-500 hover:text-warm-300"
                          }`}
                        >
                          {child.text}
                        </a>
                      </li>
                    );
                  })}
                  <li className="h-1.5" aria-hidden="true" />
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav
        aria-label={t("ariaLabel")}
        className="hidden lg:block w-64 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto"
      >
        <p className="font-sans font-medium uppercase text-warm-400 mb-4 text-[13px] tracking-[0.1em]">
          {t("title")}
        </p>
        <SectionList />
      </nav>

      {/* Mobile: collapsible drawer */}
      <div className="lg:hidden mb-8">
        <nav aria-label={t("ariaLabel")}>
          <button
            ref={triggerRef}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="toc-drawer"
            className="flex items-center gap-2 w-full text-left"
          >
            <span className="font-sans font-medium uppercase text-warm-400 text-[13px] tracking-[0.1em]">
              {t("title")}
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
            aria-label={t("ariaLabel")}
            hidden={!isOpen}
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "mt-4 opacity-100" : "opacity-0"
            }`}
          >
            <SectionList />
          </div>
        </nav>
      </div>
    </>
  );
}
