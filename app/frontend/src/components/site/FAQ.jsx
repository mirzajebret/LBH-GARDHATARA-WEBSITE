import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
    {
        q: "Apakah layanan bantuan hukum dari LBH Gardhatara berbayar?",
        a: "Bagi masyarakat kurang mampu, layanan bantuan hukum kami diberikan secara cuma-cuma (pro bono) sesuai dengan UU No. 16 Tahun 2011 tentang Bantuan Hukum. Untuk konsultasi umum, silakan menghubungi kami untuk informasi lebih lanjut.",
    },
    {
        q: "Siapa saja yang berhak mendapatkan bantuan hukum?",
        a: "Setiap masyarakat — terutama kelompok rentan, masyarakat kurang mampu, korban ketidakadilan hukum, perempuan, anak, dan kelompok marginal lainnya — berhak mendapatkan akses pendampingan hukum dari kami.",
    },
    {
        q: "Bagaimana cara mengajukan permohonan bantuan hukum?",
        a: "Anda dapat menghubungi kami melalui WhatsApp, telepon, email, atau langsung datang ke kantor kami di Gedung Multika Lantai 4 Suites 408, Jakarta Selatan. Tim kami akan melakukan verifikasi dan asesmen kasus Anda.",
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
];

export const FAQ = () => {
    return (
        <section id="faq" data-testid="faq-section" className="py-24 lg:py-32 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="divider-gold mb-6 justify-center">FAQ</div>
                    <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                        Pertanyaan yang sering diajukan.
                    </h2>
                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
    );
};