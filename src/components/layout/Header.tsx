import { Link, useRouterState } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Instagram, Menu, X } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/' as const, label: 'Accueil' },
  { to: '/about' as const, label: 'À Propos' },
  { to: '/contact' as const, label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const routerState = useRouterState()
  const isHome = routerState.location.pathname === '/'

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [routerState.location.pathname])

  const showSolid = scrolled || !isHome || mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        showSolid
          ? 'bg-background-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="font-logo text-gold text-xl tracking-widest">
          Nutri Fit &amp; Fun
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-sm tracking-widest uppercase transition-colors duration-300',
                routerState.location.pathname === link.to
                  ? 'text-gold'
                  : 'text-foreground/80 hover:text-gold'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-gold transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground/80 hover:text-gold transition-colors"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-500',
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 bg-background-dark/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-sm tracking-widest uppercase py-2 transition-colors duration-300',
                routerState.location.pathname === link.to
                  ? 'text-gold'
                  : 'text-foreground/80 hover:text-gold'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-gold transition-colors duration-300 flex items-center gap-2 py-2"
          >
            <Instagram size={18} />
            <span className="text-sm">Instagram</span>
          </a>
        </div>
      </div>
    </header>
  )
}
