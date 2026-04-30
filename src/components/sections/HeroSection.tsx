import { SITE } from '@/lib/constants'
import '@/styles/hero.css'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/image1.webp"
          alt="Lucie Cadinot - coaching sportif"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <p className="hero-fade-in hero-delay-1 text-xs md:text-sm tracking-[0.35em] uppercase text-foreground/70 mb-4">
          {SITE.tagline}
        </p>

        <h1 className="hero-fade-in hero-delay-2 font-logo text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground tracking-wide">
          {SITE.name}
        </h1>

        <div className="hero-fade-in hero-delay-3 mt-8 flex flex-col items-center gap-2">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-foreground/60">
            {SITE.credential}
          </p>
          <p className="text-xs md:text-sm tracking-[0.15em] text-gold">
            by {SITE.owner}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="hero-fade-in hero-delay-4 absolute bottom-10">
          <div className="hero-bounce w-px h-12 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
