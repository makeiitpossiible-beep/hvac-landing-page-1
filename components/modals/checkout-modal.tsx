'use client'

import { useEffect, useState } from 'react'
import {
  X,
  Check,
  CalendarDays,
  CreditCard,
  PartyPopper,
  Loader2,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { formatCurrency, getNextDayLabel } from '@/lib/format'
import type { PricingTier } from '@/lib/constants'

interface CheckoutModalProps {
  tier: PricingTier | null
  open: boolean
  onClose: () => void
}

const TIME_SLOTS = ['8:00 AM – 12:00 PM', '12:00 PM – 4:00 PM', '4:00 PM – 7:00 PM']
const STEPS = ['Details', 'Schedule', 'Financing', 'Confirmed'] as const

export function CheckoutModal({ tier, open, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState(0)
  const [slot, setSlot] = useState<string | null>(null)
  const [approving, setApproving] = useState(false)
  const [contact, setContact] = useState({ name: '', email: '', phone: '' })
  const nextDay = getNextDayLabel()

  // Reset whenever a new tier is opened.
  useEffect(() => {
    if (open) {
      setStep(0)
      setSlot(null)
      setApproving(false)
      setContact({ name: '', email: '', phone: '' })
    }
  }, [open, tier])

  // Lock body scroll + close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open || !tier) return null

  const detailsValid =
    contact.name.trim() && contact.email.trim() && contact.phone.trim()

  const runFinancing = () => {
    setApproving(true)
    setTimeout(() => {
      setApproving(false)
      setStep(3)
    }, 1600)
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Schedule your ${tier.name} installation`}
    >
      {/* Overlay */}
      <button
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 animate-fade-in bg-brand-dark/60 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-background shadow-2xl duration-300 animate-in slide-in-from-bottom-6 sm:rounded-2xl sm:fade-in">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border bg-secondary px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-steel-blue">
              {tier.seer} · {tier.name}
            </p>
            <p className="mt-1 text-2xl font-bold text-foreground">
              {formatCurrency(tier.price)}
              <span className="ml-1 text-sm font-medium text-muted-foreground">
                or {formatCurrency(tier.monthlyPayment)}/mo
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Stepper */}
        <ol className="flex items-center gap-1 border-b border-border px-6 py-3">
          {STEPS.map((label, i) => (
            <li key={label} className="flex flex-1 items-center gap-1">
              <span
                className={cn(
                  'flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors',
                  i < step && 'bg-success text-white',
                  i === step && 'bg-brand text-white',
                  i > step && 'bg-muted text-muted-foreground',
                )}
              >
                {i < step ? <Check className="size-3.5" /> : i + 1}
              </span>
              <span
                className={cn(
                  'hidden text-xs font-medium sm:block',
                  i === step ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {label}
              </span>
            </li>
          ))}
        </ol>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {step === 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Your contact details
              </h3>
              <Field
                label="Full name"
                value={contact.name}
                onChange={(v) => setContact((c) => ({ ...c, name: v }))}
                placeholder="Jordan Rivera"
                type="text"
              />
              <Field
                label="Email"
                value={contact.email}
                onChange={(v) => setContact((c) => ({ ...c, email: v }))}
                placeholder="jordan@email.com"
                type="email"
              />
              <Field
                label="Phone"
                value={contact.phone}
                onChange={(v) => setContact((c) => ({ ...c, phone: v }))}
                placeholder="(555) 012-3456"
                type="tel"
              />
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Pick an install window
              </h3>
              <div className="flex items-center gap-2 rounded-lg bg-success-soft px-4 py-3 text-sm font-medium text-success">
                <CalendarDays className="size-4" />
                Earliest availability: {nextDay}
              </div>
              <div className="grid gap-3">
                {TIME_SLOTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSlot(s)}
                    className={cn(
                      'flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all',
                      slot === s
                        ? 'border-steel-blue bg-steel-blue/5 text-foreground ring-1 ring-steel-blue'
                        : 'border-border text-foreground hover:border-steel-blue/50 hover:bg-muted',
                    )}
                  >
                    {s}
                    {slot === s && <Check className="size-4 text-steel-blue" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Flexible financing
              </h3>
              <div className="rounded-xl border border-border bg-secondary p-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">
                    Estimated monthly
                  </span>
                  <span className="text-2xl font-bold text-foreground">
                    {formatCurrency(tier.monthlyPayment)}/mo
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Pre-qualification takes under a minute and won&apos;t affect
                  your credit score. Prefer to pay in full? You can choose that
                  at checkout.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="size-4 text-success" />
                Soft credit check · No obligation
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center py-4 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-success-soft text-success">
                <PartyPopper className="size-8" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                You&apos;re approved &amp; booked!
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Your {tier.name} install is reserved for{' '}
                <span className="font-semibold text-foreground">{nextDay}</span>
                {slot ? `, ${slot}` : ''}. A certified supervisor will call{' '}
                {contact.name || 'you'} within 10 minutes to confirm the details.
              </p>
              <dl className="mt-5 w-full space-y-2 rounded-lg bg-secondary p-4 text-left text-sm">
                <Row label="System" value={`${tier.name} (${tier.seer})`} />
                <Row label="Total" value={formatCurrency(tier.price)} />
                <Row
                  label="Monthly"
                  value={`${formatCurrency(tier.monthlyPayment)}/mo`}
                />
              </dl>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="border-t border-border px-6 py-4">
          {step === 0 && (
            <Button
              size="lg"
              disabled={!detailsValid}
              onClick={() => setStep(1)}
              className="w-full gap-2 bg-orange font-semibold text-primary-foreground hover:bg-orange-light disabled:opacity-50"
            >
              Continue to scheduling <ChevronRight className="size-4" />
            </Button>
          )}
          {step === 1 && (
            <Button
              size="lg"
              disabled={!slot}
              onClick={() => setStep(2)}
              className="w-full gap-2 bg-orange font-semibold text-primary-foreground hover:bg-orange-light disabled:opacity-50"
            >
              Continue to financing <ChevronRight className="size-4" />
            </Button>
          )}
          {step === 2 && (
            <Button
              size="lg"
              disabled={approving}
              onClick={runFinancing}
              className="w-full gap-2 bg-orange font-semibold text-primary-foreground hover:bg-orange-light"
            >
              {approving ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Checking
                  eligibility…
                </>
              ) : (
                <>
                  <CreditCard className="size-4" /> Pre-qualify &amp; book
                </>
              )}
            </Button>
          )}
          {step === 3 && (
            <Button
              size="lg"
              onClick={onClose}
              className="w-full bg-brand font-semibold text-brand-foreground hover:bg-brand-light"
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder: string
  type: string
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </label>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  )
}
