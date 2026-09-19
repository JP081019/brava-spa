import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return <section id="sobre" className="about section-pad">
    <div className="shell about-grid">
      <Reveal className="about-intro"><p className="eyebrow"><span /> O Brava</p><h2>Um refúgio urbano<br />para voltar a <em>si.</em></h2><p>Na Praia Brava, criamos um espaço onde o cuidado acontece sem pressa. Cada aroma, textura e gesto convida você a desacelerar — e a ouvir o que o corpo vem pedindo.</p></Reveal>
      <Reveal className="about-image-wrap" delay={140}><Image src="/images/brava/robe.png" alt="Cliente vestindo roupão do Brava Spa Urbano" fill sizes="(max-width: 800px) 90vw, 42vw" className="cover" /><span className="image-note">cuidado que acolhe</span></Reveal>
      <Reveal className="about-stamp" delay={220}><span>desde</span><strong>2024</strong><span>Praia Brava</span></Reveal>
    </div>
  </section>;
}
