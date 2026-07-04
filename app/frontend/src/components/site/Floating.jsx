import { MessageCircle, Phone } from "lucide-react";
import { BRAND } from "@/lib/brand";

export const WhatsAppFloat = () => {
    return (
        <a
            href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent("Halo LBH Gardhatara, saya ingin konsultasi hukum.")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="whatsapp-float"
            aria-label="Hubungi via WhatsApp"
            className="fixed bottom-1 md:bottom-8 right-3 z-40 group"
        >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            <span className="relative flex items-center justify-center h-14 w-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-all">
                <MessageCircle className="h-6 w-6" strokeWidth={2} fill="currentColor" />
            </span>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#5C130C] text-white px-4 py-2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                Chat WhatsApp
            </span>
        </a>
    );
};

export const MobileStickyCTA = () => {
    // return (
    //     <div
    //         data-testid="mobile-sticky-cta"
    //         className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white border-t border-slate-200 shadow-2xl"
    //     >
    //         <div className="grid grid-cols-2 gap-px bg-slate-200">
    //             <a
    //                 href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
    //                 className="bg-white py-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#5C130C]"
    //             >
    //                 <Phone className="h-4 w-4" />
    //                 Telepon
    //             </a>
    //             <a
    //                 href="#kontak"
    //                 className="bg-[#D4AF37] py-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#5C130C]"
    //             >
    //                 Konsultasi Sekarang
    //             </a>
    //         </div>
    //     </div>
    // );
};