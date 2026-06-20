import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * PageHero — Reusable banner for sub-pages
 * @param {string} label     — gold label above the title (e.g. "Tentang Kami")
 * @param {string} title     — main heading
 * @param {string} subtitle  — optional body text
 * @param {Array}  crumbs    — breadcrumb [{label, href}]. Last item is current page.
 * @param {string} bgImage   — optional background image URL
 */
export const PageHero = ({ label, title, subtitle, crumbs = [], bgImage }) => {
    return (
        <section
            className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#5C130C] overflow-hidden"
            data-testid="page-hero"
        >
            {/* Background image overlay */}
            {bgImage && (
                <div className="absolute inset-0">
                    <img src={bgImage} alt="" className="w-full h-full object-cover opacity-15" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5C130C] to-[#5C130C]/80" />
                </div>
            )}

            {/* Decorative blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-[#D4AF37]/5 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                {crumbs.length > 0 && (
                    <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-8" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-[#D4AF37] transition-colors">Beranda</Link>
                        {crumbs.map((c, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                <ChevronRight className="h-3 w-3" />
                                {i === crumbs.length - 1 ? (
                                    <span className="text-white/80">{c.label}</span>
                                ) : (
                                    <Link to={c.href} className="hover:text-[#D4AF37] transition-colors">
                                        {c.label}
                                    </Link>
                                )}
                            </span>
                        ))}
                    </nav>
                )}

                {/* Label */}
                {label && (
                    <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-5">
                        <span className="h-px w-8 bg-[#D4AF37]" />
                        {label}
                    </div>
                )}

                {/* Title */}
                <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight tracking-tight max-w-3xl">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                        {subtitle}
                    </p>
                )}

                {/* Decorative line */}
                <div className="mt-10 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>
        </section>
    );
};
