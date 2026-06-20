import { Users, Heart, ShieldCheck, BookOpen, Vote, Leaf } from "lucide-react";

const FOCUS = [
    { icon: ShieldCheck, title: "Hak Asasi Manusia (HAM)", desc: "Memperjuangkan dan melindungi hak fundamental setiap warga negara." },
    { icon: Heart, title: "Keadilan Sosial", desc: "Mendorong kesetaraan akses terhadap keadilan tanpa diskriminasi." },
    { icon: Users, title: "Perlindungan Kelompok Rentan", desc: "Pendampingan khusus bagi perempuan, anak, lansia, dan disabilitas." },
    { icon: BookOpen, title: "Pendidikan Hukum", desc: "Edukasi hukum berkelanjutan untuk membangun masyarakat sadar hukum." },
    { icon: Vote, title: "Demokrasi & Partisipasi Publik", desc: "Mendorong keterlibatan warga dalam proses demokrasi yang sehat." },
    { icon: Leaf, title: "Lingkungan & Kepentingan Masyarakat", desc: "Advokasi terhadap isu lingkungan demi kesejahteraan publik." },
];

export const Focus = () => {
    return (
        <section id="fokus" data-testid="focus-section" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
                    <div className="lg:col-span-7">
                        <div className="divider-gold mb-6">Fokus Pengabdian</div>
                        <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                            Enam pilar pengabdian kami untuk Nusantara.
                        </h2>
                    </div>
                    <div className="lg:col-span-5">
                        <p className="text-slate-600 leading-relaxed">
                            Setiap fokus pengabdian kami dirancang untuk merespons kebutuhan nyata
                            masyarakat — dari isu lokal hingga kebijakan nasional.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FOCUS.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <div
                                key={f.title}
                                data-testid={`focus-card-${i}`}
                                className="group relative p-8 border border-slate-200 hover:border-[#5C130C] bg-white hover:bg-gradient-to-br hover:from-white hover:to-slate-50 transition-all duration-500"
                            >
                                <div className="absolute top-0 left-0 h-1 w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                                <Icon className="h-10 w-10 text-[#5C130C] mb-6" strokeWidth={1.25} />
                                <h3 className="font-serif-display text-xl text-[#5C130C] font-medium leading-snug">
                                    {f.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                                <div className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                                    0{i + 1} / 06
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};