const TEAM = [
    {
        role: "Ketua",
        name: "Yose Desman, S.H.",
        desc: "Memimpin arah strategis organisasi dengan komitmen pada keadilan substantif dan integritas profesi.",
    },
    {
        role: "Sekretaris",
        name: "Pandi Siswanto",
        desc: "Mengelola tata kelola, dokumentasi, dan koordinasi internal lembaga secara profesional.",
    },
    {
        role: "Bendahara",
        name: "Eka Rina Wahyuni, S.H.",
        desc: "Menjaga akuntabilitas keuangan dan transparansi pelaporan kepada para pemangku kepentingan.",
    },
    {
        role: "Pengawas",
        name: "Bilton Ariansyah",
        desc: "Mengawasi kepatuhan terhadap etika, standar, dan prosedur operasional organisasi.",
    },
];

const initials = (name) =>
    name
        .replace(/,?\s?S\.?H\.?/g, "")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();

export const Structure = () => {
    return (
        <section id="struktur" data-testid="structure-section" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 mb-16">
                    <div className="lg:col-span-7">
                        <div className="divider-gold mb-6">Struktur Organisasi</div>
                        <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                            Sturktur Organisasi LBH Ghardatara.
                        </h2>
                    </div>
                    <div className="lg:col-span-5 flex items-end">
                        <p className="text-slate-600 leading-relaxed">
                            Tim kepemimpinan kami menggabungkan keahlian hukum, kepedulian sosial,
                            dan pengalaman organisasi untuk memastikan setiap langkah lembaga
                            dilakukan dengan tanggung jawab penuh.
                        </p>
                    </div>
                </div>

                <div className="grid gap-2 grid-cols-2 lg:grid-cols-4 md:gap-6">
                    {TEAM.map((m, i) => (
                        <div
                            key={m.name}
                            data-testid={`team-card-${i}`}
                            className="group relative bg-white border border-slate-200 hover:border-[#5C130C] transition-all duration-500"
                        >
                            <div className="aspect-[4/5] bg-gradient-to-br from-[#5C130C] to-[#1a2f56] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#D4AF37] blur-2xl" />
                                </div>
                                <span className="font-serif-display text-7xl text-[#D4AF37] font-medium relative">
                                    {initials(m.name)}
                                </span>
                                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-white/70 font-semibold">
                                    0{i + 1}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
                                    {m.role}
                                </div>
                                <div className="font-serif-display text-xl text-[#5C130C] font-medium leading-snug">
                                    {m.name}
                                </div>
                                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};