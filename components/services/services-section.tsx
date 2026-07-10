'use client'

import Image from 'next/image'
import {
  Snowflake,
  Flame,
  RefreshCw,
  AirVent,
  Waypoints,
  Building2,
  Leaf,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

interface Service {
  id: string
  title: string
  description: string
  image: string
  icon: LucideIcon
}

const SERVICES: Service[] = [
  {
    id: 'air-conditioning',
    title: 'Air Conditioning',
    description: 'Installation, repair and maintenance for reliable cooling and comfort.',
    image: '/images/services/air-conditioning.png',
    icon: Snowflake,
  },
  {
    id: 'heating-systems',
    title: 'Heating Systems',
    description: 'Furnaces, boilers and more to keep your home warm all winter long.',
    image: '/images/services/heating-systems.png',
    icon: Flame,
  },
  {
    id: 'heat-pumps',
    title: 'Heat Pumps',
    description: 'Efficient heating and cooling solutions that save energy year-round.',
    image: '/images/services/heat-pumps.png',
    icon: RefreshCw,
  },
  {
    id: 'ductless-mini-splits',
    title: 'Ductless Mini-Splits',
    description: 'Flexible, energy-efficient comfort for any room or addition.',
    image: '/images/services/ductless-mini-splits.png',
    icon: AirVent,
  },
  {
    id: 'ductwork',
    title: 'Ductwork',
    description: 'Custom installation, repair and cleaning for improved airflow and efficiency.',
    image: '/images/services/ductwork.png',
    icon: Waypoints,
  },
  {
    id: 'commercial-hvac',
    title: 'Commercial HVAC',
    description: 'Reliable HVAC solutions for businesses of all sizes and industries.',
    image: '/images/services/commercial-hvac.png',
    icon: Building2,
  },
  {
    id: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    description: 'Cleaner, healthier indoor air for your family and peace of mind.',
    image: '/images/services/indoor-air-quality.png',
    icon: Leaf,
  },
  {
    id: 'maintenance-repairs',
    title: 'Maintenance & Repairs',
    description: 'Keep your system running at its best with expert care and fast repairs.',
    image: '/images/services/maintenance-repairs.png',
    icon: Wrench,
  },
]

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="w-[280px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative h-44 w-full">
        <Image
          src={service.image || '/placeholder.svg'}
          alt={`${service.title} service`}
          fill
          sizes="280px"
          className="object-cover"
        />
        <span className="absolute -bottom-6 left-1/2 flex size-14 -translate-x-1/2 items-center justify-center rounded-full bg-card text-brand shadow-md ring-1 ring-border">
          <Icon className="size-6" aria-hidden="true" />
        </span>
      </div>
      <div className="px-5 pb-6 pt-9 text-center">
        <h3 className="text-lg font-bold text-brand">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
          {service.description}
        </p>
      </div>
    </article>
  )
}

export function ServicesSection() {
  return (
    <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand md:text-4xl text-center">
            Our HVAC Service
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground text-center">
            Choose best technicians and latest HVAC technology
          </p>
        </Reveal>
      </div>

      <div
        className="group relative mt-12 overflow-hidden"
        aria-label="HVAC services"
      >
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary to-transparent" />

        <div className="flex w-max animate-marquee gap-6 pt-2 pb-4 group-hover:[animation-play-state:paused]">
          {[...SERVICES, ...SERVICES].map((service, i) => (
            <ServiceCard key={`${service.id}-${i}`} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
