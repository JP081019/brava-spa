import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const shots = [
  ["/images/brava/toalhas.png", "Acolhimento em cada detalhe", "bi-stars"],
  ["/images/brava/robe.png", "Seu tempo, do seu jeito", "bi-heart"],
  ["/images/brava/massagem.png", "Toque, cuidado e presença", "bi-flower1"],
  ["/images/brava/hero.png", "Uma pausa para respirar", "bi-fire"],
  ["/images/brava/ritual.png", "Experiências completas", "bi-cup-straw"],
];

export default function Gallery() {
  const carousel = [...shots, ...shots];
  return <section id="galeria" className="gallery-showcase section-pad">
    <div className="shell gallery-showcase-title"><Reveal><p className="eyebrow"><span /> Galeria Brava</p><h2>Um espaço feito<br />para você <em>sentir.</em></h2></Reveal><Reveal delay={100}><p>Uma prévia do cuidado que acontece por aqui. Em breve, novas histórias e novos detalhes vão ocupar este espaço.</p><div className="gallery-hint"><i className="bi bi-arrow-left-right" /> Deslize para explorar</div></Reveal></div>
    <div className="gallery-marquee"><div className="gallery-marquee-track">{carousel.map(([src, label, icon], index) => <article className={`gallery-card gallery-card--${index % 3}`} key={`${src}-${index}`}><div className="gallery-card-image"><Image src={src} alt={label} fill sizes="(max-width: 760px) 78vw, 30vw" className="cover" /><div className="gallery-card-shade" /></div><div className="gallery-card-caption"><i className={`bi ${icon}`} /><span>0{(index % shots.length) + 1}</span><h3>{label}</h3></div></article>)}</div></div>
  </section>;
}
