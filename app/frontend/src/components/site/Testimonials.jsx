import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        quote: "Pendampingan dari LBH Gardhatara benar-benar tulus. Mereka mendengarkan kasus saya dengan teliti dan memperjuangkan hak saya tanpa pamrih.",
        name: "Ibu Siti Aminah",
        role: "Penerima Bantuan Hukum, Jakarta",
    },
    {
        quote: "Tim advokatnya profesional dan komunikatif. Setiap proses dijelaskan dengan baik, membuat saya merasa terlindungi sepanjang persidangan.",
        name: "Bapak Hendra Wijaya",
        role: "Klien Konsultasi Hukum",
    },
    {
        quote: "Penyuluhan hukum di komunitas kami sangat membuka wawasan. Kini warga lebih sadar akan hak-haknya berkat program edukasi LBH Gardhatara.",
        name: "Rini Sulastri",
        role: "Ketua Komunitas Mampang",
    },
];

export const Testimonials = () => {
    return (
        <section
            id="testimoni"
            data-testid="testimonials-section"
            className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-16">
                    <div className="divider-gold mb-6">Testimoni</div>
                    <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                        Dari mereka yang telah kami dampingi.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            data-testid={`testimonial-card-${i}`}
                            className="relative bg-white p-8 lg:p-10 border border-slate-200"
                        >
                            <Quote
                                className="absolute top-6 right-6 h-12 w-12 text-[#D4AF37]/15"
                                fill="currentColor"
                                strokeWidth={0}
                            />
                            <p className="font-serif-display text-lg text-slate-800 leading-relaxed italic">
                                "{t.quote}"
                            </p>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <div className="font-semibold text-[#5C130C]">{t.name}</div>
                                <div className="text-xs text-slate-500 mt-1">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};