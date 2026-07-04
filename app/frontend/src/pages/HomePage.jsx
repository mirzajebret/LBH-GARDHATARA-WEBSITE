import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Scale, MessageSquare, MessageCircle, Gavel, GraduationCap, Search, Instagram, Facebook, Twitter, Youtube, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Testimonials } from "@/components/site/Testimonials";

const HERO_TILES = [
    {
        id: "Title",
        title: "Tolak Militerisasi",
        titleLine2: "Di Ruang Sipil",
        sub: "Ketika senjata masuk ruang publik, demokrasi mulai retak.",
        img: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        href: "/program",
        featured: true,
    },
    {
        id: "kriminalisasi-korban",
        title: "Kriminalisasi",
        titleLine2: "Korban",
        sub: "Saat yang lemah diadili, keadilan tinggal ilusi.",
        desc: "Memberikan pendampingan hukum bagi mereka yang dikriminalisasi oleh sistem.",
        img: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        href: "/layanan",
    },
    {
        id: "reklamasi",
        title: "Tolak",
        titleLine2: "Reklamasi",
        sub: "Proyek ambisius, sarat akan korupsi.",
        desc: "Melindungi pesisir dan komunitas nelayan dari pembangunan sepihak.",
        img: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        href: "/program",
    },
    {
        id: "warga-kritis",
        title: "Menjadi",
        titleLine2: "Warga Kritis",
        sub: "Untuk demokrasi yang jernih.",
        desc: "Mendorong partisipasi aktif masyarakat dalam pengawasan kekuasaan.",
        img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        href: "/program",
    },
    {
        id: "lawan-penggusuran",
        title: "Lawan Penggusuran",
        titleLine2: "Paksa",
        sub: "Perampas hak tempat tinggal.",
        desc: "Memperjuangkan hak atas hunian yang layak bagi setiap warga.",
        img: "https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        href: "/layanan",
    },
    {
        id: "lawan-kriminalisasi",
        title: "Lawan",
        titleLine2: "Kriminalisasi",
        sub: "Pembungkaman gerakan rakyat.",
        desc: "Melawan pembungkaman gerakan rakyat melalui kriminalisasi hukum.",
        img: "https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        href: "/layanan",
    },
];

const STAT_ITEMS = [
    { value: "500+", label: "Kasus Didampingi" },
    { value: "12", label: "Tahun Pengabdian" },
    { value: "100%", label: "Integritas" },
];

const FEATURED_SERVICES = [
    {
        title: "Bantuan Hukum",
        desc: "Pendampingan hukum pro bono bagi masyarakat yang membutuhkan perlindungan dan keadilan hukum.",
        href: "/layanan#bantuan-hukum",
    },
    {
        title: "Konsultasi Hukum",
        desc: "Konsultasi dan solusi atas berbagai persoalan hukum yang Anda hadapi bersama tim advokat profesional.",
        href: "/layanan#konsultasi",
    },
    {
        title: "Advokasi & Penyuluhan",
        desc: "Pendampingan hak-hak masyarakat dan edukasi hukum melalui seminar, pelatihan, dan kampanye publik.",
        href: "/layanan#advokasi",
    },
];

const RECENT_ARTICLES = [
    {
        img: "images/pro-bono2.webp",
        category: "Berita & Kegiatan",
        date: "12 Nov 2025",
        title: "Pentingnya Bantuan Hukum Pro Bono : Bergabung Dalam Gerakan Pro Bono",
    },
    {
        img: "images/bantuan-hukum.webp",
        category: "Artikel Hukum",
        date: "05 Nov 2025",
        title: "Bantuan Hukum adalah Hak Kita",
    },
    {
        img: "images/ruu.webp",
        category: "Kajian Kebijakan",
        date: "28 Okt 2025",
        title: "Telaah Kritis atas RUU Perlindungan Pekerja Sektor Informal",
    },
];

const SERVICE_CARDS = [
    { id: "konsultasi", title: "Konsultasi Hukum", href: "/layanan#konsultasi", Icon: MessageSquare },
    { id: "advokasi", title: "Advokasi Hukum", href: "/layanan#advokasi", Icon: Gavel },
    { id: "pendidikan", title: "Pendidikan Hukum Publik", href: "/layanan#pendidikan", Icon: GraduationCap },
    { id: "posbantuan", title: "Pos Bantuan Hukum", href: "/layanan#bantuan", Icon: Scale },
    { id: "kajian", title: "Kajian Kebijakan Hukum", href: "/layanan#kajian", Icon: Search },
];

const HERO_SLIDES = [
    "/images/sosial.png",
    "/images/kemanusiaan.png",
    "/images/patung-garuda.jpg",
];

export const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            {/* HERO — Responsive Layout matching Mobile Design */}
            <section
                id="top"
                data-testid="hero-section"
                className="relative w-full flex flex-col lg:h-screen lg:min-h-[800px] bg-[#5C130C] lg:bg-[#1a0a08] overflow-hidden lg:pt-0"
            >
                {/* Desktop Background (Full screen) */}
                <div className="hidden lg:block absolute inset-0 z-0 w-full h-full">
                    {HERO_SLIDES.map((src, idx) => (
                        <img
                            key={src}
                            src={src}
                            alt={`Background ${idx + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === idx ? "opacity-60" : "opacity-0"}`}
                            loading={idx === 0 ? "eager" : "lazy"}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-[#5C130C] mix-blend-multiply opacity-50 pointer-events-none" />
                </div>

                {/* Mobile Background Image (Top half) */}
                <div className="relative lg:hidden w-full h-[55vh] min-h-[400px] z-0">
                    {HERO_SLIDES.map((src, idx) => (
                        <img
                            key={src}
                            src={src}
                            alt={`Background ${idx + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === idx ? "opacity-100" : "opacity-0"}`}
                            loading={idx === 0 ? "eager" : "lazy"}
                        />
                    ))}
                    {/* Gradient to blend into maroon bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#5C130C]" />
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 w-full flex-1 flex flex-col justify-start lg:justify-center px-6 lg:px-24 xl:px-32 -mt-16 lg:mt-0 pb-12 lg:pb-32">
                    <div className="w-full max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
                        <h1 className="text-white font-serif-display font-bold text-3xl sm:text-5xl lg:text-[4.5rem] uppercase leading-[1.2] mb-3 lg:mb-6 drop-shadow-lg">
                            Bantuan Hukum<br />Untuk Semua
                        </h1>
                        <p className="text-white/90 text-[13px] sm:text-base lg:text-xl max-w-sm lg:max-w-md mx-auto lg:mx-0 mb-8 drop-shadow-md lg:font-medium">
                            LBH Garuda Dharma Nusantara berkomitmen memberikan keadilan bagi masyarakat.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-row gap-3 lg:gap-6 w-full justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                            <Link to="/kontak" className="flex-1 lg:flex-none lg:w-48 bg-white hover:bg-gray-100 text-[#5C130C] rounded-full py-3.5 px-2 flex items-center justify-center gap-2 font-bold text-[13px] lg:text-base shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
                                <Phone className="w-4 h-4 lg:w-5 lg:h-5" /> Hubungi Kami
                            </Link>
                            <Link to="/layanan" className="flex-1 lg:flex-none lg:w-48 bg-white hover:bg-gray-100 text-[#5C130C] rounded-full py-3.5 px-2 flex items-center justify-center gap-2 font-bold text-[13px] lg:text-base shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
                                <Gavel className="w-4 h-4 lg:w-5 lg:h-5" /> Layanan Kami
                            </Link>
                        </div>
                    </div>
                </div>

                {/* LAYANAN UTAMA SECTION */}
                <div className="relative z-20 w-full bg-white lg:bg-transparent lg:absolute lg:bottom-0 lg:left-0 lg:right-0 pt-8 pb-10 rounded-t-[2rem] lg:rounded-none shadow-[0_-10px_20px_rgba(0,0,0,0.15)] lg:shadow-none">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">
                        <h2 className="text-center lg:text-left font-bold text-[#1a0a08] lg:text-white mb-6 tracking-widest text-sm lg:text-base drop-shadow-sm font-sans">
                            LAYANAN UTAMA
                        </h2>

                        <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-3 md:gap-6 pb-4 lg:pb-8 snap-x snap-mandatory hide-scrollbar">
                            <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
                            {SERVICE_CARDS.map((card) => (
                                <Link
                                    key={card.id}
                                    to={card.href}
                                    className="snap-center shrink-0 w-[140px] sm:w-[160px] lg:w-auto flex flex-col items-center bg-white rounded-2xl p-5 shadow-[0_4px_15px_rgba(0,0,0,0.06)] lg:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 lg:border-none group"
                                >
                                    <div className="text-[#5C130C] mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <card.Icon className="w-10 h-10 lg:w-12 lg:h-12" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-[#1a0a08] font-bold text-[13px] sm:text-sm lg:text-base text-center mb-1">
                                        {card.title.replace(" Hukum", "").replace(" Publik", "")}
                                    </h3>
                                    <span className="text-slate-400 text-[10px] sm:text-xs flex items-center gap-1 group-hover:text-[#D4AF37] transition-colors">
                                        Selengkapnya <ChevronRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEKILAS TENTANG KAMI */}
            <section className="relative  lg:py-28 bg-white overflow-hidden">
                {/* Background Watermark */}
                <div className="absolute w-[300px] md:w-[500px] opacity-[0.15] pointer-events-none translate-x-12 translate-y-12">
                    <img
                        src="/images/LBH-Gardanusa-MainLogo.webp"
                        alt="Watermark"
                        className="w-full h-full object-contain grayscale"
                    />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col">
                    <div className="divider-gold mb-3">Tentang Kami</div>

                    <h2 className="font-serif-display text-3xl sm:text-6xl md:text-[5rem] text-black font-bold leading-[1.00] tracking-tight mb-5 ">
                        Lembaga Bantuan Hukum <br /> <span className="font-sans text-[#5C130C]">Garuda Dharma Nusantara.</span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-800 leading-tight text-justify mb-10">
                        Lembaga Bantuan Hukum Garuda Dharma Nusantara (LBH Gardhatara) adalah lembaga bantuan hukum berbadan hukum resmi yang telah disahkan oleh negara dengan Nomor AHU-0006869.AH.01.07.TAHUN 2025 yang bergerak di bidang pendidikan, sosial, dan kemanusiaan. Kami berkomitmen meningkatkan kesadaran hukum masyarakat, memberikan pendampingan hukum kepada kelompok yang membutuhkan, serta mendorong terciptanya budaya hukum yang adil, demokratis, dan partisipatif. Saat ini LBH Gardhatara melayani berbagai jenis perkara — dari pidana, perdata, ketenagakerjaan, hingga isu-isu HAM dan kebijakan publik.
                    </p>

                    <div className="w-full h-[1px] bg-gray-300 mb-8" />

                    <div className="flex flex-row items-center gap-6 sm:gap-8 pb-10 lg:pb-0">
                        <div className="flex-shrink-0">
                            <Scale className="w-16 h-16 sm:w-20 sm:h-20 text-[#5C130C]" strokeWidth={2.5} />
                        </div>
                        <div className="text-sm sm:text-lg text-[#5C130C] leading-relaxed max-w-md font-medium">
                            Bantuan hukum untuk rakyat miskin, buta hukum, dan korban pelanggaran HAM.
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 lg:py-24 bg-[#F8FAFC] border-t border-[#EDD98A]/40">
                <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-5">
                        <div className="max-w-2xl">
                            <div className="divider-gold mb-2">Artikel & Berita</div>
                            <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight">
                                INFORMASI TERBARU
                            </h2>
                        </div>
                        <Link
                            to="/artikel"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C130C] hover:text-[#D4AF37] transition-colors group flex-shrink-0"
                        >
                            Lihat Semua Artikel
                            <ArrowRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {RECENT_ARTICLES.map((a, i) => (
                            <Link
                                key={i}
                                to="/artikel"
                                className="group bg-white border border-[#E8D5A3]/60 hover:border-[#5C130C] hover:shadow-md transition-all overflow-hidden block"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={a.img}
                                        alt={a.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center gap-3 text-xs">
                                        <span className="text-[#D4AF37] uppercase tracking-[0.15em] font-semibold">{a.category}</span>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-slate-500">{a.date}</span>
                                    </div>
                                    <h3 className="mt-3 font-sans text-md text-[#5C130C] font-bold leading-tight group-hover:text-[#D4AF37] transition-colors">
                                        {a.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* LAYANAN UNGGULAN */}
            <section className="py-6 lg:py-16 bg-[#FFFDF7] border-t border-[#EDD98A]/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div className="max-w-2xl">
                            <div className="divider-gold mb-6">Layanan Kami</div>
                            <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight">
                                LAYANAN HUKUM UNTUK SETIAP LAPISAN MASYARAKAT
                            </h2>
                        </div>
                        <Link
                            to="/layanan"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C130C] hover:text-[#D4AF37] transition-colors group flex-shrink-0"
                        >
                            Semua Layanan
                            <ArrowRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-px bg-[#E8D5A3]/50 border border-[#E8D5A3]/50">
                        {FEATURED_SERVICES.map((s, i) => (
                            <Link
                                key={s.title}
                                to={s.href}
                                className="group relative bg-[#FFFDF7] p-8 lg:p-10 hover:bg-[#5C130C] transition-all duration-500 cursor-pointer"
                            >
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                                    0{i + 1}
                                </div>
                                <h3 className="font-sans text-xl text-[#5C130C] group-hover:text-white font-medium leading-snug transition-colors mb-3">
                                    {s.title}
                                </h3>
                                <p className="text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                                    {s.desc}
                                </p>
                                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5C130C] group-hover:text-[#D4AF37] font-semibold transition-colors">
                                    <span className="h-px w-6 bg-[#D4AF37]" />
                                    Pelajari Lebih Lanjut
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>



            {/* ARTIKEL TERBARU */}


            {/* CTA BAND */}
            <section className="relative bg-[#5C130C] py-10 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#D4AF37] blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
                        <span className="h-px w-8 bg-[#D4AF37]" />
                        Hubungi Kami
                        <span className="h-px w-8 bg-[#D4AF37]" />
                    </div>
                    <h2 className="font-serif-display text-4xl md:text-5xl text-white font-medium leading-tight max-w-3xl mx-auto">
                        Butuh Bantuan atau <span className="italic text-[#D4AF37]">Konsultasi Hukum</span>?
                    </h2>
                    <p className="mt-2 text-slate-300 leading-relaxed max-w-xl mx-auto">
                        Tim kami siap mendengarkan, menelaah, dan memberikan langkah hukum terbaik. Kerahasiaan terjamin.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/kontak"
                            className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C5A059] text-[#5C130C] px-8 py-4 font-semibold tracking-wide transition-colors"
                        >
                            Konsultasi Sekarang
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                            href={`https://wa.me/${BRAND.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 border border-white/40 hover:border-white text-white hover:bg-white/10 px-8 py-4 font-semibold tracking-wide transition-colors"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Hubungi WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
