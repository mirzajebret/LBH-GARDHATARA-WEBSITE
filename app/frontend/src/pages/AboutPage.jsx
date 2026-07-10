import { CheckCircle2, Award, Scale, GraduationCap, HandHeart, ShieldCheck, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const WHY_US_ICONS = [Award, Scale, GraduationCap, HandHeart, ShieldCheck, Network];

const initials = (name) =>
    name
        .replace(/,?\s?S\.?H\.?/g, "")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();

const TEAM_PHOTOS = [
    { name: "Yose Desman, S.H.", photo: "/images/Galeri/Yose_Desman.png" },
    { name: "H. Pandi Siswanto, S.H.", photo: "/images/Galeri/H_PANDI_SISWANTO.jpeg" },
    { name: "Eka Rina Wahyuni, S.H., CLA", photo: "/images/Galeri/Eka_Rina_Wahyuni.jpeg" },
    { name: "Bilton Ariansyah, S.H.", photo: "/images/Galeri/Bilton_Ariansyah.jpeg" },
    { name: "Sapto Fajar Prima, S.H.", photo: "/images/Galeri/Sapto_Fajar_Prima.jpeg" },
];

const TEAM_ROLES_ID = ["Ketua", "Sekretaris", "Bendahara", "Pengawas", "Pengawas"];

export const AboutPage = () => {
    const { lang } = useLanguage();
    const t = translations[lang].about;

    const TEAM = TEAM_PHOTOS.map((m, i) => ({
        ...m,
        role: t.teamRoles[TEAM_ROLES_ID[i]],
        desc: t.teamDescs[i],
    }));

    return (
        <>
            <PageHero
                label={t.heroLabel}
                title={t.heroTitle}
                subtitle={t.heroSubtitle}
                crumbs={[{ label: t.heroLabel, href: "/tentang" }]}
                bgImage="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=85&w=2000&auto=format&fit=crop"
            />

            {/* PROFIL & SEJARAH */}
            <section className="py-6 lg:py-24 bg-white" id="profil">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1708320254291-38c06d13733e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Kantor LBH Gardhatara"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-[#5C130C] text-white p-6 max-w-[240px] hidden md:block">
                                    <div className="font-serif-display text-2xl leading-tight">
                                        {t.sinceText} <span className="text-[#D4AF37]">2025</span>
                                    </div>
                                    <div className="text-xs text-slate-300 mt-2 leading-relaxed">
                                        {t.sinceDesc}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="divider-gold mb-3">{t.profilLabel}</div>
                            <h2 className="font-serif-display text-3xl sm:text-6xl md:text-[5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
                                {t.profilHeading1} <br /> <span className="font-sans text-[#5C130C]">{t.profilHeading2}</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-800 leading-tight text-justify mb-10">
                                {t.profilP1}
                            </p>
                            <p className="text-base sm:text-lg text-gray-800 leading-tight text-justify mb-10">
                                {t.profilP2}
                            </p>
                            <p className="text-base sm:text-lg text-gray-800 leading-tight text-justify mb-10">
                                {t.profilP3}
                            </p>

                            {/* Values */}
                            <div className="mt-10">
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">{t.valuesLabel}</div>
                                <div className="flex flex-wrap gap-2">
                                    {t.values.map((v) => (
                                        <span
                                            key={v}
                                            className="inline-flex items-center gap-2 border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:border-[#D4AF37] hover:text-[#5C130C] transition-colors"
                                        >
                                            <span className="h-1.5 w-1.5 bg-[#D4AF37]" />
                                            {v}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISI & MISI */}
            <section className="py-6 lg:py-24 bg-[#F8FAFC]" id="visi-misi">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="divider-gold mb-3 justify-center">{t.visiMisiLabel}</div>
                        <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
                            {t.visiMisiHeading}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="border-t-4 border-[#D4AF37] bg-white p-4 shadow-sm">
                            <div className="text-lg uppercase tracking-[0.25em] text-[#5C130C] font-semibold mb-2">{t.visiTitle}</div>
                            <p className="font-serif-display text-xl text-slate-800 leading-snug italic">
                                {t.visiText}
                            </p>
                        </div>

                        <div className="border-t-4 border-[#D4AF37] bg-white p-4 shadow-sm">
                            <div className="text-lg uppercase tracking-[0.25em] text-[#5C130C] font-semibold mb-4">{t.misiTitle}</div>
                            <ul className="space-y-2">
                                {t.missions.map((m, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                                        <span>{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* MENGAPA MEMILIH KAMI */}
            <section className="py-6 lg:py-24 bg-white" id="mengapa">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <div className="divider-gold mb-3 justify-center">{t.whyLabel}</div>
                        <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
                            {t.whyHeading}
                        </h2>
                        <p className="text-base sm:text-lg text-gray-800 leading-tight text-center">
                            {t.whySubtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {t.whyItems.map((r, i) => {
                            const Icon = WHY_US_ICONS[i];
                            return (
                                <div
                                    key={r.title}
                                    className="group flex gap-4 p-2 hover:bg-[#F8FAFC] hover:shadow-lg transition-all duration-500"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="h-14 w-14 bg-[#5C130C] group-hover:bg-[#D4AF37] flex items-center justify-center transition-colors">
                                            <Icon className="h-6 w-6 text-[#D4AF37] group-hover:text-[#5C130C] transition-colors" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-serif-display text-xl text-[#5C130C] font-medium leading-tight">
                                            {r.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-tight">{r.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* STRUKTUR ORGANISASI */}
            <section className="py-6 lg:py-24 bg-[#F8FAFC]" id="struktur">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 mb-5">
                        <div className="lg:col-span-7">
                            <div className="divider-gold mb-3">{t.structureLabel}</div>
                            <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
                                {t.structureHeading}
                            </h2>
                        </div>
                    </div>

                    <div className="grid gap-2 grid-cols-2 lg:grid-cols-5 md:gap-6">
                        {TEAM.map((m, i) => (
                            <div
                                key={m.name}
                                data-testid={`team-card-${i}`}
                                className="group relative bg-white border border-slate-200 hover:border-[#5C130C] transition-all duration-500"
                            >
                                <div className="aspect-[4/5] bg-gradient-to-br from-[#5C130C] to-[#1a2f56] flex items-center justify-center relative overflow-hidden">
                                    {m.photo ? (
                                        <img
                                            src={m.photo}
                                            alt={m.name}
                                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#D4AF37] blur-2xl" />
                                            </div>
                                            <span className="font-serif-display text-7xl text-[#D4AF37] font-medium relative">
                                                {initials(m.name)}
                                            </span>
                                        </>
                                    )}
                                    <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-white/70 font-semibold drop-shadow">
                                        0{i + 1}
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
                                        {m.role}
                                    </div>
                                    <div className="font-serif-display text-lg text-[#5C130C] font-medium leading-snug">
                                        {m.name}
                                    </div>
                                    <p className="mt-3 text-xs text-slate-600 leading-relaxed hidden md:block">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-10 bg-[#5C130C] text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="font-serif-display text-4xl md:text-5xl text-white font-medium leading-tight max-w-3xl mx-auto mb-5">
                        {t.ctaHeading}
                    </h2>
                    <p className="text-base sm:text-lg text-slate-300 leading-tight text-center mb-6">
                        {t.ctaDesc}
                    </p>
                    <Link
                        to="/kontak"
                        className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#C5A059] text-[#5C130C] px-8 py-4 font-semibold tracking-wide transition-colors"
                    >
                        {t.ctaBtn}
                    </Link>
                </div>
            </section>
        </>
    );
};
