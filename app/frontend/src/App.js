import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Focus } from "@/components/site/Focus";
import { Programs } from "@/components/site/Programs";
import { WhyUs } from "@/components/site/WhyUs";
import { Structure } from "@/components/site/Structure";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Articles } from "@/components/site/Articles";
import { FAQ } from "@/components/site/FAQ";
import { CTAContact } from "@/components/site/CTAContact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat, MobileStickyCTA } from "@/components/site/Floating";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Focus />
                <Programs />
                <WhyUs />
                <Structure />
                <Testimonials />
                <Gallery />
                <Articles />
                <FAQ />
                <CTAContact />
            </main>
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
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
