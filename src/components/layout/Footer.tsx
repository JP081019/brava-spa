import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/data/site";

export default function Footer() {
  return <footer className="footer">
    <div className="shell footer-grid">
      <div className="footer-brand"><div className="wordmark wordmark--footer"><strong>BRAVA</strong><span>SPA URBANO</span></div><p>Um espaço para sentir,<br />respirar e se cuidar.</p></div>
      <div><span className="footer-label">Navegue</span>{navigation.slice(0, 4).map(i => <Link key={i.href} href={i.href}>{i.label}</Link>)}</div>
      <div><span className="footer-label">Visite</span><a href="https://www.google.com/maps/search/?api=1&query=Rua%20Carola%20Coelho%20182%20Praia%20Brava%20Itaja%C3%AD%2088306828" target="_blank" rel="noreferrer">Rua Carola Coelho, 182<br />Praia Brava · Itajaí</a><p>Seg — Sáb<br />09h às 20h</p></div>
      <div><span className="footer-label">Conecte-se</span><a href="https://instagram.com/bravaspaurbano" target="_blank" rel="noreferrer" className="footer-social"><i className="bi bi-instagram" /> @bravaspaurbano</a><a href="https://wa.me/5547991815089" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp" /> +55 47 99181-5089</a></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Brava Spa Urbano</span><a className="footer-credit" href="https://jpcreative.com.br" target="_blank" rel="noreferrer"><span>Design & desenvolvimento</span><Image src="/logo/jpcreative.png" alt="JP Creative" width={1112} height={594} sizes="120px" /><i className="bi bi-arrow-up-right" /></a></div>
  </footer>;
}
