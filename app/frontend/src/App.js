import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { useEffect } from "react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat, MobileStickyCTA } from "@/components/site/Floating";

import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ProgramPage } from "@/pages/ProgramPage";
import { ArticlePage } from "@/pages/ArticlePage";
import { ContactPage } from "@/pages/ContactPage";

// Scroll to top on every page navigation
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);
    return null;
};

// Shared layout wrapper
const PageLayout = ({ children, title, description }) => {
    useEffect(() => {
        if (title) document.title = `${title} | LBH Garuda Dharma Nusantara`;
        // You can also update meta description dynamically here if needed
    }, [title]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloat />
            <MobileStickyCTA />
            <Toaster richColors position="top-right" />
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PageLayout title="Bantuan Hukum yang Adil untuk Semua">
                                <HomePage />
                            </PageLayout>
                        }
                    />
                    <Route
                        path="/tentang"
                        element={
                            <PageLayout title="Tentang Kami">
                                <AboutPage />
                            </PageLayout>
                        }
                    />
                    <Route
                        path="/layanan"
                        element={
                            <PageLayout title="Layanan Hukum">
                                <ServicesPage />
                            </PageLayout>
                        }
                    />
                    <Route
                        path="/program"
                        element={
                            <PageLayout title="Program & Fokus Pengabdian">
                                <ProgramPage />
                            </PageLayout>
                        }
                    />
                    <Route
                        path="/artikel"
                        element={
                            <PageLayout title="Artikel & Berita">
                                <ArticlePage />
                            </PageLayout>
                        }
                    />
                    <Route
                        path="/kontak"
                        element={
                            <PageLayout title="Kontak & FAQ">
                                <ContactPage />
                            </PageLayout>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
