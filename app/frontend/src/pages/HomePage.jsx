import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Scale, MessageCircle, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Testimonials } from "@/components/site/Testimonials";

const HERO_TILES = [
    {
        id: "militerisasi",
        title: "Tolak Militerisasi",
        titleLine2: "di Ruang Sipil",
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
        img: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        href: "/layanan",
    },
    {
        id: "reklamasi",
        title: "Tolak",
        titleLine2: "Reklamasi",
        sub: "Proyek ambisius, sarat akan korupsi.",
        img: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        href: "/program",
    },
    {
        id: "warga-kritis",
        title: "Menjadi",
        titleLine2: "Warga Kritis",
        sub: "Untuk demokrasi yang jernih.",
        img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        href: "/program",
    },
    {
        id: "lawan-kriminalisasi",
        title: "Lawan",
        titleLine2: "Kriminalisasi",
        sub: "Pembungkaman gerakan rakyat.",
        img: "https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        href: "/layanan",
    },
    {
        id: "penggusuran",
        title: "Penggusuran",
        titleLine2: "Paksa",
        sub: "Perampas hak tempat tinggal.",
        img: "https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
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
        img: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Artikel Hukum",
        date: "12 Nov 2025",
        title: "Memahami Hak Korban dalam Kasus Kekerasan Berbasis Gender",
    },
    {
        img: "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Berita & Kegiatan",
        date: "05 Nov 2025",
        title: "Penyuluhan Hukum di Komunitas Mampang Berlangsung Sukses",
    },
    {
        img: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Kajian Kebijakan",
        date: "28 Okt 2025",
        title: "Telaah Kritis atas RUU Perlindungan Pekerja Sektor Informal",
    },
];

export const HomePage = () => {
    return (
        <>
            {/* HERO — Mosaic Bento Grid */}
            <section
                id="top"
                data-testid="hero-section"
                className="relative bg-[#F8FAFC] pt-20 overflow-hidden"
            >
                {/* Subtle noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
                />

                {/* Header label */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
                    <div className="flex items-center justify-between">
                        <div className="divider-gold">LBH Gardhatara • Isu &amp; Advokasi</div>
                        <Link
                            to="/program"
                            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5C130C] font-semibold hover:text-[#D4AF37] transition-colors group"
                        >
                            Semua Program
                            <ArrowUpRight className="h-3.5 w-3.5 group-hover:rotate-45 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Mosaic Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    {/* Row 1 — Featured + 2 stacked */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                        {/* Featured tile — spans 2 cols, taller */}
                        {(() => {
                            const t = HERO_TILES[0];
                            return (
                                <Link
                                    key={t.id}
                                    to={t.href}
                                    className="hero-tile group md:col-span-2"
                                    style={{ minHeight: "420px" }}
                                >
                                    <img
                                        src={t.img}
                                        alt={t.title}
                                        className="hero-tile-img"
                                        loading="eager"
                                    />
                                    <div className="hero-tile-overlay" />
                                    <div className="hero-tile-content">
                                        <div className="hero-tile-label">Isu Utama</div>
                                        <h1 className="hero-tile-title text-4xl sm:text-5xl lg:text-6xl">
                                            {t.title}<br />
                                            <span className="text-[#D4AF37]">{t.titleLine2}</span>
                                        </h1>
                                        <p className="hero-tile-sub text-sm sm:text-base mt-3">{t.sub}</p>
                                        <div className="hero-tile-cta mt-5">
                                            <span className="hero-btn-primary">
                                                Selengkapnya
                                                <ArrowRight className="h-3.5 w-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })()}

                        {/* Stack: tiles 1 + 2 */}
                        <div className="flex flex-col gap-2">
                            {HERO_TILES.slice(1, 3).map((t) => (
                                <Link
                                    key={t.id}
                                    to={t.href}
                                    className="hero-tile group flex-1"
                                    style={{ minHeight: "205px" }}
                                >
                                    <img src={t.img} alt={t.title} className="hero-tile-img" loading="lazy" />
                                    <div className="hero-tile-overlay" />
                                    <div className="hero-tile-content">
                                        <h2 className="hero-tile-title text-2xl sm:text-3xl">
                                            {t.title}<br />
                                            <span className="text-[#D4AF37]">{t.titleLine2}</span>
                                        </h2>
                                        <p className="hero-tile-sub text-xs mt-2">{t.sub}</p>
                                        <div className="hero-tile-cta mt-3">
                                            <span className="hero-btn-secondary">
                                                Selengkapnya
                                                <ArrowRight className="h-3 w-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 — 3 equal tiles */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {HERO_TILES.slice(3, 6).map((t) => (
                            <Link
                                key={t.id}
                                to={t.href}
                                className="hero-tile group"
                                style={{ minHeight: "280px" }}
                            >
                                <img src={t.img} alt={t.title} className="hero-tile-img" loading="lazy" />
                                <div className="hero-tile-overlay" />
                                <div className="hero-tile-content">
                                    <h2 className="hero-tile-title text-2xl sm:text-3xl">
                                        {t.title}<br />
                                        <span className="text-[#D4AF37]">{t.titleLine2}</span>
                                    </h2>
                                    <p className="hero-tile-sub text-xs mt-2">{t.sub}</p>
                                    <div className="hero-tile-cta mt-3">
                                        <span className="hero-btn-secondary">
                                            Selengkapnya
                                            <ArrowRight className="h-3 w-3" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#5C130C] via-[#D4AF37] to-[#5C130C]" />
            </section>


            {/* SEKILAS TENTANG KAMI */}
            <section className="py-24 lg:py-32 bg-[#FBF7F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src="/images/patung-garuda.jpg"
                                        alt="LBH Gardhatara"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-[#5C130C] text-white p-6 max-w-[240px] hidden md:block shadow-xl">
                                    <div className="font-serif-display text-2xl leading-tight">
                                        LBH <span className="text-[#D4AF37]">Gardhatara</span>
                                    </div>
                                    <div className="text-xs text-slate-300 mt-2 leading-relaxed">
                                        Lembaga Bantuan Hukum Garuda Dharma Nusantara
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="divider-gold mb-6">Tentang Kami</div>
                            <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                                Tentang LBH Garuda Dharma Nusantara
                            </h2>
                            <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                                LBH Garuda Dharma Nusantara LBH Garuda Dharma Nusantara (LBH Gardhatara) adalah lembaga bantuan hukum berbadan hukum resmi yang telah disahkan oleh negara dengan Nomor AHU-0006869.AH.01.07.TAHUN 2025 yang bergerak di
                                bidang pendidikan, sosial, dan kemanusiaan. Kami berkomitmen
                                meningkatkan kesadaran hukum masyarakat, memberikan pendampingan hukum kepada
                                kelompok yang membutuhkan, serta mendorong terciptanya budaya hukum yang
                                adil, demokratis, dan partisipatif.
                            </p>
                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Dengan tim advokat dan paralegal berpengalaman, LBH Gardhatara melayani berbagai
                                jenis perkara — dari pidana, perdata, ketenagakerjaan, hingga isu-isu HAM dan
                                kebijakan publik.
                            </p>
                            <div className="mt-10">
                                <Link
                                    to="/tentang"
                                    className="inline-flex items-center gap-3 bg-[#5C130C] hover:bg-[#45130F] text-white px-8 py-4 font-semibold tracking-wide transition-colors group"
                                >
                                    Selengkapnya
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LAYANAN UNGGULAN */}
            <section className="py-24 lg:py-32 bg-[#FFFDF7] border-t border-[#EDD98A]/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div className="max-w-2xl">
                            <div className="divider-gold mb-6">Layanan Kami</div>
                            <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                                Layanan hukum untuk setiap lapisan masyarakat.
                            </h2>
                        </div>
                        <Link
                            to="/layanan"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C130C] hover:text-[#D4AF37] transition-colors group flex-shrink-0"
                        >
                            Semua Layanan
                            <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-px bg-[#E8D5A3]/50 border border-[#E8D5A3]/50">
                        {FEATURED_SERVICES.map((s, i) => (
                            <Link
                                key={s.title}
                                to={s.href}
                                className="group relative bg-[#FFFDF7] p-8 lg:p-10 hover:bg-[#5C130C] transition-all duration-500 cursor-pointer"
                            >
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-6">
                                    0{i + 1}
                                </div>
                                <h3 className="font-serif-display text-2xl text-[#5C130C] group-hover:text-white font-medium leading-snug transition-colors">
                                    {s.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                                    {s.desc}
                                </p>
                                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5C130C] group-hover:text-[#D4AF37] font-semibold transition-colors">
                                    <span className="h-px w-6 bg-[#D4AF37]" />
                                    Pelajari Lebih Lanjut
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <Testimonials />

            {/* ARTIKEL TERBARU */}
            <section className="py-24 lg:py-32 bg-[#FEF9EE] border-t border-[#EDD98A]/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div className="max-w-2xl">
                            <div className="divider-gold mb-6">Artikel & Berita</div>
                            <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                                Wawasan hukum & kegiatan terkini.
                            </h2>
                        </div>
                        <Link
                            to="/artikel"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C130C] hover:text-[#D4AF37] transition-colors group flex-shrink-0"
                        >
                            Lihat Semua Artikel
                            <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
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
                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs">
                                        <span className="text-[#D4AF37] uppercase tracking-[0.15em] font-semibold">{a.category}</span>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-slate-500">{a.date}</span>
                                    </div>
                                    <h3 className="mt-3 font-serif-display text-xl text-[#5C130C] font-medium leading-snug group-hover:text-[#D4AF37] transition-colors">
                                        {a.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA BAND */}
            <section className="relative bg-[#5C130C] py-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#D4AF37] blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-6">
                        <span className="h-px w-8 bg-[#D4AF37]" />
                        Hubungi Kami
                        <span className="h-px w-8 bg-[#D4AF37]" />
                    </div>
                    <h2 className="font-serif-display text-4xl md:text-5xl text-white font-medium leading-tight max-w-3xl mx-auto">
                        Butuh Bantuan atau <span className="italic text-[#D4AF37]">Konsultasi Hukum</span>?
                    </h2>
                    <p className="mt-6 text-slate-300 leading-relaxed max-w-xl mx-auto">
                        Tim kami siap mendengarkan, menelaah, dan memberikan langkah hukum terbaik. Kerahasiaan terjamin.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
