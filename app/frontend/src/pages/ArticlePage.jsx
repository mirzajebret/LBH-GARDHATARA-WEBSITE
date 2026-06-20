import { useState } from "react";
import { Calendar, ArrowUpRight, Camera, Filter } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const CATEGORIES = ["Semua", "Artikel Hukum", "Berita & Kegiatan", "Kajian Kebijakan", "Siaran Pers"];

const ARTICLES = [
    {
        img: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Artikel Hukum",
        date: "12 Nov 2025",
        title: "Memahami Hak Korban dalam Kasus Kekerasan Berbasis Gender",
        excerpt: "Panduan komprehensif mengenai prosedur hukum dan dukungan yang tersedia bagi korban kekerasan berbasis gender di Indonesia. Tulisan ini membahas mekanisme perlindungan, hak-hak korban, dan langkah-langkah yang dapat ditempuh.",
    },
    {
        img: "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Berita & Kegiatan",
        date: "05 Nov 2025",
        title: "Penyuluhan Hukum di Komunitas Mampang Berlangsung Sukses",
        excerpt: "Lebih dari 150 warga turut serta dalam program edukasi hukum bulanan kami yang diadakan di Aula Kelurahan Mampang Prapatan. Kegiatan ini membahas hak-hak dasar warga dan prosedur pelaporan kasus.",
    },
    {
        img: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Kajian Kebijakan",
        date: "28 Okt 2025",
        title: "Telaah Kritis atas RUU Perlindungan Pekerja Sektor Informal",
        excerpt: "Analisis mendalam mengenai implikasi RUU terhadap jutaan pekerja informal di Indonesia. LBH Gardhatara menyampaikan sejumlah catatan dan rekomendasi perbaikan kepada DPR RI.",
    },
    {
        img: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Artikel Hukum",
        date: "15 Okt 2025",
        title: "Hak Sewa vs Hak Milik: Panduan Hukum untuk Penyewa Properti",
        excerpt: "Banyak penyewa tidak mengetahui hak-hak mereka ketika menghadapi konflik dengan pemilik properti. Artikel ini menjelaskan perbedaan hak sewa dan hak milik serta langkah hukum yang tersedia.",
    },
    {
        img: "https://images.pexels.com/photos/8111970/pexels-photo-8111970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Berita & Kegiatan",
        date: "03 Okt 2025",
        title: "LBH Gardhatara Luncurkan Program Paralegal Komunitas 2025",
        excerpt: "Program paralegal komunitas dirancang untuk melatih warga biasa menjadi jembatan antara masyarakat dan layanan hukum profesional. Pendaftaran batch pertama telah dibuka.",
    },
    {
        img: "https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Siaran Pers",
        date: "20 Sep 2025",
        title: "Pernyataan Sikap: LBH Gardhatara terhadap Revisi UU TNI",
        excerpt: "LBH Garuda Dharma Nusantara menyampaikan pernyataan sikap resmi mengenai potensi dampak revisi UU TNI terhadap supremasi hukum sipil dan perlindungan hak asasi manusia.",
    },
    {
        img: "https://images.pexels.com/photos/6147307/pexels-photo-6147307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Kajian Kebijakan",
        date: "10 Sep 2025",
        title: "Laporan Situasi HAM: Kasus-kasus Kriminalisasi Aktivis 2025",
        excerpt: "LBH Gardhatara merilis laporan pemantauan kasus-kasus kriminalisasi aktivis dan pembela HAM sepanjang semester pertama 2025, beserta analisis pola dan rekomendasi kebijakan.",
    },
    {
        img: "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Artikel Hukum",
        date: "02 Sep 2025",
        title: "Mengenal KDRT: Hukum, Hak, dan Langkah Perlindungan",
        excerpt: "Kekerasan Dalam Rumah Tangga (KDRT) masih menjadi masalah serius di Indonesia. Artikel ini menjelaskan definisi KDRT menurut hukum, hak-hak korban, dan cara melaporkan kasus.",
    },
    {
        img: "https://images.pexels.com/photos/5668868/pexels-photo-5668868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Berita & Kegiatan",
        date: "25 Agu 2025",
        title: "Galeri: Workshop Hak Buruh bersama Serikat Pekerja Jakarta",
        excerpt: "Dokumentasi kegiatan workshop hak-hak buruh yang diselenggarakan LBH Gardhatara bekerja sama dengan enam serikat pekerja di wilayah Jakarta dan sekitarnya.",
    },
];

const GALLERY = [
    {
        src: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
        caption: "Penyuluhan Hukum Komunitas",
    },
    {
        src: "https://images.pexels.com/photos/8111970/pexels-photo-8111970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
        caption: "Pelatihan Paralegal",
    },
    {
        src: "https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
        caption: "Diskusi Kebijakan Publik",
    },
    {
        src: "https://images.pexels.com/photos/6147307/pexels-photo-6147307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
        caption: "Sidang Kasus Pro Bono",
    },
    {
        src: "https://images.pexels.com/photos/5668868/pexels-photo-5668868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
        caption: "Workshop Hak Pekerja",
    },
    {
        src: "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
        caption: "Konferensi Pers LBH",
    },
];

export const ArticlePage = () => {
    const [activeCategory, setActiveCategory] = useState("Semua");

    const filtered = activeCategory === "Semua"
        ? ARTICLES
        : ARTICLES.filter((a) => a.category === activeCategory);

    return (
        <>
            <PageHero
                label="Artikel & Berita"
                title="Wawasan Hukum & Kegiatan Terkini"
                subtitle="Kumpulan artikel hukum, berita kegiatan, kajian kebijakan, dan siaran pers dari LBH Garuda Dharma Nusantara."
                crumbs={[{ label: "Artikel & Berita", href: "/artikel" }]}
                bgImage="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=2000"
            />

            {/* ARTIKEL */}
            <section className="py-24 lg:py-32 bg-[#F8FAFC]" id="artikel-list">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                        <div>
                            <div className="divider-gold mb-4">Semua Konten</div>
                            <h2 className="font-serif-display text-3xl md:text-4xl text-[#5C130C] font-medium">
                                Artikel & Publikasi
                            </h2>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter className="h-4 w-4 text-slate-400 flex-shrink-0" />
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${activeCategory === cat
                                        ? "bg-[#5C130C] text-white"
                                        : "border border-slate-300 text-slate-600 hover:border-[#5C130C] hover:text-[#5C130C]"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((a, i) => (
                            <article
                                key={i}
                                className="group bg-white border border-slate-200 hover:border-[#5C130C] transition-all overflow-hidden"
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
                                        <span className="inline-flex items-center gap-1.5 text-slate-500">
                                            <Calendar className="h-3 w-3" />
                                            {a.date}
                                        </span>
                                    </div>
                                    <h3 className="mt-3 font-serif-display text-xl text-[#5C130C] font-medium leading-snug group-hover:text-[#D4AF37] transition-colors">
                                        {a.title}
                                    </h3>
                                    <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">{a.excerpt}</p>
                                    <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5C130C] font-semibold group-hover:text-[#D4AF37] transition-colors">
                                        Baca Selengkapnya
                                        <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALERI */}
            <section className="py-24 lg:py-32 bg-white" id="galeri">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <div className="divider-gold mb-4">Dokumentasi</div>
                            <h2 className="font-serif-display text-3xl md:text-4xl text-[#5C130C] font-medium">
                                Galeri Kegiatan
                            </h2>
                        </div>
                        <Camera className="h-8 w-8 text-[#D4AF37]" strokeWidth={1.5} />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {GALLERY.map((g, i) => (
                            <div
                                key={i}
                                className="group relative aspect-[4/3] overflow-hidden border border-slate-200"
                            >
                                <img
                                    src={g.src}
                                    alt={g.caption}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#5C130C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                    {g.caption}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
