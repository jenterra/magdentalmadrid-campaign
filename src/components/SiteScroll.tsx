"use client";

import { useEffect } from "react";
import { NAV_SECTION_IDS } from "@/lib/site";

const SCROLL_THRESHOLD = 40;
const ACTIVE_OFFSET = 120;

function getScrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "auto";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function scrollToSection(id: string) {
  const behavior = getScrollBehavior();

  if (id === "inicio") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({ behavior, block: "start" });
}

function setActiveNavSection(sectionId: string) {
  document
    .querySelectorAll<HTMLAnchorElement>(".site-header__links a[href^='#']")
    .forEach((link) => {
      const linkId = link.getAttribute("href")?.slice(1);
      const isActive = linkId === sectionId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
}

function getActiveSectionId(headerHeight: number): string {
  const scrollLine = window.scrollY + headerHeight + ACTIVE_OFFSET;
  let active = NAV_SECTION_IDS[0];

  for (const id of NAV_SECTION_IDS) {
    const section = document.getElementById(id);
    if (section && section.offsetTop <= scrollLine) {
      active = id;
    }
  }

  return active;
}

export function SiteScroll() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.scrollBehavior = getScrollBehavior() === "smooth" ? "smooth" : "auto";

    const header = document.getElementById("site-header");

    const updateHeader = () => {
      if (!header) return;

      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      header.classList.toggle("site-header--scrolled", scrolled);
      const headerHeight = header.offsetHeight;
      root.style.setProperty("--header-height", `${headerHeight}px`);
      setActiveNavSection(getActiveSectionId(headerHeight));
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      root.style.scrollBehavior = getScrollBehavior() === "smooth" ? "smooth" : "auto";
    };
    motionQuery.addEventListener("change", onMotionChange);

    const onAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#" || hash.length < 2) return;

      const id = decodeURIComponent(hash.slice(1));
      if (!document.getElementById(id)) return;

      event.preventDefault();
      setActiveNavSection(id);
      scrollToSection(id);

      const toggle = document.getElementById("nav-toggle") as HTMLInputElement | null;
      if (toggle) toggle.checked = false;
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
      motionQuery.removeEventListener("change", onMotionChange);
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return null;
}
