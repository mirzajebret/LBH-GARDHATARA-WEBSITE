import { Gavel, MessagesSquare, Scale, GraduationCap, FileSearch, MapPin, ArrowRight, CheckCircle2, ArrowUpRight, ClipboardList, UserCheck, Search, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { BRAND } from "@/lib/brand";

const SERVICES = [
    {
        id: "bantuan-hukum",
        icon: Gavel,
        title: "Bantuan Hukum",
        tagline: "Pendampingan penuh dari awal hingga selesai",
        desc: "Kami memberikan bantuan hukum secara cuma-cuma (pro bono) bagi masyarakat kurang mampu sesuai UU No. 16 Tahun 2011 tentang Bantuan Hukum. Layanan mencakup pendampingan litigasi di Pengadilan Negeri, Pengadilan Agama, PTUN, hingga tingkat Mahkamah Agung.",
        details: [
            "Perkara pidana (tersangka, terdakwa, terpidana)",
            "Perkara perdata (sengketa harta, wanprestasi, perbuatan melawan hukum)",
            "Perkara keluarga (perceraian, hak asuh anak, warisan)",
            "Perkara ketenagakerjaan (PHK, upah, diskriminasi)",
            "Perkara agraria dan pertanahan",
        ],
    },
    {
        id: "konsultasi",
        icon: MessagesSquare,
        title: "Konsultasi Hukum",
        tagline: "Solusi tepat untuk setiap persoalan hukum",
        desc: "Layanan konsultasi hukum bersama advokat dan paralegal berpengalaman. Kami membantu Anda memahami hak dan kewajiban, menganalisis risiko hukum, serta merancang strategi penyelesaian kasus.",
        details: [
            "Konsultasi tatap muka di kantor",
            "Konsultasi via WhatsApp dan email",
            "Analisis kontrak dan perjanjian",
            "Pendapat hukum (legal opinion)",
            "Mediasi dan negosiasi sengketa",
        ],
    },
    {
        id: "advokasi",
        icon: Scale,
        title: "Advokasi Hukum",
        tagline: "Membela hak masyarakat secara tegas dan profesional",
        desc: "Advokasi hukum adalah upaya pembelaan terhadap hak-hak masyarakat melalui jalur litigasi maupun non-litigasi. Tim kami berpengalaman dalam advokasi kebijakan, pendampingan di lembaga negara, serta pendampingan korban pelanggaran HAM.",
        details: [
            "Pendampingan korban pelanggaran HAM",
            "Advokasi kebijakan publik dan legislasi",
            "Pembuatan petisi dan rekomendasi hukum",
            "Koordinasi dengan Komnas HAM, LPSK, dan ORI",
            "Pendampingan kelompok rentan (perempuan, anak, disabilitas)",
        ],
    },
    {
        id: "penyuluhan",
        icon: GraduationCap,
        title: "Penyuluhan Hukum",
        tagline: "Edukasi hukum yang menjangkau seluruh lapisan masyarakat",
        desc: "Program penyuluhan hukum dirancang untuk meningkatkan pemahaman dan kesadaran hukum masyarakat. Kami hadir di komunitas, sekolah, pondok pesantren, pasar, hingga kawasan industri.",
        details: [
            "Seminar dan diskusi hukum publik",
            "Pelatihan paralegal komunitas",
            "Penyuluhan di sekolah dan universitas",
            "Workshop hak pekerja dan buruh",
            "Kampanye hukum via media digital",
        ],
    },
    {
        id: "kajian",
        icon: FileSearch,
        title: "Kajian Kebijakan",
        tagline: "Analisis mendalam untuk kebijakan yang lebih berkeadilan",
        desc: "Kami melakukan kajian dan riset hukum terhadap peraturan perundang-undangan dan kebijakan publik. Hasil kajian digunakan sebagai bahan masukan kepada DPR, pemerintah, dan pemangku kepentingan.",
        details: [
            "Riset dan analisis peraturan perundang-undangan",
            "Kertas posisi (position paper)",
            "Naskah akademik",
            "Monitoring implementasi kebijakan",
            "Laporan situasi HAM",
        ],
    },
    {
        id: "posbakum",
        icon: MapPin,
        title: "Pos Bantuan Hukum",
        tagline: "Akses bantuan hukum yang mudah dan merata",
        desc: "POSBAKUM adalah layanan front-line yang disediakan di berbagai lokasi strategis agar masyarakat dapat mengakses bantuan hukum dengan mudah, cepat, dan tanpa birokrasi yang berbelit.",
        details: [
            "Layanan di kantor pusat Jakarta Selatan",
            "Klinik hukum di kelurahan dan kecamatan mitra",
            "Layanan keliling (mobile legal clinic)",
            "Hotline WhatsApp 24 jam",
            "Pengembangan kantor cabang daerah",
        ],
    },
];

const STEPS = [
    {
        no: "01",
        icon: ClipboardList,
        title: "Pengajuan Permohonan",
        desc: "Hubungi kami via WhatsApp, telepon, email, atau datang langsung ke kantor. Ceritakan situasi hukum yang Anda hadapi.",
    },
    {
        no: "02",
        icon: Search,
        title: "Verifikasi & Asesmen",
        desc: "Tim kami akan melakukan verifikasi identitas dan kelayakan, serta asesmen awal terhadap kasus Anda.",
    },
    {
        no: "03",
        icon: UserCheck,
        title: "Penunjukan Advokat",
        desc: "Setelah disetujui, advokat atau paralegal yang berpengalaman di bidang terkait akan ditugaskan untuk mendampingi Anda.",
    },
    {
        no: "04",
        icon: Handshake,
        title: "Pendampingan & Penyelesaian",
        desc: "Proses hukum berjalan dengan pendampingan penuh dari tim kami hingga kasus selesai — baik melalui mediasi maupun persidangan.",
    },
];

const REQUIREMENTS = [
    "Memiliki KTP atau kartu identitas yang berlaku",
    "Melampirkan Surat Keterangan Tidak Mampu (SKTM) dari kelurahan (untuk layanan pro bono)",
    "Menyertakan dokumen yang berkaitan dengan kasus (jika ada)",
    "Mengisi formulir permohonan bantuan hukum",
    "Tidak sedang didampingi oleh pengacara lain",
];

export const ServicesPage = () => {
    return (
        <>
            <PageHero
                label="Layanan Kami"
                title="Layanan Hukum Komprehensif untuk Semua"
                subtitle="Dari konsultasi awal hingga pendampingan di pengadilan — kami hadir untuk memastikan hak Anda terlindungi secara profesional dan humanis."
                crumbs={[{ label: "Layanan", href: "/layanan" }]}
                bgImage="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=2000"
            />

            {/* LAYANAN DETAIL */}
            <section className="py-24 lg:py-32 bg-white" id="layanan-list">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <div className="divider-gold mb-6">6 Bidang Layanan</div>
                        <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                            Kami siap mendampingi Anda di setiap tahap.
                        </h2>
                        <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                            Setiap layanan dirancang untuk menjawab kebutuhan nyata masyarakat, dengan pendekatan
                            yang humanis dan berorientasi pada penyelesaian yang adil.
                        </p>
                    </div>

                    <div className="space-y-2">
                        {SERVICES.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={s.id}
                                    id={s.id}
                                    className="group grid md:grid-cols-12 gap-8 bg-[#F8FAFC] hover:bg-white border border-transparent hover:border-[#5C130C] p-8 lg:p-10 transition-all duration-500"
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
                                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
                                            {s.tagline}
                                        </div>
                                        <h3 className="font-serif-display text-2xl md:text-3xl text-[#5C130C] font-medium leading-snug">
                                            {s.title}
                                        </h3>
                                        <p className="mt-4 text-slate-600 leading-relaxed">{s.desc}</p>
                                    </div>

                                    {/* Details */}
                                    <div className="md:col-span-4">
                                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#5C130C] font-semibold mb-3">
                                            Cakupan Layanan
                                        </div>
                                        <ul className="space-y-2">
                                            {s.details.map((d, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
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
            <section className="py-24 lg:py-32 bg-[#5C130C] text-white relative overflow-hidden" id="prosedur">
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-6">
                            <span className="h-px w-8 bg-[#D4AF37]" />
                            Cara Pengajuan
                            <span className="h-px w-8 bg-[#D4AF37]" />
                        </div>
                        <h2 className="font-serif-display text-4xl md:text-5xl font-medium leading-tight">
                            Prosedur Pengajuan Bantuan Hukum
                        </h2>
                        <p className="mt-6 text-slate-300 leading-relaxed">
                            Empat langkah mudah untuk mendapatkan bantuan hukum dari LBH Gardhatara.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
                        {STEPS.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.no} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                                    <div className="font-serif-display text-5xl text-[#D4AF37]/50 mb-4">{step.no}</div>
                                    <Icon className="h-8 w-8 text-[#D4AF37] mb-5" strokeWidth={1.5} />
                                    <h3 className="font-serif-display text-xl text-white font-medium mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SYARAT PENERIMA BANTUAN GRATIS */}
            <section className="py-24 lg:py-32 bg-white" id="syarat">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="divider-gold mb-6">Bantuan Hukum Pro Bono</div>
                            <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                                Syarat Penerima Bantuan Hukum Gratis
                            </h2>
                            <p className="mt-6 text-slate-600 leading-relaxed">
                                Sesuai dengan <strong>UU No. 16 Tahun 2011 tentang Bantuan Hukum</strong>, LBH Gardhatara
                                memberikan layanan bantuan hukum secara gratis bagi masyarakat yang memenuhi syarat berikut:
                            </p>
                            <ul className="mt-8 space-y-4">
                                {REQUIREMENTS.map((r, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="h-8 w-8 bg-[#5C130C] flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">
                                            {i + 1}
                                        </div>
                                        <p className="text-slate-700 leading-relaxed pt-1">{r}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#F8FAFC] border border-slate-200 p-8">
                            <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">Penting Diketahui</div>
                            <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
                                <p>
                                    ✅ <strong>Bantuan hukum gratis</strong> diberikan kepada masyarakat tidak mampu secara ekonomi
                                    yang dapat dibuktikan dengan SKTM dari kelurahan.
                                </p>
                                <p>
                                    ✅ <strong>Semua jenis perkara</strong> termasuk pidana, perdata, tata usaha negara, dan
                                    perkara keluarga dapat diajukan.
                                </p>
                                <p>
                                    ✅ <strong>Kerahasiaan dijamin</strong> — seluruh informasi yang Anda sampaikan dilindungi
                                    oleh kerahasiaan profesi advokat.
                                </p>
                                <p>
                                    ✅ <strong>Tidak dipungut biaya</strong> untuk biaya pendampingan dan honorarium advokat
                                    bagi penerima bantuan hukum yang telah diverifikasi.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <Link
                                    to="/kontak"
                                    className="inline-flex items-center gap-3 bg-[#5C130C] hover:bg-[#45130F] text-white px-6 py-3 text-sm font-semibold tracking-wide transition-colors group"
                                >
                                    Ajukan Bantuan Hukum
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="font-serif-display text-3xl md:text-4xl text-[#5C130C] font-medium">
                        Siap untuk berkonsultasi?
                    </h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        Jangan ragu untuk menghubungi kami. Konsultasi awal gratis dan tanpa komitmen.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/kontak"
                            className="inline-flex items-center justify-center gap-3 bg-[#5C130C] hover:bg-[#45130F] text-white px-8 py-4 font-semibold tracking-wide transition-colors"
                        >
                            Konsultasi Sekarang
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                            href={`https://wa.me/${BRAND.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 border border-[#5C130C] text-[#5C130C] hover:bg-[#5C130C] hover:text-white px-8 py-4 font-semibold tracking-wide transition-colors"
                        >
                            WhatsApp Kami
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
