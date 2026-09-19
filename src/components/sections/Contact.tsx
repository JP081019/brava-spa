import Reveal from "@/components/ui/Reveal";

const maps = "https://www.google.com/maps/search/?api=1&query=Rua%20Carola%20Coelho%20182%20Praia%20Brava%20Itaja%C3%AD%2088306828";
const whatsapp = "https://wa.me/5547991815089?text=Ol%C3%A1%21%20Conheci%20o%20Brava%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20experi%C3%AAncia.";

export default function Contact() {
  return <section id="contato" className="contact-new section-pad"><div className="shell">
    <Reveal className="contact-new-heading"><p className="eyebrow"><span /> Venha desacelerar</p><h2>Seu momento de<br /><em>pausa começa aqui.</em></h2><p>Fale com a nossa equipe, escolha sua experiência e deixe o restante com a gente.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="contact-main-cta"><i className="bi bi-whatsapp" /> Agendar pelo WhatsApp <i className="bi bi-arrow-up-right" /></a></Reveal>
    <div className="contact-new-grid">
      <Reveal className="contact-map-card"><div className="map-pattern"><i className="bi bi-geo-alt-fill" /><span>Praia Brava</span></div><div className="map-card-content"><span className="contact-label">Como chegar</span><h3>Rua Carola Coelho, 182</h3><p>Praia Brava · Itajaí · SC<br />CEP 88306-828</p><a href={maps} target="_blank" rel="noreferrer">Abrir no Google Maps <i className="bi bi-box-arrow-up-right" /></a></div></Reveal>
      <Reveal className="contact-info-stack" delay={100}><a href="https://instagram.com/bravaspaurbano" target="_blank" rel="noreferrer" className="contact-info-card"><i className="bi bi-instagram" /><div><span className="contact-label">Acompanhe</span><h3>@bravaspaurbano</h3></div><i className="bi bi-arrow-up-right" /></a><a href="https://wa.me/5547991815089" target="_blank" rel="noreferrer" className="contact-info-card"><i className="bi bi-whatsapp" /><div><span className="contact-label">Converse com a gente</span><h3>+55 47 99181-5089</h3></div><i className="bi bi-arrow-up-right" /></a><div className="contact-info-card"><i className="bi bi-clock" /><div><span className="contact-label">Horários</span><h3>Segunda a sábado · 09h às 20h</h3></div></div></Reveal>
    </div>
  </div></section>;
}
