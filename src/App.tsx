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
      {copied ? 'Email copied to your clipboard!' : label}
    </button>
  )
}

export default function ClosedCaptionsSite() {
  const [isDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = window.localStorage.getItem('theme-pref')
    if (stored === 'dark' || stored === 'light') return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Reduce scroll jank on iOS/Firefox with passive listeners
  useEffect(() => {
    const opts: AddEventListenerOptions = { passive: true }
    const noop = () => {}
    window.addEventListener('scroll', noop, opts)
    return () => window.removeEventListener('scroll', noop, opts)
  }, [])
  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return
    const root = document.documentElement
    const body = document.body
    root.classList.toggle('dark', isDark)
    body.dataset.theme = isDark ? 'dark' : 'light'
    window.localStorage.setItem('theme-pref', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      {/* HERO */}
      <section className="relative cv-auto">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              We subtitle your YouTube videos so you don’t have to.
            </h1>
          </div>
        </div>
      </section>


      {/* BEFORE AFTER */}
      <section
        className="relative border-y border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950 cv-auto"
        id="before-after"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              
              <p className="mt-3 text-base text-gray-600 dark:text-white sm:text-lg">
                <span className="block">AI-powered language translations with nuance.</span>
                <span className="block">Always human‑verified.</span>
              </p>
              
            </div>
            <div className="grid gap-4">
              {/* BEFORE card */}
              <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
                <div className="mb-2 text-xs font-semibold tracking-wide text-gray-500 dark:text-white">
                  BEFORE <span role="img" aria-label="cross mark">❌</span>
                </div>
                <div className="rounded-xl bg-gray-100 p-4 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-200">
                  "captions help boost your viewership we have scene many clients grow fast get in touch now"
                </div>
              </div>
              {/* AFTER card */}
              <div className="rounded-2xl border-2 border-blue-700 p-5">
                <div className="mb-2 text-xs font-semibold tracking-wide text-blue-700 dark:text-white">
                  AFTER <span role="img" aria-label="check mark">✅</span>
                </div>
                <div className="rounded-2xl bg-blue-700 p-5 text-sm text-white">
                  “Captions help boost your viewership. We have scene many clients grow fast. Get in touch now!”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS / NUMBERS */}
      <section id="results" className="bg-white dark:bg-gray-950 cv-auto border-t border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 border-b border-gray-100 dark:border-gray-800">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-bold">Numbers don’t lie. <span role="img" aria-label="smiling with sunglasses">😎</span></h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-white">Average stats for new clients*</p>
            </div>

            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-transparent bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6 text-center text-gray-900 dark:border-transparent dark:from-blue-900 dark:via-indigo-800 dark:to-purple-900 dark:text-white">
                <CountUpOnView
                  end={8.21}
                  decimals={2}
                  prefix="+"
                  suffix="%"
                  className="text-3xl font-extrabold"
                />
                <div className="mt-1 text-sm font-semibold">Increased viewership</div>
              </div>
              <div className="rounded-2xl border border-transparent bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6 text-center text-gray-900 dark:border-transparent dark:from-blue-900 dark:via-indigo-800 dark:to-purple-900 dark:text-white">
                <CountUpOnView
                  end={14.6}
                  decimals={1}
                  prefix="+"
                  suffix="%"
                  className="text-3xl font-extrabold"
                />
                <div className="mt-1 text-sm font-semibold">Increased watch time</div>
              </div>
            </div>

            <p className="mx-auto mt-6 w-fit whitespace-nowrap text-center text-xs text-gray-500 dark:text-white">
              *Data is based on 200+ clients’ average viewership before and after becoming a client—measured after 28 days of working with our firm.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="relative cv-auto">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BenefitCard title="🔎 SEO that ranks" desc="Adding closed captions (aka subtitles) does more than just delight your viewers. When you add custom subtitles to your videos, you are providing YouTube with additional meta-data that helps its algorithms better understand your content. This helps YouTube place your content in relevant search results. Even better? The increased watch time gives you an added boost! Double win!" />
            <BenefitCard title="📈 Retention & watch time" desc="Clearer captions reduce drop‑off and increase AVD, session duration, and completion rates." />
            <BenefitCard title="🤖 Human + AI translation" desc="Patent‑pending AI paired with linguists delivers idiomatic, on‑brand subtitles—no awkward literalism." />
            <BenefitCard title="🌍 100+ languages on tap" desc="Spanish → Hindi, plus locale variants. We maintain terminology glossaries per channel." />
            <BenefitCard title="🧑‍💻 White‑glove publishing" desc="We deliver .SRT, .VTT, or .SBV, depending on your preference (if any). We can provide the closed caption files to you, or upload them on your behalf." />
            <BenefitCard title="🔐 Limited access only (opt.)" desc="We can provide the closed caption files to you directly or handle uploading the captions for you, whichever you prefer!" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative cv-auto">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-gray-900 sm:p-10 dark:border-gray-800 dark:bg-gray-900 dark:text-white">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Ready to level up your captions?</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Drop us a line at:{' '}
                  <CopyEmailButton
                    label={EMAIL}
                    className="text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-600 hover:decoration-blue-500 dark:text-blue-300 dark:decoration-blue-500 dark:hover:text-blue-200"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white dark:bg-gray-950 cv-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-y border-gray-100 py-16 dark:border-gray-800">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-bold">Pricing</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-white">Monthly plans. Cancel anytime.</p>
            </div>

            {(() => {
              const [tier, setTier] = useState<'under' | 'over'>('under')
              const underActive = tier === 'under'
              const overActive = tier === 'over'
              return (
                <>
                  <div className="mx-auto mt-6 flex justify-center">
                    <div className="inline-flex rounded-xl border border-gray-200 p-1 dark:border-gray-800" role="tablist" aria-label="Subscriber tier">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={underActive}
                        onClick={() => setTier('under')}
                        className={`px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer ${underActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}
                      >
                        {"<1M Subs"}
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={overActive}
                        onClick={() => setTier('over')}
                        className={`ml-1 px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer ${overActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'}`}
                      >
                        1M+ subs
                      </button>
                    </div>
                  </div>

                  <div className="mx-auto mt-6 w-full max-w-md">
                    {(() => {
                      const price = tier === 'under' ? 299 : 499
                      return (
                        <div className="w-full rounded-2xl border border-blue-200 p-10 text-center shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50 dark:border-gray-800 dark:from-gray-900 dark:to-gray-900">
                          <div className="text-4xl font-extrabold">${price}<span className="text-sm font-semibold">/mo</span></div>
                        </div>
                      )
                    })()}
                  </div>

                  <div className="mx-auto mt-6 flex max-w-5xl justify-center text-sm text-gray-600 dark:text-white">
                    Reach out anytime at:{' '}
                    <CopyEmailButton
                      label={EMAIL}
                      className="ml-1 text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-600 hover:decoration-blue-500 dark:text-blue-300 dark:decoration-blue-500 dark:hover:text-blue-200"
                    />
                  </div>
                </>
              )
            })()}

            <p className="mx-auto mt-6 w-fit text-center text-xs text-white whitespace-normal sm:whitespace-nowrap">
              Full money back if you don't see an average increase of at least 5% or more in your viewership and/or watchtime within the first 28 days.
            </p>
          </div>
        </div>
      </section>

      {/*
      <section id="faq" className="border-y border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900 cv-auto">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h5 className="text-center text-2xl font-semibold tracking-wide text-white">FAQ</h5>
          <div className="mx-auto mt-6 max-w-3xl space-y-2">
            {(() => {
              const [openFaq, setOpenFaq] = useState<number | null>(null)
              const items: { q: string; a: React.ReactNode }[] = [
                {
                  q: 'How do we kick off a project with your team?',
                  a: (
                    <button
                      type="button"
                      onClick={() => setIsContactOpen(true)}
                      className="text-blue-700 underline decoration-blue-300 underline-offset-4 hover:decoration-blue-500 dark:text-blue-300 dark:decoration-blue-500 dark:hover:text-blue-200 dark:hover:decoration-blue-300"
                    >
                      Become a client →
                    </button>
                  ),
                },
                { q: 'How fast do new captions go live?', a: 'Under 24 hours, seven days a week.' },
                {
                  q: 'Which caption formats or uploads do you handle?',
                  a: '.SRT, .VTT, .SBV, plus managed YouTube uploads with channel-safe permissions.',
                },
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
      */}

      {/* FOOTER */}
      <footer className="bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500 dark:text-white">
              Subtitles.yt • Copyright 2025. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-white">
              <span role="img" aria-label="United States">🇺🇸</span> Based in Atlanta, Georgia •{' '}
              <CopyEmailButton
                label={EMAIL}
                className="underline decoration-blue-300 underline-offset-4 text-blue-700 hover:text-blue-600 hover:decoration-blue-600 dark:text-blue-300 dark:decoration-blue-500 dark:hover:text-blue-200 dark:hover:decoration-blue-300"
              />
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100 pt-6 dark:border-gray-800" />
        </div>
      </footer>
    </div>
  )
}

function BenefitCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6">
      <h4 className="text-base font-semibold text-center">{title}</h4>
      <p className="mt-2 text-sm text-gray-600 dark:text-white">{desc}</p>
    </div>
  )
}

// (FAQ component removed as it's currently unused to satisfy TS build)

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
