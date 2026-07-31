import type { LucideIcon } from 'lucide-react'
import {
  Snowflake,
  Flame,
  RefreshCw,
  AirVent,
  Waypoints,
  Building2,
  Leaf,
  Wrench,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  image: string
  icon: LucideIcon
  /** Longer intro shown on the dedicated service page. */
  overview: string
  /** Key selling points shown as a checklist on the service page. */
  highlights: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'air-conditioning',
    title: 'Air Conditioning',
    description:
      'Installation, repair and maintenance for reliable cooling and comfort.',
    image: '/images/services/air-conditioning.png',
    icon: Snowflake,
    overview:
      'From complete system replacements to fast repairs, our certified crews keep your home cool through the hottest days. We size every unit to your square footage and climate, then handle the install, permits, and old-unit removal in a single next-day visit.',
    highlights: [
      'High-efficiency central AC installation',
      'Same-week diagnostics and repair',
      'Proper load sizing for even cooling',
      'All-inclusive pricing with no surprise fees',
    ],
  },
  {
    id: 'heating-systems',
    title: 'Heating Systems',
    description:
      'Furnaces, boilers and more to keep your home warm all winter long.',
    image: '/images/services/heating-systems.png',
    icon: Flame,
    overview:
      'Stay warm all season with a professionally installed furnace or boiler. Our technicians assess your home, recommend the right heating solution, and install it to manufacturer spec with a 10-year parts and labor warranty for lasting peace of mind.',
    highlights: [
      'Gas and electric furnace installation',
      'Boiler replacement and service',
      'Safety and efficiency inspections',
      '10-year parts & labor warranty',
    ],
  },
  {
    id: 'heat-pumps',
    title: 'Heat Pumps',
    description:
      'Efficient heating and cooling solutions that save energy year-round.',
    image: '/images/services/heat-pumps.png',
    icon: RefreshCw,
    overview:
      'Heat pumps deliver year-round comfort with a single, ultra-efficient system that both heats and cools. They can cut energy costs dramatically compared to traditional systems, and our team handles sizing, rebates, and installation end to end.',
    highlights: [
      'All-in-one heating and cooling',
      'Up to 45% lower energy use',
      'Rebate and financing guidance',
      'Whisper-quiet operation',
    ],
  },
  {
    id: 'ductless-mini-splits',
    title: 'Ductless Mini-Splits',
    description:
      'Flexible, energy-efficient comfort for any room or addition.',
    image: '/images/services/ductless-mini-splits.png',
    icon: AirVent,
    overview:
      'Perfect for additions, garages, and homes without ductwork, ductless mini-splits give you precise zone-by-zone control. Enjoy targeted comfort without the energy loss of ducts, installed cleanly and quickly by our certified specialists.',
    highlights: [
      'Zone-by-zone temperature control',
      'Ideal for additions and older homes',
      'No ductwork required',
      'Energy-efficient inverter technology',
    ],
  },
  {
    id: 'ductwork',
    title: 'Ductwork',
    description:
      'Custom installation, repair and cleaning for improved airflow and efficiency.',
    image: '/images/services/ductwork.png',
    icon: Waypoints,
    overview:
      'Leaky or undersized ducts can waste a third of your system’s energy. We design, seal, repair, and clean ductwork to restore balanced airflow, improve efficiency, and keep every room in your home comfortable.',
    highlights: [
      'Custom duct design and installation',
      'Leak sealing and airflow balancing',
      'Professional duct cleaning',
      'Improved efficiency and comfort',
    ],
  },
  {
    id: 'commercial-hvac',
    title: 'Commercial HVAC',
    description:
      'Reliable HVAC solutions for businesses of all sizes and industries.',
    image: '/images/services/commercial-hvac.png',
    icon: Building2,
    overview:
      'Keep your business running comfortably with commercial HVAC solutions built for reliability. From rooftop units to multi-zone systems, we deliver installation and maintenance plans that minimize downtime and control operating costs.',
    highlights: [
      'Rooftop and split system installs',
      'Preventive maintenance plans',
      'Minimal business disruption',
      'Scalable multi-zone solutions',
    ],
  },
  {
    id: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    description:
      'Cleaner, healthier indoor air for your family and peace of mind.',
    image: '/images/services/indoor-air-quality.png',
    icon: Leaf,
    overview:
      'Breathe easier with whole-home air quality upgrades. We install filtration, purification, humidity control, and ventilation solutions that reduce allergens, dust, and pollutants so your family enjoys cleaner, healthier air.',
    highlights: [
      'Whole-home filtration and purification',
      'Humidity and ventilation control',
      'Allergen and pollutant reduction',
      'Healthier air for your family',
    ],
  },
  {
    id: 'maintenance-repairs',
    title: 'Maintenance & Repairs',
    description:
      'Keep your system running at its best with expert care and fast repairs.',
    image: '/images/services/maintenance-repairs.png',
    icon: Wrench,
    overview:
      'Regular maintenance extends the life of your system and prevents costly breakdowns. Our tune-up plans and fast repair service keep your HVAC running efficiently year-round, with certified technicians you can count on.',
    highlights: [
      'Seasonal tune-ups and inspections',
      'Fast, reliable repair service',
      'Extended equipment lifespan',
      'Certified, background-checked techs',
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.id === slug)
}
