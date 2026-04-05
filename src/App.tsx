import { Mail } from 'lucide-react'

function TwitterIcon({ size = 20, color = '#EFF4FF' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GithubIcon({ size = 20, color = '#EFF4FF' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const HERO_VIDEO = '/hero.mp4'
const ABOUT_VIDEO = '/about.mp4'
const CTA_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4'

const NFT_CARDS = [
  {
    video: '/nft-card.mp4',
    score: '9/10',
  },
]


function SocialIconsRow() {
  return (
    <div className="flex flex-row gap-3 justify-center">
      {[
        { Icon: Mail, label: 'Mail' },
        { Icon: TwitterIcon, label: 'Twitter' },
        { Icon: GithubIcon, label: 'Github' },
      ].map(({ Icon, label }) => (
        <button
          key={label}
          aria-label={label}
          className="liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
        >
          <Icon size={20} color="#EFF4FF" />
        </button>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div style={{ backgroundColor: '#010828', color: '#EFF4FF', minHeight: '100vh', position: 'relative' }}>
      {/* Texture Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          pointerEvents: 'none',
          backgroundImage: 'url(/texture.png)',
          backgroundSize: 'cover',
          mixBlendMode: 'lighten',
          opacity: 0.6,
        }}
      />

      {/* ─────────────────────────────────────────────────────── */}
      {/* SECTION 1: HERO                                         */}
      {/* ─────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
        <video
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          src={HERO_VIDEO}
          autoPlay loop muted playsInline
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(1,8,40,0.35)' }} />

        <div style={{ position: 'relative', zIndex: 10, height: '100%', maxWidth: 1831, margin: '0 auto', padding: '0 64px', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 40 }}>
            <span style={{ fontFamily: '"Anton", sans-serif', fontSize: 16, textTransform: 'uppercase', color: '#EFF4FF', letterSpacing: '0.15em' }}>
              Fluff Universe
            </span>

            {/* Center Nav */}
            <nav className="liquid-glass" id="desktop-nav" style={{ borderRadius: 28, padding: '24px 52px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
              <ul style={{ display: 'flex', gap: 40, listStyle: 'none', margin: 0, padding: 0 }}>
                {[
                  { label: 'Homepage', href: '#' },
                  { label: 'Gallery', href: 'https://www.instagram.com/fluff_universe' },
                  { label: 'Shop', href: 'https://fluff-shop.fourthwall.com' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontFamily: '"Anton", sans-serif', fontSize: 13, textTransform: 'uppercase', color: '#EFF4FF', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#6FFF00')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#EFF4FF')}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

          </div>

          {/* Hero Body */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 96 }}>
            <div style={{ position: 'relative', maxWidth: 780, marginLeft: 128 }}>
              <h1 style={{
                fontFamily: '"Anton", sans-serif',
                fontSize: 'clamp(40px, 7vw, 90px)',
                textTransform: 'uppercase',
                color: '#EFF4FF',
                lineHeight: 1,
                margin: 0,
              }}>
                Beyond earth
                <br />
                and ( its ) familiar
                <br />
                boundaries
              </h1>

              {/* Cursive Accent */}
              <span style={{
                position: 'absolute',
                right: -32,
                top: 8,
                fontFamily: '"Condiment", cursive',
                fontSize: 'clamp(24px, 3.5vw, 48px)',
                color: '#6FFF00',
                transform: 'rotate(-1deg)',
                mixBlendMode: 'exclusion',
                opacity: 0.9,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>
                Fluff Universe collection
              </span>

              {/* Mobile social icons */}
              <div className="hero-social-mobile" style={{ display: 'none', marginTop: 32, justifyContent: 'center', gap: 12 }}>
                <SocialIconsRow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* SECTION 2: ABOUT                                        */}
      {/* ─────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
        <video
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          src={ABOUT_VIDEO}
          autoPlay loop muted playsInline
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(1,8,40,0.2)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1831, margin: '0 auto', padding: '96px 64px', display: 'flex', flexDirection: 'column', gap: 80 }}>
          {/* Top Row */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 64 }}>
            {/* Left Heading */}
            <div style={{ position: 'relative' }}>
              <h2 style={{
                fontFamily: '"Anton", sans-serif',
                fontSize: 'clamp(32px, 5vw, 60px)',
                textTransform: 'uppercase',
                color: '#EFF4FF',
                lineHeight: 1,
                margin: 0,
              }}>
                Hello!
                <br />
                I'm fluff
              </h2>
              <span style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translateY(8px) rotate(1deg)',
                fontFamily: '"Condiment", cursive',
                fontSize: 'clamp(36px, 5vw, 68px)',
                color: '#6FFF00',
                mixBlendMode: 'exclusion',
                opacity: 0.9,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>
                Fluff
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* SECTION 3: NFT COLLECTION GRID                          */}
      {/* ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#010828', width: '100%', padding: '96px 0' }}>
        <div style={{ maxWidth: 1831, margin: '0 auto', padding: '0 64px' }}>
          {/* Header Row */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginBottom: 64 }}>
            {/* Left Heading */}
            <div>
              <div style={{ fontFamily: '"Anton", sans-serif', fontSize: 'clamp(32px, 5vw, 60px)', textTransform: 'uppercase', color: '#EFF4FF', lineHeight: 1 }}>
                The <span style={{ fontFamily: '"Condiment", cursive', color: '#6FFF00' }}>Fluff</span> Universe
              </div>
              <div style={{ fontFamily: '"Anton", sans-serif', fontSize: 'clamp(32px, 5vw, 60px)', textTransform: 'uppercase', color: '#EFF4FF', lineHeight: 1 }}>
                Collection
              </div>
            </div>

            {/* Right: See All Button */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
                <span style={{ fontFamily: '"Anton", sans-serif', fontSize: 'clamp(32px, 5vw, 60px)', textTransform: 'uppercase', color: '#EFF4FF', lineHeight: 1 }}>
                  SEE
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, paddingBottom: 4 }}>
                  <span style={{ fontFamily: '"Anton", sans-serif', fontSize: 'clamp(20px, 3vw, 36px)', textTransform: 'uppercase', color: '#EFF4FF' }}>
                    ALL
                  </span>
                  <span style={{ fontFamily: '"Anton", sans-serif', fontSize: 'clamp(20px, 3vw, 36px)', textTransform: 'uppercase', color: '#EFF4FF' }}>
                    CREATORS
                  </span>
                </div>
              </div>
              <div style={{ width: '100%', height: 8, backgroundColor: '#6FFF00', marginTop: 8 }} />
            </div>
          </div>

          {/* Card Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, maxWidth: 600, margin: '0 auto' }}>
            {NFT_CARDS.map((card, i) => (
              <a key={i} href="https://fluff-shop.fourthwall.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="liquid-glass" style={{ borderRadius: 32, padding: 18, cursor: 'pointer' }}>
                  {/* Square video */}
                  <div style={{ position: 'relative', paddingBottom: '100%', borderRadius: 24, overflow: 'hidden' }}>
                    <video
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                      src={card.video}
                      autoPlay loop muted playsInline
                    />
                  </div>

                  {/* Bottom bar */}
                  <div className="liquid-glass" style={{ marginTop: 16, borderRadius: 20, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'rgba(239,244,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                        Rarity Score:
                      </p>
                      <p style={{ fontFamily: 'ui-monospace, monospace', fontSize: 16, color: '#EFF4FF', fontWeight: 700, margin: 0 }}>
                        {card.score}
                      </p>
                    </div>
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #b724ff, #7c3aed)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(139,92,246,0.5)',
                    }}>
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

      {/* ─────────────────────────────────────────────────────── */}
      {/* SECTION 4: CTA / FINAL                                  */}
      {/* ─────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <video
          style={{ width: '100%', height: 'auto', display: 'block' }}
          src={CTA_VIDEO}
          autoPlay loop muted playsInline
        />

        {/* Text overlay — right-aligned */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
          paddingRight: '20%', paddingLeft: '15%',
        }}>
          <div style={{ position: 'relative', textAlign: 'right' }}>
            {/* "Go beyond" cursive */}
            <span style={{
              position: 'absolute',
              top: 'clamp(-20px, -3vw, -48px)',
              left: 0,
              fontFamily: '"Condiment", cursive',
              fontSize: 'clamp(17px, 4vw, 68px)',
              color: '#6FFF00',
              mixBlendMode: 'exclusion',
              opacity: 0.9,
              transform: 'rotate(-1deg)',
              pointerEvents: 'none',
              userSelect: 'none',
            }}>
              Go beyond
            </span>

            <h2 style={{
              fontFamily: '"Anton", sans-serif',
              fontSize: 'clamp(16px, 4.5vw, 60px)',
              textTransform: 'uppercase',
              color: '#EFF4FF',
              lineHeight: 1,
              margin: 0,
            }}>
              <span style={{ display: 'block', marginBottom: 'clamp(16px, 3vw, 48px)' }}>JOIN US.</span>
              <span style={{ display: 'block' }}>REVEAL WHAT'S HIDDEN.</span>
              <span style={{ display: 'block' }}>DEFINE WHAT'S NEXT.</span>
              <span style={{ display: 'block' }}>FOLLOW THE SIGNAL.</span>
            </h2>
          </div>
        </div>

        {/* Social Icons — bottom-left */}
        <div style={{ position: 'absolute', left: '8%', bottom: '16%' }}>
          <div className="liquid-glass" style={{ borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {[
              { Icon: Mail, label: 'Mail' },
              { Icon: TwitterIcon, label: 'Twitter' },
              { Icon: GithubIcon, label: 'Github' },
            ].map(({ Icon, label }, i) => (
              <button
                key={label}
                aria-label={label}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 'clamp(48px, 14vw, 268px)',
                  height: 'clamp(48px, 14vw, 80px)',
                  border: 'none',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  background: 'transparent', cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
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
  )
}
