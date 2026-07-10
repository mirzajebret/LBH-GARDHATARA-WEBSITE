import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();
    const { lang, toggleLang } = useLanguage();
    const t = translations[lang].navbar;

    const NAV_ITEMS = [
        { label: t.home, href: "/" },
        {
            label: t.about,
            href: "/tentang",
            sub: t.aboutSub,
        },
        {
            label: t.services,
            href: "/layanan",
            sub: t.servicesSub,
        },
        { label: t.program, href: "/program" },
        { label: t.article, href: "/artikel" },
        { label: t.contact, href: "/kontak" },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setOpen(false);
        setOpenDropdown(null);
    }, [location]);

    const isActive = (href) => {
        if (href === "/") return location.pathname === "/";
        return location.pathname.startsWith(href);
    };

    return (
        <header
            data-testid="site-navbar"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
                : "bg-white/95 backdrop-blur-md border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                <Link to="/" data-testid="navbar-logo" className="flex items-center gap-3">
                    <img src={BRAND.logo} alt="LBH Gardhatara" className="h-12 w-12 object-contain" />
                    <div className="leading-tight">
                        <div className="font-serif-display text-[#5C130C] text-xl font-semibold leading-tight">
                            LBH GARDHATARA
                        </div>
                        <div className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold">
                            Garuda Dharma Nusantara
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.href} className="relative group">
                            <Link
                                to={item.href}
                                data-testid={`nav-${item.href === "/" ? "home" : item.href.replace("/", "")}`}
                                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors relative ${isActive(item.href)
                                    ? "text-[#5C130C]"
                                    : "text-slate-700 hover:text-[#5C130C]"
                                    }`}
                            >
                                {item.label}
                                {item.sub && <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-200" />}
                                {/* Active indicator */}
                                <span className={`absolute -bottom-1 left-3 right-3 h-px bg-[#D4AF37] transition-all duration-300 ${isActive(item.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                            </Link>

                            {/* Dropdown */}
                            {item.sub && (
                                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-white border border-slate-200 shadow-xl min-w-[220px] py-2">
                                        {item.sub.map((s) => (
                                            <Link
                                                key={s.href}
                                                to={s.href}
                                                className="block px-5 py-2.5 text-sm text-slate-700 hover:text-[#5C130C] hover:bg-slate-50 transition-colors"
                                            >
                                                {s.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLang}
                        data-testid="lang-toggle"
                        aria-label="Toggle language"
                        className="hidden sm:flex items-center gap-0 rounded-full border border-slate-300 overflow-hidden text-[11px] font-bold tracking-widest"
                    >
                        <span className={`px-2.5 py-1.5 transition-colors duration-200 ${lang === "id" ? "bg-[#5C130C] text-white" : "text-slate-500 hover:text-[#5C130C]"}`}>
                            ID
                        </span>
                        <span className="text-slate-300 text-xs">|</span>
                        <span className={`px-2.5 py-1.5 transition-colors duration-200 ${lang === "en" ? "bg-[#5C130C] text-white" : "text-slate-500 hover:text-[#5C130C]"}`}>
                            EN
                        </span>
                    </button>

                    <Link
                        to="/kontak"
                        data-testid="navbar-cta"
                        className="hidden md:inline-flex items-center gap-2 bg-[#5C130C] hover:bg-[#45130F] text-white px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors"
                    >
                        <Phone className="h-4 w-4" strokeWidth={1.75} />
                        {t.cta}
                    </Link>
                    <button
                        data-testid="navbar-menu-toggle"
                        onClick={() => setOpen(!open)}
                        className="lg:hidden p-2 text-[#5C130C]"
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden bg-white border-t border-slate-200" data-testid="navbar-mobile-menu">
                    <div className="px-4 py-4 space-y-1">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.href}>
                                <div className="flex items-center justify-between">
                                    <Link
                                        to={item.href}
                                        className={`flex-1 block py-3 px-2 text-sm font-medium border-b border-slate-100 ${isActive(item.href) ? "text-[#5C130C]" : "text-slate-700"}`}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.sub && (
                                        <button
                                            onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                                            className="px-2 py-3 text-slate-500"
                                        >
                                            <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.href ? "rotate-180" : ""}`} />
                                        </button>
                                    )}
                                </div>
                                {item.sub && openDropdown === item.href && (
                                    <div className="pl-4 border-b border-slate-100 bg-slate-50">
                                        {item.sub.map((s) => (
                                            <Link
                                                key={s.href}
                                                to={s.href}
                                                className="block py-2.5 px-2 text-sm text-slate-600 hover:text-[#5C130C]"
                                            >
                                                {s.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Mobile Language Toggle */}
                        <div className="pt-2 pb-1 flex items-center gap-2">
                            <span className="text-xs text-slate-400 uppercase tracking-widest">Language:</span>
                            <button
                                onClick={toggleLang}
                                className="flex items-center gap-0 rounded-full border border-slate-300 overflow-hidden text-[11px] font-bold tracking-widest"
                            >
                                <span className={`px-2.5 py-1.5 transition-colors duration-200 ${lang === "id" ? "bg-[#5C130C] text-white" : "text-slate-500"}`}>
                                    ID
                                </span>
                                <span className="text-slate-300 text-xs">|</span>
                                <span className={`px-2.5 py-1.5 transition-colors duration-200 ${lang === "en" ? "bg-[#5C130C] text-white" : "text-slate-500"}`}>
                                    EN
                                </span>
                            </button>
                        </div>
                        <Link
                            to="/kontak"
                            className="block mt-3 bg-[#5C130C] text-white text-center py-3 text-sm font-semibold"
                        >
                            {t.ctaMobile}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};