import { useState, useEffect, useRef } from 'react'

const WeddingInvitation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const [lifting, setLifting] = useState(false)
  const particleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!particleRef.current) return
    const container = particleRef.current
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() * 3 + 2
      p.style.cssText = `
        width:${size}px;
        height:${size}px;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        --delay:${Math.random() * 3}s;
        --duration:${Math.random() * 3 + 2}s;
      `
      container.appendChild(p)
    }
  }, [])

  const handleOpen = () => {
    if (lifting) return
    setLifting(true)
    setTimeout(() => {
      setIsOpen(true)
      setTimeout(() => setShowCard(true), 100)
    }, 700)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 20% 50%, #2d1b00 0%, #140c00 55%, #0a0500 100%)',
      }}
    >
      {/* Ambient particles */}
      <div ref={particleRef} className="absolute inset-0 pointer-events-none" />

      {/* ── ENVELOPE ── */}
      {!isOpen && (
        <div className="flex flex-col items-center z-10">
          <p
            className="text-xs mb-5 tracking-widest"
            style={{ color: '#d4a017', fontFamily: "'Playfair Display', serif", letterSpacing: '0.3em' }}
          >
            ✦ திருமண அழைப்பிதழ் ✦
          </p>

          <div
            onClick={handleOpen}
            className={`cursor-pointer select-none ${lifting ? 'envelope-lifting' : 'envelope-float'}`}
          >
            <div
              className="relative flex flex-col items-center justify-center"
              style={{
                width: 330,
                height: 220,
                background: 'linear-gradient(135deg, #fdf3d8, #f5e4aa, #e8d08a)',
                border: '2.5px solid #c9a227',
                borderRadius: 14,
                boxShadow: '0 18px 52px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.4)',
              }}
            >
              {/* Corner ornaments */}
              {(['top-2 left-3', 'top-2 right-3', 'bottom-2 left-3', 'bottom-2 right-3'] as const).map((pos, i) => (
                <span
                  key={i}
                  className={`absolute ${pos} text-xl`}
                  style={{
                    color: '#c9a227',
                    opacity: 0.45,
                    transform: i === 1 ? 'scaleX(-1)' : i === 2 ? 'scaleY(-1)' : i === 3 ? 'scale(-1)' : undefined,
                    fontFamily: 'serif',
                  }}
                >
                  ❧
                </span>
              ))}

              {/* Wax seal */}
              <div
                className="flex items-center justify-center rounded-full text-2xl"
                style={{
                  width: 62,
                  height: 62,
                  background: 'radial-gradient(circle at 35% 35%, #d4a017, #7a5800)',
                  border: '2px solid #e8c140',
                  boxShadow: '0 4px 16px rgba(212,160,23,0.55)',
                }}
              >
                💍
              </div>

              <p
                className="mt-3 text-xs tracking-widest"
                style={{ color: '#8b6914', fontFamily: "'Playfair Display', serif" }}
              >
                திறக்க தொடவும்
              </p>

              <div
                className="mt-2"
                style={{ width: 80, height: 1, background: 'linear-gradient(to right, transparent, #c9a227, transparent)' }}
              />
            </div>
          </div>

          <p className="mt-4 text-xs tracking-widest" style={{ color: '#8b6914' }}>
            ✦ ✦ ✦
          </p>
        </div>
      )}

      {/* ── CARD ── */}
      {isOpen && (
        <div
          className={`relative z-10 w-full max-w-md ${showCard ? 'card-appear' : 'opacity-0'}`}
        >
          {/* Petals */}
          <div className="flex justify-center gap-3 mb-1 text-xl opacity-60">
            <span>🌸</span><span>🌺</span><span>🌸</span>
          </div>

          {/* Card outer */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, #fef8e8, #faecc4, #f2e0a0, #ece0b4)',
              border: '3px solid #c9a227',
              boxShadow: '0 30px 80px rgba(0,0,0,0.88), 0 0 0 1px rgba(212,160,23,0.2), inset 0 1px 0 rgba(255,255,255,0.7)',
            }}
          >
            {/* Gold band top */}
            <GoldBand />

            {/* Inner border */}
            <div
              className="m-3 rounded-xl p-5 relative"
              style={{ border: '1.5px solid rgba(201,162,39,0.45)', background: 'rgba(255,255,255,0.12)' }}
            >
              <Corner pos="top-0 left-0" />
              <Corner pos="top-0 right-0" flip="x" />
              <Corner pos="bottom-0 left-0" flip="y" />
              <Corner pos="bottom-0 right-0" flip="both" />

              {/* Header */}
              <div className="text-center mb-5">
                <div className="flex items-center gap-3 mb-2">
                  <GoldLine />
                  <span className="text-2xl">🕊️</span>
                  <GoldLine />
                </div>
                <p className="text-xs tracking-widest" style={{ color: '#9b7a1a', fontFamily: "'Playfair Display', serif", letterSpacing: '0.28em' }}>
                  ✦ இருவீட்டார் அழைப்பு ✦
                </p>
                <h1
                  className="mt-1 font-bold"
                  style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#4a2800', fontSize: 22 }}
                >
                  திருமண அழைப்பிதழ்
                </h1>
                <div className="flex justify-center mt-2"><GoldLine style={{ width: 140 }} /></div>
              </div>

              {/* Groom */}
              <Person role="மண மகன்" sub="சிரேஷ்ட புத்திரன்" name="ஜித்தன்" />

              {/* Rings */}
              <div className="flex items-center gap-2 my-3">
                <GoldLine />
                <div className="flex items-center gap-2">
                  <RingDot /><span className="text-xl">💑</span><RingDot />
                </div>
                <GoldLine />
              </div>

              {/* Bride */}
              <Person role="மண மகள்" sub="சிரேஷ்ட புத்திரி" name="பவுஷ்தீனா" />

              <Divider label="⸻ ✦ ⸻" />

              {/* Church */}
              <SectionCard icon="⛪" label="திருமண கோயில்">
                <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#3d2400', fontWeight: 600, fontSize: 14 }}>
                  புனித அந்தோனியார் தேவாலயம்
                </p>
                <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#6b4c00', fontSize: 12, marginTop: 2 }}>
                  கல்மடு நாவல் நகர்
                </p>
              </SectionCard>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                <SectionCard icon="📅" label="திகதி" center>
                  <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#3d2400', fontWeight: 600, fontSize: 13 }}>24 / 06 / 2026</p>
                  <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#7a5c00', fontSize: 11, marginTop: 2 }}>புதன்கிழமை</p>
                </SectionCard>
                <SectionCard icon="🕘" label="நேரம்" center>
                  <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#3d2400', fontWeight: 600, fontSize: 13 }}>காலை 9:00</p>
                  <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#7a5c00', fontSize: 11, marginTop: 2 }}>மணி</p>
                </SectionCard>
              </div>

              {/* Hall */}
              <SectionCard icon="🏛️" label="மண்டபம்">
                <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#3d2400', fontWeight: 600, fontSize: 14 }}>Mango Mansion</p>
                <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#6b4c00', fontSize: 12, marginTop: 2 }}>
                  Asaippilai Eaththam, Murusuvil,<br />A9 Road, Jaffna
                </p>
              </SectionCard>

              <Divider label="✦ வரவேற்பாளர் ✦" small />

              {/* Hosts */}
              <div
                className="grid grid-cols-2 gap-3 text-center rounded-xl p-3"
                style={{ background: 'rgba(201,162,39,0.07)', border: '1px solid rgba(201,162,39,0.25)' }}
              >
                <ContactPerson name="அனிஸ்ராஜ் கிருத்தி" phone="076 448 7749" />
                <ContactPerson name="டெல்மன் டொய்ஸ்" phone="074 259 9636" />
              </div>

              {/* Footer */}
              <div className="text-center mt-4">
                <div className="flex justify-center mb-2"><GoldLine style={{ width: 100 }} /></div>
                <p
                  className="text-xs italic"
                  style={{ color: '#8b6914', fontFamily: "'Noto Serif Tamil', serif" }}
                >
                  உங்கள் இனிய வருகை எங்களுக்கு மகிழ்ச்சியாகும்
                </p>
                <p className="text-xs mt-1 tracking-widest" style={{ color: '#b8941a' }}>
                  ✦ இருவீட்டார் அழைப்பு ✦
                </p>
              </div>
            </div>

            {/* Gold band bottom */}
            <GoldBand />
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Sub-components ── */

const GoldBand = () => (
  <div style={{ height: 10, background: 'linear-gradient(to right, #7a5800, #d4a017, #c9a227, #d4a017, #7a5800)' }} />
)

const GoldLine = ({ style }: { style?: React.CSSProperties }) => (
  <div
    className="flex-1"
    style={{ height: 1, background: 'linear-gradient(to right, transparent, #c9a227, transparent)', ...style }}
  />
)

const Corner = ({ pos, flip }: { pos: string; flip?: 'x' | 'y' | 'both' }) => {
  const t = flip === 'x' ? 'scaleX(-1)' : flip === 'y' ? 'scaleY(-1)' : flip === 'both' ? 'scale(-1)' : undefined
  return (
    <span
      className={`absolute ${pos} text-lg leading-none`}
      style={{ color: '#c9a227', opacity: 0.45, fontFamily: 'serif', transform: t }}
    >
      ❧
    </span>
  )
}

const Divider = ({ label, small }: { label: string; small?: boolean }) => (
  <div className="flex items-center gap-2 my-3">
    <GoldLine />
    <span style={{ color: '#c9a227', fontSize: small ? 10 : 13, letterSpacing: '0.18em' }}>{label}</span>
    <GoldLine />
  </div>
)

const RingDot = () => (
  <div
    className="flex items-center justify-center rounded-full"
    style={{ width: 22, height: 22, border: '2px solid #c9a227', background: 'rgba(212,160,23,0.1)' }}
  >
    <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#c9a227' }} />
  </div>
)

const Person = ({ role, sub, name }: { role: string; sub: string; name: string }) => (
  <div className="text-center">
    <p className="text-xs tracking-widest" style={{ color: '#9b7a1a', fontFamily: "'Playfair Display', serif", letterSpacing: '0.22em' }}>
      {role}
    </p>
    <p className="text-xs mt-0.5" style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#7a5c00' }}>{sub}</p>
    <h2 className="font-bold" style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#3d2400', fontSize: 22 }}>
      {name}
    </h2>
  </div>
)

const SectionCard = ({
  icon, label, children, center,
}: {
  icon: string
  label: string
  children: React.ReactNode
  center?: boolean
}) => (
  <div
    className={`rounded-xl p-3 mb-2 ${center ? 'text-center' : 'flex gap-2 items-start'}`}
    style={{ background: 'rgba(201,162,39,0.07)', border: '1px solid rgba(201,162,39,0.28)' }}
  >
    {center ? (
      <>
        <span className="text-lg block">{icon}</span>
        <p className="text-xs tracking-widest mt-1 mb-1" style={{ color: '#9b7a1a', fontFamily: "'Playfair Display', serif" }}>
          {label}
        </p>
        {children}
      </>
    ) : (
      <>
        <span className="text-xl mt-0.5">{icon}</span>
        <div>
          <p className="text-xs tracking-widest mb-1" style={{ color: '#9b7a1a', fontFamily: "'Playfair Display', serif" }}>
            {label}
          </p>
          {children}
        </div>
      </>
    )}
  </div>
)

const ContactPerson = ({ name, phone }: { name: string; phone: string }) => (
  <div>
    <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#3d2400', fontWeight: 600, fontSize: 13 }}>{name}</p>
    <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#7a5c00', fontSize: 11, marginTop: 3 }}>📞 {phone}</p>
  </div>
)

export default WeddingInvitation
