"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { cn } from "@/lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <>
    <header className={cn("site-header", (scrolled || open) && "site-header--solid")}>
      <div className="shell header-inner">
        <Link href="#inicio" className="wordmark" aria-label="Brava Spa Urbano — início"><strong>BRAVA</strong><span>SPA URBANO</span></Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <a className="header-cta" href="https://wa.me/5547991815089?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20no%20Brava%20Spa%20Urbano." target="_blank" rel="noreferrer"><i className="bi bi-whatsapp" /> Agendar <span><i className="bi bi-arrow-up-right" /></span></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}><span className="menu-toggle-lines" aria-hidden="true"><i /><i /></span></button>
      </div>
    </header>
    <div className={cn("mobile-menu", open && "mobile-menu--open")} aria-hidden={!open}>
      <div className="mobile-menu-inner">
        <p className="mobile-menu-kicker"><span /> Reserve um tempo para você</p>
        <nav aria-label="Menu mobile">{navigation.map((item, index) => <Link key={item.href} onClick={() => setOpen(false)} href={item.href} style={{"--menu-index": index} as React.CSSProperties}><span>0{index + 1}</span><strong>{item.label}</strong><i className="bi bi-arrow-up-right" /></Link>)}</nav>
        <div className="mobile-menu-bottom"><a href="https://wa.me/5547991815089?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20no%20Brava%20Spa%20Urbano." target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mobile-book"><i className="bi bi-whatsapp" /><span>Agendar experiência</span><i className="bi bi-arrow-right" /></a><div className="mobile-menu-social"><a href="https://instagram.com/bravaspaurbano" target="_blank" rel="noreferrer"><i className="bi bi-instagram" /> @bravaspaurbano</a><span>Praia Brava · Itajaí</span></div></div>
      </div>
    </div>
  </>;
}
