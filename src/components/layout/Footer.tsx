import { Instagram } from 'lucide-react'
import { SITE } from '@/lib/constants'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-background-dark py-12 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-6">
        <div className="w-56 h-56 rounded-full overflow-hidden bg-white flex items-center justify-center">
          <img src="/nutri-new.png" alt="Nutri Fit & Fun" className="w-full h-full object-contain" />
        </div>

        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-gold transition-colors duration-300"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>

        <p className="text-muted text-xs tracking-wide">
          &copy; {YEAR} {SITE.name} &mdash; {SITE.owner}. Tous droits r&eacute;serv&eacute;s.
        </p>
      </div>
    </footer>
  )
}
