import { useCallback, useEffect, useRef, useState } from 'react'

const EMAIL = 'hello@subtitles.yt'

function CopyEmailButton({ label, className }: { label: string; className: string }) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = EMAIL
        textArea.style.position = 'fixed'
        textArea.style.left = '-9999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      // no-op
    }
  }, [])

  return (
    <button
      type="button"
      onClick={copy}
      title={`Click to copy ${EMAIL}`}
      aria-live="polite"
      className={className}
    >
      {copied ? 'Copied!' : label}
    </button>
  )
}

export default function ClosedCaptionsSite() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/cc.svg" alt="Closed Captions & Co logo" className="h-8 w-8" />
              <span className="text-sm font-semibold tracking-tight">Closed Captions & Co</span>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
              <a href="#results" className="hover:text-gray-600">Results</a>
              <a href="#benefits" className="hover:text-gray-600">Benefits</a>
              <a href="#faq" className="hover:text-gray-600">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <CopyEmailButton
                label="Contact"
                className="inline-flex items-center rounded-xl border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              />
              <CopyEmailButton
                label="Get Started"
                className="inline-flex items-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              />
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              We subtitle your YouTube videos so you don’t have to.
            </h1>
            <p className="mt-6 text-base text-gray-600">
              Proudly serving <span className="font-semibold text-gray-900">200+ clients</span> with
              <span className="font-semibold text-gray-900"> 40M+ subscribers</span> (as of Sept. 2025).
            </p>
            <div className="mt-8 inline-flex items-center gap-3">
              <CopyEmailButton
                label="Book a free audit"
                className="inline-flex items-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              />
              <a
                href="#results"
                className="inline-flex items-center rounded-2xl border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                See the results
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM CALLOUT */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="text-2xl font-bold">YouTube’s auto‑generated captions suck. <span role="img" aria-label="nauseated face">🤮</span></h2>
            <p className="max-w-2xl text-sm text-gray-600">
              Accessibility matters. So do retention, watch time, and SEO. We fix captions properly—fast, accurate, on‑brand.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="relative" id="before-after">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Before → After</h3>
              <p className="mt-3 text-sm text-gray-600">
                Clean, human‑verified captions that match your voice. Better UX for every viewer.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-black" />
                  Clarity: timing, punctuation, casing—done right.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-black" />
                  Brand voice preserved across languages.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-black" />
                  Delivered and uploaded for you—no busywork.
                </li>
              </ul>
            </div>
            <div className="grid gap-4">
              {/* BEFORE card */}
              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="mb-2 text-xs font-semibold tracking-wide text-gray-500">BEFORE</div>
                <div className="rounded-xl bg-gray-100 p-4 text-sm text-gray-600">
                  auto caption: "captions help boost your viewership we have scene many clients grow fast get in touch now"
                </div>
              </div>
              {/* AFTER card */}
              <div className="rounded-2xl border border-blue-700 p-4 shadow-[0_2px_0_0_rgba(29,78,216,0.9)]">
                <div className="mb-2 text-xs font-semibold tracking-wide text-blue-700">AFTER</div>
                <div className="rounded-xl bg-blue-700 p-4 text-sm text-white">
                  “Captions help boost your viewership. We have scene many clients grow fast. Get in touch now!”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS / NUMBERS */}
      <section id="results" className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold">Numbers don’t lie. <span role="img" aria-label="smiling with sunglasses">😎</span></h3>
            <p className="mt-2 text-sm text-gray-600">Average stats for new clients*</p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center shadow-sm">
              <CountUpOnView
                end={8.21}
                decimals={2}
                prefix="+"
                suffix="%"
                className="text-3xl font-extrabold"
              />
              <div className="mt-1 text-sm font-semibold">Increased viewership</div>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center shadow-sm">
              <CountUpOnView
                end={14.6}
                decimals={1}
                prefix="+"
                suffix="%"
                className="text-3xl font-extrabold"
              />
              <div className="mt-1 text-sm font-semibold">Watch time</div>
            </div>
          </div>

          <p className="mx-auto mt-6 w-fit whitespace-nowrap text-center text-xs text-gray-500">
            * Data is based on 200+ clients’ average viewership before and after becoming a client—measured after 28 days of working with our firm.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BenefitCard title="🔎 SEO that ranks." desc="Indexable, keyword‑rich captions boost discoverability and long‑tail search. We also optimize titles, descriptions, and tags." />
            <BenefitCard title="📈 Retention & watch time." desc="Clearer captions reduce drop‑off and increase AVD, session duration, and completion rates." />
            <BenefitCard title="🤖 Human + AI translation." desc="Patent‑pending AI paired with linguists delivers idiomatic, on‑brand subtitles—no awkward literalism." />
            <BenefitCard title="🌍 40+ languages on tap." desc="Spanish → Hindi, plus locale variants. We maintain terminology glossaries per channel." />
            <BenefitCard title="🧑‍💻 White‑glove publishing." desc="We deliver SRT/VTT and push directly to YouTube. Optional add‑ons: chapters, thumbnails, metadata polish." />
            <BenefitCard title="🔐 Scoped access only." desc="Manager‑level permissions limited to captions. Audit trail. Revocable anytime." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h4 className="text-xl font-bold">Ready to level up your captions?</h4>
                <p className="mt-1 text-sm text-gray-600">Reply with your channel link. We’ll audit your last 5 uploads.</p>
              </div>
              <div className="flex gap-3">
                <CopyEmailButton
                  label="Get a free audit"
                  className="inline-flex items-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                />
                <CopyEmailButton
                  label="Email us"
                  className="inline-flex items-center rounded-2xl border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700 hover:border-blue-300 hover:bg-blue-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (concise) */}
      <section id="faq" className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h5 className="text-center text-sm font-semibold tracking-wide text-gray-500">FAQ</h5>
          <div className="mx-auto mt-6 max-w-3xl divide-y divide-gray-200">
            {(() => {
              const [openFaq, setOpenFaq] = useState<number | null>(null)
              const items: { q: string; a: React.ReactNode }[] = [
                {
                  q: 'How do we start?',
                  a: (
                    <button
                      type="button"
                      onClick={() => setIsContactOpen(true)}
                      className="text-blue-700 underline decoration-blue-300 underline-offset-4 hover:decoration-blue-500"
                    >
                      Get in touch
                    </button>
                  ),
                },
                { q: 'Turnaround?', a: '<24 hours, 7 days a week!' },
                { q: 'File types?', a: '.SRT, .VTT, .SBV—plus YouTube direct upload.' },
              ]
              return items.map((item, idx) => (
                <FaqRow
                  key={idx}
                  q={item.q}
                  a={item.a}
                  open={openFaq === idx}
                  onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
                />
              ))
            })()}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">
              Closed Captions & Co • Copyright 2025. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500">
              <span role="img" aria-label="United States">🇺🇸</span> Based in Atlanta, Georgia •{' '}
              <CopyEmailButton
                label={EMAIL}
                className="underline decoration-blue-300 underline-offset-4 text-blue-700 hover:text-blue-600 hover:decoration-blue-600"
              />
            </p>
          </div>
        </div>
      </footer>

      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

function BenefitCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6">
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function FaqRow({ q, a, open, onToggle }: { q: string; a: React.ReactNode; open?: boolean; onToggle?: () => void }) {
  return (
    <div className="py-4">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left text-sm font-semibold"
      >
        {q}
        <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 text-xs">
          {open ? '^' : 'v'}
        </span>
      </button>
      {open ? <div className="mt-2 pr-8 text-sm text-gray-600">{a}</div> : null}
    </div>
  )
}

type ContactModalProps = { open: boolean; onClose: () => void }

function ContactModal({ open, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const [email, setEmail] = useState('')
  const [channel, setChannel] = useState('')
  const [note, setNote] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const el = dialogRef.current
    el?.querySelector('input')?.focus()
  }, [open])

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = `Inquiry\nEmail: ${email}\nYouTube: ${channel}\nNotes: ${note || '(none)'}\n`
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(payload)
      } else {
        const ta = document.createElement('textarea')
        ta.value = payload
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
      onClose()
    } catch {
      // swallow
    }
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={handleBackdrop}>
      <div ref={dialogRef} role="dialog" aria-modal="true" className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <button type="button" aria-label="Close" onClick={onClose} className="rounded-full p-2 hover:bg-gray-100">✕</button>
        </div>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-medium text-gray-600">Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-0"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600">YouTube channel URL</label>
            <input
              type="url"
              required
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-0"
              placeholder="https://youtube.com/@yourchannel"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600">Comments (optional)</label>
            <textarea
              rows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="mt-1 w-full resize-y rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-0"
              placeholder="Anything else you want us to know?"
            />
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold hover:bg-gray-50">Cancel</button>
            <button type="submit" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              {copied ? 'Copied!' : 'Submit'}
            </button>
          </div>
          <p className="text-[11px] text-gray-500">We’ll copy your details to the clipboard so you can share or paste elsewhere.</p>
        </form>
      </div>
    </div>
  )
}

type CountUpProps = {
  end: number
  durationMs?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

function CountUpOnView({ end, durationMs = 1200, decimals = 0, prefix = '', suffix = '', className = '' }: CountUpProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(0)
  const [hasRun, setHasRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            setHasRun(true)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasRun])

  useEffect(() => {
    if (!hasRun) return
    const start = performance.now()
    const startValue = 0
    const animate = (now: number) => {
      const elapsed = now - start
      const t = Math.min(1, elapsed / durationMs)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      const current = startValue + (end - startValue) * eased
      setValue(current)
      if (t < 1) requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [hasRun, end, durationMs])

  const formatted = `${prefix}${value.toFixed(decimals)}${suffix}`
  return (
    <div ref={ref} className={className} aria-label={`${prefix}${end}${suffix}`}>
      {formatted}
    </div>
  )
}
