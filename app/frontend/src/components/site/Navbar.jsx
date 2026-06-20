import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BRAND } from "@/lib/brand";

const NAV_ITEMS = [
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Fokus", href: "#fokus" },
    { label: "Program", href: "#program" },
    { label: "Struktur", href: "#struktur" },
    { label: "Artikel", href: "#artikel" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-navbar"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
                : "bg-white/70 backdrop-blur-md border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                <a href="#top" data-testid="navbar-logo" className="flex items-center gap-3">
                    <img src={BRAND.logo} alt="LBH Gardhatara" className="h-12 w-12 object-contain" />
                    <div className="leading-tight ">
                        <div className="font-serif-display text-[#5C130C] text-xl font-semibold leading-tight">
                            LBH GARDHATARA
                        </div>
                        <div className="text-[10px] tracking-[0.25em] uppercase text-black font-semibold">
                            Garuda Dharma Nusantara
                        </div>

                    </div>
                </a>

                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            data-testid={`nav-${item.label.toLowerCase()}`}
                            className="text-sm font-medium text-slate-700 hover:text-[#5C130C] transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#kontak"
                        data-testid="navbar-cta"
                        className="hidden md:inline-flex items-center gap-2 bg-[#5C130C] hover:bg-[#45130F] text-white px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors"
                    >
                        <Phone className="h-4 w-4" strokeWidth={1.75} />
                        Konsultasi
                    </a>
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

            {open && (
                <div className="lg:hidden bg-white border-t border-slate-200" data-testid="navbar-mobile-menu">
                    <div className="px-4 py-4 space-y-1">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block py-3 px-2 text-slate-700 hover:text-[#5C130C] hover:bg-slate-50 text-sm font-medium border-b border-slate-100"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#kontak"
                            onClick={() => setOpen(false)}
                            className="block mt-3 bg-[#5C130C] text-white text-center py-3 text-sm font-semibold"
                        >
                            Konsultasi Hukum
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};