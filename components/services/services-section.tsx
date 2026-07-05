'use client'

import { Reveal } from '@/components/reveal'

function HeatPumpIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Stands */}
      <line x1="26" y1="58" x2="26" y2="64" strokeWidth="2.5" />
      <line x1="54" y1="58" x2="54" y2="64" strokeWidth="2.5" />
      {/* Cabinet */}
      <rect x="18" y="20" width="44" height="38" rx="4" />
      {/* Left fan */}
      <circle cx="30" cy="39" r="8" />
      <path d="M30 31v16M22 39h16M24.3 33.3l11.4 11.4M24.3 44.7l11.4-11.4" strokeWidth="1.2" />
      {/* Right fan */}
      <circle cx="50" cy="39" r="8" />
      <path d="M50 31v16M42 39h16M44.3 33.3l11.4 11.4M44.3 44.7l11.4-11.4" strokeWidth="1.2" />
      {/* Pipes on left */}
      <path d="M12 28h6M10 34h8M12 28c-2 0-2 6-2 6" />
    </svg>
  )
}

function DuctPumpIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Main outer chassis */}
      <rect x="22" y="18" width="36" height="44" rx="3" />
      {/* Vertical divider */}
      <line x1="40" y1="18" x2="40" y2="62" />
      {/* Left side grills/fans */}
      <circle cx="31" cy="30" r="6" />
      <path d="M31 24v12M25 30h12" strokeWidth="1.2" />
      <circle cx="31" cy="50" r="6" />
      <path d="M31 44v12M25 50h12" strokeWidth="1.2" />
      {/* Right side details (filter grids) */}
      <rect x="45" y="24" width="8" height="32" rx="1" strokeWidth="1.2" />
      <line x1="45" y1="32" x2="53" y2="32" strokeWidth="1.2" />
      <line x1="45" y1="40" x2="53" y2="40" strokeWidth="1.2" />
      <line x1="45" y1="48" x2="53" y2="48" strokeWidth="1.2" />
      {/* Duct connector pipe at the right edge */}
      <path d="M58 34h5v10h-5" />
    </svg>
  )
}

function HVACIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Tall outdoor dual-fan unit */}
      <rect x="26" y="16" width="28" height="48" rx="4" />
      {/* Fan 1 (top) */}
      <circle cx="40" cy="29" r="8" />
      <path d="M40 21v16M32 29h16M34.3 23.3l11.4 11.4M34.3 34.7l11.4-11.4" strokeWidth="1.2" />
      {/* Fan 2 (bottom) */}
      <circle cx="40" cy="51" r="8" />
      <path d="M40 43v16M32 51h16M34.3 45.3l11.4 11.4M34.3 56.7l11.4-11.4" strokeWidth="1.2" />
      {/* Grill details on the side */}
      <line x1="26" y1="40" x2="54" y2="40" strokeDasharray="2 3" />
    </svg>
  )
}

function ElectricIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Plug body */}
      <rect x="33" y="34" width="14" height="16" rx="3" />
      {/* Prongs */}
      <line x1="37" y1="26" x2="37" y2="34" strokeWidth="2.2" />
      <line x1="43" y1="26" x2="43" y2="34" strokeWidth="2.2" />
      {/* Cord */}
      <path d="M40 50v10c0 2-2 4-5 4" />
      {/* Lightning bolts */}
      {/* Left bolt */}
      <path d="M22 36h4l-2.5 5.5 4-5h-3.5z" fill="currentColor" stroke="none" />
      {/* Right bolt */}
      <path d="M54 36h4l-2.5 5.5 4-5h-3.5z" fill="currentColor" stroke="none" />
      {/* Top bolt */}
      <path d="M38 16h4l-2.5 5.5 4-5h-3.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function RefrigerationIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Cabinet */}
      <rect x="18" y="20" width="44" height="40" rx="4" />
      {/* Grill circular fan */}
      <circle cx="33" cy="40" r="10" />
      <path d="M33 30v20M23 40h20M25.9 32.9l14.2 14.2M25.9 47.1l14.2-14.2" strokeWidth="1.2" />
      {/* Control panel grids */}
      <rect x="49" y="28" width="6" height="24" rx="1" strokeWidth="1.2" />
      <line x1="49" y1="36" x2="55" y2="36" strokeWidth="1.2" />
      <line x1="49" y1="44" x2="55" y2="44" strokeWidth="1.2" />
      {/* Pipes */}
      <path d="M12 28h6M14 34h4" />
    </svg>
  )
}

function AirConditioningIcon() {
  return (
    <svg viewBox="0 0 80 80" className="size-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Wall unit */}
      <rect x="16" y="24" width="48" height="18" rx="2" />
      {/* Deflector blade open at bottom */}
      <line x1="20" y1="42" x2="60" y2="42" strokeWidth="1.5" />
      {/* Slats / display on front */}
      <rect x="52" y="29" width="6" height="3" rx="0.5" strokeWidth="1.2" />
      <line x1="22" y1="33" x2="44" y2="33" strokeDasharray="3 3" />
      {/* Flow / Wind lines blowing down */}
      <path d="M26 48l-2 6M34 49l-3 7M46 49l3 7M54 48l2 6" strokeWidth="1.2" />
      {/* Snowflake 1 */}
      <g transform="translate(30, 64)" strokeWidth="1">
        <line x1="-3" y1="0" x2="3" y2="0" />
        <line x1="0" y1="-3" x2="0" y2="3" />
        <line x1="-2" y1="-2" x2="2" y2="2" />
        <line x1="-2" y1="2" x2="2" y2="-2" />
      </g>
      {/* Snowflake 2 */}
      <g transform="translate(40, 64)" strokeWidth="1">
        <line x1="-3" y1="0" x2="3" y2="0" />
        <line x1="0" y1="-3" x2="0" y2="3" />
        <line x1="-2" y1="-2" x2="2" y2="2" />
        <line x1="-2" y1="2" x2="2" y2="-2" />
      </g>
      {/* Snowflake 3 */}
      <g transform="translate(50, 64)" strokeWidth="1">
        <line x1="-3" y1="0" x2="3" y2="0" />
        <line x1="0" y1="-3" x2="0" y2="3" />
        <line x1="-2" y1="-2" x2="2" y2="2" />
        <line x1="-2" y1="2" x2="2" y2="-2" />
      </g>
    </svg>
  )
}

const SERVICES = [
  { id: 'heat-pump', title: 'Heat Pump', icon: HeatPumpIcon },
  { id: 'duct-pump', title: 'Duct Pump', icon: DuctPumpIcon },
  { id: 'hvac', title: 'HVAC', icon: HVACIcon },
  { id: 'electric', title: 'Electric', icon: ElectricIcon },
  { id: 'refrigeration', title: 'Refrigeration', icon: RefrigerationIcon },
  { id: 'air-conditioning', title: 'Air Conditioning', icon: AirConditioningIcon },
]

export function ServicesSection() {
  return (
    <section className="bg-secondary py-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Our HVAC Service
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Choose best technicians and latest HVAC technology
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mt-12">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={i * 100}>
                <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl p-8 w-[220px] h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-200/80 group">
                  <div className="flex size-20 items-center justify-center rounded-full bg-blue-50/70 text-blue-600 transition-colors duration-300 group-hover:bg-blue-100/80">
                    <Icon />
                  </div>
                  <h3 className="mt-6 text-base font-bold text-brand leading-none">
                    {service.title}
                  </h3>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
