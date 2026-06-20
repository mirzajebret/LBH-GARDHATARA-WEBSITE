import { CheckCircle2 } from "lucide-react";

const VALUES = [
    "Integritas",
    "Keadilan",
    "Profesionalisme",
    "Kepedulian Sosial",
    "Perlindungan Hak Asasi Manusia",
];

const MISSIONS = [
    "Memberikan bantuan hukum kepada masyarakat yang membutuhkan.",
    "Meningkatkan kesadaran hukum masyarakat melalui edukasi dan penyuluhan.",
    "Melakukan advokasi terhadap kebijakan yang berdampak pada publik.",
    "Mendorong perlindungan hak asasi manusia.",
    "Mengembangkan budaya hukum yang demokratis dan partisipatif.",
];

export const About = () => {
    return (
        <section id="tentang" data-testid="about-section" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Image column */}
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src="/images/patung-garuda.jpg"
                                    alt="Diskusi hukum profesional"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-[#5C130C] text-white p-6 max-w-[240px] hidden md:block">
                                <div className="font-serif-display text-2xl leading-tight">
                                    Sejak <span className="text-[#D4AF37]">2012</span>
                                </div>
                                <div className="text-xs text-slate-300 mt-2 leading-relaxed">
                                    Mengabdi untuk keadilan dan hak asasi manusia di seluruh Nusantara.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content column */}
                    <div className="lg:col-span-7">
                        <div className="divider-gold mb-6">Tentang Kami</div>
                        <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                            Tentang LBH Garuda Dharma Nusantara
                        </h2>
                        <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                            LBH Garuda Dharma Nusantara adalah lembaga bantuan hukum yang bergerak di
                            bidang pendidikan, sosial, dan kemanusiaan. Organisasi ini berkomitmen
                            meningkatkan kesadaran hukum masyarakat, memberikan pendampingan hukum kepada
                            kelompok yang membutuhkan, serta mendorong terciptanya budaya hukum yang
                            adil, demokratis, dan partisipatif.
                        </p>

                        {/* Values */}
                        <div className="mt-10">
                            <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
                                Nilai Utama
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {VALUES.map((v) => (
                                    <span
                                        key={v}
                                        data-testid={`value-${v.toLowerCase().replace(/\s/g, "-")}`}
                                        className="inline-flex items-center gap-2 border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:border-[#D4AF37] hover:text-[#5C130C] transition-colors"
                                    >
                                        <span className="h-1.5 w-1.5 bg-[#D4AF37]" />
                                        {v}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Vision & Mission */}
                        <div className="mt-12 grid md:grid-cols-2 gap-8">
                            <div className="border-t-2 border-[#D4AF37] pt-6">
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#5C130C] font-semibold mb-3">
                                    Visi
                                </div>
                                <p className="font-serif-display text-xl text-slate-800 leading-snug italic">
                                    "Menjadi lembaga bantuan hukum yang profesional, terpercaya, dan
                                    berkontribusi dalam menciptakan masyarakat yang sadar hukum,
                                    berkeadilan, dan menghormati hak asasi manusia."
                                </p>
                            </div>
                            <div className="border-t-2 border-[#5C130C] pt-6">
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#5C130C] font-semibold mb-3">
                                    Misi
                                </div>
                                <ul className="space-y-3">
                                    {MISSIONS.map((m, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                                            <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                                            <span>{m}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};