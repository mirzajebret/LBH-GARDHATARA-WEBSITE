import { Link } from "react-router-dom";
import { Calendar, ArrowUpRight, ArrowRight } from "lucide-react";
import { getRecentArticles } from "@/lib/articles";

export const Articles = () => {
    const articles = getRecentArticles(3);

    return (
        <section id="artikel" data-testid="articles-section" className="py-24 lg:py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <div className="divider-gold mb-6">Artikel &amp; Berita</div>
                        <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                            Wawasan hukum &amp; kegiatan terkini.
                        </h2>
                    </div>
                    <Link
                        to="/artikel"
                        data-testid="articles-view-all"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C130C] hover:text-[#D4AF37] transition-colors group"
                    >
                        Lihat Semua Artikel
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {articles.map((a) => (
                        <Link
                            key={a.id}
                            to={`/artikel/${a.slug}`}
                            data-testid={`article-card-${a.id}`}
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
                                <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5C130C] font-semibold group-hover:text-[#D4AF37] transition-colors">
                                    Baca Selengkapnya
                                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};