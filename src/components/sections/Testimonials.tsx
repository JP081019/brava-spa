"use client";
import { useState } from "react";
import { testimonials } from "@/data/site";

export default function Testimonials() { const [active,setActive]=useState(0); const item=testimonials[active]; return <section className="testimonials section-pad"><div className="shell testimonial-inner"><p className="eyebrow eyebrow--gold"><span/> Palavras de quem viveu</p><div className="quote-mark">“</div><blockquote key={active}>{item.quote}</blockquote><div className="testimonial-meta"><div><strong>{item.name}</strong><span>{item.detail}</span></div><div className="testimonial-controls"><button onClick={()=>setActive((active-1+testimonials.length)%testimonials.length)} aria-label="Depoimento anterior">←</button><span>0{active+1} / 0{testimonials.length}</span><button onClick={()=>setActive((active+1)%testimonials.length)} aria-label="Próximo depoimento">→</button></div></div></div></section>; }
