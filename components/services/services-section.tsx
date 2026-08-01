'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SERVICES, type Service } from '@/lib/services'

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 w-full">
        <Image
          src={service.image || '/placeholder.svg'}
          alt={`${service.title} service`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        <span className="absolute -bottom-6 left-5 flex size-14 items-center justify-center rounded-full bg-card text-brand shadow-md ring-1 ring-border">
          <Icon className="size-6" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-6 pt-9">
        <h3 className="text-lg font-bold text-brand">{service.title}</h3>
        <p className="mt-2 flex-1 text-left text-sm leading-relaxed text-muted-foreground text-pretty">
          {service.description}
        </p>
        <Link
          href={`/services/${service.id}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange transition-colors hover:text-orange-dark"
        >
          Learn More
          <ArrowRight className="size-4" aria-hidden="true" />
          <span className="sr-only"> about {service.title}</span>
        </Link>
      </div>
    </article>
  )
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-border bg-secondary py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Our HVAC Service
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground">
            Choose best technicians and latest HVAC technology
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={(i % 4) * 80} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
