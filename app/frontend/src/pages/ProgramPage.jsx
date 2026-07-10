import { Users, Heart, ShieldCheck, BookOpen, Vote, Leaf, HandHeart, Megaphone, Lightbulb, Radio } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const FOCUS_ICONS = [ShieldCheck, Heart, Users, BookOpen, Vote, Leaf];
const PROGRAM_ICONS = [HandHeart, Megaphone, Lightbulb, Radio];
const PROGRAM_NOS = ["01", "02", "03", "04"];

export const ProgramPage = () => {
    const { lang } = useLanguage();
    const t = translations[lang].program;

    return (
        <>
            <PageHero
                label={t.heroLabel}
                title={t.heroTitle}
                subtitle={t.heroSubtitle}
                crumbs={[{ label: t.heroLabel, href: "/program" }]}
                bgImage="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=2000"
            />

            {/* STATISTIK */}
            <section className="py-12 bg-[#5C130C] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.stats.map((s) => (
                            <div key={s.label} className="text-center">
                                <div className="font-serif-display text-4xl md:text-5xl text-[#D4AF37] font-semibold">{s.value}</div>
                                <div className="mt-2 text-white font-semibold text-sm uppercase tracking-wider">{s.label}</div>
                                <div className="mt-1 text-slate-400 text-xs">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOKUS PENGABDIAN */}
            <section className="py-6 lg:py-24 bg-white" id="fokus">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8 items-end mb-5">
                        <div className="lg:col-span-7">
                            <div className="divider-gold mb-3">{t.focusLabel}</div>
                            <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight">
                                {t.focusHeading}
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {t.focusItems.map((f, i) => {
                            const Icon = FOCUS_ICONS[i];
                            return (
                                <div
                                    key={f.title}
                                    className="group relative border border-slate-200 hover:border-[#5C130C] bg-white hover:bg-gradient-to-br hover:from-white hover:to-slate-50 transition-all duration-500 p-4"
                                >
                                    <div className="absolute top-0 left-0 h-1 w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                                    <div className="flex items-start justify-between mb-5">
                                        <Icon className="h-10 w-10 text-[#5C130C]" strokeWidth={1.25} />
                                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                                            0{i + 1} / 06
                                        </div>
                                    </div>
                                    <h3 className="font-serif-display text-xl text-[#5C130C] font-medium leading-snug">{f.title}</h3>
                                    <ul className="mt-5 space-y-1.5">
                                        {f.examples.map((e, j) => (
                                            <li key={j} className="text-xs text-slate-500 flex items-center gap-2">
                                                <span className="h-1 w-1 bg-[#D4AF37] flex-shrink-0" />
                                                {e}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PROGRAM KERJA */}
            <section className="py-6 lg:py-24 bg-[#5C130C] text-white relative overflow-hidden" id="program-kerja">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-6">
                            <span className="h-px w-8 bg-[#D4AF37]" />
                            {t.programLabel}
                        </div>
                        <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-white font-bold leading-[1.00] tracking-tight mb-5">
                            {t.programHeading}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-200 leading-tight mb-10">
                            {t.programSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                        {t.programItems.map((p, i) => {
                            const Icon = PROGRAM_ICONS[i];
                            return (
                                <div
                                    key={p.title}
                                    className="group bg-white/5 border border-white/10 p-4 lg:p-10 hover:bg-white/10 transition-colors duration-500"
                                >
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="font-serif-display text-5xl text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                                            {PROGRAM_NOS[i]}
                                        </div>
                                        <Icon className="h-10 w-10 text-white/70 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.25} />
                                    </div>
                                    <h3 className="font-serif-display text-2xl md:text-3xl text-white font-medium leading-snug">
                                        {p.title}
                                    </h3>
                                    <p className="mt-4 text-slate-300 leading-relaxed">{p.desc}</p>
                                    <div className="mt-8 h-px w-12 bg-[#D4AF37] group-hover:w-24 transition-all duration-500" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};
