import { useState, useEffect, useRef } from 'react'
import { Heart, CalendarDays, Clock, MapPin, Church, Phone } from 'lucide-react'

const texts = {
  ta: {
    invitation: '✦ திருமண அழைப்பிதழ் ✦',
    tapToOpen: 'திறக்க தொடவும்',
    familiesInvite: '✦ இரு வீட்டார் அழைப்பு ✦',
    weddingInvitation: 'திருமண அழைப்பிதழ்',
    groomRole: 'மண மகன்',
    groomSub: 'திரு. திருமதி சந்திரகுமார் கிருபாமணி தம்பதிகளின் சிரேஷ்ட புத்திரன்',
    groomName: 'ஜித்தன்',
    brideRole: 'மண மகள்',
    brideSub: 'திரு. திருமதி அமலதாஸ் மெரிஸ்டெல்லா தம்பதிகளின் சிரேஷ்ட புத்திரி',
    brideName: 'மரியா பவுஸ்தீனா',
    eventDetails: 'நிகழ்வு விவரங்கள்',
    churchLabel: 'திருமண ஆலயம்',
    churchName: 'புனித அந்தோனியார் ஆலயம்',
    churchAddress: 'நாவலர் நகர், கல்மடு',
    dateLabel: 'திகதி',
    dateValue: '24 / 06 / 2026',
    dateSub: 'புதன்கிழமை',
    timeLabel: 'நேரம்',
    timeValue: 'முற்பகல் 09:00',
    timeSub: 'மணி',
    hallLabel: 'மண்டபம்',
    hallName: 'Mango Mansion',
    hallAddress: <>ஆசைப்பிள்ளை ஏத்தம், மிருசுவில்,<br />A9 Road, யாழ்ப்பாணம்</>,
    hostLabel: 'வரவேற்பாளர்',
    host1Name: 'அனிஸ்ராஜ் கிருத்தி',
    host2Name: 'டெல்மன்டொய்ஸ் ரொசானி ரெக்சி',
    footerMessage: 'இவ்வணம் தங்கள் நல்வரவை இனிதே விரும்பும்',
    greetingPrefix: 'அன்புடையீர்',
  },
  en: {
    invitation: '✦ WEDDING INVITATION ✦',
    tapToOpen: 'TAP TO OPEN',
    familiesInvite: '✦ BOTH PARTIES INVITATION ✦',
    weddingInvitation: 'Wedding Invitation',
    groomRole: 'GROOM',
    groomSub: 'Eldest Son of Mr. & Mrs. Santhirakumar Kirubamani',
    groomName: 'Jeeththan',
    brideRole: 'BRIDE',
    brideSub: 'Eldest Daughter of Mr. & Mrs. Amalathas Meristella',
    brideName: 'Maria Fausthina',
    eventDetails: 'EVENT DETAILS',
    churchLabel: 'CHURCH',
    churchName: "St. Anthony's Church",
    churchAddress: 'Navalar Nagar, Kalmadu',
    dateLabel: 'DATE',
    dateValue: '24 / 06 / 2026',
    dateSub: 'Wednesday',
    timeLabel: 'TIME',
    timeValue: '09:00 AM',
    timeSub: '',
    hallLabel: 'VENUE',
    hallName: 'Mango Mansion',
    hallAddress: <>Asaipillai Eaththam, Mirusuvil,<br />A9 Road, Jaffna</>,
    hostLabel: 'HOSTS',
    host1Name: 'Anisraj Kiruthi',
    host2Name: 'Delmandoise Rosani Rexi',
    footerMessage: 'bless the couple and thereafter join us for lunch',
    greetingPrefix: 'Dear',
  }
}

const WeddingInvitation = () => {
  const [step, setStep] = useState<'name' | 'lang' | 'envelope'>('name')
  const [userName, setUserName] = useState('')
  const [lang, setLang] = useState<'ta' | 'en'>('ta')
  
  const [opening, setOpening] = useState(false)
  const [showCard, setShowCard] = useState(false)
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
  }, [step]) // re-run particle generation when step changes since the container unmounts

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    setTimeout(() => {
      setShowCard(true)
    }, 1200)
  }

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userName.trim()) setStep('lang')
  }

  const t = texts[lang]
  const fontFam = lang === 'ta' ? "'Noto Serif Tamil', serif" : "'Playfair Display', serif"

  if (step === 'name') {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #fdf2f8 0%, #fce7f3 60%, #fbcfe8 100%)',
        }}
      >
        <div ref={particleRef} className="absolute inset-0 pointer-events-none" />
        <div className="relative z-10 bg-pink-50/90 p-8 rounded-2xl border border-[#d4af37]/40 text-center shadow-2xl w-full max-w-sm backdrop-blur-sm">
          <Heart size={36} className="text-[#d4af37] mx-auto mb-6 drop-shadow-sm" fill="currentColor" />
          <h2 className="text-[#831843] font-serif text-2xl mb-2 font-bold">Welcome</h2>
          <p className="text-[#9d174d] text-sm mb-6 font-serif">Please enter your name to continue</p>
          <form onSubmit={handleNameSubmit}>
            <input 
              type="text" 
              placeholder="Your Name..." 
              value={userName} 
              onChange={e => setUserName(e.target.value)}
              className="w-full bg-white border-2 border-pink-200 rounded-xl px-4 py-3 text-[#831843] outline-none focus:border-[#d4af37] transition-colors mb-6 text-center font-serif text-lg shadow-inner"
              autoFocus
            />
            <button 
              type="submit"
              disabled={!userName.trim()}
              className="w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#fef08a] text-[#831843] rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 shadow-md"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (step === 'lang') {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #fdf2f8 0%, #fce7f3 60%, #fbcfe8 100%)',
        }}
      >
        <div ref={particleRef} className="absolute inset-0 pointer-events-none" />
        <div className="relative z-10 bg-pink-50/90 p-8 rounded-2xl border border-[#d4af37]/40 text-center shadow-2xl w-full max-w-sm backdrop-blur-sm">
          <Heart size={36} className="text-[#d4af37] mx-auto mb-6 drop-shadow-sm" fill="currentColor" />
          <h2 className="text-[#831843] font-serif text-2xl mb-2 font-bold">Choose Language</h2>
          <p className="text-[#9d174d] text-sm mb-6 font-serif">மொழியைத் தேர்ந்தெடுக்கவும்</p>
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => { setLang('ta'); setStep('envelope'); }}
              className="w-full px-6 py-4 border-2 border-[#d4af37] text-[#831843] rounded-xl font-medium hover:bg-[#fce7f3] transition-all shadow-sm"
              style={{ fontFamily: "'Noto Serif Tamil', serif", fontSize: 18 }}
            >
              தமிழ்
            </button>
            <button 
              onClick={() => { setLang('en'); setStep('envelope'); }}
              className="w-full px-6 py-4 border-2 border-[#d4af37] text-[#831843] rounded-xl font-medium hover:bg-[#fce7f3] transition-all font-serif text-lg shadow-sm"
            >
              English
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #fdf2f8 0%, #fce7f3 60%, #fbcfe8 100%)',
      }}
    >
      {/* Ambient particles */}
      <div ref={particleRef} className="absolute inset-0 pointer-events-none" />

      {/* ── REALISTIC ENVELOPE ── */}
      <div 
        className={`absolute z-20 flex flex-col items-center transition-all duration-700 ${
          opening ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
        }`}
        style={{ transitionDelay: opening ? '1.2s' : '0s' }}
      >
        <p
          className={`text-xs mb-8 tracking-widest uppercase transition-opacity duration-300 ${opening ? 'opacity-0' : 'opacity-100'}`}
          style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", letterSpacing: '0.4em' }}
        >
          {t.invitation}
        </p>

        <div
          onClick={handleOpen}
          className={`cursor-pointer select-none group envelope-float perspective-[1000px]`}
        >
          <div
            className="relative w-[340px] h-[230px] transition-transform duration-500 group-hover:scale-105"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Envelope Back (Inside Pocket) */}
            <div 
              className="absolute inset-0 rounded-lg shadow-2xl"
              style={{ background: '#fdf2f8', border: '1px solid rgba(212,175,55,0.2)' }}
            />

            {/* The Letter inside sliding up */}
            <div 
              className={`absolute left-3 right-3 bottom-2 rounded bg-pink-50 border border-[#d4af37]/40 transition-all duration-700 ease-in-out z-10 flex flex-col items-center justify-start p-4 overflow-hidden`}
              style={{ 
                height: '210px',
                transform: opening ? 'translateY(-140px)' : 'translateY(0)',
                transitionDelay: opening ? '0.5s' : '0s'
              }}
            >
              <div className="w-16 h-1 bg-[#d4af37]/40 rounded mb-4 mt-2" />
              <Heart size={24} className="text-[#d4af37]/60 mb-4" />
              <div className="w-3/4 h-2 bg-[#d4af37]/20 rounded mb-3" />
              <div className="w-1/2 h-2 bg-[#d4af37]/20 rounded mb-3" />
              <div className="w-2/3 h-2 bg-[#d4af37]/20 rounded" />
            </div>

            {/* Envelope Front Left/Right/Bottom Flaps */}
            <div 
              className="absolute inset-0 z-20 pointer-events-none rounded-lg"
              style={{ 
                background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
                clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 65%)',
                boxShadow: 'inset 0 0 15px rgba(0,0,0,0.5)'
              }}
            >
              {/* Decorative Gold Border on Front Flaps */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <path d="M 0,0 L 170,149.5 L 340,0" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="2" />
              </svg>
            </div>

            {/* Envelope Top Flap (Opens up) */}
            <div 
              className={`absolute top-0 left-0 w-full h-[140px] origin-top transition-transform duration-700 ease-in-out z-30`}
              style={{ 
                background: 'linear-gradient(to bottom, #fdf2f8, #fce7f3)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transform: opening ? 'rotateX(180deg)' : 'rotateX(0deg)',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                zIndex: opening ? 5 : 30 // drops behind letter when open
              }}
            >
              {/* Wax Seal on Top Flap */}
              <div
                className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110"
                style={{
                  bottom: '10px',
                  width: 64,
                  height: 64,
                  background: 'radial-gradient(circle at 30% 30%, #eab308, #b45309, #78350f)',
                  border: '2px solid #fef08a',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.4)',
                }}
              >
                <Heart size={28} className="text-amber-100 drop-shadow-md" fill="currentColor" />
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <path d="M 0,0 L 170,140 L 340,0" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="2" />
              </svg>
            </div>

            {/* Top Flap Backface (Visible when open) */}
            <div 
              className={`absolute top-0 left-0 w-full h-[140px] origin-top transition-transform duration-700 ease-in-out z-0`}
              style={{ 
                background: '#fdf2f8',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transform: opening ? 'rotateX(0deg)' : 'rotateX(-180deg)',
                backfaceVisibility: 'hidden',
              }}
            />

            <p
              className={`absolute -bottom-8 w-full text-center text-[10px] tracking-widest uppercase transition-opacity duration-300 ${opening ? 'opacity-0' : 'opacity-100'}`}
              style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", letterSpacing: '0.3em' }}
            >
              {t.tapToOpen}
            </p>
          </div>
        </div>
      </div>

      {/* ── FULL CARD ── */}
      <div
        className={`relative z-10 w-full max-w-md transition-all duration-1000 ease-out ${
          showCard ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-50 pointer-events-none'
        }`}
      >
        {/* Card outer */}
        <div
          className="rounded-xl overflow-hidden relative flex flex-col max-h-[90vh]"
          style={{
            background: 'rgba(255, 240, 245, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.6)',
          }}
        >
          {/* Elegant Glow Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none" />
          
          {/* Gold band top */}
          <GoldBand className="shrink-0" />

          {/* Inner Content */}
          <div className="p-6 relative overflow-y-auto overflow-x-hidden">
            <Corner pos="top-2 left-2" />
            <Corner pos="top-2 right-2" flip="x" />
            <Corner pos="bottom-2 left-2" flip="y" />
            <Corner pos="bottom-2 right-2" flip="both" />

            {/* Header */}
            <div className="text-center mb-6 mt-2">
              <div className="flex items-center justify-center gap-4 mb-4">
                <GoldLine style={{ width: 60 }} />
                <Heart size={20} className="text-[#d4af37]" />
                <GoldLine style={{ width: 60 }} />
              </div>
              <p className="text-[10px] tracking-widest uppercase mb-3" style={{ color: '#fbbf24', fontFamily: "'Playfair Display', serif", letterSpacing: '0.3em' }}>
                {t.familiesInvite}
              </p>
              <h1
                className="mt-1 font-bold tracking-wide flex flex-col gap-1 items-center"
                style={{ fontFamily: fontFam, color: '#831843', fontSize: 26, textShadow: '0 2px 10px rgba(255,255,255,0.5)' }}
              >
                <span>{t.weddingInvitation}</span>
                <span className="text-xl text-[#9d174d] italic font-medium mt-2" style={{ fontFamily: fontFam }}>
                  {t.greetingPrefix} {userName}
                </span>
              </h1>
            </div>

            {/* Groom */}
            <Person role={t.groomRole} sub={t.groomSub} name={t.groomName} fontFam={fontFam} />

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
            <Person role={t.brideRole} sub={t.brideSub} name={t.brideName} fontFam={fontFam} />

            <Divider label={t.eventDetails} />

            {/* Church */}
            <SectionCard icon={<Church size={20} className="text-[#d4af37]" />} label={t.churchLabel}>
              <p style={{ fontFamily: fontFam, color: '#831843', fontWeight: 500, fontSize: 15, letterSpacing: '0.02em' }}>
                {t.churchName}
              </p>
              <p style={{ fontFamily: fontFam, color: '#9d174d', fontSize: 13, marginTop: 4 }}>
                {t.churchAddress}
              </p>
            </SectionCard>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <SectionCard icon={<CalendarDays size={20} className="text-[#d4af37]" />} label={t.dateLabel} center>
                <p style={{ fontFamily: fontFam, color: '#831843', fontWeight: 500, fontSize: 14 }}>{t.dateValue}</p>
                <p style={{ fontFamily: fontFam, color: '#9d174d', fontSize: 12, marginTop: 2 }}>{t.dateSub}</p>
              </SectionCard>
              <SectionCard icon={<Clock size={20} className="text-[#d4af37]" />} label={t.timeLabel} center>
                <p style={{ fontFamily: fontFam, color: '#831843', fontWeight: 500, fontSize: 14 }}>{t.timeValue}</p>
                {t.timeSub && <p style={{ fontFamily: fontFam, color: '#9d174d', fontSize: 12, marginTop: 2 }}>{t.timeSub}</p>}
              </SectionCard>
            </div>

            {/* Hall */}
            <SectionCard icon={<MapPin size={20} className="text-[#d4af37]" />} label={t.hallLabel}>
              <p style={{ fontFamily: fontFam, color: '#831843', fontWeight: 500, fontSize: 15, letterSpacing: '0.02em' }}>{t.hallName}</p>
              <p style={{ fontFamily: fontFam, color: '#9d174d', fontSize: 13, marginTop: 4, lineHeight: 1.5 }}>
                {t.hallAddress}
              </p>
            </SectionCard>

            <Divider label={t.hostLabel} small />

            {/* Hosts */}
            <div
              className="grid grid-cols-2 gap-4 text-center rounded-lg p-4 relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(180deg, rgba(252, 231, 243, 0.5), rgba(251, 207, 232, 0.5))',
                border: '1px solid rgba(212, 175, 55, 0.3)' 
              }}
            >
              <ContactPerson name={t.host1Name} phone="076 448 7749" fontFam={fontFam} />
              <ContactPerson name={t.host2Name} phone="074 259 9636" fontFam={fontFam} />
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
              <div className="flex justify-center mb-4"><GoldLine style={{ width: 120 }} /></div>
              <p
                className="text-[13px] italic mb-3"
                style={{ color: '#fbbf24', fontFamily: fontFam }}
              >
                {t.footerMessage}
              </p>
              <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: '#be185d', fontFamily: "'Playfair Display', serif" }}>
                {t.familiesInvite}
              </p>
            </div>
          </div>

          {/* Gold band bottom */}
          <GoldBand className="shrink-0" />
        </div>
      </div>
    </div>
  )
}

/* ── Sub-components ── */

const GoldBand = ({ className = "" }: { className?: string }) => (
  <div className={className} style={{ height: 4, minHeight: 4, background: 'linear-gradient(to right, transparent, #d4af37, #fef08a, #d4af37, transparent)' }} />
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

const Person = ({ role, sub, name, fontFam }: { role: string; sub: string; name: string, fontFam: string }) => (
  <div className="text-center group">
    <p className="text-[10px] uppercase mb-1" style={{ color: '#be185d', fontFamily: "'Playfair Display', serif", letterSpacing: '0.3em' }}>
      {role}
    </p>
    <p className="text-[11px] mb-2" style={{ fontFamily: fontFam, color: '#fbbf24' }}>{sub}</p>
    <h2 className="font-bold tracking-wide transition-all duration-300 group-hover:scale-105" style={{ fontFamily: fontFam, color: '#831843', fontSize: 24, textShadow: '0 2px 10px rgba(255,255,255,0.5)' }}>
      {name}
    </h2>
  </div>
)

const SectionCard = ({
  icon, label, children, center,
} : {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
  center?: boolean
}) => (
  <div
    className={`rounded-lg p-4 mb-3 relative overflow-hidden transition-all duration-300 hover:bg-pink-50/40 ${center ? 'text-center' : 'flex gap-4 items-start'}`}
    style={{ 
      background: 'linear-gradient(145deg, rgba(253, 242, 248, 0.7), rgba(252, 231, 243, 0.8))', 
      border: '1px solid rgba(212, 175, 55, 0.3)',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}
  >
    {center ? (
      <div className="flex flex-col items-center">
        <div className="mb-2 bg-pink-50/80 p-2 rounded-full border border-[#d4af37]/30">{icon}</div>
        <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: '#be185d', fontFamily: "'Playfair Display', serif" }}>
          {label}
        </p>
        {children}
      </div>
    ) : (
      <>
        <div className="mt-1 bg-pink-50/80 p-2.5 rounded-full border border-[#d4af37]/30 shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-1.5" style={{ color: '#be185d', fontFamily: "'Playfair Display', serif" }}>
            {label}
          </p>
          {children}
        </div>
      </>
    )}
  </div>
)

const ContactPerson = ({ name, phone, fontFam }: { name: string; phone: string, fontFam: string }) => (
  <div className="flex flex-col items-center">
    <p style={{ fontFamily: fontFam, color: '#831843', fontWeight: 500, fontSize: 13, letterSpacing: '0.02em' }}>{name}</p>
    <div className="flex items-center gap-1.5 mt-2 text-[#d4af37]">
      <Phone size={12} />
      <p style={{ fontFamily: fontFam, fontSize: 12 }}>{phone}</p>
    </div>
  </div>
)

export default WeddingInvitation
