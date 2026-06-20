const IMAGES = [
    {
        src: "/images/kemanusiaan.png",
        caption: "Pendampingan Klien",
        span: "md:col-span-2 md:row-span-2",
    },
    {
        src: "/images/sosial.png",
        caption: "Penyuluhan Komunitas",
        span: "",
    },
    {
        src: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500",
        caption: "Diskusi Kebijakan",
        span: "",
    },
    {
        src: "https://images.pexels.com/photos/7876150/pexels-photo-7876150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500",
        caption: "Tim Advokat",
        span: "",
    },
    {
        src: "/images/pendidikan.png",
        caption: "Pelatihan Hukum",
        span: "",
    },
];

export const Gallery = () => {
    return (
        <section id="galeri" data-testid="gallery-section" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-16">
                    <div className="divider-gold mb-6">Galeri Kegiatan</div>
                    <h2 className="font-serif-display text-4xl md:text-5xl text-[#5C130C] font-medium leading-tight tracking-tight">
                        Dokumentasi Kegiatan
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">
                    {IMAGES.map((img, i) => (
                        <div
                            key={i}
                            data-testid={`gallery-image-${i}`}
                            className={`relative group overflow-hidden ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5C130C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-5 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">
                                    Kegiatan
                                </div>
                                <div className="font-serif-display text-lg">{img.caption}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};