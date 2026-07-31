import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { SERVICES, getService } from '@/lib/services'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) {
    return { title: 'Service Not Found | NextDay HVAC' }
  }
  return {
    title: `${service.title} | NextDay HVAC`,
    description: service.overview,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const Icon = service.icon
  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 4)

  return (
    <main className="flex-1 pt-16">
      {/* Hero */}
      <section className="border-b border-border bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All services
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="flex size-14 items-center justify-center rounded-full bg-card text-brand shadow-md ring-1 ring-border">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight text-brand sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {service.overview}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#pricing"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'gap-2 bg-orange px-7 font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-md',
                  )}
                >
                  Book your installation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/#configurator"
                  className={cn(
                    buttonVariants({ size: 'lg', variant: 'outline' }),
                    'border-brand/20 px-7 font-semibold text-foreground hover:bg-background',
                  )}
                >
                  Size my system
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-brand/10 shadow-xl">
              <Image
                src={service.image || '/placeholder.svg'}
                alt={`${service.title} service`}
                width={720}
                height={540}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-background py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What&apos;s included
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-left">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/80">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-border bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-brand sm:text-3xl">
            Explore other services
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((other) => {
              const OtherIcon = other.icon
              return (
                <Link
                  key={other.id}
                  href={`/services/${other.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-brand ring-1 ring-border">
                    <OtherIcon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-brand">
                    {other.title}
                  </h3>
                  <p className="mt-2 flex-1 text-left text-sm leading-relaxed text-muted-foreground">
                    {other.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange transition-colors group-hover:text-orange-dark">
                    Learn More
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
