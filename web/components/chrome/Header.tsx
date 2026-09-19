"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, partner, site } from "@/content/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/ui/Magnetic";

function Logo() {
  return (
    <span className="inline-flex items-center rounded-xl bg-cream px-3 py-2 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo_concom.png"
        alt="ConCom PR & Publicity"
        width={132}
        height={34}
        className="h-[26px] w-auto"
      />
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* shrink + hide/show by scroll direction */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        el.classList.toggle("is-scrolled", y > 24);
        const goingDown = y > last && y > 420;
        el.classList.toggle("is-hidden", goingDown && !menuOpen);
        last = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  /* lock page scroll while the mobile menu is open */
  useEffect(() => {
    const lock = () => {
      if (menuOpen) {
        window.__concomLenis?.stop();
        document.documentElement.classList.add("overflow-hidden");
      } else {
        window.__concomLenis?.start();
        document.documentElement.classList.remove("overflow-hidden");
      }
    };
    lock();
    return () => {
      window.__concomLenis?.start();
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  /* close menu on navigation + Escape */
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-green focus:px-5 focus:py-2.5 focus:text-cream"
      >
        Skip to content
      </a>

      <header ref={headerRef} id="site-header" className="fixed inset-x-0 top-0 z-[100]">
        <div className="wrap flex h-[74px] items-center justify-between gap-6">
          <Link href="/" aria-label="ConCom PR & Publicity — home" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="nav-link text-[0.92rem] font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <ThemeToggle className="p-1 text-ink-soft transition-colors hover:text-green" />
            <Magnetic strength={0.25}>
              <Link href="/contact/" className="btn btn-primary px-6! py-3! text-sm">
                Start a project
                <Icon name="arrow-up-right" className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>

          <button
            type="button"
            className="burger flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-overlay"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        id="menu-overlay"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[95] flex flex-col bg-green-deep text-cream lg:hidden ${
          menuOpen ? "is-open" : "pointer-events-none"
        }`}
      >
        <div className="wrap flex flex-1 flex-col justify-center gap-2 pt-16">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={menuOpen ? 0 : -1}
              className="menu-link group flex items-baseline gap-4 py-2"
              style={{ transitionDelay: menuOpen ? `${180 + i * 70}ms` : "0ms" }}
            >
              <span className="font-display text-sm italic text-cream/50">
                0{i + 1}
              </span>
              <span className="font-display text-5xl font-light transition-transform duration-500 group-hover:translate-x-2">
                {item.label}
              </span>
            </Link>
          ))}
          <Link
            href="/contact/"
            tabIndex={menuOpen ? 0 : -1}
            className="menu-link btn btn-ghost-light mt-8 w-fit"
            style={{ transitionDelay: menuOpen ? `${180 + nav.length * 70}ms` : "0ms" }}
          >
            Start a project
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </Link>
        </div>
        <div
          className="menu-link rule border-cream/15 pb-10 pt-6"
          style={{ transitionDelay: menuOpen ? "560ms" : "0ms" }}
        >
          <div className="wrap flex flex-wrap items-center justify-between gap-4 text-sm text-cream/70">
            <a href={`mailto:${site.email}`} className="hover:text-cream">
              {site.email}
            </a>
            <a href={`tel:${partner.phone.replace(/\s/g, "")}`} className="hover:text-cream">
              {partner.phone}
            </a>
            <ThemeToggle className="text-cream/80" />
          </div>
        </div>
      </div>
    </>
  );
}
