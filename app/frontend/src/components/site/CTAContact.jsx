import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { toast } from "sonner";

export const CTAContact = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.message) {
            toast.error("Mohon lengkapi nama dan pesan.");
            return;
        }
        // Static site: open WhatsApp with prefilled message
        const text = encodeURIComponent(
            `Halo LBH Gardhatara,\n\nNama: ${form.name}\nEmail: ${form.email}\nTelepon: ${form.phone}\n\nPesan:\n${form.message}`
        );
        window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${text}`, "_blank");
        setSubmitted(true);
        toast.success("Permintaan konsultasi terkirim ke WhatsApp kami.");
    };

    return (
        <section id="kontak" data-testid="cta-contact-section" className="relative bg-[#5C130C] text-white">
            {/* Top CTA banner */}
            <div className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=85&w=2000&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#5C130C]/70" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
                    <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-6">
                        <span className="h-px w-8 bg-[#D4AF37]" />
                        Hubungi Kami
                        <span className="h-px w-8 bg-[#D4AF37]" />
                    </div>
                    <h2 className="font-serif-display text-4xl md:text-6xl font-medium leading-tight tracking-tight max-w-4xl mx-auto">
                        Butuh Bantuan atau <span className="italic text-[#D4AF37]">Konsultasi Hukum</span>?
                    </h2>
                    <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Hubungi LBH Garuda Dharma Nusantara untuk mendapatkan informasi, konsultasi,
                        maupun pendampingan hukum yang sesuai dengan kebutuhan Anda.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#form-konsultasi"
                            data-testid="cta-consult-now"
                            className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C5A059] text-[#5C130C] px-8 py-4 font-semibold tracking-wide transition-colors"
                        >
                            Konsultasi Sekarang
                            <Send className="h-4 w-4" />
                        </a>
                        <a
                            href={`https://wa.me/${BRAND.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="cta-whatsapp"
                            className="inline-flex items-center justify-center gap-3 border border-white/40 hover:border-white text-white hover:bg-white/10 px-8 py-4 font-semibold tracking-wide transition-colors"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Hubungi WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact form + info */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <h3 className="font-serif-display text-3xl md:text-4xl text-white font-medium leading-tight">
                            Mari bicarakan kasus Anda.
                        </h3>
                        <p className="mt-4 text-slate-300 leading-relaxed">
                            Tim kami siap mendengarkan, menelaah, dan memberikan langkah hukum
                            terbaik. Kerahasiaan terjamin.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 flex-shrink-0 border border-[#D4AF37]/40 flex items-center justify-center">
                                    <MapPin className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">Alamat</div>
                                    <div className="text-sm text-white leading-relaxed">
                                        {BRAND.address.line1} <br />
                                        {BRAND.address.line2} <br />
                                        {BRAND.address.city}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 flex-shrink-0 border border-[#D4AF37]/40 flex items-center justify-center">
                                    <Phone className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">Telepon</div>
                                    <div className="text-sm text-white">{BRAND.phone}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 flex-shrink-0 border border-[#D4AF37]/40 flex items-center justify-center">
                                    <Mail className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">Email</div>
                                    <div className="text-sm text-white">{BRAND.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7" id="form-konsultasi">
                        <form
                            onSubmit={handleSubmit}
                            data-testid="contact-form"
                            className="bg-white text-slate-800 p-8 lg:p-10"
                        >
                            {submitted ? (
                                <div className="text-center py-12">
                                    <CheckCircle2 className="h-14 w-14 text-[#D4AF37] mx-auto mb-4" strokeWidth={1.5} />
                                    <h4 className="font-serif-display text-2xl text-[#5C130C] font-medium">Terima kasih!</h4>
                                    <p className="mt-3 text-slate-600">
                                        Permintaan konsultasi Anda telah kami terima. Tim kami akan segera menghubungi.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                                        className="mt-6 text-sm font-semibold text-[#5C130C] hover:text-[#D4AF37] transition-colors"
                                    >
                                        Kirim pesan lain →
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h4 className="font-serif-display text-2xl text-[#5C130C] font-medium mb-1">
                                        Formulir Konsultasi
                                    </h4>
                                    <p className="text-sm text-slate-500 mb-8">
                                        Isi formulir di bawah ini dan kami akan menghubungi Anda.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4">
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
                                                className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                                placeholder="Nama Anda"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                Telepon
                                            </label>
                                            <input
                                                data-testid="form-phone"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                                placeholder="08xx-xxxx-xxxx"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                            Email
                                        </label>
                                        <input
                                            data-testid="form-email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                            placeholder="email@anda.com"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                            Ceritakan Kasus Anda *
                                        </label>
                                        <textarea
                                            data-testid="form-message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors resize-none"
                                            placeholder="Jelaskan situasi hukum yang Anda hadapi..."
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
                                    </p>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};