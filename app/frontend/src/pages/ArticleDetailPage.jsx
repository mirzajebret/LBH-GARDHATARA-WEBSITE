import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
    Calendar,
    Clock,
    User,
    Tag,
    ArrowLeft,
    ArrowRight,
    Share2,
    MessageCircle,
    Copy,
    ChevronRight,
    BookOpen,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { BRAND } from "@/lib/brand";
import {
    getArticleBySlug,
    getRelatedArticles,
    getAdjacentArticles,
} from "@/lib/articles";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

// ─── Category Badge Color Map ─────────────────────────────────────────────────
const CATEGORY_COLORS = {
    "Artikel Hukum": "bg-blue-50 text-blue-700 border-blue-200",
    "Berita & Kegiatan": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Kajian Kebijakan": "bg-amber-50 text-amber-700 border-amber-200",
    "Siaran Pers": "bg-rose-50 text-rose-700 border-rose-200",
};

// ─── Share Helpers ────────────────────────────────────────────────────────────
const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
};

const handleWhatsAppShare = (title) => {
    const text = encodeURIComponent(`${title}\n${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
};

// ─── Related Article Card ──────────────────────────────────────────────────────
const RelatedCard = ({ article }) => (
    <Link
        to={`/artikel/${article.slug}`}
        className="group flex gap-4 items-start p-4 hover:bg-[#5C130C]/5 transition-colors rounded-lg"
    >
        <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded">
            <img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>
        <div className="flex-1 min-w-0">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                {article.category}
            </span>
            <h4 className="text-sm font-semibold text-[#1E293B] leading-snug mt-0.5 group-hover:text-[#5C130C] transition-colors line-clamp-2">
                {article.title}
            </h4>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                <Calendar className="h-3 w-3" />
                {article.date}
            </div>
        </div>
    </Link>
);

// ─── Main Component ────────────────────────────────────────────────────────────
export const ArticleDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { lang } = useLanguage();
    const t = translations[lang].articleDetail;
    const tContact = translations[lang].home;

    const article = getArticleBySlug(slug);
    const related = getRelatedArticles(slug, 3);
    const { prev, next } = getAdjacentArticles(slug);

    // Handle 404
    useEffect(() => {
        if (!article) navigate("/artikel", { replace: true });
    }, [article, navigate]);

    if (!article) return null;

    const categoryColor =
        CATEGORY_COLORS[article.category] || "bg-slate-100 text-slate-700 border-slate-200";

    const sidebarLabels = lang === "id"
        ? { info: "Info Artikel", category: "Kategori", published: "Diterbitkan", author: "Penulis", readTime: "Waktu Baca", allArticles: "Semua Artikel & Berita" }
        : { info: "Article Info", category: "Category", published: "Published", author: "Author", readTime: "Read Time", allArticles: "All Articles & News" };

    const ctaLabels = lang === "id"
        ? { label: "Butuh Bantuan Hukum?", heading: "Konsultasikan Masalah Anda", desc: "Tim advokat kami siap mendengarkan dan memberikan pendampingan hukum yang tepat. Konsultasi awal gratis.", btn: "Konsultasi Sekarang" }
        : { label: "Need Legal Help?", heading: "Discuss Your Issue With Us", desc: "Our advocate team is ready to listen and provide the right legal assistance. First consultation is free.", btn: "Consult Now" };

    return (
        <>
            {/* ── Page Hero ── */}
            <PageHero
                label={article.category}
                title={article.title}
                subtitle={article.excerpt}
                crumbs={[
                    { label: lang === "id" ? "Artikel & Berita" : "Articles & News", href: "/artikel" },
                    { label: article.title, href: `/artikel/${article.slug}` },
                ]}
                bgImage={article.img}
            />

            {/* ── Main Layout ── */}
            <div className="bg-[#F8FAFC] min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                        {/* ════════════════════════════════════════════════════
                            ARTICLE BODY (left / main)
                        ════════════════════════════════════════════════════ */}
                        <main className="flex-1 min-w-0">

                            {/* Back Link */}
                            <Link
                                to="/artikel"
                                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#5C130C] transition-colors mb-8 group"
                            >
                                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                {t.back}
                            </Link>

                            {/* Hero Image */}
                            <div className="aspect-[16/7] overflow-hidden mb-8 shadow-xl">
                                <img
                                    src={article.img}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Meta Bar */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span
                                    className={`inline-flex items-center px-3 py-1 text-[11px] uppercase tracking-widest font-semibold border ${categoryColor}`}
                                >
                                    {article.category}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                                    <Calendar className="h-4 w-4 text-[#D4AF37]" />
                                    {article.date}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                                    <Clock className="h-4 w-4 text-[#D4AF37]" />
                                    {article.readTime} {t.readTime}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                                    <User className="h-4 w-4 text-[#D4AF37]" />
                                    {article.author}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-[#5C130C] font-semibold leading-tight tracking-tight mb-4">
                                {article.title}
                            </h1>

                            {/* Excerpt */}
                            <p className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-[#D4AF37] pl-5 italic">
                                {article.excerpt}
                            </p>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/30 to-transparent mb-10" />

                            {/* Article Content */}
                            <div
                                className="prose-article"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />

                            {/* Tags */}
                            {article.tags?.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-slate-200">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Tag className="h-4 w-4 text-slate-400" />
                                        {article.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-full hover:border-[#5C130C] hover:text-[#5C130C] transition-colors cursor-default"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Share */}
                            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-white border border-slate-200 shadow-sm">
                                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                    <Share2 className="h-4 w-4 text-[#D4AF37]" />
                                    {t.share}:
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleWhatsAppShare(article.title)}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1DA851] text-white text-sm font-semibold transition-colors"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                        WhatsApp
                                    </button>
                                    <button
                                        onClick={handleCopyLink}
                                        className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 hover:border-[#5C130C] text-slate-600 hover:text-[#5C130C] text-sm font-semibold transition-colors"
                                    >
                                        <Copy className="h-4 w-4" />
                                        {t.copyLink}
                                    </button>
                                </div>
                            </div>

                            {/* ── Prev / Next Navigation ── */}
                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {prev ? (
                                    <Link
                                        to={`/artikel/${prev.slug}`}
                                        className="group flex flex-col p-5 bg-white border border-slate-200 hover:border-[#5C130C] transition-all"
                                    >
                                        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 mb-2">
                                            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
                                            {t.prevArticle}
                                        </span>
                                        <span className="text-sm font-semibold text-[#5C130C] leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                                            {prev.title}
                                        </span>
                                    </Link>
                                ) : (
                                    <div />
                                )}
                                {next ? (
                                    <Link
                                        to={`/artikel/${next.slug}`}
                                        className="group flex flex-col items-end p-5 bg-white border border-slate-200 hover:border-[#5C130C] transition-all text-right"
                                    >
                                        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 mb-2">
                                            {t.nextArticle}
                                            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <span className="text-sm font-semibold text-[#5C130C] leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                                            {next.title}
                                        </span>
                                    </Link>
                                ) : (
                                    <div />
                                )}
                            </div>

                            {/* ── CTA Konsultasi ── */}
                            <div className="mt-12 relative overflow-hidden bg-[#5C130C] p-8 lg:p-10">
                                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#D4AF37]/15 blur-2xl pointer-events-none" />
                                <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#D4AF37]/10 blur-2xl pointer-events-none" />

                                <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                                            <span className="h-px w-6 bg-[#D4AF37]" />
                                            {ctaLabels.label}
                                        </div>
                                        <h3 className="font-serif-display text-2xl md:text-3xl text-white font-medium leading-tight">
                                            {ctaLabels.heading}
                                        </h3>
                                        <p className="mt-2 text-slate-300 text-sm leading-relaxed max-w-md">
                                            {ctaLabels.desc}
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                                        <Link
                                            to="/kontak"
                                            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#C5A059] text-[#5C130C] px-6 py-3 font-semibold text-sm tracking-wide transition-colors"
                                        >
                                            {ctaLabels.btn}
                                            <ChevronRight className="h-4 w-4" />
                                        </Link>
                                        <a
                                            href={`https://wa.me/${BRAND.whatsappNumber}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white hover:bg-white/10 px-6 py-3 font-semibold text-sm tracking-wide transition-colors"
                                        >
                                            <MessageCircle className="h-4 w-4" />
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>

                        {/* ════════════════════════════════════════════════════
                            SIDEBAR (right)
                        ════════════════════════════════════════════════════ */}
                        <aside className="lg:w-80 xl:w-96 flex-shrink-0">
                            <div className="sticky top-28 space-y-6">

                                {/* Article Summary Card */}
                                <div className="bg-white border border-slate-200 p-6 shadow-sm">
                                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
                                        <BookOpen className="h-4 w-4" />
                                        {sidebarLabels.info}
                                    </div>
                                    <dl className="space-y-3 text-sm">
                                        <div className="flex items-start gap-3">
                                            <dt className="text-slate-400 w-24 flex-shrink-0">{sidebarLabels.category}</dt>
                                            <dd className="text-slate-700 font-medium">{article.category}</dd>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <dt className="text-slate-400 w-24 flex-shrink-0">{sidebarLabels.published}</dt>
                                            <dd className="text-slate-700 font-medium">{article.date}</dd>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <dt className="text-slate-400 w-24 flex-shrink-0">{sidebarLabels.author}</dt>
                                            <dd className="text-slate-700 font-medium">{article.author}</dd>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <dt className="text-slate-400 w-24 flex-shrink-0">{sidebarLabels.readTime}</dt>
                                            <dd className="text-slate-700 font-medium">{article.readTime}</dd>
                                        </div>
                                    </dl>
                                </div>

                                {/* Related Articles */}
                                {related.length > 0 && (
                                    <div className="bg-white border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-2 px-6 pt-6 pb-4 border-b border-slate-100">
                                            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                                                {t.relatedLabel}
                                            </span>
                                        </div>
                                        <div className="divide-y divide-slate-100">
                                            {related.map((a) => (
                                                <RelatedCard key={a.id} article={a} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Browse All Articles */}
                                <Link
                                    to="/artikel"
                                    className="group flex items-center justify-between w-full px-6 py-4 bg-[#5C130C] text-white hover:bg-[#45130F] transition-colors"
                                >
                                    <span className="text-sm font-semibold">{sidebarLabels.allArticles}</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};
