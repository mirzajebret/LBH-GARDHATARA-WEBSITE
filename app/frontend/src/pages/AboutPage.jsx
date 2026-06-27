import { CheckCircle2, Award, Scale, GraduationCap, HandHeart, ShieldCheck, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";

const VALUES = [
    "Integritas",
    "Keadilan",
    "Profesionalisme",
    "Kepedulian Sosial",
    "Perlindungan Hak Asasi Manusia",
    "Transparansi & Akuntabilitas",
];

const MISSIONS = [
    "Memberikan bantuan hukum kepada masyarakat yang membutuhkan.",
    "Meningkatkan kesadaran hukum masyarakat melalui edukasi dan penyuluhan.",
    "Melakukan advokasi terhadap kebijakan yang berdampak pada publik.",
    "Mendorong perlindungan hak asasi manusia.",
    "Mengembangkan budaya hukum yang demokratis dan partisipatif.",
    "Membangun jejaring dengan organisasi hukum dan LSM di Indonesia.",
];

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

const WHY_US = [
    { icon: Award, title: "Profesional & Berintegritas", desc: "Tim advokat dan paralegal berpengalaman dengan standar etika tertinggi." },
    { icon: Scale, title: "Berorientasi pada Keadilan", desc: "Setiap kasus diperjuangkan dengan komitmen pada nilai keadilan substantif." },
    { icon: GraduationCap, title: "Edukasi Hukum Berkelanjutan", desc: "Program penyuluhan rutin untuk membangun masyarakat yang sadar hukum." },
    { icon: HandHeart, title: "Pendampingan Humanis", desc: "Pendekatan empati dan personal di setiap tahap proses hukum." },
    { icon: ShieldCheck, title: "Komitmen pada HAM", desc: "Berdiri di garis depan perlindungan hak asasi manusia di Indonesia." },
    { icon: Network, title: "Jaringan Nasional", desc: "Pengembangan cabang dan kemitraan strategis di seluruh Nusantara." },
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

export const AboutPage = () => {
    return (
        <>
            <PageHero
                label="Tentang Kami"
                title="Mengenal LBH Garuda Dharma Nusantara"
                subtitle="Lembaga bantuan hukum yang berdiri dengan semangat keadilan, integritas, dan kepedulian terhadap hak asasi manusia sejak ."
                crumbs={[{ label: "Tentang Kami", href: "/tentang" }]}
                bgImage="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=85&w=2000&auto=format&fit=crop"
            />

            {/* PROFIL & SEJARAH */}
            <section className="py-24 lg:py-32 bg-white" id="profil">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src="/images/patung-garuda.jpg"
                                        alt="Kantor LBH Gardhatara"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-[#5C130C] text-white p-6 max-w-[240px] hidden md:block">
                                    <div className="font-serif-display text-2xl leading-tight">
                                        Sejak <span className="text-[#D4AF37]"></span>
                                    </div>
                                    <div className="text-xs text-slate-300 mt-2 leading-relaxed">
                                        Lebih dari satu dekade mengabdi untuk keadilan di Indonesia.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="divider-gold mb-6">Profil & Sejarah</div>
                            <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                                Tentang LBH Garuda Dharma Nusantara
                            </h2>
                            <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                                LBH Garuda Dharma Nusantara (LBH Gardhatara) adalah lembaga bantuan hukum berbadan hukum resmi yang telah disahkan oleh negara dengan Nomor AHU-0006869.AH.01.07.TAHUN 2025
                                yang bergerak di bidang pendidikan, sosial, dan kemanusiaan. Didirikan oleh sekelompok advokat dan aktivis hukum yang meyakini bahwa akses terhadap keadilan
                                adalah hak fundamental setiap warga negara, tanpa terkecuali.
                            </p>
                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Berkedudukan di Jakarta Selatan, LBH Gardhatara telah mendampingi lebih dari 500 kasus
                                selama lebih dari satu dekade. Kami menangani berbagai bidang hukum mulai dari perkara
                                pidana, perdata, ketenagakerjaan, keluarga, agraria, hingga isu-isu hak asasi manusia
                                dan advokasi kebijakan publik.
                            </p>
                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Nama "Garuda Dharma Nusantara" merupakan simbol komitmen kami: <em>Garuda</em> mewakili
                                kebanggaan dan keteguhan bangsa, <em>Dharma</em> berarti kewajiban moral dan keadilan,
                                serta <em>Nusantara</em> mencerminkan jangkauan pelayanan kami yang bersifat nasional.
                            </p>

                            {/* Values */}
                            <div className="mt-10">
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">Nilai Utama</div>
                                <div className="flex flex-wrap gap-2">
                                    {VALUES.map((v) => (
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
            <section className="py-24 lg:py-32 bg-[#F8FAFC]" id="visi-misi">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="divider-gold mb-6 justify-center">Visi & Misi</div>
                        <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                            Arah & Komitmen Kami
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="border-t-4 border-[#D4AF37] pt-8 bg-white p-8 shadow-sm">
                            <div className="text-[10px] uppercase tracking-[0.25em] text-[#5C130C] font-semibold mb-4">Visi</div>
                            <p className="font-serif-display text-2xl text-slate-800 leading-snug italic">
                                "Menjadi lembaga bantuan hukum yang profesional, terpercaya, dan
                                berkontribusi dalam menciptakan masyarakat yang sadar hukum,
                                berkeadilan, dan menghormati hak asasi manusia."
                            </p>
                        </div>

                        <div className="border-t-4 border-[#5C130C] pt-8 bg-white p-8 shadow-sm">
                            <div className="text-[10px] uppercase tracking-[0.25em] text-[#5C130C] font-semibold mb-4">Misi</div>
                            <ul className="space-y-4">
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
            </section>

            {/* MENGAPA MEMILIH KAMI */}
            <section className="py-24 lg:py-32 bg-white" id="mengapa">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="divider-gold mb-6 justify-center">Mengapa Memilih Kami</div>
                        <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                            Alasan mempercayai kami.
                        </h2>
                        <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                            Kombinasi kompetensi hukum, integritas, dan kepedulian sosial yang
                            membedakan kami sebagai mitra hukum yang andal.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_US.map((r, i) => {
                            const Icon = r.icon;
                            return (
                                <div
                                    key={r.title}
                                    className="group flex gap-5 p-6 hover:bg-[#F8FAFC] hover:shadow-lg transition-all duration-500"
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

            {/* STRUKTUR ORGANISASI */}
            <section className="py-24 lg:py-32 bg-[#F8FAFC]" id="struktur">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 mb-16">
                        <div className="lg:col-span-7">
                            <div className="divider-gold mb-6">Struktur Organisasi</div>
                            <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                                Struktur Organisasi LBH Gardhatara.
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

            {/* CTA */}
            <section className="py-20 bg-[#5C130C] text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="font-serif-display text-3xl md:text-4xl font-medium">
                        Ingin bergabung atau berkolaborasi?
                    </h2>
                    <p className="mt-4 text-slate-300 leading-relaxed">
                        Kami terbuka untuk kemitraan dengan individu, organisasi, dan lembaga yang memiliki visi
                        yang sama dalam mewujudkan keadilan hukum.
                    </p>
                    <Link
                        to="/kontak"
                        className="inline-flex items-center gap-3 mt-8 bg-[#D4AF37] hover:bg-[#C5A059] text-[#5C130C] px-8 py-4 font-semibold tracking-wide transition-colors"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </section>
        </>
    );
};
