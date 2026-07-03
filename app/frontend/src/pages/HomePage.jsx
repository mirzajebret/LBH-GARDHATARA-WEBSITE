import { Link } from "react-router-dom";
import { ArrowRight, Scale, MessageSquare, MessageCircle, Gavel, GraduationCap, Search } from "lucide-react";
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

const SERVICE_CARDS = [
    { id: "konsultasi", title: "Konsultasi Hukum", href: "/layanan#konsultasi", Icon: MessageSquare },
    { id: "advokasi", title: "Advokasi Hukum", href: "/layanan#advokasi", Icon: Gavel },
    { id: "pendidikan", title: "Pendidikan Hukum Publik", href: "/layanan#pendidikan", Icon: GraduationCap },
    { id: "posbantuan", title: "Pos Bantuan Hukum", href: "/layanan#bantuan", Icon: Scale },
    { id: "kajian", title: "Kajian Kebijakan Hukum", href: "/layanan#kajian", Icon: Search },
];

export const HomePage = () => {
    return (
        <>
            {/* HERO — Cinematic Banner + Issue Cards */}
            <section
                id="top"
                data-testid="hero-section"
                className="relative bg-[#2A120E] pt-20 overflow-hidden"
            >
                {/* Top label strip */}
                <div className="bg-[#5C130C] py-2.5 text-center">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-[#E8C97A] font-semibold">
                        LBH Gardhatara — Isu &amp; Advokasi
                    </span>
                </div>

                {/* Cinematic 3-column main banner */}
                <div className="relative flex min-h-[420px] md:min-h-[480px] pb-28 md:pb-36">
                    {/* Left panel: garuda statue image */}
                    <div
                        className="hidden md:block relative overflow-hidden flex-shrink-0"
                        style={{ width: "28%" }}
                    >
                        <img
                            src="/images/garuda-left.webp"
                            alt="Simbol Keadilan"
                            className="absolute inset-0 w-full h-full object-cover object-center grayscale"
                            loading="eager"
                        />
                        {/* Fade toward center */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2A120E]/10 via-[#2A120E]/30 to-[#2A120E]" />
                    </div>

                    {/* Center: logo + inline title */}
                    <div className="flex-1 relative flex flex-col justify-center items-center px-6 md:px-10 lg:px-12 py-10 z-10">
                        {/* Mobile: faded garuda background */}
                        <div className="md:hidden absolute inset-0">
                            <img
                                src="/images/garuda-left.webp"
                                alt=""
                                className="w-full h-full object-cover grayscale"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-[#2A120E]/80" />
                        </div>

                        {/* Logo + Inline Title row */}
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            {/* Circular seal */}
                            <div className="flex-shrink-0">
                                <img
                                    src="/images/LBH-Gardanusa-MainLogo.webp"
                                    alt="LBH Gardhatara Seal"
                                    className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl"
                                />
                            </div>

                            {/* Inline title — same line */}
                            <h1 className="font-serif-display font-bold uppercase leading-none tracking-tight text-center md:text-left whitespace-nowrap">
                                <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">LBH </span>
                                <span className="text-[#D4AF37] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">GARDHATARA</span>
                            </h1>
                        </div>
                    </div>

                    {/* Right panel: lady justice image */}
                    <div
                        className="hidden md:block relative overflow-hidden flex-shrink-0"
                        style={{ width: "28%" }}
                    >
                        <img
                            src="/images/justice-right.webp"
                            alt="Keadilan Hukum"
                            className="absolute inset-0 w-full h-full object-cover object-center grayscale"
                            loading="eager"
                        />
                        {/* Fade toward center */}
                        <div className="absolute inset-0 bg-gradient-to-l from-[#2A120E]/10 via-[#2A120E]/30 to-[#2A120E]" />
                    </div>
                </div>

                {/* Service cards — overlap the banner from below */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-24 pb-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {SERVICE_CARDS.map(({ id, title, href, Icon }) => (
                            <Link
                                key={id}
                                to={href}
                                className="group bg-white rounded-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden block"
                            >
                                {/* Maroon icon box */}
                                <div className="aspect-square bg-[#5C130C] flex items-center justify-center p-6 group-hover:bg-[#45130F] transition-colors">
                                    <Icon
                                        className="w-10 h-10 lg:w-12 lg:h-12 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                {/* Card body */}
                                <div className="p-3 md:p-4">
                                    <h3 className="text-[13px] md:text-sm text-[#1a0a08] font-bold leading-tight">
                                        {title}
                                    </h3>
                                    <div className="mt-3">
                                        <span className="inline-flex items-center gap-1 bg-[#D4AF37] group-hover:bg-[#C5A059] text-[#5C130C] text-[10px] font-semibold px-4 py-1.5 transition-colors">
                                            Selengkapnya
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
