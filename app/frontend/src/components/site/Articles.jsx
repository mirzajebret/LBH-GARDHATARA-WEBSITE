import { Calendar, ArrowUpRight } from "lucide-react";

const ARTICLES = [
    {
        img: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Artikel Hukum",
        date: "27 Juni 2026",
        title: "Memahami Hak Korban dalam Kasus Kekerasan Berbasis Gender",
        excerpt: "Panduan komprehensif mengenai prosedur hukum dan dukungan yang tersedia bagi korban.",
    },
    {
        img: "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Berita & Kegiatan",
        date: "01 Juli 2025",
        title: "Penyuluhan Hukum di Komunitas Berlangsung Sukses",
        excerpt: "Lebih dari 150 warga turut serta dalam program edukasi hukum bulanan kami.",
    },
    {
        img: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        category: "Kajian Kebijakan",
        date: "15 Juni 2026",
        title: "Telaah Kritis atas RUU Perlindungan Pekerja Sektor Informal",
        excerpt: "Analisis mendalam mengenai implikasi RUU terhadap jutaan pekerja informal.",
    },
];

export const Articles = () => {
    return (
        <section id="artikel" data-testid="articles-section" className="py-24 lg:py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <div className="divider-gold mb-6">Artikel & Berita</div>
                        <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                            Wawasan hukum &amp; kegiatan terkini.
                        </h2>
                    </div>
                    <a
                        href="#artikel"
                        data-testid="articles-view-all"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C130C] hover:text-[#D4AF37] transition-colors group"
                    >
                        Lihat Semua Artikel
                        <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {ARTICLES.map((a, i) => (
                        <article
                            key={i}
                            data-testid={`article-card-${i}`}
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
                                    <span className="text-[#D4AF37] uppercase tracking-[0.15em] font-semibold">
                                        {a.category}
                                    </span>
                                    <span className="text-slate-400">•</span>
                                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                                        <Calendar className="h-3 w-3" />
                                        {a.date}
                                    </span>
                                </div>
                                <h3 className="mt-3 font-serif-display text-xl text-[#5C130C] font-medium leading-snug group-hover:text-[#D4AF37] transition-colors">
                                    {a.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">
                                    {a.excerpt}
                                </p>
                                <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5C130C] font-semibold">
                                    Baca Selengkapnya
                                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};