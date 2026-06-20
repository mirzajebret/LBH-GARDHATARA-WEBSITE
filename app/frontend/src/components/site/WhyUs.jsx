import { Award, Scale, GraduationCap, HandHeart, ShieldCheck, Network } from "lucide-react";

const REASONS = [
    { icon: Award, title: "Profesional & Berintegritas", desc: "Tim advokat dan paralegal berpengalaman dengan standar etika tertinggi." },
    { icon: Scale, title: "Berorientasi pada Keadilan", desc: "Setiap kasus diperjuangkan dengan komitmen pada nilai keadilan substantif." },
    { icon: GraduationCap, title: "Edukasi Hukum Berkelanjutan", desc: "Program penyuluhan rutin untuk membangun masyarakat yang sadar hukum." },
    { icon: HandHeart, title: "Pendampingan Humanis", desc: "Pendekatan empati dan personal di setiap tahap proses hukum." },
    { icon: ShieldCheck, title: "Komitmen pada HAM", desc: "Berdiri di garis depan perlindungan hak asasi manusia di Indonesia." },
    { icon: Network, title: "Jaringan Nasional", desc: "Pengembangan cabang dan kemitraan strategis di seluruh Nusantara." },
];

export const WhyUs = () => {
    return (
        <section id="mengapa" data-testid="why-us-section" className="py-24 lg:py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="divider-gold mb-6 justify-center">Mengapa Memilih Kami</div>
                    <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                        Alasan mempercayai kami.
                    </h2>
                    <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                        Kombinasi kompetensi hukum, integritas, dan kepedulian sosial yang
                        membedakan kami sebagai mitra hukum yang andal.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {REASONS.map((r, i) => {
                        const Icon = r.icon;
                        return (
                            <div
                                key={r.title}
                                data-testid={`why-card-${i}`}
                                className="group flex gap-5 p-6 hover:bg-white hover:shadow-lg transition-all duration-500"
                            >
                                <div className="flex-shrink-0">
                                    <div className="h-14 w-14 bg-[#5C130C] group-hover:bg-[#D4AF37] flex items-center justify-center transition-colors">
                                        <Icon className="h-6 w-6 text-[#D4AF37] group-hover:text-[#5C130C] transition-colors" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-serif-display text-xl text-[#5C130C] font-medium leading-snug">
                                        {r.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{r.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};