import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Gavel, Phone, PhoneCall, MapPin } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const HERO_SLIDES = [
    { desktop: "/images/HERO-D-1.webp", mobile: "/images/HERO-M-1.webp" },
    { desktop: "/images/kemanusiaan.png", mobile: "/images/kemanusiaan.png" },
    { desktop: "/images/patung-garuda.jpg", mobile: "/images/patung-garuda.jpg" },
];

export const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { lang } = useLanguage();
    const t = translations[lang].home;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const heroLines = t.heroTitle.split("\n");

    return (
        <>
            {/* HERO */}
            <section
                id="top"
                data-testid="hero-section"
                className="relative w-full flex flex-col lg:h-screen lg:min-h-[800px] bg-[#5C130C] lg:bg-[#1a0a08] overflow-hidden"
            >
                {/* Desktop Background */}
                <div className="hidden lg:block absolute inset-0 z-0 w-full h-full">
                    {HERO_SLIDES.map((slide, idx) => (
                        <img
                            key={slide.desktop}
                            src={slide.desktop}
                            alt={`Background ${idx + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === idx ? "opacity-100" : "opacity-0"}`}
                            loading={idx === 0 ? "eager" : "lazy"}
                        />
                    ))}
                    {currentSlide !== 0 && (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 bg-[#5C130C] mix-blend-multiply opacity-30 pointer-events-none" />
                        </>
                    )}
                </div>

                {/* Mobile Background */}
                <div className="relative lg:hidden w-full h-[55vh] min-h-[400px] z-0">
                    {HERO_SLIDES.map((slide, idx) => (
                        <img
                            key={slide.mobile}
                            src={slide.mobile}
                            alt={`Background ${idx + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === idx ? "opacity-100" : "opacity-0"}`}
                            loading={idx === 0 ? "eager" : "lazy"}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#5C130C]" />
                </div>

                {/* Main Content */}
                <div className={`relative z-10 w-full flex-1 flex flex-col justify-start lg:justify-center px-6 lg:px-24 xl:px-32 -mt-16 lg:mt-0 pb-12 lg:pb-0 ${currentSlide === 0 ? "lg:hidden" : ""}`}>
                    <div className="w-full max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
                        <h1 className="text-white font-serif-display font-bold text-3xl sm:text-5xl lg:text-[4.5rem] uppercase leading-[1.2] mb-3 lg:mb-6 drop-shadow-lg">
                            {heroLines[0]}<br />{heroLines[1]}
                        </h1>
                        <p className="text-white/90 text-[13px] sm:text-base lg:text-xl max-w-sm lg:max-w-md mx-auto lg:mx-0 mb-8 drop-shadow-md lg:font-medium">
                            {t.heroSubtitle}
                        </p>
                        <div className="flex flex-row gap-3 lg:gap-6 w-full justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                            <Link to="/kontak" className="flex-1 lg:flex-none lg:w-48 bg-white hover:bg-gray-100 text-[#5C130C] rounded-full py-3.5 px-2 flex items-center justify-center gap-2 font-bold text-[13px] lg:text-base shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
                                <Phone className="w-4 h-4 lg:w-5 lg:h-5" /> {t.heroContact}
                            </Link>
                            <Link to="/layanan" className="flex-1 lg:flex-none lg:w-48 bg-white hover:bg-gray-100 text-[#5C130C] rounded-full py-3.5 px-2 flex items-center justify-center gap-2 font-bold text-[13px] lg:text-base shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
                                <Gavel className="w-4 h-4 lg:w-5 lg:h-5" /> {t.heroServices}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* TENTANG KAMI — Visi & Misi */}
            <section className="relative bg-white overflow-hidden">
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5C130C] via-[#D4AF37] to-[#5C130C]" />

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

                        {/* Left — Brand Identity */}
                        <div className="relative">
                            {/* Watermark */}
                            <div className="absolute -left-8 -top-8 w-48 opacity-[0.07] pointer-events-none">
                                <img src="/images/LBH-Gardanusa-MainLogo.webp" alt="" className="w-full h-full object-contain grayscale" />
                            </div>

                            <div className="relative">
                                <div className="divider-gold mb-3">{t.aboutLabel}</div>
                                <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-black font-bold leading-tight tracking-tight mb-4">
                                    {t.aboutHeading1}<br />
                                    <span className="text-[#5C130C]">{t.aboutHeading2}</span>
                                </h2>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 max-w-lg">
                                    {t.aboutDesc}
                                </p>

                                <Link
                                    to="/tentang"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C130C] hover:text-[#D4AF37] transition-colors group"
                                >
                                    {t.aboutLink}
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="relative mb-2 overflow-hidden group">
                            <div className="aspect-3/2  overflow-hidden">
                                <img
                                    src="/images/lbh-gardhatara.webp"
                                    alt="Kelima Anggota LBH Gardhatara"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5C130C]/80 via-transparent to-transparent" />
                            {/* Bottom label */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-end justify-between">
                            </div>
                        </div>
                        {/* Right — Visi & Misi Cards */}
                        <div className="flex flex-col gap-3">
                            {/* Visi */}
                            <div className="relative bg-[#5C130C] rounded-2xl p-6 overflow-hidden group">
                                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#D4AF37]/20 blur-xl" />
                                <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-1">{t.visiLabel}</div>
                                <h3 className="text-white font-serif-display text-xl font-bold mb-2">{t.visiTitle}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {t.visiText}
                                </p>
                            </div>
                            <div className="relative bg-[#5C130C] rounded-2xl p-6 overflow-hidden group">
                                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#D4AF37]/20 blur-xl" />
                                <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-1">{t.misiLabel}</div>
                                <p className="text-white text-sm leading-relaxed">
                                    {t.misiItems.map((item, i) => (
                                        <span key={i}>- {item}{i < t.misiItems.length - 1 && <br />}</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KONSULTASI — Hubungi Kami */}
            <section className="relative bg-[#1a0a08] overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#5C130C] opacity-60 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                        {/* Left — CTA Text */}
                        <div>
                            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-4">
                                <span className="h-px w-6 bg-[#D4AF37]" />
                                {t.ctaLabel}
                            </div>
                            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight mb-4">
                                {t.ctaHeading1}
                                <span className="italic text-[#D4AF37]">{t.ctaHeading2}</span>
                            </h2>
                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                                {t.ctaDesc.split("gratis").map((part, i, arr) =>
                                    i < arr.length - 1
                                        ? <span key={i}>{part}<strong className="text-white">{lang === "id" ? "gratis" : "free"}</strong></span>
                                        : <span key={i}>{part}</span>
                                )}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/kontak"
                                    className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C5A059] text-[#5C130C] px-7 py-3.5 font-bold text-sm tracking-wide transition-colors rounded-full"
                                >
                                    {t.ctaBtn1}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a
                                    href={`https://wa.me/${BRAND.whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] px-7 py-3.5 font-semibold text-sm tracking-wide transition-colors rounded-full"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    {t.ctaBtn2}
                                </a>
                            </div>
                        </div>

                        {/* Right — Info Kontak Cards */}
                        <div className="flex flex-col gap-4 hidden md:block">
                            <a
                                href={`tel:${BRAND.phone}`}
                                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-5 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/25 transition-colors">
                                    <PhoneCall className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold mb-0.5">{t.ctaPhone}</div>
                                    <div className="text-white font-semibold text-sm">{BRAND.phone}</div>
                                </div>
                            </a>

                            <a
                                href={`https://wa.me/${BRAND.whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-5 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/25 transition-colors">
                                    <MessageCircle className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold mb-0.5">{t.ctaWa}</div>
                                    <div className="text-white font-semibold text-sm">{BRAND.whatsappNumber}</div>
                                </div>
                            </a>

                            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold mb-0.5">{t.ctaAddress}</div>
                                    <div className="text-white text-sm leading-relaxed">
                                        {BRAND.address.line1}<br />
                                        {BRAND.address.line2}<br />
                                        {BRAND.address.city}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
