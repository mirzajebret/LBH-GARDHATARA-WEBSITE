import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
    {
        q: "Apakah layanan bantuan hukum dari LBH Gardhatara berbayar?",
        a: "Bagi masyarakat kurang mampu, layanan bantuan hukum kami diberikan secara cuma-cuma (pro bono) sesuai dengan UU No. 16 Tahun 2011 tentang Bantuan Hukum. Anda perlu melampirkan Surat Keterangan Tidak Mampu (SKTM) dari kelurahan setempat. Untuk konsultasi umum, silakan menghubungi kami untuk informasi lebih lanjut.",
    },
    {
        q: "Siapa saja yang berhak mendapatkan bantuan hukum?",
        a: "Setiap masyarakat — terutama kelompok rentan, masyarakat kurang mampu, korban ketidakadilan hukum, perempuan, anak, dan kelompok marginal lainnya — berhak mendapatkan akses pendampingan hukum dari kami.",
    },
    {
        q: "Bagaimana cara mengajukan permohonan bantuan hukum?",
        a: "Anda dapat menghubungi kami melalui WhatsApp, telepon, email, atau langsung datang ke kantor kami di Gedung Multika Lantai 4 Suites 408, Jakarta Selatan. Tim kami akan melakukan verifikasi dan asesmen kasus Anda dalam 1-3 hari kerja.",
    },
    {
        q: "Bidang hukum apa saja yang ditangani?",
        a: "Kami menangani perkara pidana, perdata, keluarga, ketenagakerjaan, agraria, perlindungan anak dan perempuan, serta isu-isu hak asasi manusia dan kebijakan publik.",
    },
    {
        q: "Apakah konsultasi awal bersifat rahasia?",
        a: "Tentu. Seluruh informasi yang Anda sampaikan kepada tim kami dilindungi oleh kerahasiaan profesi advokat dan tidak akan dibagikan kepada pihak manapun tanpa persetujuan Anda.",
    },
    {
        q: "Apakah LBH Gardhatara memiliki cabang di luar Jakarta?",
        a: "Saat ini kami terus mengembangkan jaringan nasional. Hubungi tim kami untuk informasi terkini mengenai kantor cabang dan mitra di kota Anda.",
    },
    {
        q: "Berapa lama proses penanganan kasus?",
        a: "Durasi penanganan kasus sangat bergantung pada jenis dan kompleksitas perkara. Kasus perdata atau pidana di pengadilan bisa memerlukan beberapa bulan hingga lebih dari setahun. Sementara untuk konsultasi dan mediasi, prosesnya dapat lebih singkat. Tim kami akan memberikan estimasi waktu setelah asesmen awal.",
    },
    {
        q: "Dokumen apa saja yang perlu dibawa saat konsultasi pertama?",
        a: "Pada konsultasi pertama, bawalah: (1) KTP atau identitas diri, (2) dokumen yang berkaitan dengan kasus (kontrak, surat, bukti, dll), (3) kronologi singkat kasus yang Anda hadapi secara tertulis. Untuk layanan pro bono, siapkan juga SKTM dari kelurahan.",
    },
    {
        q: "Bagaimana jika saya tidak bisa datang langsung ke kantor?",
        a: "Kami memiliki layanan konsultasi via WhatsApp, telepon, dan video call. Dalam kondisi tertentu, kami juga dapat melakukan kunjungan ke lokasi klien. Hubungi kami terlebih dahulu untuk menjadwalkan sesi konsultasi yang sesuai.",
    },
    {
        q: "Apakah LBH Gardhatara menerima donasi atau sukarelawan?",
        a: "Ya, kami menerima donasi dari perorangan maupun institusi yang ingin mendukung program bantuan hukum pro bono kami. Kami juga membuka kesempatan magang dan sukarelawan bagi mahasiswa hukum dan praktisi. Silakan hubungi kami untuk informasi lebih lanjut.",
    },
];

const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Alamat",
        value: `${BRAND.address.line1}, ${BRAND.address.line2}, ${BRAND.address.city}`,
        href: "https://maps.google.com/?q=Gedung+Multika+Mampang+Jakarta+Selatan",
    },
    {
        icon: Phone,
        label: "Telepon",
        value: BRAND.phone,
        href: `tel:${BRAND.phone}`,
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: BRAND.phone,
        href: `https://wa.me/${BRAND.whatsappNumber}`,
    },
    {
        icon: Mail,
        label: "Email",
        value: BRAND.email,
        href: `mailto:${BRAND.email}`,
    },
];

const JAM_LAYANAN = [
    { hari: "Senin – Jumat", jam: "08.00 – 17.00 WIB" },
    { hari: "Sabtu", jam: "09.00 – 13.00 WIB" },
    { hari: "Minggu & Hari Libur", jam: "Tutup" },
];

export const ContactPage = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.message) {
            toast.error("Mohon lengkapi nama dan pesan.");
            return;
        }
        const text = encodeURIComponent(
            `Halo LBH Gardhatara,\n\nNama: ${form.name}\nEmail: ${form.email}\nTelepon: ${form.phone}\nSubjek: ${form.subject}\n\nPesan:\n${form.message}`
        );
        window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${text}`, "_blank");
        setSubmitted(true);
        toast.success("Permintaan konsultasi terkirim ke WhatsApp kami.");
    };

    return (
        <>
            <PageHero
                label="Kontak & FAQ"
                title="Hubungi Kami"
                subtitle="Tim LBH Gardhatara siap mendengarkan dan membantu Anda. Jangan ragu untuk menghubungi kami."
                crumbs={[{ label: "Kontak & FAQ", href: "/kontak" }]}
                bgImage="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=85&w=2000&auto=format&fit=crop"
            />

            {/* KONTAK & FORM */}
            <section className="py-6 lg:py-24 bg-white" id="form-konsultasi">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Info Kontak */}
                        <div className="lg:col-span-4">
                            <div className="divider-gold mb-3">Informasi Kontak</div>
                            <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
                                Mari bicarakan kasus Anda.
                            </h2>
                            <p className="text-base sm:text-lg text-gray-800 leading-tight mb-10">
                                Tim kami siap mendengarkan, menelaah, dan memberikan langkah hukum
                                terbaik. Kerahasiaan terjamin.
                            </p>

                            <div className="space-y-5">
                                {CONTACT_INFO.map((c) => {
                                    const Icon = c.icon;
                                    return (
                                        <a
                                            key={c.label}
                                            href={c.href}
                                            target={c.href.startsWith("http") ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="h-10 w-10 flex-shrink-0 border border-[#5C130C]/30 group-hover:bg-[#5C130C] flex items-center justify-center transition-colors">
                                                <Icon className="h-4 w-4 text-[#5C130C] group-hover:text-white transition-colors" strokeWidth={1.75} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">{c.label}</div>
                                                <div className="text-sm text-slate-700 group-hover:text-[#5C130C] transition-colors leading-relaxed">{c.value}</div>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Jam Layanan */}
                            <div className="mt-10 pt-8 border-t border-slate-200">
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-5">Jam Layanan</div>
                                <div className="space-y-3">
                                    {JAM_LAYANAN.map((j) => (
                                        <div key={j.hari} className="flex justify-between text-sm">
                                            <span className="text-slate-600">{j.hari}</span>
                                            <span className={`font-medium ${j.jam === "Tutup" ? "text-red-500" : "text-[#5C130C]"}`}>
                                                {j.jam}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* WhatsApp Direct */}
                            <div className="mt-10">
                                <a
                                    href={`https://wa.me/${BRAND.whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 font-semibold text-sm tracking-wide transition-colors"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Chat WhatsApp Langsung
                                </a>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-8">
                            <form
                                onSubmit={handleSubmit}
                                data-testid="contact-form"
                                className="bg-[#F8FAFC] border border-slate-200 p-8 lg:p-10"
                            >
                                {submitted ? (
                                    <div className="text-center py-16">
                                        <CheckCircle2 className="h-14 w-14 text-[#D4AF37] mx-auto mb-4" strokeWidth={1.5} />
                                        <h4 className="font-serif-display text-2xl text-[#5C130C] font-medium">Terima kasih!</h4>
                                        <p className="mt-3 text-slate-600">
                                            Permintaan konsultasi Anda telah kami terima. Tim kami akan segera menghubungi.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                                            className="mt-6 text-sm font-semibold text-[#5C130C] hover:text-[#D4AF37] transition-colors"
                                        >
                                            Kirim pesan lain →
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="font-serif-display text-2xl text-[#5C130C] font-medium mb-2">
                                            Formulir Konsultasi
                                        </h3>
                                        <p className="text-sm text-slate-500 mb-8">
                                            Isi formulir di bawah ini dan kami akan menghubungi Anda dalam 1×24 jam.
                                        </p>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                    Nama Lengkap *
                                                </label>
                                                <input
                                                    data-testid="form-name"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                                    placeholder="Nama Anda"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                    Telepon / WhatsApp
                                                </label>
                                                <input
                                                    data-testid="form-phone"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                                    placeholder="08xx-xxxx-xxxx"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                Email
                                            </label>
                                            <input
                                                data-testid="form-email"
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                                placeholder="email@anda.com"
                                            />
                                        </div>

                                        <div className="mt-5">
                                            <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                Jenis Permasalahan Hukum
                                            </label>
                                            <select
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                            >
                                                <option value="">— Pilih Kategori —</option>
                                                <option>Perkara Pidana</option>
                                                <option>Perkara Perdata</option>
                                                <option>Hukum Keluarga (Perceraian, Warisan, dll)</option>
                                                <option>Ketenagakerjaan</option>
                                                <option>Agraria & Pertanahan</option>
                                                <option>Perlindungan Anak & Perempuan</option>
                                                <option>HAM & Kebijakan Publik</option>
                                                <option>Lainnya</option>
                                            </select>
                                        </div>

                                        <div className="mt-5">
                                            <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                Ceritakan Kasus Anda *
                                            </label>
                                            <textarea
                                                data-testid="form-message"
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors resize-none"
                                                placeholder="Jelaskan situasi hukum yang Anda hadapi secara singkat..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            data-testid="form-submit"
                                            className="mt-6 w-full inline-flex items-center justify-center gap-3 bg-[#5C130C] hover:bg-[#45130F] text-white py-4 font-semibold tracking-wide transition-colors group"
                                        >
                                            Kirim Permintaan Konsultasi
                                            <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="mt-3 text-xs text-slate-500 text-center">
                                            Dengan mengirim formulir ini, Anda setuju dengan Kebijakan Privasi kami.
                                            Seluruh informasi bersifat rahasia.
                                        </p>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* PETA */}
            <section className="h-80 md:h-[420px] bg-slate-200 relative overflow-hidden border-y border-slate-200" id="peta">
                <iframe
                    title="Lokasi LBH Gardhatara"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3523948555!2d106.81902!3d-6.24944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e3a8d39f7b%3A0x26f4f6cde3e5c3e6!2sGedung%20Multika%2C%20Jl.%20Mampang%20Prpt.%20Raya%20No.71%2C%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                />
                <div className="absolute top-4 left-4 bg-[#5C130C] text-white px-4 py-3 shadow-lg z-10">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Kantor Pusat</div>
                    <div className="text-sm font-medium mt-1">LBH Garuda Dharma Nusantara</div>
                    <div className="text-xs text-slate-300 mt-1">{BRAND.address.line1}</div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-6 lg:py-24 bg-white" id="faq">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="divider-gold mb-3 justify-center">FAQ</div>
                        <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
                            Pertanyaan yang sering diajukan.
                        </h2>
                        <p className="text-base sm:text-lg text-gray-800 leading-tight text-center max-w-2xl mx-auto mb-10">
                            Belum menemukan jawaban yang Anda cari? Jangan ragu menghubungi kami secara langsung.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full border-t border-slate-200">
                        {FAQS.map((f, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                data-testid={`faq-item-${i}`}
                                className="border-b border-slate-200"
                            >
                                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                                    <div className="flex items-start gap-5 w-full">
                                        <span className="font-serif-display text-[#D4AF37] text-xl flex-shrink-0">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="font-serif-display text-lg md:text-xl text-[#5C130C] font-medium leading-snug group-hover:text-[#D4AF37] transition-colors">
                                            {f.q}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pl-12 pr-4 pb-6 text-slate-600 leading-relaxed">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </>
    );
};
