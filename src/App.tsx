import { useState } from 'react'
import { Mail } from 'lucide-react'

function TwitterIcon({ size = 20, color = '#EFF4FF' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GithubIcon({ size = 20, color = '#EFF4FF' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const HERO_VIDEO = '/hero.mp4'
const ABOUT_VIDEO = '/about.mp4'
const CTA_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4'

const NFT_CARDS = [
  { video: '/nft-card.mp4', score: '9/10' },
]

const NAV_LINKS = [
  { label: 'Homepage', href: '#' },
  { label: 'Gallery', href: 'https://www.instagram.com/fluff_universe' },
  { label: 'Shop', href: 'https://fluff-shop.fourthwall.com' },
]

function SocialIconsRow() {
  return (
    <div role="list" style={{ display: 'flex', flexDirection: 'row', gap: 12, justifyContent: 'center' }}>
      {[
        { Icon: Mail, label: 'Send us an email' },
        { Icon: TwitterIcon, label: 'Follow us on Twitter/X' },
        { Icon: GithubIcon, label: 'Visit our Github' },
      ].map(({ Icon, label }) => (
        <div role="listitem" key={label}>
          <button
            aria-label={label}
            className="liquid-glass"
            style={{
              borderRadius: '1rem', width: 56, height: 56,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'transparent', border: 'none', cursor: 'pointer',
              touchAction: 'manipulation',
              transition: 'background 200ms ease, transform 200ms ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1.08)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'scale(1)' }}
          >
            <Icon size={20} color="#EFF4FF" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      {/* Skip to main content — keyboard accessibility */}
      <a
        href="#main-content"
        style={{
          position: 'absolute', top: -100, left: 16, zIndex: 100,
          background: '#6FFF00', color: '#010828', padding: '8px 16px',
          fontFamily: '"Anton", sans-serif', fontSize: 14, textDecoration: 'none',
          borderRadius: 4, transition: 'top 200ms',
        }}
        onFocus={e => (e.currentTarget.style.top = '16px')}
        onBlur={e => (e.currentTarget.style.top = '-100px')}
      >
        Skip to main content
      </a>

      <div style={{ backgroundColor: '#010828', color: '#EFF4FF', minHeight: '100svh', position: 'relative' }}>

        {/* Scanline overlay */}
        <div className="scanlines" aria-hidden="true" />

        {/* Texture Overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed', inset: 0, zIndex: 50, pointerEvents: 'none',
            backgroundImage: 'url(/texture.png)', backgroundSize: 'cover',
            mixBlendMode: 'lighten', opacity: 0.6,
          }}
        />

        {/* ── SECTION 1: HERO ─────────────────────────────────── */}
        <section
          aria-label="Hero"
          style={{ position: 'relative', width: '100%', height: '100svh', overflow: 'hidden', borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
        >
          <video
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            src={HERO_VIDEO}
            autoPlay loop muted playsInline
            aria-hidden="true"
          />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(1,8,40,0.35)' }} />

          <div style={{ position: 'relative', zIndex: 10, height: '100%', maxWidth: 1831, margin: '0 auto', padding: '0 clamp(24px, 4vw, 64px)', display: 'flex', flexDirection: 'column' }}>

            {/* Header */}
            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 40, position: 'relative' }}>
              <span className="neon-glow-cream" style={{ fontFamily: '"Anton", sans-serif', fontSize: 16, textTransform: 'uppercase', color: '#EFF4FF', letterSpacing: '0.15em' }}>
                Fluff Universe
              </span>

              {/* Desktop Nav */}
              <nav aria-label="Main navigation" className="liquid-glass" id="desktop-nav" style={{ borderRadius: 28, padding: '24px 52px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                <ul style={{ display: 'flex', gap: 40, listStyle: 'none', margin: 0, padding: 0 }}>
                  {NAV_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="nav-link"
                        aria-current={href === '#' ? 'page' : undefined}
                        style={{ fontFamily: '"Anton", sans-serif', fontSize: 13, textTransform: 'uppercase', color: href === '#' ? '#6FFF00' : '#EFF4FF', textDecoration: 'none' }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile hamburger */}
              <button
                className="mobile-menu-btn"
                aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileNavOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileNavOpen(o => !o)}
                style={{
                  display: 'none', background: 'transparent', border: 'none',
                  cursor: 'pointer', padding: 8, touchAction: 'manipulation',
                  flexDirection: 'column', gap: 5,
                }}
              >
                {[0, 1, 2].map(i => (
                  <span key={i} style={{ display: 'block', width: 24, height: 2, background: '#EFF4FF', borderRadius: 2, transition: 'transform 200ms ease, opacity 200ms ease',
                    ...(mobileNavOpen && i === 0 ? { transform: 'translateY(7px) rotate(45deg)' } : {}),
                    ...(mobileNavOpen && i === 1 ? { opacity: 0 } : {}),
                    ...(mobileNavOpen && i === 2 ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}),
                  }} />
                ))}
              </button>
            </header>

            {/* Mobile nav dropdown */}
            {mobileNavOpen && (
              <nav id="mobile-nav" aria-label="Mobile navigation" className="liquid-glass mobile-nav-dropdown" style={{ borderRadius: 16, padding: '16px 24px', margin: '8px 0' }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {NAV_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={() => setMobileNavOpen(false)}
                        style={{ fontFamily: '"Anton", sans-serif', fontSize: 16, textTransform: 'uppercase', color: href === '#' ? '#6FFF00' : '#EFF4FF', textDecoration: 'none', display: 'block', padding: '4px 0' }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Hero Body */}
            <main id="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 96 }}>
              <div style={{ position: 'relative', maxWidth: 780, marginLeft: 'clamp(0px, 7vw, 128px)' }}>
                <h1
                  className="glitch-wrapper neon-glow-cream"
                  data-text="Beyond earth and ( its ) familiar boundaries"
                  style={{ fontFamily: '"Anton", sans-serif', fontSize: 'clamp(40px, 7vw, 90px)', textTransform: 'uppercase', color: '#EFF4FF', lineHeight: 1, margin: 0 }}
                >
                  Beyond earth
                  <br />
                  and ( its ) familiar
                  <br />
                  boundaries
                </h1>

                <span aria-hidden="true" className="neon-glow" style={{
                  position: 'absolute', right: -32, top: 8,
                  fontFamily: '"Condiment", cursive', fontSize: 'clamp(24px, 3.5vw, 48px)',
                  color: '#6FFF00', transform: 'rotate(-1deg)', mixBlendMode: 'exclusion',
                  opacity: 0.9, pointerEvents: 'none', userSelect: 'none',
                }}>
                  Fluff Universe collection
                </span>

                {/* Mobile social icons */}
                <div className="hero-social-mobile" style={{ display: 'none', marginTop: 32, justifyContent: 'center', gap: 12 }}>
                  <SocialIconsRow />
                </div>
              </div>
            </main>
          </div>
        </section>

        {/* ── SECTION 2: ABOUT ────────────────────────────────── */}
        <section aria-label="About Fluff Universe" style={{ position: 'relative', width: '100%', minHeight: '100svh', overflow: 'hidden' }}>
          <video
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            src={ABOUT_VIDEO}
            autoPlay loop muted playsInline
            preload="none"
            aria-hidden="true"
          />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(1,8,40,0.2)' }} />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: 1831, margin: '0 auto', padding: 'clamp(64px, 8vw, 96px) clamp(24px, 4vw, 64px)', display: 'flex', flexDirection: 'column', gap: 80 }}>
            <div className="about-row" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 64 }}>
              <div style={{ position: 'relative' }}>
                <h2 className="neon-glow-cream" style={{ fontFamily: '"Anton", sans-serif', fontSize: 'clamp(32px, 5vw, 60px)', textTransform: 'uppercase', color: '#EFF4FF', lineHeight: 1, margin: 0 }}>
                  Hello!
                  <br />
                  I'm fluff
                </h2>
                <span aria-hidden="true" className="neon-glow" style={{
                  position: 'absolute', bottom: 0, right: 0, transform: 'translateY(8px) rotate(1deg)',
                  fontFamily: '"Condiment", cursive', fontSize: 'clamp(36px, 5vw, 68px)',
                  color: '#6FFF00', mixBlendMode: 'exclusion', opacity: 0.9,
                  pointerEvents: 'none', userSelect: 'none',
                }}>
                  Fluff
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: NFT COLLECTION ───────────────────────── */}
        <section aria-label="The Fluff Universe Collection" style={{ backgroundColor: '#010828', width: '100%', padding: 'clamp(64px, 8vw, 96px) 0' }}>
          <div style={{ maxWidth: 1831, margin: '0 auto', padding: '0 clamp(24px, 4vw, 64px)' }}>
            <div style={{ marginBottom: 64 }}>
              <h2 className="neon-glow-cream" style={{ fontFamily: '"Anton", sans-serif', fontSize: 'clamp(32px, 5vw, 60px)', textTransform: 'uppercase', color: '#EFF4FF', lineHeight: 1, margin: 0 }}>
                The <span aria-hidden="true" className="neon-glow" style={{ fontFamily: '"Condiment", cursive', color: '#6FFF00' }}>Fluff</span> Universe
                <br />
                Collection
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, maxWidth: 600, margin: '0 auto' }}>
              {NFT_CARDS.map((card, i) => (
                <a
                  key={i}
                  href="https://fluff-shop.fourthwall.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View NFT — Rarity Score ${card.score} — Shop on Fourthwall`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div className="liquid-glass nft-card-wrap" style={{ borderRadius: 32, padding: 18, cursor: 'pointer' }}>
                    <div style={{ position: 'relative', paddingBottom: '100%', borderRadius: 24, overflow: 'hidden' }}>
                      <video
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        src={card.video}
                        autoPlay loop muted playsInline
                        preload="none"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="liquid-glass" style={{ marginTop: 16, borderRadius: 20, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <p style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'rgba(239,244,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                          Rarity Score:
                        </p>
                        <p style={{ fontFamily: 'ui-monospace, monospace', fontSize: 16, color: '#EFF4FF', fontWeight: 700, margin: 0 }}>
                          {card.score}
                        </p>
                      </div>
                      <div aria-hidden="true" style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #b724ff, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(139,92,246,0.5)', transition: 'transform 200ms ease' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: CTA ──────────────────────────────────── */}
        <section aria-label="Join Fluff Universe" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <video
            style={{ width: '100%', height: 'auto', display: 'block' }}
            src={CTA_VIDEO}
            autoPlay loop muted playsInline
            preload="none"
            aria-hidden="true"
          />
          {/* Gradient overlay ensures text contrast over any video frame */}
          <div className="cta-overlay" aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />

          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 'clamp(5%, 20%, 20%)', paddingLeft: 'clamp(5%, 15%, 15%)' }}>
            <div style={{ position: 'relative', textAlign: 'right' }}>
              <span aria-hidden="true" className="neon-glow" style={{
                position: 'absolute', top: 'clamp(-20px, -3vw, -48px)', left: 0,
                fontFamily: '"Condiment", cursive', fontSize: 'clamp(17px, 4vw, 68px)',
                color: '#6FFF00', mixBlendMode: 'exclusion', opacity: 0.9,
                transform: 'rotate(-1deg)', pointerEvents: 'none', userSelect: 'none',
              }}>
                Go beyond
              </span>

              <h2 className="neon-glow-cream" style={{ fontFamily: '"Anton", sans-serif', fontSize: 'clamp(28px, 4.5vw, 60px)', textTransform: 'uppercase', color: '#EFF4FF', lineHeight: 1.1, margin: 0 }}>
                <span style={{ display: 'block', marginBottom: 'clamp(16px, 3vw, 48px)' }}>JOIN US.</span>
                <span style={{ display: 'block' }}>REVEAL WHAT'S HIDDEN.</span>
                <span style={{ display: 'block' }}>DEFINE WHAT'S NEXT.</span>
                <span style={{ display: 'block' }}>FOLLOW THE SIGNAL.</span>
              </h2>
            </div>
          </div>

          {/* Social Icons — bottom-left */}
          <div style={{ position: 'absolute', left: '8%', bottom: '16%' }}>
            <div className="liquid-glass" role="list" aria-label="Social media links" style={{ borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {[
                { Icon: Mail, label: 'Send us an email' },
                { Icon: TwitterIcon, label: 'Follow us on Twitter/X' },
                { Icon: GithubIcon, label: 'Visit our Github' },
              ].map(({ Icon, label }, i) => (
                <button
                  key={label}
                  aria-label={label}
                  role="listitem"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 'clamp(48px, 14vw, 268px)', height: 'clamp(48px, 14vw, 80px)',
                    border: 'none', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    background: 'transparent', cursor: 'pointer',
                    touchAction: 'manipulation',
                    transition: 'background 200ms ease, transform 200ms ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'scale(1)' }}
                >
                  <span style={{ display: 'flex', width: 'clamp(16px, 3.5vw, 24px)', height: 'clamp(16px, 3.5vw, 24px)', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} color="#EFF4FF" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
