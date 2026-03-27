import { createFileRoute } from '@tanstack/react-router'
import { AboutContent } from '@/components/sections/AboutContent'
import { RenseignementsSection } from '@/components/sections/RenseignementsSection'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="pt-20">
      <AboutContent />
      <RenseignementsSection />
      <BeforeAfterSection />
    </div>
  )
}
