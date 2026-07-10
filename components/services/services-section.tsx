'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  { id: 'heat-pump', title: 'Heat Pump', image: '/images/services/heat-pump.png' },
  { id: 'duct-pump', title: 'Duct Pump', image: '/images/services/duct-pump.png' },
  { id: 'hvac', title: 'HVAC', image: '/images/services/hvac.png' },
  { id: 'electric', title: 'Electric', image: '/images/services/electric.png' },
  { id: 'refrigeration', title: 'Refrigeration', image: '/images/services/refrigeration.png' },
  { id: 'air-conditioning', title: 'Air Conditioning', image: '/images/services/air-conditioning.png' },
]

export function ServicesSection() {
  return (
    <section className="bg-secondary py-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand md:text-4xl text-center">
            Our HVAC Service
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground text-center">
            Choose best technicians and latest HVAC technology
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mt-12">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl p-6 w-[220px] h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-200/80 group">
                <div className="flex size-28 items-center justify-center overflow-hidden rounded-xl bg-blue-50/70 transition-colors duration-300 group-hover:bg-blue-100/80">
                  <Image
                    src={service.image || '/placeholder.svg'}
                    alt={`${service.title} service`}
                    width={112}
                    height={112}
                    className="size-full object-contain"
                  />
                </div>
                <h3 className="mt-5 text-base font-bold text-brand leading-none">
                  {service.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
