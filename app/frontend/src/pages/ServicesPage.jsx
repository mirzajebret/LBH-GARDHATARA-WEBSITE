import { Gavel, MessagesSquare, Scale, GraduationCap, FileSearch, ArrowRight, CheckCircle2, ClipboardList, UserCheck, Search, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const SERVICE_ICONS = [Gavel, MessagesSquare, Scale, GraduationCap, FileSearch];
const STEP_ICONS = [ClipboardList, Search, UserCheck, Handshake];

export const ServicesPage = () => {
    const { lang } = useLanguage();
    const t = translations[lang].services;

    return (
        <>
            <PageHero
                label={t.heroLabel}
                title={t.heroTitle}
                subtitle={t.heroSubtitle}
                crumbs={[{ label: t.heroLabel, href: "/layanan" }]}
                bgImage="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=2000"
            />

            {/* LAYANAN DETAIL */}
            <section className="py-6 lg:py-24 bg-white" id="layanan-list">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-5">
                        <div className="divider-gold mb-3">{t.listLabel}</div>
                        <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
                            {t.listHeading}
                        </h2>
                        <p className="text-base sm:text-lg text-gray-800 leading-tight">
                            {t.listSubtitle}
                        </p>
                    </div>

                    <div className="space-y-2">
                        {t.items.map((s, i) => {
                            const Icon = SERVICE_ICONS[i];
                            const ids = ["bantuan-hukum", "konsultasi", "advokasi", "penyuluhan", "kajian"];
                            return (
                                <div
                                    key={s.title}
                                    id={ids[i]}
                                    className="group grid md:grid-cols-12 gap-4 bg-[#F8FAFC] hover:bg-white border border-transparent hover:border-[#5C130C] p-8 lg:p-10 transition-all duration-500"
                                >
                                    {/* Icon + number */}
                                    <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                                        <div className="h-14 w-14 flex-shrink-0 bg-[#5C130C] group-hover:bg-[#D4AF37] flex items-center justify-center transition-colors">
                                            <Icon className="h-7 w-7 text-[#D4AF37] group-hover:text-[#5C130C] transition-colors" strokeWidth={1.5} />
                                        </div>
                                        <div className="font-serif-display text-4xl text-[#D4AF37]/30 group-hover:text-[#D4AF37]/60 transition-colors hidden md:block">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="md:col-span-7">
                                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold leading-tight mb-2">
                                            {s.tagline}
                                        </div>
                                        <h3 className="font-serif-display text-2xl md:text-3xl text-[#5C130C] font-medium leading-tight">
                                            {s.title}
                                        </h3>
                                        <p className="mt-4 text-slate-600 leading-tight">{s.desc}</p>
                                    </div>

                                    {/* Details */}
                                    <div className="md:col-span-4">
                                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#5C130C] font-semibold mb-3">
                                            {t.coverageLabel}
                                        </div>
                                        <ul className="space-y-2">
                                            {s.details.map((d, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-slate-600 leading-tight">
                                                    <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                                                    <span>{d}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PROSEDUR PENGAJUAN */}
            <section className="py-6 lg:py-24 bg-[#5C130C] text-white relative overflow-hidden" id="prosedur">
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-6">
                            <span className="h-px w-8 bg-[#D4AF37]" />
                            {t.procedureLabel}
                            <span className="h-px w-8 bg-[#D4AF37]" />
                        </div>
                        <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-white font-bold leading-[1.00] tracking-tight mb-5">
                            {t.procedureHeading}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-200 leading-tight mb-10">
                            {t.procedureSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
                        {t.steps.map((step, i) => {
                            const Icon = STEP_ICONS[i];
                            const no = String(i + 1).padStart(2, "0");
                            return (
                                <div key={step.title} className="bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors">
                                    <div className="font-serif-display text-5xl text-[#D4AF37]/50 mb-4">{no}</div>
                                    <Icon className="h-8 w-8 text-[#D4AF37] mb-3" strokeWidth={1.5} />
                                    <h3 className="font-serif-display text-xl text-white font-medium mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SYARAT PENERIMA BANTUAN GRATIS */}
            <section className="py-6 lg:py-24 bg-white" id="syarat">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="divider-gold mb-3">{t.probono}</div>
                            <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
                                {t.probonoHeading}
                            </h2>
                            <p className="text-base sm:text-lg text-gray-800 leading-tight text-justify mb-10">
                                {t.probonoDesc}
                            </p>
                            <ul className="mt-8 space-y-4">
                                {t.requirements.map((r, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="h-8 w-8 bg-[#5C130C] flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">
                                            {i + 1}
                                        </div>
                                        <p className="text-slate-700 leading-tight pt-1">{r}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#F8FAFC] border border-slate-200 p-8">
                            <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">{t.importantLabel}</div>
                            <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
                                {t.importantItems.map((item, i) => (
                                    <p key={i}>✅ <span dangerouslySetInnerHTML={{ __html: item }} /></p>
                                ))}
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <Link
                                    to="/kontak"
                                    className="inline-flex items-center gap-3 bg-[#5C130C] hover:bg-[#45130F] text-white px-6 py-3 text-sm font-semibold tracking-wide transition-colors group"
                                >
                                    {t.probonoBtn}
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
