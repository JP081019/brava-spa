"use client";

import { useState } from "react";
import { experiences } from "@/data/site";
import type { Experience } from "@/types/content";
import Reveal from "@/components/ui/Reveal";

const phone = "5547991815089";

function whatsappLink(service: string) {
  const message = `Olá! Conheci o Brava Spa Urbano pelo site e gostaria de saber mais e agendar ${service}.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function Experiences() {
  const [active, setActive] = useState<Experience | null>(null);
  return <section id="experiencias" className="treatments section-pad">
    <div className="shell treatments-layout">
      <Reveal className="treatments-heading"><p className="eyebrow"><span /> Experiências</p><h2>Cuidado para o corpo.<br /><em>Silêncio para a mente.</em></h2><p>Escolha uma experiência para conhecer os detalhes. Cada atendimento é conduzido de forma individual, respeitando o que você precisa hoje.</p><div className="treatments-signature"><i className="bi bi-flower3" /> Massagens · Head Spa · Day Spa</div></Reveal>
      <div className="treatment-list">{experiences.map((item, index) => <Reveal key={item.number} delay={index * 60}><button className="treatment-row" onClick={() => setActive(item)}><span className="treatment-number">{item.number}</span><i className={`bi ${item.icon}`} aria-hidden="true" /><span className="treatment-title">{item.title}</span><span className="treatment-description">{item.description}</span><span className="treatment-arrow"><i className="bi bi-arrow-up-right" /></span></button></Reveal>)}</div>
    </div>
    {active && <div className="treatment-modal" role="dialog" aria-modal="true" aria-labelledby="treatment-title" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}><article className="treatment-card"><button className="modal-close" onClick={() => setActive(null)} aria-label="Fechar detalhes"><i className="bi bi-x-lg" /></button><div className="modal-icon"><i className={`bi ${active.icon}`} /></div><span className="modal-kicker">Experiência {active.number}</span><h3 id="treatment-title">{active.title}</h3><p className="modal-description">{active.description}</p>{active.options ? <div className="day-spa-options">{active.options.map((option) => <div className="spa-option" key={option.name}><div><span>Day Spa</span><h4>{option.name}</h4><p>{option.description}</p></div><ul>{option.includes.map((line) => <li key={line}><i className="bi bi-check2" />{line}</li>)}</ul><a href={whatsappLink(`o Day Spa ${option.name}`)} target="_blank" rel="noreferrer">Quero viver essa experiência <i className="bi bi-whatsapp" /></a></div>)}</div> : <ul className="treatment-highlights">{active.highlights?.map((line) => <li key={line}><i className="bi bi-check2-circle" />{line}</li>)}</ul>}{!active.options && <a className="modal-whatsapp" href={whatsappLink(active.title)} target="_blank" rel="noreferrer"><i className="bi bi-whatsapp" /> Quero saber mais sobre {active.title}</a>}</article></div>}
  </section>;
}
