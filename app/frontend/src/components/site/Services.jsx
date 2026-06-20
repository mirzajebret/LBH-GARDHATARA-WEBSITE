import { Gavel, MessagesSquare, Scale, GraduationCap, FileSearch, MapPin, ArrowUpRight } from "lucide-react";

const SERVICES = [
    {
        icon: Gavel,
        title: "Bantuan Hukum",
        desc: "Pendampingan hukum bagi masyarakat yang membutuhkan bantuan dan perlindungan hukum.",
        span: "md:col-span-2",
    },
    {
        icon: MessagesSquare,
        title: "Konsultasi Hukum",
        desc: "Memberikan konsultasi serta solusi atas berbagai persoalan hukum yang dihadapi masyarakat.",
        span: "",
    },
    {
        icon: Scale,
        title: "Advokasi Hukum",
        desc: "Pendampingan dan pembelaan terhadap hak-hak masyarakat secara profesional.",
        span: "",
    },
    {
        icon: GraduationCap,
        title: "Penyuluhan Hukum",
        desc: "Edukasi hukum melalui seminar, diskusi, pelatihan, dan kegiatan sosial kemasyarakatan.",
        span: "md:col-span-2",
    },
    {
        icon: FileSearch,
        title: "Kajian Kebijakan",
        desc: "Analisis dan kajian terhadap peraturan maupun kebijakan yang berdampak pada masyarakat luas.",
        span: "",
    },
    {
        icon: MapPin,
        title: "Pos Bantuan Hukum",
        desc: "Penyediaan layanan bantuan hukum yang mudah diakses oleh masyarakat.",
        span: "md:col-span-2",
    },
];

export const Services = () => {
    return (
        <section id="layanan" data-testid="services-section" className="py-24 lg:py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="divider-gold mb-6">Layanan Kami</div>
                    <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                        Layanan hukum komprehensif untuk setiap lapisan masyarakat.
                    </h2>
                    <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                        Dari konsultasi awal hingga pendampingan di pengadilan, kami hadir untuk
                        memastikan hak Anda terlindungi secara profesional dan humanis.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                    {SERVICES.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.title}
                                data-testid={`service-card-${i}`}
                                className={`group relative bg-white p-8 lg:p-10 hover:bg-[#5C130C] transition-all duration-500 cursor-pointer ${s.span}`}
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="h-14 w-14 flex items-center justify-center border border-[#D4AF37]/40 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] transition-all">
                                        <Icon className="h-7 w-7 text-[#D4AF37] group-hover:text-[#5C130C] transition-colors" strokeWidth={1.5} />
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-[#D4AF37] group-hover:rotate-45 transition-all duration-500" />
                                </div>
                                <h3 className="font-serif-display text-2xl text-[#5C130C] group-hover:text-white font-medium leading-snug transition-colors">
                                    {s.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                                    {s.desc}
                                </p>
                                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5C130C] group-hover:text-[#D4AF37] font-semibold transition-colors">
                                    <span className="h-px w-6 bg-[#D4AF37]" />
                                    Pelajari Lebih Lanjut
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};