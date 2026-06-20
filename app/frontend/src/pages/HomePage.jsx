import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Scale, MessageCircle, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Testimonials } from "@/components/site/Testimonials";

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
            {/* HERO */}
            <section
                id="top"
                data-testid="hero-section"
                className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden"
            >
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/images/LBH-Gardanusa-hero.webp"
                        alt=""
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5C130C] via-[#5C130C]/95 to-[#5C130C]/60" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 reveal">
                            <div className="divider-gold mb-8">Lembaga Bantuan Hukum • Gardhatara</div>

                            <h1 className="font-serif-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight font-medium">
                                Bantuan <span className="italic text-[#D4AF37]">Hukum</span> <br />
                                yang <span className="italic text-[#D4AF37]">Adil</span><br />
                                untuk <span className="italic text-[#D4AF37]">Semua</span>.
                            </h1>

                            <p className="mt-8 text-slate-200/90 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                                LBH Garuda Dharma Nusantara hadir untuk meningkatkan kesadaran hukum
                                masyarakat, memberikan pendampingan hukum, advokasi kebijakan, serta
                                memperjuangkan keadilan bagi seluruh lapisan masyarakat.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/kontak"
                                    data-testid="hero-consult-button"
                                    className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C5A059] text-[#5C130C] px-8 py-4 font-semibold tracking-wide group transition-colors"
                                >
                                    Konsultasi Hukum
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href={`https://wa.me/${BRAND.whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="hero-contact-button"
                                    className="inline-flex items-center justify-center gap-3 border border-white/40 hover:border-white text-white hover:bg-white/10 px-8 py-4 font-semibold tracking-wide transition-colors"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    Hubungi Kami
                                </a>
                            </div>

                            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
                                {STAT_ITEMS.map((s) => (
                                    <div key={s.label} className="border-l-2 border-[#D4AF37] pl-4">
                                        <div className="font-serif-display text-3xl text-white font-semibold">{s.value}</div>
                                        <div className="text-xs uppercase tracking-wider text-slate-300 mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right floating card */}
                        <div className="lg:col-span-5 hidden lg:block reveal" style={{ animationDelay: "0.2s" }}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/30 to-transparent blur-2xl" />
                                <div className="relative bg-white/5 backdrop-blur-xl border border-white/15 p-8">
                                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                                        <Scale className="h-6 w-6 text-[#D4AF37]" strokeWidth={1.5} />
                                        <div className="text-white/90 text-sm font-semibold tracking-wide uppercase">Layanan Utama</div>
                                    </div>
                                    <ul className="space-y-4 text-slate-200/90">
                                        {[
                                            "Pendampingan Litigasi & Non-Litigasi",
                                            "Konsultasi Hukum Pidana, Perdata, & Keluarga",
                                            "Advokasi Kebijakan Publik",
                                            "Pos Bantuan Hukum (POSBAKUM)",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <ShieldCheck className="h-4 w-4 text-[#D4AF37] mt-1 flex-shrink-0" strokeWidth={1.75} />
                                                <span className="text-sm leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-2">Kantor Pusat</div>
                                        <div className="text-white text-sm leading-relaxed">
                                            {BRAND.address.line1} <br />
                                            {BRAND.address.line2} <br />
                                            {BRAND.address.city}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
                    <div className="text-[10px] uppercase tracking-[0.3em]">Scroll</div>
                    <div className="h-10 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />
                </div>
            </section>

            {/* SEKILAS TENTANG KAMI */}
            <section className="py-24 lg:py-32 bg-white">
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
                                <div className="absolute -bottom-6 -right-6 bg-[#5C130C] text-white p-6 max-w-[240px] hidden md:block">
                                    <div className="font-serif-display text-2xl leading-tight">
                                        Sejak <span className="text-[#D4AF37]">2012</span>
                                    </div>
                                    <div className="text-xs text-slate-300 mt-2 leading-relaxed">
                                        Mengabdi untuk keadilan dan hak asasi manusia di seluruh Nusantara.
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
                                LBH Garuda Dharma Nusantara adalah lembaga bantuan hukum yang bergerak di
                                bidang pendidikan, sosial, dan kemanusiaan. Didirikan sejak 2012, kami berkomitmen
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
            <section className="py-24 lg:py-32 bg-[#F8FAFC]">
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

                    <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                        {FEATURED_SERVICES.map((s, i) => (
                            <Link
                                key={s.title}
                                to={s.href}
                                className="group relative bg-white p-8 lg:p-10 hover:bg-[#5C130C] transition-all duration-500 cursor-pointer"
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
            <section className="py-24 lg:py-32 bg-[#F8FAFC]">
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
                                className="group bg-white border border-slate-200 hover:border-[#5C130C] transition-all overflow-hidden block"
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
