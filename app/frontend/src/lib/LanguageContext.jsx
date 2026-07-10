import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        try {
            return localStorage.getItem("lbh_lang") || "id";
        } catch {
            return "id";
        }
    });

    const toggleLang = () => {
        setLang((prev) => {
            const next = prev === "id" ? "en" : "id";
            try {
                localStorage.setItem("lbh_lang", next);
            } catch {}
            return next;
        });
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
    return ctx;
};
