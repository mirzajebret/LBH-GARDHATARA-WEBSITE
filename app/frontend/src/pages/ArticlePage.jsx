import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowUpRight, Camera, Filter, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { getArticlesByCategory, ARTICLE_CATEGORIES } from "@/lib/articles";



const GALLERY = [
    {
        src: "/images/Galeri/LBH-Gardanusa-Galery(!3).jpg",
        caption: "LBH Gardhatara",
    },
    {
        src: "/images/Galeri/LBH-Gardanusa-Galery(!5).jpg",
        caption: "LBH Gardhatara",
    },
    {
        src: "/images/Galeri/LBH-Gardanusa-Galery(1).jpg",
        caption: "LBH Gardhatara",
    },
    {
        src: "/images/Galeri/LBH-Gardanusa-Galery(2).jpg",
        caption: "LBH Gardhatara",
    },
    {
        src: "/images/Galeri/LBH-Gardanusa-Galery(7).jpg",
        caption: "LBH Gardhatara",
    },
    {
        src: "/images/Galeri/LBH-Gardanusa-Galery(6).jpg",
        caption: "LBH Gardhatara",
    },
];

const ARTICLES_PER_PAGE = 6;

export const ArticlePage = () => {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [page, setPage] = useState(1);

    const allFiltered = getArticlesByCategory(activeCategory);
    const totalPages = Math.ceil(allFiltered.length / ARTICLES_PER_PAGE);
    const filtered = allFiltered.slice(0, page * ARTICLES_PER_PAGE);
    const hasMore = page < totalPages;

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setPage(1); // reset pagination on filter change
    };

    return (
        <>
            <PageHero
                label="Artikel & Berita"
                title="Wawasan Hukum & Kegiatan"
                subtitle="Kumpulan artikel hukum, berita kegiatan, kajian kebijakan, dan siaran pers dari LBH Garuda Dharma Nusantara."
                crumbs={[{ label: "Artikel & Berita", href: "/artikel" }]}
                bgImage="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=2000"
            />

            {/* ARTIKEL */}
            <section className="py-6 lg:py-24 bg-[#F8FAFC]" id="artikel-list">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                        <div>
                            <div className="divider-gold mb-3">Semua Konten</div>
                            <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight">
                                Artikel & Publikasi
                            </h2>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter className="h-4 w-4 text-slate-400 flex-shrink-0" />
                            {ARTICLE_CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
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
                        {filtered.map((a) => (
                            <Link
                                key={a.id}
                                to={`/artikel/${a.slug}`}
                                className="group bg-white border border-slate-200 hover:border-[#5C130C] hover:shadow-md transition-all overflow-hidden block"
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
                                    <h3 className="mt-3 font-sans text-md text-[#5C130C] font-bold leading-tight group-hover:text-[#D4AF37] transition-colors">
                                        {a.title}
                                    </h3>
                                    <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">{a.excerpt}</p>
                                    <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5C130C] font-semibold group-hover:text-[#D4AF37] transition-colors">
                                        Baca Selengkapnya
                                        <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Load More / Pagination */}
                    {hasMore && (
                        <div className="mt-12 text-center">
                            <button
                                onClick={() => setPage((p) => p + 1)}
                                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#5C130C] text-[#5C130C] text-sm font-semibold uppercase tracking-widest hover:bg-[#5C130C] hover:text-white transition-all"
                            >
                                Muat Lebih Banyak
                                <ArrowRight className="h-4 w-4" />
                            </button>
                            <p className="mt-3 text-xs text-slate-400">
                                Menampilkan {filtered.length} dari {allFiltered.length} artikel
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* GALERI */}
            <section className="py-6 lg:py-24 bg-white" id="galeri">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <div className="divider-gold mb-3">Dokumentasi</div>
                            <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
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
