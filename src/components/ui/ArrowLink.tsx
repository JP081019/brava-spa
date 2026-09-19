import Link from "next/link";

export default function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link className={`arrow-link${light ? " arrow-link--light" : ""}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}
