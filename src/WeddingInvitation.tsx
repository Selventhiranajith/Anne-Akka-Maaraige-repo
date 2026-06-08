import { useState, useEffect, useRef } from 'react'
import { Heart, CalendarDays, Clock, MapPin, Church, Phone } from 'lucide-react'

const WeddingInvitation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const [lifting, setLifting] = useState(false)
  const particleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!particleRef.current) return
    const container = particleRef.current
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() * 3 + 1
      p.style.cssText = `
        width:${size}px;
        height:${size}px;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        --delay:${Math.random() * 3}s;
        --duration:${Math.random() * 4 + 2}s;
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
    }, 800)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 60%, #020617 100%)',
      }}
    >
      {/* Ambient particles */}
      <div ref={particleRef} className="absolute inset-0 pointer-events-none" />

      {/* ── ENVELOPE ── */}
      {!isOpen && (
        <div className="flex flex-col items-center z-10">
          <p
            className="text-xs mb-8 tracking-widest uppercase"
            style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", letterSpacing: '0.4em' }}
          >
            ✦ திருமண அழைப்பிதழ் ✦
          </p>

          <div
            onClick={handleOpen}
            className={`cursor-pointer select-none group ${lifting ? 'envelope-lifting' : 'envelope-float'}`}
          >
            <div
              className="relative flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105"
              style={{
                width: 340,
                height: 230,
                background: 'linear-gradient(135deg, #0f172a, #1e293b, #0f172a)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: 8,
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(212,175,55,0.05)',
              }}
            >
              {/* Envelope Flap Lines */}
              <div 
                className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-lg"
                style={{
                  background: 'linear-gradient(to bottom right, transparent 49%, rgba(212,175,55,0.2) 50%, transparent 51%)'
                }}
              />
              <div 
                className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-lg"
                style={{
                  background: 'linear-gradient(to bottom left, transparent 49%, rgba(212,175,55,0.2) 50%, transparent 51%)'
                }}
              />

              {/* Corner ornaments */}
              {(['top-3 left-4', 'top-3 right-4', 'bottom-3 left-4', 'bottom-3 right-4'] as const).map((pos, i) => (
                <span
                  key={i}
                  className={`absolute ${pos} text-xl`}
                  style={{
                    color: '#d4af37',
                    opacity: 0.6,
                    transform: i === 1 ? 'scaleX(-1)' : i === 2 ? 'scaleY(-1)' : i === 3 ? 'scale(-1)' : undefined,
                    fontFamily: 'serif',
                  }}
                >
                  ❧
                </span>
              ))}

              {/* Wax seal */}
              <div
                className="flex items-center justify-center rounded-full text-white z-10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: 64,
                  height: 64,
                  background: 'radial-gradient(circle at 30% 30%, #eab308, #b45309, #78350f)',
                  border: '2px solid #fef08a',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.4)',
                }}
              >
                <Heart size={28} className="text-amber-100 drop-shadow-md" fill="currentColor" />
              </div>

              <p
                className="mt-6 text-[10px] tracking-widest uppercase z-10"
                style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", letterSpacing: '0.3em' }}
              >
                திறக்க தொடவும்
              </p>

              <div
                className="mt-3 z-10"
                style={{ width: 100, height: 1, background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.8), transparent)' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── CARD ── */}
      {isOpen && (
        <div
          className={`relative z-10 w-full max-w-md ${showCard ? 'card-appear' : 'opacity-0'}`}
        >
          {/* Card outer */}
          <div
            className="rounded-xl overflow-hidden relative"
            style={{
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)',
            }}
          >
            {/* Elegant Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none" />
            
            {/* Gold band top */}
            <GoldBand />

            {/* Inner Content */}
            <div className="p-6 relative">
              <Corner pos="top-2 left-2" />
              <Corner pos="top-2 right-2" flip="x" />
              <Corner pos="bottom-2 left-2" flip="y" />
              <Corner pos="bottom-2 right-2" flip="both" />

              {/* Header */}
              <div className="text-center mb-8 mt-2">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <GoldLine style={{ width: 60 }} />
                  <Heart size={20} className="text-[#d4af37]" />
                  <GoldLine style={{ width: 60 }} />
                </div>
                <p className="text-[10px] tracking-widest uppercase mb-3" style={{ color: '#fbbf24', fontFamily: "'Playfair Display', serif", letterSpacing: '0.3em' }}>
                  ✦ இருவீட்டார் அழைப்பு ✦
                </p>
                <h1
                  className="mt-1 font-bold tracking-wide"
                  style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#f8fafc', fontSize: 26, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                >
                  திருமண அழைப்பிதழ்
                </h1>
              </div>

              {/* Groom */}
              <Person role="மண மகன்" sub="சிரேஷ்ட புத்திரன்" name="ஜித்தன்" />

              {/* Rings */}
              <div className="flex items-center justify-center gap-4 my-6">
                <GoldLine />
                <div className="flex items-center gap-3">
                  <RingDot />
                  <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center bg-amber-500/10 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <Heart size={18} className="text-[#d4af37]" fill="currentColor" />
                  </div>
                  <RingDot />
                </div>
                <GoldLine />
              </div>

              {/* Bride */}
              <Person role="மண மகள்" sub="சிரேஷ்ட புத்திரி" name="பவுஷ்தீனா" />

              <Divider label="நிகழ்வு விவரங்கள்" />

              {/* Church */}
              <SectionCard icon={<Church size={20} className="text-[#d4af37]" />} label="திருமண கோயில்">
                <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#f8fafc', fontWeight: 500, fontSize: 15, letterSpacing: '0.02em' }}>
                  புனித அந்தோனியார் தேவாலயம்
                </p>
                <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#cbd5e1', fontSize: 13, marginTop: 4 }}>
                  கல்மடு நாவல் நகர்
                </p>
              </SectionCard>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <SectionCard icon={<CalendarDays size={20} className="text-[#d4af37]" />} label="திகதி" center>
                  <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#f8fafc', fontWeight: 500, fontSize: 14 }}>24 / 06 / 2026</p>
                  <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#cbd5e1', fontSize: 12, marginTop: 2 }}>புதன்கிழமை</p>
                </SectionCard>
                <SectionCard icon={<Clock size={20} className="text-[#d4af37]" />} label="நேரம்" center>
                  <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#f8fafc', fontWeight: 500, fontSize: 14 }}>காலை 9:00</p>
                  <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#cbd5e1', fontSize: 12, marginTop: 2 }}>மணி</p>
                </SectionCard>
              </div>

              {/* Hall */}
              <SectionCard icon={<MapPin size={20} className="text-[#d4af37]" />} label="மண்டபம்">
                <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#f8fafc', fontWeight: 500, fontSize: 15, letterSpacing: '0.02em' }}>Mango Mansion</p>
                <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#cbd5e1', fontSize: 13, marginTop: 4, lineHeight: 1.5 }}>
                  Asaippilai Eaththam, Murusuvil,<br />A9 Road, Jaffna
                </p>
              </SectionCard>

              <Divider label="வரவேற்பாளர்" small />

              {/* Hosts */}
              <div
                className="grid grid-cols-2 gap-4 text-center rounded-lg p-4 relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))',
                  border: '1px solid rgba(212, 175, 55, 0.15)' 
                }}
              >
                <ContactPerson name="அனிஸ்ராஜ் கிருத்தி" phone="076 448 7749" />
                <ContactPerson name="டெல்மன் டொய்ஸ்" phone="074 259 9636" />
              </div>

              {/* Footer */}
              <div className="text-center mt-8">
                <div className="flex justify-center mb-4"><GoldLine style={{ width: 120 }} /></div>
                <p
                  className="text-[13px] italic mb-3"
                  style={{ color: '#fbbf24', fontFamily: "'Noto Serif Tamil', serif" }}
                >
                  உங்கள் இனிய வருகை எங்களுக்கு மகிழ்ச்சியாகும்
                </p>
                <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: '#94a3b8', fontFamily: "'Playfair Display', serif" }}>
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
  <div style={{ height: 4, background: 'linear-gradient(to right, transparent, #d4af37, #fef08a, #d4af37, transparent)' }} />
)

const GoldLine = ({ style }: { style?: React.CSSProperties }) => (
  <div
    className="flex-1"
    style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.6), transparent)', ...style }}
  />
)

const Corner = ({ pos, flip }: { pos: string; flip?: 'x' | 'y' | 'both' }) => {
  const t = flip === 'x' ? 'scaleX(-1)' : flip === 'y' ? 'scaleY(-1)' : flip === 'both' ? 'scale(-1)' : undefined
  return (
    <span
      className={`absolute ${pos} text-2xl leading-none pointer-events-none select-none`}
      style={{ color: '#d4af37', opacity: 0.3, fontFamily: 'serif', transform: t }}
    >
      ❧
    </span>
  )
}

const Divider = ({ label, small }: { label: string; small?: boolean }) => (
  <div className="flex items-center justify-center gap-4 my-6">
    <GoldLine />
    <span style={{ 
      color: '#d4af37', 
      fontSize: small ? 10 : 12, 
      letterSpacing: '0.2em',
      fontFamily: "'Playfair Display', serif",
      textTransform: 'uppercase'
    }}>
      {label}
    </span>
    <GoldLine />
  </div>
)

const RingDot = () => (
  <div
    className="flex items-center justify-center rounded-full"
    style={{ width: 12, height: 12, border: '1px solid rgba(212,175,55,0.5)', background: 'transparent' }}
  >
    <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#d4af37' }} />
  </div>
)

const Person = ({ role, sub, name }: { role: string; sub: string; name: string }) => (
  <div className="text-center group">
    <p className="text-[10px] uppercase mb-1" style={{ color: '#94a3b8', fontFamily: "'Playfair Display', serif", letterSpacing: '0.3em' }}>
      {role}
    </p>
    <p className="text-[11px] mb-2" style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#fbbf24' }}>{sub}</p>
    <h2 className="font-bold tracking-wide transition-all duration-300 group-hover:scale-105" style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#f8fafc', fontSize: 24, textShadow: '0 2px 10px rgba(255,255,255,0.1)' }}>
      {name}
    </h2>
  </div>
)

const SectionCard = ({
  icon, label, children, center,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
  center?: boolean
}) => (
  <div
    className={`rounded-lg p-4 mb-3 relative overflow-hidden transition-all duration-300 hover:bg-slate-800/40 ${center ? 'text-center' : 'flex gap-4 items-start'}`}
    style={{ 
      background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.6))', 
      border: '1px solid rgba(212, 175, 55, 0.15)',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    }}
  >
    {center ? (
      <div className="flex flex-col items-center">
        <div className="mb-2 bg-slate-800/80 p-2 rounded-full border border-[#d4af37]/30">{icon}</div>
        <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: '#94a3b8', fontFamily: "'Playfair Display', serif" }}>
          {label}
        </p>
        {children}
      </div>
    ) : (
      <>
        <div className="mt-1 bg-slate-800/80 p-2.5 rounded-full border border-[#d4af37]/30 shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-1.5" style={{ color: '#94a3b8', fontFamily: "'Playfair Display', serif" }}>
            {label}
          </p>
          {children}
        </div>
      </>
    )}
  </div>
)

const ContactPerson = ({ name, phone }: { name: string; phone: string }) => (
  <div className="flex flex-col items-center">
    <p style={{ fontFamily: "'Noto Serif Tamil', serif", color: '#f8fafc', fontWeight: 500, fontSize: 13, letterSpacing: '0.02em' }}>{name}</p>
    <div className="flex items-center gap-1.5 mt-2 text-[#d4af37]">
      <Phone size={12} />
      <p style={{ fontFamily: "'Noto Serif Tamil', serif", fontSize: 12 }}>{phone}</p>
    </div>
  </div>
)

export default WeddingInvitation
