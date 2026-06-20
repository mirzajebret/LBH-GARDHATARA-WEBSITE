import { HandHeart, Megaphone, Lightbulb, Radio } from "lucide-react";

const PROGRAMS = [
    {
        no: "01",
        icon: HandHeart,
        title: "Program Bantuan Hukum",
        desc: "Memberikan bantuan dan pendampingan hukum kepada masyarakat kurang mampu, mulai dari kasus pidana, perdata, keluarga, hingga ketenagakerjaan.",
    },
    {
        no: "02",
        icon: Megaphone,
        title: "Program Advokasi Kebijakan",
        desc: "Melakukan kajian hukum dan memberikan masukan terhadap kebijakan publik agar lebih berkeadilan dan berpihak pada masyarakat.",
    },
    {
        no: "03",
        icon: Lightbulb,
        title: "Program Penyuluhan Hukum",
        desc: "Meningkatkan pemahaman hukum masyarakat melalui edukasi berkelanjutan di sekolah, komunitas, dan ruang publik.",
    },
    {
        no: "04",
        icon: Radio,
        title: "Program Kampanye & Publikasi",
        desc: "Menyebarluaskan informasi hukum melalui media digital, podcast, dan berbagai sarana komunikasi publik agar literasi hukum semakin merata.",
    },
];

export const Programs = () => {
    return (
        <section
            id="program"
            data-testid="programs-section"
            className="relative py-24 lg:py-32 bg-[#5C130C] text-white overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
                <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-6">
                        <span className="h-px w-8 bg-[#D4AF37]" />
                        Program Kerja
                    </div>
                    <h2 className="font-serif-display text-4xl md:text-5xl text-white font-medium leading-tight tracking-tight">
                        Empat program utama yang menggerakkan misi keadilan kami.
                    </h2>
                    <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
                        Dirancang sebagai ekosistem terintegrasi — dari pendampingan langsung hingga
                        edukasi publik dan advokasi kebijakan.
                    </p>
                </div>

                <div className="mt-16 grid gap-2 grid-cols-2 lg:grid-cols-4 md:gap-6">
                    {PROGRAMS.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <div
                                key={p.title}
                                data-testid={`program-card-${i}`}
                                className="group bg-[#5C130C] p-10 lg:p-12 hover:bg-[#45130F] transition-colors duration-500"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="font-serif-display text-5xl text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors">
                                        {p.no}
                                    </div>
                                    <Icon className="h-10 w-10 text-white/80 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.25} />
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
    );
};