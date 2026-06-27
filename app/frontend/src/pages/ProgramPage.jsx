import { Users, Heart, ShieldCheck, BookOpen, Vote, Leaf, HandHeart, Megaphone, Lightbulb, Radio, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";

const FOCUS = [
    {
        icon: ShieldCheck,
        title: "Hak Asasi Manusia (HAM)",
        desc: "Memperjuangkan dan melindungi hak fundamental setiap warga negara. Kami aktif mendampingi korban pelanggaran HAM dan berkoordinasi dengan Komnas HAM serta lembaga perlindungan lainnya.",
        examples: ["Pendampingan korban kekerasan aparat", "Advokasi hak tahanan", "Perlindungan pembela HAM"],
    },
    {
        icon: Heart,
        title: "Keadilan Sosial",
        desc: "Mendorong kesetaraan akses terhadap keadilan tanpa diskriminasi sosial, ekonomi, maupun latar belakang. Kami percaya bahwa keadilan harus dapat diakses oleh semua orang.",
        examples: ["Layanan pro bono untuk masyarakat tidak mampu", "Advokasi kebijakan anti-diskriminasi", "Edukasi hak warga"],
    },
    {
        icon: Users,
        title: "Perlindungan Kelompok Rentan",
        desc: "Pendampingan khusus bagi perempuan, anak, lansia, penyandang disabilitas, dan kelompok marginal lainnya yang rentan terhadap pelanggaran hak.",
        examples: ["Bantuan hukum korban KDRT", "Pendampingan anak berkonflik hukum", "Perlindungan pekerja migran"],
    },
    {
        icon: BookOpen,
        title: "Pendidikan Hukum",
        desc: "Edukasi hukum berkelanjutan untuk membangun masyarakat yang sadar hukum. Kami mengembangkan materi edukasi yang mudah dipahami oleh seluruh lapisan masyarakat.",
        examples: ["Penyuluhan hukum di komunitas", "Pelatihan paralegal", "Publikasi literasi hukum"],
    },
    {
        icon: Vote,
        title: "Demokrasi & Partisipasi Publik",
        desc: "Mendorong keterlibatan warga dalam proses demokrasi yang sehat. Kami memantau pemilu, mendorong transparansi pemerintahan, dan memfasilitasi dialog publik.",
        examples: ["Pemantauan pemilu", "Advokasi transparansi pemerintah", "Forum warga dan diskusi publik"],
    },
    {
        icon: Leaf,
        title: "Lingkungan & Kepentingan Masyarakat",
        desc: "Advokasi terhadap isu lingkungan demi kesejahteraan publik. Kami mendampingi komunitas yang terdampak eksploitasi lingkungan dan mendorong kebijakan lingkungan yang adil.",
        examples: ["Advokasi sengketa lahan", "Pendampingan korban pencemaran", "Kajian kebijakan lingkungan"],
    },
];

const PROGRAMS = [
    {
        no: "01",
        icon: HandHeart,
        title: "Program Bantuan Hukum",
        desc: "Memberikan bantuan dan pendampingan hukum kepada masyarakat kurang mampu, mulai dari kasus pidana, perdata, keluarga, hingga ketenagakerjaan.",
        activities: [
            "Pendampingan litigasi dan non-litigasi",
            "POSBAKUM (Pos Bantuan Hukum) di berbagai lokasi",
            "Koordinasi dengan BPHN untuk bantuan hukum bersubsidi",
            "Mobile legal clinic di daerah terpencil",
        ],
    },
    {
        no: "02",
        icon: Megaphone,
        title: "Program Advokasi Kebijakan",
        desc: "Melakukan kajian hukum dan memberikan masukan terhadap kebijakan publik agar lebih berkeadilan dan berpihak pada masyarakat.",
        activities: [
            "Riset dan analisis peraturan perundang-undangan",
            "Kertas posisi dan rekomendasi kebijakan",
            "Dialog dengan pembuat kebijakan",
            "Koalisi dengan LSM dan organisasi masyarakat sipil",
        ],
    },
    {
        no: "03",
        icon: Lightbulb,
        title: "Program Penyuluhan Hukum",
        desc: "Meningkatkan pemahaman hukum masyarakat melalui edukasi berkelanjutan di sekolah, komunitas, dan ruang publik.",
        activities: [
            "Seminar hukum bulanan untuk umum",
            "Workshop paralegal untuk komunitas",
            "Edukasi hukum di sekolah dan kampus",
            "Produksi konten literasi hukum digital",
        ],
    },
    {
        no: "04",
        icon: Radio,
        title: "Program Kampanye & Publikasi",
        desc: "Menyebarluaskan informasi hukum melalui media digital, podcast, dan berbagai sarana komunikasi publik agar literasi hukum semakin merata.",
        activities: [
            "Podcast & video edukasi hukum",
            "Artikel dan opini di media nasional",
            "Kampanye kesadaran hukum di media sosial",
            "Penerbitan buletin dan laporan tahunan",
        ],
    },
];

const STATS = [
    { value: "500+", label: "Kasus Ditangani", desc: "Professional" },
    { value: "12+", label: "Tahun Pengabdian", desc: "Berpengalaman" },
    { value: "50+", label: "Kegiatan Penyuluhan", desc: "Per Tahun" },
    { value: "1000+", label: "Warga Terbantu", desc: "Dan terus bertumbuh" },
];

export const ProgramPage = () => {
    return (
        <>
            <PageHero
                label="Program & Fokus"
                title="Program dan Fokus Pengabdian Kami"
                subtitle="Enam pilar fokus pengabdian dan empat program kerja utama yang menggerakkan misi keadilan LBH Gardhatara."
                crumbs={[{ label: "Program & Fokus", href: "/program" }]}
                bgImage="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=2000"
            />

            {/* STATISTIK */}
            <section className="py-16 bg-[#5C130C] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {STATS.map((s) => (
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
            <section className="py-24 lg:py-32 bg-white" id="fokus">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
                        <div className="lg:col-span-7">
                            <div className="divider-gold mb-6">Fokus Pengabdian</div>
                            <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                                Enam pilar pengabdian kami.
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
                                    className="group relative border border-slate-200 hover:border-[#5C130C] bg-white hover:bg-gradient-to-br hover:from-white hover:to-slate-50 transition-all duration-500 p-8"
                                >
                                    <div className="absolute top-0 left-0 h-1 w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                                    <div className="flex items-start justify-between mb-5">
                                        <Icon className="h-10 w-10 text-[#5C130C]" strokeWidth={1.25} />
                                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                                            0{i + 1} / 06
                                        </div>
                                    </div>
                                    <h3 className="font-serif-display text-xl text-[#5C130C] font-medium leading-snug">{f.title}</h3>
                                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
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
            <section className="py-24 lg:py-32 bg-[#5C130C] text-white relative overflow-hidden" id="program-kerja">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
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

                    <div className="grid md:grid-cols-2 gap-6">
                        {PROGRAMS.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div
                                    key={p.title}
                                    className="group bg-white/5 border border-white/10 p-8 lg:p-10 hover:bg-white/10 transition-colors duration-500"
                                >
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="font-serif-display text-5xl text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                                            {p.no}
                                        </div>
                                        <Icon className="h-10 w-10 text-white/70 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.25} />
                                    </div>
                                    <h3 className="font-serif-display text-2xl md:text-3xl text-white font-medium leading-snug">
                                        {p.title}
                                    </h3>
                                    <p className="mt-4 text-slate-300 leading-relaxed">{p.desc}</p>
                                    <ul className="mt-6 space-y-2">
                                        {p.activities.map((a, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                                <span className="h-1.5 w-1.5 bg-[#D4AF37] flex-shrink-0 mt-1.5" />
                                                {a}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 h-px w-12 bg-[#D4AF37] group-hover:w-24 transition-all duration-500" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="divider-gold mb-6 justify-center">Bergabung Bersama Kami</div>
                    <h2 className="font-serif-display text-3xl md:text-4xl text-[#5C130C] font-medium">
                        Ingin berpartisipasi dalam program kami?
                    </h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        Kami terbuka bagi relawan, paralegal, advokat, dan siapa pun yang ingin berkontribusi
                        dalam mewujudkan akses keadilan yang setara.
                    </p>
                    <Link
                        to="/kontak"
                        className="inline-flex items-center gap-3 mt-8 bg-[#5C130C] hover:bg-[#45130F] text-white px-8 py-4 font-semibold tracking-wide transition-colors group"
                    >
                        Hubungi Kami
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </>
    );
};
