import Link from "next/link";

export default function Hero() {
  return <section id="inicio" className="hero">
    <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/images/hero/brava-hero.jpg"><source src="/vídeo/hero.mp4" type="video/mp4" /></video>
    <div className="hero-overlay" />
    <div className="hero-grain" />
    <div className="shell hero-content">
      <p className="eyebrow hero-eyebrow"><span /> Spa urbano · Praia Brava</p>
      <h1>Alívio para o corpo.<br /><em>Desaceleração</em><br />para a mente.</h1>
      <p className="hero-copy">Massagens, Head Spa e Day Spa para você respirar mais fundo, sentir menos peso e voltar para si.</p>
      <div className="hero-actions"><Link href="#experiencias" className="hero-primary">Conheça as experiências <i className="bi bi-arrow-down-right" /></Link><a href="https://wa.me/5547991815089?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20experi%C3%AAncia%20no%20Brava%20Spa%20Urbano." target="_blank" rel="noreferrer" className="hero-whatsapp"><i className="bi bi-whatsapp" /> Agendar pelo WhatsApp</a></div>
    </div>
    <div className="shell hero-bottom"><span><i className="bi bi-geo-alt" /> Praia Brava · Itajaí</span><a href="#sobre">Descubra o Brava <i className="bi bi-arrow-down" /></a></div>
  </section>;
}
