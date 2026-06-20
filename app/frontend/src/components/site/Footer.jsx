import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin } from "lucide-react";
import { BRAND } from "@/lib/brand";

const NAV_GROUPS = [
    {
        title: "Organisasi",
        links: [
            { label: "Tentang Kami", href: "#tentang" },
            { label: "Visi & Misi", href: "#tentang" },
            { label: "Struktur Organisasi", href: "#struktur" },
            { label: "Mengapa Memilih Kami", href: "#mengapa" },
        ],
    },
    {
        title: "Layanan",
        links: [
            { label: "Bantuan Hukum", href: "#layanan" },
            { label: "Konsultasi Hukum", href: "#layanan" },
            { label: "Advokasi", href: "#layanan" },
            { label: "Penyuluhan", href: "#layanan" },
            { label: "Pos Bantuan Hukum", href: "#layanan" },
        ],
    },
    {
        title: "Program & Media",
        links: [
            { label: "Program Kerja", href: "#program" },
            { label: "Artikel Hukum", href: "#artikel" },
            { label: "Berita & Kegiatan", href: "#artikel" },
            { label: "Galeri", href: "#galeri" },
        ],
    },
    {
        title: "Lainnya",
        links: [
            { label: "Kontak", href: "#kontak" },
            { label: "FAQ", href: "#faq" },
            { label: "Kebijakan Privasi", href: "#privasi" },
            { label: "Disclaimer", href: "#disclaimer" },
        ],
    },
];

export const Footer = () => {
    return (
        <footer data-testid="site-footer" className="bg-[#45130F] text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Brand column */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={BRAND.logo} alt="LBH Gardanusa" className="h-14 w-14 object-contain" />
                            <div>
                                <div className="font-serif-display text-white text-xl font-semibold leading-tight">
                                    LBH GARDHATARA
                                </div>
                                <div className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
                                    Garuda Dharma Nusantara
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-white leading-relaxed max-w-md">
                            Lembaga Bantuan Hukum yang berkomitmen pada keadilan, perlindungan hak
                            asasi manusia, dan pemberdayaan masyarakat melalui akses hukum yang adil.
                        </p>

                        <div className="mt-8 flex items-start gap-3">
                            <MapPin className="h-4 w-4 text-white mt-1 flex-shrink-0" strokeWidth={1.75} />
                            <div className="text-sm text-slate-200 leading-relaxed">
                                {BRAND.address.line1} <br />
                                {BRAND.address.line2} <br />
                                {BRAND.address.city}
                            </div>
                        </div>

                        <div className="mt-8 flex gap-3">
                            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label="social"
                                    className="h-10 w-10 border border-white/15 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#5C130C] flex items-center justify-center transition-all"
                                >
                                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {NAV_GROUPS.map((g) => (
                            <div key={g.title}>
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-5">
                                    {g.title}
                                </div>
                                <ul className="space-y-3">
                                    {g.links.map((l) => (
                                        <li key={l.label}>
                                            <a href={l.href} className="text-sm text-white hover:text-white transition-colors">
                                                {l.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center justify-between">
                    <div className="text-xs text-white">
                        © {new Date().getFullYear()} {BRAND.name}. Hak Cipta Dilindungi.
                    </div>
                    <div className="flex gap-6 text-xs text-white">
                        <a href="#privasi" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                        <a href="#disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
                        <a href={`https://${BRAND.domain}`} className="hover:text-white transition-colors">
                            {BRAND.domain}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};