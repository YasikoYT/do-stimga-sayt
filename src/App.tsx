import React, { useState, useEffect } from 'react';
import {
  Layers,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUp,
  Copy,
  CheckCircle2,
  Code2,
  Award,
  GraduationCap,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form inputs
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Typewriter effect for "Full-Stack Developer"
  const fullText = "Full-Stack Developer";
  const [typedText, setTypedText] = useState("Full-Stack Deve");

  useEffect(() => {
    let index = 14;
    let forward = true;
    const interval = setInterval(() => {
      if (forward) {
        if (index < fullText.length) {
          index++;
          setTypedText(fullText.slice(0, index));
        } else {
          forward = false;
        }
      } else {
        if (index > 10) {
          index--;
          setTypedText(fullText.slice(0, index));
        } else {
          forward = true;
        }
      }
    }, 280);

    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !contactInfo || !message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFullName('');
      setContactInfo('');
      setMessage('');
    }, 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skillsList = [
    { name: '#HTML5', desc: 'Semantik toza struktura' },
    { name: '#CSS3', desc: 'Zamonaviy stil va animatsiyalar' },
    { name: '#JavaScript', desc: 'ES6+, DOM, Asinxron dasturlash' },
    { name: '#React.js', desc: 'Komponentlar va SPA arxitekturasi' },
    { name: '#Node.js', desc: 'Server tizimlari va REST API' },
    { name: '#MongoDB', desc: 'NoSQL ma\'lumotlar bazasi' },
    { name: '#Python', desc: 'Skriptlar, botlar va algoritmlar' },
    { name: '#CEFR_B1', desc: 'Ingliz tili B1 Intermediate' },
  ];

  return (
    <div className="bg-[#fafafa] text-black min-h-screen relative font-sans selection:bg-black selection:text-white flex flex-col">
      {/* Background dot pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-subtle-dots opacity-80" />

      {/* Copy notification toast */}
      {copiedItem && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 bg-black text-white px-4 py-2.5 rounded-xl font-mono text-xs shadow-2xl flex items-center gap-2 animate-bounce border border-neutral-700">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="font-bold">{copiedItem} nusxalandi!</span>
        </div>
      )}

      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/95 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-2">
          
          {/* Left: Avatar circle + Name */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center font-black text-xs sm:text-sm tracking-wider shadow-sm shrink-0">
              MM
            </div>
            <div className="min-w-0">
              <div className="font-black text-xs sm:text-sm tracking-wider uppercase leading-tight font-sans text-black truncate">
                MUHAMMADAZIZ MUHAMMADAMINOV
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-neutral-800 leading-none mt-0.5 font-bold">
                Full-Stack Dev // 15 yosh
              </div>
            </div>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider">
            <a
              href="#hero"
              className="text-black font-extrabold border-b-2 border-black pb-1"
            >
              Asosiy
            </a>
            <a
              href="#skills"
              className="text-neutral-800 hover:text-black transition-colors font-bold"
            >
              Ko'nikmalar
            </a>
            <a
              href="#goals"
              className="text-neutral-800 hover:text-black transition-colors font-bold"
            >
              Maqsadlarim
            </a>
            <a
              href="#contact"
              className="text-neutral-800 hover:text-black transition-colors font-bold"
            >
              Bog'lanish
            </a>
          </nav>

          {/* Right Action Badges */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Age Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-400 bg-emerald-50 text-emerald-950 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Yosh: <strong className="font-black">15 yosh</strong></span>
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-4 sm:px-6 py-2 rounded-full bg-black text-white hover:bg-neutral-800 text-xs font-mono font-black tracking-wider uppercase transition-all shadow-sm"
            >
              ALOQA
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg border border-neutral-300 text-black hover:bg-neutral-100"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 py-3 bg-white border-b border-neutral-200 space-y-2 text-xs font-mono">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-black font-black"
            >
              Asosiy
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-black font-bold"
            >
              Ko'nikmalar
            </a>
            <a
              href="#goals"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-black font-bold"
            >
              Maqsadlarim
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-black font-bold"
            >
              Bog'lanish
            </a>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-20 space-y-20 flex-1">
        
        {/* HERO SECTION */}
        <section id="hero" className="text-center pt-4 sm:pt-8 pb-2">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-mono tracking-wider shadow-md mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-emerald-400 font-bold">&lt;YOSH DASTURCHINING PORTFOLIOSI&gt;</span>
          </div>

          {/* DUAL-LINE HERO TITLE (DEEP SOLID BLACK) */}
          <div className="mb-6 select-none space-y-1">
            {/* First Name (Pure Deep Black) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-tight text-black break-words">
              MUHAMMADAZIZ
            </h1>

            {/* Last Name (Solid Black with visible outline stroke) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight text-outline-black break-words">
              MUHAMMADAMINOV
            </h2>
          </div>

          {/* MUTAXASSISLIK STATUS TERMINAL BANNER */}
          <div className="max-w-xl mx-auto mb-6 px-1">
            <div className="rounded-2xl bg-[#090d16] border border-cyan-500/50 p-3 sm:px-5 sm:py-3.5 shadow-[0_0_25px_rgba(6,182,212,0.18)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-emerald-400 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold">
                    • MUTAXASSISLIK
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white font-mono flex items-center">
                    <span>{typedText}</span>
                    <span className="inline-block w-2 h-4 bg-amber-400 ml-1 animate-blink" />
                  </div>
                </div>
              </div>

              {/* Tag pill right */}
              <div className="border border-amber-500/50 bg-amber-500/15 text-amber-300 font-mono text-xs px-3 py-1 rounded-full font-bold tracking-wider shrink-0 self-start sm:self-auto flex items-center gap-1">
                <span>NODE + REACT</span>
                <span>⚡</span>
              </div>
            </div>
          </div>

          {/* HASHTAG PILLS */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-2xl mx-auto mb-8 px-2">
            {skillsList.map((skill) => (
              <span
                key={skill.name}
                className="px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-mono font-bold transition-colors shadow-sm cursor-default"
                title={skill.desc}
              >
                {skill.name}
              </span>
            ))}
          </div>

          {/* HERO SHORT BIO (PURE BLACK & ULTRA LEGIBLE) */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-black font-semibold leading-relaxed font-sans px-2">
            Mening ismim <strong className="text-black font-black">Muhammadaziz Muhammadaminov Muzaffarovich</strong>. 
            Men 15 yoshdaman va dasturlash bilan astoydil shug'ullanib kelayotgan professional yosh full-stack dasturchiman. 
            O'zbekiston, Surxondaryo viloyati Denov tumanidagi 
            <strong className="text-black font-black"> 80-maktabda</strong> ta'lim olaman va 
            <strong className="text-emerald-700 font-black"> +2 yillik amaliy tajribaga</strong> egaman.
          </p>

        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="pt-4">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-black block mb-1">
              02 // TEXNOLOGIK IMKONIYATLAR
            </span>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-black">
              Men ishlatadigan texnologiyalar
            </h3>
            <div className="w-14 h-1.5 bg-black mt-2 mb-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm hover:border-black transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold font-mono mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-black text-base text-black mb-1">HTML5 & CSS3</h4>
              <p className="text-xs text-black leading-relaxed font-semibold">
                Semantik toza struktura, to'liq responsive dizayn, Tailwind CSS va zamonaviy web andozalari.
              </p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm hover:border-black transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold font-mono mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-black text-base text-black mb-1">JavaScript & React</h4>
              <p className="text-xs text-black leading-relaxed font-semibold">
                ES6+ asinxron dasturlash, komponentlar tizimi, Custom Hooks va dinamik interfeyslar.
              </p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm hover:border-black transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold font-mono mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-black text-base text-black mb-1">Node.js & MongoDB</h4>
              <p className="text-xs text-black leading-relaxed font-semibold">
                Express.js server, RESTful API, NoSQL ma'lumotlar bazasi va xavfsiz backend arxitekturasi.
              </p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm hover:border-black transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold font-mono mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-black text-base text-black mb-1">Python & CEFR B1</h4>
              <p className="text-xs text-black leading-relaxed font-semibold">
                Skriptlar, avtomatlashtirish, Telegram botlar hamda xalqaro CEFR B1 ingliz tili darajasi.
              </p>
            </div>
          </div>
        </section>

        {/* GOALS SECTION */}
        <section id="goals">
          <div className="rounded-3xl bg-white border-2 border-neutral-200 shadow-sm p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Heading and info */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-black tracking-wider uppercase mb-3">
                  <span>◎ 03 // MARRALAR VA REJALAR</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black leading-[1.2]">
                  Mening keyingi marralarim va maqsadlarim.
                </h3>
                <div className="w-14 h-1.5 bg-black mt-4 mb-6" />
                <p className="text-sm text-black leading-relaxed font-semibold">
                  15 yosh - bu katta yo'lning boshlanishi. Men yaqin kelajakda quyidagi muhim loyihalarni ishga tushirishni va ta'lim tizimini rivojlantirishni maqsad qilganman.
                </p>

                <div className="mt-8 pt-6 border-t border-neutral-200 space-y-2 text-xs font-mono text-black font-bold">
                  <div>• O'zbekiston, Surxondaryo viloyati, Denov</div>
                  <div>• 80-Maktab o'quvchisi // +2 Tajriba</div>
                </div>
              </div>

              {/* Right Column: 2x2 Goal Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Goal 1 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50 border-2 border-neutral-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-xs font-mono mb-3 shadow-sm">
                    1
                  </div>
                  <h4 className="font-mono font-black text-xs uppercase tracking-wider text-black mb-2">
                    AJOYIB DASTURLAR YASASH
                  </h4>
                  <p className="text-xs text-black leading-relaxed font-semibold">
                    Men kelajakda insonlar hayotini osonlashtiradigan, yuqori sifatli va foydali ajoyib dasturlar yasayman.
                  </p>
                </div>

                {/* Goal 2 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50 border-2 border-neutral-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xs font-mono mb-3 shadow-sm">
                    2
                  </div>
                  <h4 className="font-mono font-black text-xs uppercase tracking-wider text-black mb-2">
                    SUN'IY INTELLEKT VA PYTHON LOYIHALARI
                  </h4>
                  <p className="text-xs text-black leading-relaxed font-semibold">
                    Python va zamonaviy neyron tarmoqlardan foydalanib, avtomatlashtirilgan aqlli AI platformalarni yaratish.
                  </p>
                </div>

                {/* Goal 3 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50 border-2 border-neutral-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-black text-xs font-mono mb-3 shadow-sm">
                    3
                  </div>
                  <h4 className="font-mono font-black text-xs uppercase tracking-wider text-black mb-2">
                    YOSH DASTURCHILAR HAMJAMIYATI
                  </h4>
                  <p className="text-xs text-black leading-relaxed font-semibold">
                    O'zbekistonda yoshlar orasida eng faol va do'stona IT o'quv hamjamiyatini shakllantirish va tengdoshlarga yordam berish.
                  </p>
                </div>

                {/* Goal 4 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50 border-2 border-neutral-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs font-mono mb-3 shadow-sm">
                    4
                  </div>
                  <h4 className="font-mono font-black text-xs uppercase tracking-wider text-black mb-2">
                    XALQARO IT SERTIFIKATSIYALAR
                  </h4>
                  <p className="text-xs text-black leading-relaxed font-semibold">
                    Full-Stack va zamonaviy veb-arxitektura bo'yicha dunyo miqyosidagi nufuzli IT sertifikatlarini muvaffaqiyatli topshirish.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="pt-2">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-800 font-black block mb-1">
              04 // MENGA BOG'LANING
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
              Menga bog'laning.
            </h3>
            <div className="w-14 h-1.5 bg-black mt-2 mb-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Card: Black Card */}
            <div className="lg:col-span-5 bg-black text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between border-2 border-neutral-900">
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-white mb-3">
                  Sizni eshitishdan xursandman
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
                  Yangi loyihalar, takliflar yoki savollaringiz bo'lsa, istalgan vaqtda xabar qoldiring. Men tez fursatda javob qaytaraman.
                </p>

                {/* Email Box */}
                <div 
                  onClick={() => copyToClipboard('33muxam33@gmail.com', 'Email')}
                  className="bg-neutral-900 hover:bg-neutral-800 transition-colors rounded-2xl p-3.5 sm:p-4 mb-3 flex items-center gap-3 cursor-pointer group border border-neutral-800"
                >
                  <div className="text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                      EMAIL MANZIL
                    </div>
                    <div className="text-xs font-mono font-black text-white truncate group-hover:text-emerald-400 transition-colors">
                      33muxam33@gmail.com
                    </div>
                  </div>
                  <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0" />
                </div>

                {/* Location Box */}
                <div className="bg-neutral-900 rounded-2xl p-3.5 sm:p-4 mb-3 flex items-center gap-3 border border-neutral-800">
                  <div className="text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                      YASHASH JOYI
                    </div>
                    <div className="text-xs font-mono font-black text-white leading-tight">
                      O'zbekiston, Surxondaryo, Denov (80-maktab)
                    </div>
                  </div>
                </div>

                {/* Telegram Box */}
                <a
                  href="https://t.me/m77_azz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 hover:bg-neutral-800 transition-colors rounded-2xl p-3.5 sm:p-4 mb-3 flex items-center gap-3 group block border border-neutral-800"
                >
                  <div className="text-emerald-400 shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                      TELEGRAM PROFIL
                    </div>
                    <div className="text-xs font-mono font-black text-white group-hover:text-emerald-400 transition-colors">
                      @m77_azz (Bog'lanish)
                    </div>
                  </div>
                </a>

                {/* Phone Box */}
                <a
                  href="tel:+998884790031"
                  className="bg-neutral-900 hover:bg-neutral-800 transition-colors rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 group block border border-neutral-800"
                >
                  <div className="text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                      TELEFON RAQAM
                    </div>
                    <div className="text-xs font-mono font-black text-white group-hover:text-emerald-400 transition-colors">
                      +998 884790031
                    </div>
                  </div>
                </a>
              </div>

              {/* Bottom copyright line inside black card */}
              <div className="pt-6 mt-6 border-t border-neutral-800 text-[10px] font-mono text-neutral-400 uppercase tracking-widest leading-relaxed font-bold">
                MUHAMMADAZIZ MUHAMMADAMINOV // BARCHA HUQUQLAR HIMOYALANGAN
              </div>
            </div>

            {/* Right Card: White Card Form */}
            <div className="lg:col-span-7 rounded-3xl bg-white border-2 border-neutral-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              
              {isSubmitted ? (
                <div className="py-16 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-black">
                    Xabaringiz 100% yuborildi!
                  </h4>
                  <p className="text-xs text-black max-w-sm mx-auto font-bold">
                    Katta rahmat! Muhammadaziz xabaringizni oldi va tez fursatda siz bilan bog'lanadi.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-black mb-1.5 font-black">
                      ISM FAMILYANGIZ *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Masalan: Abdullayev Temur"
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 bg-white text-black placeholder-neutral-500 text-xs sm:text-sm font-mono font-bold focus:border-black outline-none transition-colors"
                    />
                  </div>

                  {/* Email / Phone field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-black mb-1.5 font-black">
                      EMAIL YOKI TELEFON RAQAMINGIZ *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="Masalan: +998884790031 yoki 33muxam33@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 bg-white text-black placeholder-neutral-500 text-xs sm:text-sm font-mono font-bold focus:border-black outline-none transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-black mb-1.5 font-black">
                      XABARINGIZ MATNI
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Menga taklif yoki loyihangiz haqida yozing..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 bg-white text-black placeholder-neutral-500 text-xs sm:text-sm font-mono font-bold focus:border-black outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Large Black Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-mono text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>XABARNI 100% YUBORISH (SMS VA EMAIL)</span>
                  </button>

                </form>
              )}

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER BAR */}
      <footer className="border-t border-neutral-200 bg-white py-6 px-4 sm:px-8 transition-colors relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-black text-center sm:text-left font-bold">
          <div>
            MUHAMMADAZIZ MUHAMMADAMINOV // PORTFOLIO (15 YOSH)
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>O'ZBEKISTON, SURXONDARYO, DENOV</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 hidden sm:inline-block" />
            <a href="mailto:33muxam33@gmail.com" className="hover:underline font-black text-black">
              33MUXAM33@GMAIL.COM
            </a>
          </div>
        </div>
      </footer>

      {/* BOTTOM-RIGHT FLOATING SCROLL-TO-TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-4 sm:right-6 z-40 w-11 h-11 rounded-full bg-black text-white hover:bg-neutral-800 flex items-center justify-center shadow-xl transition-transform hover:scale-105 cursor-pointer"
        aria-label="Tepaga qaytish"
        title="Tepaga qaytish"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </div>
  );
}
