import { Clock, Tag, Users } from 'lucide-react'

const PILLARS = [
  {
    icon: Clock,
    title: 'Fast installations',
    description:
      'Book online and a certified crew installs your new system as soon as the next day, no drawn-out consultations required.',
  },
  {
    icon: Tag,
    title: 'Upfront pricing',
    description:
      'The all-inclusive price you see online is the price you pay, covering equipment, labor, permits, and old-unit removal.',
  },
  {
    icon: Users,
    title: 'Certified local crews',
    description:
      'Every job is handled by trained, background-checked installers from your area, never anonymous subcontractors.',
  },
]

export function AboutMission() {
  return (
    <section className="bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-wide text-orange">
          Our approach
        </span>
        <h2 className="mt-3 text-balance text-left text-3xl font-bold tracking-tight text-brand sm:text-4xl">
          Comfort you can book like anything else
        </h2>

        <div className="mt-6 space-y-5 text-left text-lg leading-relaxed text-muted-foreground">
          <p>
            HVAC replacement has always meant waiting days for a quote, sitting
            through high-pressure sales visits, and second-guessing whether the
            price was fair. We built NextDay HVAC to make it feel as simple as
            any modern online purchase: pick your system, see a real price, and
            schedule an install.
          </p>
          <p>
            Behind that simplicity is a network of certified local crews, honest
            all-inclusive pricing, and a configurator that sizes the right
            system for your home in under a minute. A supervisor confirms the
            details on a quick call before install day, and any adjustments are
            always free.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="flex flex-col items-start gap-3">
              <span className="flex size-11 items-center justify-center rounded-lg bg-orange/10 text-orange">
                <pillar.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold text-brand">
                {pillar.title}
              </h3>
              <p className="text-left text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
