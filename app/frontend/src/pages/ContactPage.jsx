import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const CONTACT_ICON_MAP = { Alamat: MapPin, Telepon: Phone, WhatsApp: MessageCircle, Email: Mail };
const CONTACT_HREFS = {
    Alamat: "https://maps.google.com/?q=Gedung+Multika+Mampang+Jakarta+Selatan",
    Telepon: `tel:${BRAND.phone}`,
    WhatsApp: `https://wa.me/${BRAND.whatsappNumber}`,
    Email: `mailto:${BRAND.email}`,
};
const CONTACT_VALUES = {
    Alamat: `${BRAND.address.line1}, ${BRAND.address.line2}, ${BRAND.address.city}`,
    Telepon: BRAND.phone,
    WhatsApp: BRAND.phone,
    Email: BRAND.email,
};

export const ContactPage = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);
    const { lang } = useLanguage();
    const t = translations[lang].contact;

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.message) {
            toast.error(t.toastError);
            return;
        }

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        // Jika EmailJS belum dikonfigurasi, fallback ke WhatsApp
        if (!serviceId || serviceId === "your_service_id") {
            const text = encodeURIComponent(
                `${t.waMessage}\n\n${t.waName}: ${form.name}\n${t.waEmail}: ${form.email}\n${t.waPhone}: ${form.phone}\n${t.waSubject}: ${form.subject}\n\n${t.waMessageLabel}:\n${form.message}`
            );
            window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${text}`, "_blank");
            setSubmitted(true);
            toast.success(t.toastSuccess);
            return;
        }

        setLoading(true);
        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: form.name,
                    from_email: form.email,
                    from_phone: form.phone,
                    subject: form.subject || "Konsultasi Hukum",
                    message: form.message,
                    to_email: "lbh.gardhatara@gmail.com",
                    reply_to: form.email,
                },
                { publicKey }
            );
            setSubmitted(true);
            toast.success(t.toastSuccess);
        } catch (err) {
            console.error("EmailJS error:", err);
            toast.error("Gagal mengirim pesan. Silakan hubungi kami via WhatsApp.");
        } finally {
            setLoading(false);
        }
    };

    const contactKeys = ["Alamat", "Telepon", "WhatsApp", "Email"];

    return (
        <>
            <PageHero
                label={t.heroLabel}
                title={t.heroTitle}
                subtitle={t.heroSubtitle}
                crumbs={[{ label: t.heroLabel, href: "/kontak" }]}
                bgImage="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=85&w=2000&auto=format&fit=crop"
            />

            {/* KONTAK & FORM */}
            <section className="py-6 lg:py-24 bg-white" id="form-konsultasi">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Info Kontak */}
                        <div className="lg:col-span-4">
                            <div className="divider-gold mb-3">{t.infoLabel}</div>
                            <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
                                {t.infoHeading}
                            </h2>
                            <p className="text-base sm:text-lg text-gray-800 leading-tight mb-10">
                                {t.infoDesc}
                            </p>

                            <div className="space-y-5">
                                {contactKeys.map((key) => {
                                    const Icon = CONTACT_ICON_MAP[key];
                                    const label = t.contactLabels[key];
                                    return (
                                        <a
                                            key={key}
                                            href={CONTACT_HREFS[key]}
                                            target={CONTACT_HREFS[key].startsWith("http") ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="h-10 w-10 flex-shrink-0 border border-[#5C130C]/30 group-hover:bg-[#5C130C] flex items-center justify-center transition-colors">
                                                <Icon className="h-4 w-4 text-[#5C130C] group-hover:text-white transition-colors" strokeWidth={1.75} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">{label}</div>
                                                <div className="text-sm text-slate-700 group-hover:text-[#5C130C] transition-colors leading-relaxed">{CONTACT_VALUES[key]}</div>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Jam Layanan */}
                            <div className="mt-10 pt-8 border-t border-slate-200">
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-5">{t.hoursLabel}</div>
                                <div className="space-y-3">
                                    {t.hours.map((j) => (
                                        <div key={j.hari} className="flex justify-between text-sm">
                                            <span className="text-slate-600">{j.hari}</span>
                                            <span className={`font-medium ${j.jam === t.closed ? "text-red-500" : "text-[#5C130C]"}`}>
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
                                    {t.waBtn}
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
                                        <h4 className="font-serif-display text-2xl text-[#5C130C] font-medium">{t.formSuccessTitle}</h4>
                                        <p className="mt-3 text-slate-600">
                                            {t.formSuccessDesc}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                                            className="mt-6 text-sm font-semibold text-[#5C130C] hover:text-[#D4AF37] transition-colors"
                                        >
                                            {t.formSuccessResend}
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="font-serif-display text-2xl text-[#5C130C] font-medium mb-2">
                                            {t.formHeading}
                                        </h3>
                                        <p className="text-sm text-slate-500 mb-8">
                                            {t.formSubtitle}
                                        </p>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                    {t.formName}
                                                </label>
                                                <input
                                                    data-testid="form-name"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                                    placeholder={t.formPlaceholderName}
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                    {t.formPhone}
                                                </label>
                                                <input
                                                    data-testid="form-phone"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                                    placeholder={t.formPlaceholderPhone}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                {t.formEmail}
                                            </label>
                                            <input
                                                data-testid="form-email"
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                                placeholder={t.formPlaceholderEmail}
                                            />
                                        </div>

                                        <div className="mt-5">
                                            <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                {t.formSubject}
                                            </label>
                                            <select
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors"
                                            >
                                                <option value="">{t.formSelectDefault}</option>
                                                {t.formCategories.map((cat) => (
                                                    <option key={cat}>{cat}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="mt-5">
                                            <label className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 mb-2 block">
                                                {t.formMessage}
                                            </label>
                                            <textarea
                                                data-testid="form-message"
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5C130C] transition-colors resize-none"
                                                placeholder={t.formPlaceholderMessage}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            data-testid="form-submit"
                                            disabled={loading}
                                            className="mt-6 w-full inline-flex items-center justify-center gap-3 bg-[#5C130C] hover:bg-[#45130F] disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 font-semibold tracking-wide transition-colors group"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    <span>Mengirim...</span>
                                                </>
                                            ) : (
                                                <>
                                                    {t.formSubmit}
                                                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                        <p className="mt-3 text-xs text-slate-500 text-center">
                                            {t.formPrivacy}
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
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">{t.mapLabel}</div>
                    <div className="text-sm font-medium mt-1">LBH Garuda Dharma Nusantara</div>
                    <div className="text-xs text-slate-300 mt-1">{BRAND.address.line1}</div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-6 lg:py-24 bg-white" id="faq">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="divider-gold mb-3 justify-center">{t.faqLabel}</div>
                        <h2 className="font-sans text-2xl sm:text-4xl md:text-[3.5rem] text-black font-bold leading-[1.00] tracking-tight mb-5">
                            {t.faqHeading}
                        </h2>
                        <p className="text-base sm:text-lg text-gray-800 leading-tight text-center max-w-2xl mx-auto mb-10">
                            {t.faqSubtitle}
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full border-t border-slate-200">
                        {t.faqs.map((f, i) => (
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
