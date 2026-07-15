import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const SOCIAL_ICONS = [Facebook, Instagram, Twitter, Linkedin, Youtube];

export const Footer = () => {
    const { lang } = useLanguage();
    const t = translations[lang].footer;

    return (
        <footer data-testid="site-footer" className="bg-[#45130F] text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

                {/* Main Grid: Brand + Info */}
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-5">
                            <img src={BRAND.logo} alt="LBH Gardhatara" className="h-14 w-14 object-contain" />
                            <div>
                                <div className="font-serif-display text-white text-xl font-semibold leading-tight">
                                    LBH GARDHATARA
                                </div>
                                <div className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
                                    Garuda Dharma Nusantara
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
                            {t.tagline}
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-2">
                            {SOCIAL_ICONS.map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label="social"
                                    className="h-9 w-9 border border-white/15 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#5C130C] flex items-center justify-center transition-all rounded-lg"
                                >
                                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Nav + Tagline */}
                    <div className="lg:col-span-7 flex flex-col justify-between gap-8">

                        {/* Navigation */}
                        <div>
                            <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
                                {t.navTitle}
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
                                {t.navLinks.map((l) => (
                                    <li key={l.label}>
                                        <Link
                                            to={l.href}
                                            className="text-sm text-slate-300 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 group"
                                        >
                                            <span className="h-px w-3 bg-[#D4AF37]/50 group-hover:w-5 transition-all duration-200" />
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center justify-center">
                    <div className="text-xs text-white">
                        © {new Date().getFullYear()} {BRAND.name}. {t.copyright}
                    </div>
                </div>
            </div>
        </footer>
    );
};