import { ArrowRight, ShieldCheck, Scale, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";

export const Hero = () => {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden"
        >
            {/* Background image with dark overlay */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/images/LBH-Gardanusa-hero.webp"
                    alt=""
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#5C130C] via-[#5C130C]/95 to-[#5C130C]/60" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 reveal">
                        <div className="divider-gold mb-8">Lembaga Bantuan Hukum • Gardhatara</div>

                        <h1 className="font-serif-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight font-medium">
                            Akses Bantuan <br />
                            Hukum yang <span className="italic text-[#D4AF37]">Adil</span><br />
                            untuk Semua.
                        </h1>

                        <p className="mt-8 text-slate-200/90 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                            LBH Garuda Dharma Nusantara hadir untuk meningkatkan kesadaran hukum
                            masyarakat, memberikan pendampingan hukum, advokasi kebijakan, serta
                            memperjuangkan keadilan bagi seluruh lapisan masyarakat.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#kontak"
                                data-testid="hero-consult-button"
                                className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C5A059] text-[#5C130C] px-8 py-4 font-semibold tracking-wide group transition-colors"
                            >
                                Konsultasi Hukum
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={`https://wa.me/${BRAND.whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="hero-contact-button"
                                className="inline-flex items-center justify-center gap-3 border border-white/40 hover:border-white text-white hover:bg-white/10 px-8 py-4 font-semibold tracking-wide transition-colors"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Hubungi Kami
                            </a>
                        </div>

                        <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
                            <div className="border-l-2 border-[#D4AF37] pl-4">
                                <div className="font-serif-display text-3xl text-white font-semibold">500+</div>
                                <div className="text-xs uppercase tracking-wider text-slate-300 mt-1">Kasus Didampingi</div>
                            </div>
                            <div className="border-l-2 border-[#D4AF37] pl-4">
                                <div className="font-serif-display text-3xl text-white font-semibold">12</div>
                                <div className="text-xs uppercase tracking-wider text-slate-300 mt-1">Tahun Pengabdian</div>
                            </div>
                            <div className="border-l-2 border-[#D4AF37] pl-4">
                                <div className="font-serif-display text-3xl text-white font-semibold">100%</div>
                                <div className="text-xs uppercase tracking-wider text-slate-300 mt-1">Integritas</div>
                            </div>
                        </div>
                    </div>

                    {/* Right floating card */}
                    <div className="lg:col-span-5 hidden lg:block reveal" style={{ animationDelay: "0.2s" }}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/30 to-transparent blur-2xl" />
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/15 p-8">
                                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                                    <Scale className="h-6 w-6 text-[#D4AF37]" strokeWidth={1.5} />
                                    <div className="text-white/90 text-sm font-semibold tracking-wide uppercase">Layanan Utama</div>
                                </div>
                                <ul className="space-y-4 text-slate-200/90">
                                    {[
                                        "Pendampingan Litigasi & Non-Litigasi",
                                        "Konsultasi Hukum Pidana, Perdata, & Keluarga",
                                        "Advokasi Kebijakan Publik",
                                        "Pos Bantuan Hukum (POSBAKUM)",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <ShieldCheck className="h-4 w-4 text-[#D4AF37] mt-1 flex-shrink-0" strokeWidth={1.75} />
                                            <span className="text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-2">Kantor Pusat</div>
                                    <div className="text-white text-sm leading-relaxed">
                                        {BRAND.address.line1} <br />
                                        {BRAND.address.line2} <br />
                                        {BRAND.address.city}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
                <div className="text-[10px] uppercase tracking-[0.3em]">Scroll</div>
                <div className="h-10 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />
            </div>
        </section>
    );
};