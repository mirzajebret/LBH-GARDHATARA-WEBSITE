/**
 * translations.js
 * Centralized bilingual content for LBH Gardhatara website.
 * Usage: const t = translations[lang];  → t.navbar.home etc.
 */

export const translations = {
    id: {
        // ─── Navbar ───────────────────────────────────────────────────────────
        navbar: {
            home: "Beranda",
            about: "Tentang",
            aboutSub: [
                { label: "Profil & Sejarah", href: "/tentang" },
                { label: "Visi & Misi", href: "/tentang#visi-misi" },
                { label: "Struktur Organisasi", href: "/tentang#struktur" },
            ],
            services: "Layanan",
            servicesSub: [
                { label: "Bantuan Hukum", href: "/layanan#bantuan-hukum" },
                { label: "Konsultasi Hukum", href: "/layanan#konsultasi" },
                { label: "Advokasi", href: "/layanan#advokasi" },
                { label: "Prosedur Pengajuan", href: "/layanan#prosedur" },
            ],
            program: "Program",
            article: "Artikel",
            contact: "Kontak",
            cta: "Konsultasi",
            ctaMobile: "Konsultasi Hukum",
        },

        // ─── Footer ──────────────────────────────────────────────────────────
        footer: {
            tagline: "Lembaga Bantuan Hukum yang berkomitmen pada keadilan, perlindungan hak asasi manusia, dan pemberdayaan masyarakat melalui akses hukum yang adil.",
            navTitle: "Navigasi",
            navLinks: [
                { label: "Tentang Kami", href: "/tentang" },
                { label: "Bantuan Hukum", href: "/layanan" },
                { label: "Program Kerja", href: "/program" },
                { label: "Artikel Hukum", href: "/artikel" },
                { label: "Kontak", href: "/kontak" },
            ],
            copyright: "Hak Cipta Dilindungi.",
        },

        // ─── HomePage ─────────────────────────────────────────────────────────
        home: {
            heroTitle: "Bantuan Hukum\nUntuk Semua",
            heroSubtitle: "LBH Garuda Dharma Nusantara berkomitmen memberikan keadilan bagi masyarakat.",
            heroContact: "Hubungi Kami",
            heroServices: "Layanan Kami",

            aboutLabel: "Tentang Kami",
            aboutHeading1: "Lembaga Bantuan Hukum",
            aboutHeading2: "Garuda Dharma Nusantara",
            aboutDesc: "Lembaga resmi berbadan hukum (No. AHU-0006869.AH.01.07.TAHUN 2025) di bidang pendidikan, sosial, dan kemanusiaan — melayani perkara pidana, perdata, ketenagakerjaan, HAM, hingga kebijakan publik.",
            aboutLink: "Selengkapnya tentang kami",

            visiLabel: "Visi",
            visiTitle: "Keadilan untuk Semua",
            visiText: "Mewujudkan masyarakat yang sadar hukum, terlindungi hak-haknya, dan mampu mengakses keadilan tanpa hambatan ekonomi maupun sosial.",

            misiLabel: "Misi",
            misiItems: [
                "Bantuan & pendampingan hukum pro bono",
                "Edukasi hukum dan kesadaran masyarakat",
                "Mendorong penegakan hukum yang adil",
            ],

            ctaLabel: "Konsultasi Gratis",
            ctaHeading1: "Butuh Bantuan",
            ctaHeading2: " Hukum?",
            ctaDesc: "Tim advokat berpengalaman kami siap mendengarkan permasalahan Anda dan memberikan solusi hukum terbaik. Konsultasi pertama gratis dan kerahasiaan terjamin.",
            ctaBtn1: "Konsultasi Sekarang",
            ctaBtn2: "Chat WhatsApp",
            ctaPhone: "Telepon",
            ctaWa: "WhatsApp",
            ctaAddress: "Alamat",
        },

        // ─── AboutPage ────────────────────────────────────────────────────────
        about: {
            heroLabel: "Tentang Kami",
            heroTitle: "Mengenal LBH Garuda Dharma Nusantara",
            heroSubtitle: "Lembaga bantuan hukum yang berdiri dengan semangat keadilan, integritas, dan kepedulian terhadap hak asasi manusia sejak 2025.",

            profilLabel: "Profil & Sejarah",
            profilHeading1: "Lembaga Bantuan Hukum",
            profilHeading2: "Garuda Dharma Nusantara.",
            profilP1: "LBH Garuda Dharma Nusantara (LBH Gardhatara) adalah lembaga bantuan hukum berbadan hukum resmi yang telah disahkan oleh negara dengan Nomor AHU-0006869.AH.01.07.TAHUN 2025 yang bergerak di bidang pendidikan, sosial, dan kemanusiaan. Didirikan oleh sekelompok advokat dan aktivis hukum yang meyakini bahwa akses terhadap keadilan adalah hak fundamental setiap warga negara, tanpa terkecuali.",
            profilP2: "Berkedudukan di Jakarta Selatan, LBH Gardhatara telah mendampingi lebih dari 500 kasus selama lebih dari satu dekade. Kami menangani berbagai bidang hukum mulai dari perkara pidana, perdata, ketenagakerjaan, keluarga, agraria, hingga isu-isu hak asasi manusia dan advokasi kebijakan publik.",
            profilP3: "Nama \"Garuda Dharma Nusantara\" merupakan simbol komitmen kami: Garuda mewakili kebanggaan dan keteguhan bangsa, Dharma berarti kewajiban moral dan keadilan, serta Nusantara mencerminkan jangkauan pelayanan kami yang bersifat nasional.",
            sinceText: "Sejak",
            sinceDesc: "Lebih dari satu dekade mengabdi untuk keadilan di Indonesia.",
            valuesLabel: "Nilai Utama",
            values: [
                "Integritas",
                "Keadilan",
                "Profesionalisme",
                "Kepedulian Sosial",
                "Perlindungan Hak Asasi Manusia",
                "Transparansi & Akuntabilitas",
            ],

            visiMisiLabel: "Visi & Misi",
            visiMisiHeading: "Arah & Komitmen Kami",
            visiTitle: "Visi",
            visiText: "\"Menjadi lembaga bantuan hukum yang profesional, terpercaya, dan berkontribusi dalam menciptakan masyarakat yang sadar hukum, berkeadilan, dan menghormati hak asasi manusia.\"",
            misiTitle: "Misi",
            missions: [
                "Memberikan bantuan hukum kepada masyarakat yang membutuhkan.",
                "Meningkatkan kesadaran hukum masyarakat melalui edukasi dan penyuluhan.",
                "Melakukan advokasi terhadap kebijakan yang berdampak pada publik.",
                "Mendorong perlindungan hak asasi manusia.",
                "Mengembangkan budaya hukum yang demokratis dan partisipatif.",
                "Membangun jejaring dengan organisasi hukum dan LSM di Indonesia.",
            ],

            whyLabel: "Mengapa Memilih Kami",
            whyHeading: "Alasan mempercayai kami.",
            whySubtitle: "Kombinasi kompetensi hukum, integritas, dan kepedulian sosial yang membedakan kami sebagai mitra hukum yang andal.",
            whyItems: [
                { title: "Profesional & Berintegritas", desc: "Tim advokat dan paralegal berpengalaman dengan standar etika tertinggi." },
                { title: "Berorientasi pada Keadilan", desc: "Setiap kasus diperjuangkan dengan komitmen pada nilai keadilan substantif." },
                { title: "Edukasi Hukum Berkelanjutan", desc: "Program penyuluhan rutin untuk membangun masyarakat yang sadar hukum." },
                { title: "Pendampingan Humanis", desc: "Pendekatan empati dan personal di setiap tahap proses hukum." },
                { title: "Komitmen pada HAM", desc: "Berdiri di garis depan perlindungan hak asasi manusia di Indonesia." },
                { title: "Jaringan Nasional", desc: "Pengembangan cabang dan kemitraan strategis di seluruh Nusantara." },
            ],

            structureLabel: "Struktur Organisasi",
            structureHeading: "Struktur Organisasi LBH Gardhatara.",
            teamRoles: {
                "Ketua": "Ketua",
                "Sekretaris": "Sekretaris",
                "Bendahara": "Bendahara",
                "Pengawas": "Pengawas",
            },
            teamDescs: [
                "Memimpin arah strategis organisasi dengan komitmen pada keadilan substantif dan integritas profesi.",
                "Mengelola tata kelola, dokumentasi, dan koordinasi internal lembaga secara profesional.",
                "Menjaga akuntabilitas keuangan dan transparansi pelaporan kepada para pemangku kepentingan.",
                "Mengawasi kepatuhan terhadap etika, standar, dan prosedur operasional organisasi.",
                "Mengawasi kepatuhan terhadap etika, standar, dan prosedur operasional organisasi.",
            ],

            ctaHeading: "Ingin bergabung atau berkolaborasi?",
            ctaDesc: "Kami terbuka untuk kemitraan dengan individu, organisasi, dan lembaga yang memiliki visi yang sama dalam mewujudkan keadilan hukum.",
            ctaBtn: "Hubungi Kami",
        },

        // ─── ServicesPage ─────────────────────────────────────────────────────
        services: {
            heroLabel: "Layanan Kami",
            heroTitle: "Layanan Hukum Komprehensif untuk Semua",
            heroSubtitle: "Dari konsultasi awal hingga pendampingan di pengadilan — kami hadir untuk memastikan hak Anda terlindungi secara profesional dan humanis.",

            listLabel: "Bidang Layanan",
            listHeading: "Kami siap mendampingi Anda di setiap tahap.",
            listSubtitle: "Setiap layanan dirancang untuk menjawab kebutuhan nyata masyarakat, dengan pendekatan yang humanis dan berorientasi pada penyelesaian yang adil.",
            coverageLabel: "Cakupan Layanan",

            items: [
                {
                    title: "Bantuan Hukum",
                    tagline: "Pendampingan penuh dari awal hingga selesai",
                    desc: "Kami memberikan bantuan hukum secara cuma-cuma (pro bono) bagi masyarakat kurang mampu sesuai UU No. 16 Tahun 2011 tentang Bantuan Hukum. Layanan mencakup pendampingan litigasi di Pengadilan Negeri, Pengadilan Agama, PTUN, hingga tingkat Mahkamah Agung.",
                    details: [
                        "Perkara pidana (tersangka, terdakwa, terpidana)",
                        "Perkara perdata (sengketa harta, wanprestasi, perbuatan melawan hukum)",
                        "Perkara keluarga (perceraian, hak asuh anak, warisan)",
                        "Perkara ketenagakerjaan (PHK, upah, diskriminasi)",
                        "Perkara agraria dan pertanahan",
                    ],
                },
                {
                    title: "Konsultasi Hukum",
                    tagline: "Solusi tepat untuk setiap persoalan hukum",
                    desc: "Layanan konsultasi hukum bersama advokat dan paralegal berpengalaman. Kami membantu Anda memahami hak dan kewajiban, menganalisis risiko hukum, serta merancang strategi penyelesaian kasus.",
                    details: [
                        "Konsultasi tatap muka di kantor",
                        "Konsultasi via WhatsApp dan email",
                        "Analisis kontrak dan perjanjian",
                        "Pendapat hukum (legal opinion)",
                        "Mediasi dan negosiasi sengketa",
                    ],
                },
                {
                    title: "Advokasi Hukum",
                    tagline: "Membela hak masyarakat secara tegas dan profesional",
                    desc: "Advokasi hukum adalah upaya pembelaan terhadap hak-hak masyarakat melalui jalur litigasi maupun non-litigasi. Tim kami berpengalaman dalam advokasi kebijakan, pendampingan di lembaga negara, serta pendampingan korban pelanggaran HAM.",
                    details: [
                        "Pendampingan korban pelanggaran HAM",
                        "Advokasi kebijakan publik dan legislasi",
                        "Pembuatan petisi dan rekomendasi hukum",
                        "Koordinasi dengan Komnas HAM, LPSK, dan ORI",
                        "Pendampingan kelompok rentan (perempuan, anak, disabilitas)",
                    ],
                },
                {
                    title: "Penyuluhan Hukum",
                    tagline: "Edukasi hukum yang menjangkau seluruh lapisan masyarakat",
                    desc: "Program penyuluhan hukum dirancang untuk meningkatkan pemahaman dan kesadaran hukum masyarakat. Kami hadir di komunitas, sekolah, pondok pesantren, pasar, hingga kawasan industri.",
                    details: [
                        "Seminar dan diskusi hukum publik",
                        "Pelatihan paralegal komunitas",
                        "Penyuluhan di sekolah dan universitas",
                        "Workshop hak pekerja dan buruh",
                        "Kampanye hukum via media digital",
                    ],
                },
                {
                    title: "Kajian Kebijakan",
                    tagline: "Analisis mendalam untuk kebijakan yang lebih berkeadilan",
                    desc: "Kami melakukan kajian dan riset hukum terhadap peraturan perundang-undangan dan kebijakan publik. Hasil kajian digunakan sebagai bahan masukan kepada DPR, pemerintah, dan pemangku kepentingan.",
                    details: [
                        "Riset dan analisis peraturan perundang-undangan",
                        "Kertas posisi (position paper)",
                        "Naskah akademik",
                        "Monitoring implementasi kebijakan",
                        "Laporan situasi HAM",
                    ],
                },
            ],

            procedureLabel: "Cara Pengajuan",
            procedureHeading: "Prosedur Pengajuan Bantuan Hukum",
            procedureSubtitle: "Empat langkah mudah untuk mendapatkan bantuan hukum dari LBH Gardhatara.",
            steps: [
                {
                    title: "Pengajuan Permohonan",
                    desc: "Hubungi kami via WhatsApp, telepon, email, atau datang langsung ke kantor. Ceritakan situasi hukum yang Anda hadapi.",
                },
                {
                    title: "Verifikasi & Asesmen",
                    desc: "Tim kami akan melakukan verifikasi identitas dan kelayakan, serta asesmen awal terhadap kasus Anda.",
                },
                {
                    title: "Penunjukan Advokat",
                    desc: "Setelah disetujui, advokat atau paralegal yang berpengalaman di bidang terkait akan ditugaskan untuk mendampingi Anda.",
                },
                {
                    title: "Pendampingan & Penyelesaian",
                    desc: "Proses hukum berjalan dengan pendampingan penuh dari tim kami hingga kasus selesai — baik melalui mediasi maupun persidangan.",
                },
            ],

            probono: "Bantuan Hukum Pro Bono",
            probonoHeading: "Syarat Penerima Bantuan Hukum Gratis",
            probonoDesc: "Sesuai dengan UU No. 16 Tahun 2011 tentang Bantuan Hukum, LBH Gardhatara memberikan layanan bantuan hukum secara gratis bagi masyarakat yang memenuhi syarat berikut:",
            requirements: [
                "Memiliki KTP atau kartu identitas yang berlaku",
                "Melampirkan Surat Keterangan Tidak Mampu (SKTM) dari kelurahan (untuk layanan pro bono)",
                "Menyertakan dokumen yang berkaitan dengan kasus (jika ada)",
                "Mengisi formulir permohonan bantuan hukum",
                "Tidak sedang didampingi oleh pengacara lain",
            ],
            importantLabel: "Penting Diketahui",
            importantItems: [
                "<strong>Bantuan hukum gratis</strong> diberikan kepada masyarakat tidak mampu secara ekonomi yang dapat dibuktikan dengan SKTM dari kelurahan.",
                "<strong>Semua jenis perkara</strong> termasuk pidana, perdata, tata usaha negara, dan perkara keluarga dapat diajukan.",
                "<strong>Kerahasiaan dijamin</strong> — seluruh informasi yang Anda sampaikan dilindungi oleh kerahasiaan profesi advokat.",
                "<strong>Tidak dipungut biaya</strong> untuk biaya pendampingan dan honorarium advokat bagi penerima bantuan hukum yang telah diverifikasi.",
            ],
            probonoBtn: "Ajukan Bantuan Hukum",
        },

        // ─── ProgramPage ──────────────────────────────────────────────────────
        program: {
            heroLabel: "Program & Fokus",
            heroTitle: "Program dan Fokus Pengabdian Kami",
            heroSubtitle: "Enam pilar fokus pengabdian dan empat program kerja utama yang menggerakkan misi keadilan LBH Gardhatara.",

            stats: [
                { value: "100+", label: "Kasus Ditangani", desc: "Profesional" },
                { value: "1+", label: "Tahun Pengabdian", desc: "Berpengalaman" },
                { value: "10+", label: "Kegiatan Penyuluhan", desc: "Per Tahun" },
                { value: "100+", label: "Warga Terbantu", desc: "Dan terus bertumbuh" },
            ],

            focusLabel: "Fokus Pengabdian",
            focusHeading: "Enam pilar pengabdian kami.",
            focusItems: [
                {
                    title: "Hak Asasi Manusia (HAM)",
                    desc: "Memperjuangkan dan melindungi hak fundamental setiap warga negara.",
                    examples: ["Pendampingan korban kekerasan aparat", "Advokasi hak tahanan", "Perlindungan pembela HAM"],
                },
                {
                    title: "Keadilan Sosial",
                    desc: "Mendorong kesetaraan akses terhadap keadilan tanpa diskriminasi.",
                    examples: ["Layanan pro bono untuk masyarakat tidak mampu", "Advokasi kebijakan anti-diskriminasi", "Edukasi hak warga"],
                },
                {
                    title: "Perlindungan Kelompok Rentan",
                    desc: "Pendampingan khusus bagi perempuan, anak, lansia, dan kelompok marginal.",
                    examples: ["Bantuan hukum korban KDRT", "Pendampingan anak berkonflik hukum", "Perlindungan pekerja migran"],
                },
                {
                    title: "Pendidikan Hukum",
                    desc: "Edukasi hukum berkelanjutan untuk membangun masyarakat yang sadar hukum.",
                    examples: ["Penyuluhan hukum di komunitas", "Pelatihan paralegal", "Publikasi literasi hukum"],
                },
                {
                    title: "Demokrasi & Partisipasi Publik",
                    desc: "Mendorong keterlibatan warga dalam proses demokrasi yang sehat.",
                    examples: ["Pemantauan pemilu", "Advokasi transparansi pemerintah", "Forum warga dan diskusi publik"],
                },
                {
                    title: "Lingkungan & Kepentingan Masyarakat",
                    desc: "Advokasi terhadap isu lingkungan demi kesejahteraan publik.",
                    examples: ["Advokasi sengketa lahan", "Pendampingan korban pencemaran", "Kajian kebijakan lingkungan"],
                },
            ],

            programLabel: "Program Kerja",
            programHeading: "Empat program utama yang menggerakkan misi keadilan kami.",
            programSubtitle: "Dirancang sebagai ekosistem terintegrasi — dari pendampingan langsung hingga edukasi publik dan advokasi kebijakan.",
            programItems: [
                {
                    title: "Program Bantuan Hukum",
                    desc: "Memberikan bantuan dan pendampingan hukum kepada masyarakat kurang mampu, mulai dari kasus pidana, perdata, keluarga, hingga ketenagakerjaan.",
                },
                {
                    title: "Program Advokasi Kebijakan",
                    desc: "Melakukan kajian hukum dan memberikan masukan terhadap kebijakan publik agar lebih berkeadilan dan berpihak pada masyarakat.",
                },
                {
                    title: "Program Penyuluhan Hukum",
                    desc: "Meningkatkan pemahaman hukum masyarakat melalui edukasi berkelanjutan di sekolah, komunitas, dan ruang publik.",
                },
                {
                    title: "Program Kampanye & Publikasi",
                    desc: "Menyebarluaskan informasi hukum melalui media digital, podcast, dan berbagai sarana komunikasi publik agar literasi hukum semakin merata.",
                },
            ],
        },

        // ─── ArticlePage ──────────────────────────────────────────────────────
        article: {
            heroLabel: "Artikel & Berita",
            heroTitle: "Wawasan Hukum & Kegiatan",
            heroSubtitle: "Kumpulan artikel hukum, berita kegiatan, kajian kebijakan, dan siaran pers dari LBH Garuda Dharma Nusantara.",

            allContent: "Semua Konten",
            heading: "Artikel & Publikasi",
            readMore: "Baca Selengkapnya",
            loadMore: "Muat Lebih Banyak",
            showing: "Menampilkan",
            of: "dari",
            articles: "artikel",

            galleryLabel: "Dokumentasi",
            galleryHeading: "Galeri Kegiatan",
        },

        // ─── ArticleDetailPage ────────────────────────────────────────────────
        articleDetail: {
            back: "Kembali ke Artikel",
            share: "Bagikan",
            copyLink: "Salin Tautan",
            shareWa: "Bagikan ke WhatsApp",
            relatedLabel: "Artikel Terkait",
            relatedHeading: "Baca Juga",
            prevArticle: "Artikel Sebelumnya",
            nextArticle: "Artikel Berikutnya",
            readTime: "menit baca",
            notFound: "Artikel tidak ditemukan.",
            notFoundDesc: "Artikel yang Anda cari tidak ada atau telah dipindahkan.",
            backToList: "Kembali ke Daftar Artikel",
        },

        // ─── ContactPage ──────────────────────────────────────────────────────
        contact: {
            heroLabel: "Kontak & FAQ",
            heroTitle: "Hubungi Kami",
            heroSubtitle: "Tim LBH Gardhatara siap mendengarkan dan membantu Anda. Jangan ragu untuk menghubungi kami.",

            infoLabel: "Informasi Kontak",
            infoHeading: "Mari bicarakan kasus Anda.",
            infoDesc: "Tim kami siap mendengarkan, menelaah, dan memberikan langkah hukum terbaik. Kerahasiaan terjamin.",

            hoursLabel: "Jam Layanan",
            hours: [
                { hari: "Senin – Jumat", jam: "08.00 – 17.00 WIB" },
                { hari: "Sabtu", jam: "09.00 – 13.00 WIB" },
                { hari: "Minggu & Hari Libur", jam: "Tutup" },
            ],
            closed: "Tutup",

            waBtn: "Chat WhatsApp Langsung",

            formHeading: "Formulir Konsultasi",
            formSubtitle: "Isi formulir di bawah ini dan kami akan menghubungi Anda dalam 1×24 jam.",
            formName: "Nama Lengkap *",
            formPhone: "Telepon / WhatsApp",
            formEmail: "Email",
            formSubject: "Jenis Permasalahan Hukum",
            formMessage: "Ceritakan Kasus Anda *",
            formPlaceholderName: "Nama Anda",
            formPlaceholderPhone: "08xx-xxxx-xxxx",
            formPlaceholderEmail: "email@anda.com",
            formPlaceholderMessage: "Jelaskan situasi hukum yang Anda hadapi secara singkat...",
            formSelectDefault: "— Pilih Kategori —",
            formCategories: [
                "Perkara Pidana",
                "Perkara Perdata",
                "Hukum Keluarga (Perceraian, Warisan, dll)",
                "Ketenagakerjaan",
                "Agraria & Pertanahan",
                "Perlindungan Anak & Perempuan",
                "HAM & Kebijakan Publik",
                "Lainnya",
            ],
            formSubmit: "Kirim Permintaan Konsultasi",
            formPrivacy: "Dengan mengirim formulir ini, Anda setuju dengan Kebijakan Privasi kami. Seluruh informasi bersifat rahasia.",
            formSuccessTitle: "Terima kasih!",
            formSuccessDesc: "Permintaan konsultasi Anda telah kami terima. Tim kami akan segera menghubungi.",
            formSuccessResend: "Kirim pesan lain →",
            toastError: "Mohon lengkapi nama dan pesan.",
            toastSuccess: "Permintaan konsultasi terkirim ke WhatsApp kami.",
            waMessage: "Halo LBH Gardhatara,",
            waName: "Nama",
            waEmail: "Email",
            waPhone: "Telepon",
            waSubject: "Subjek",
            waMessageLabel: "Pesan",

            mapLabel: "Kantor Pusat",

            faqLabel: "FAQ",
            faqHeading: "Pertanyaan yang sering diajukan.",
            faqSubtitle: "Belum menemukan jawaban yang Anda cari? Jangan ragu menghubungi kami secara langsung.",
            faqs: [
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
            ],

            contactLabels: {
                Alamat: "Alamat",
                Telepon: "Telepon",
                WhatsApp: "WhatsApp",
                Email: "Email",
            },
        },
    },

    // ═══════════════════════════════════════════════════════════════════════════
    //  ENGLISH
    // ═══════════════════════════════════════════════════════════════════════════
    en: {
        // ─── Navbar ───────────────────────────────────────────────────────────
        navbar: {
            home: "Home",
            about: "About",
            aboutSub: [
                { label: "Profile & History", href: "/tentang" },
                { label: "Vision & Mission", href: "/tentang#visi-misi" },
                { label: "Organizational Structure", href: "/tentang#struktur" },
            ],
            services: "Services",
            servicesSub: [
                { label: "Legal Aid", href: "/layanan#bantuan-hukum" },
                { label: "Legal Consultation", href: "/layanan#konsultasi" },
                { label: "Advocacy", href: "/layanan#advokasi" },
                { label: "Submission Procedure", href: "/layanan#prosedur" },
            ],
            program: "Program",
            article: "Articles",
            contact: "Contact",
            cta: "Consult",
            ctaMobile: "Legal Consultation",
        },

        // ─── Footer ──────────────────────────────────────────────────────────
        footer: {
            tagline: "A Legal Aid Institution committed to justice, protection of human rights, and community empowerment through fair legal access.",
            navTitle: "Navigation",
            navLinks: [
                { label: "About Us", href: "/tentang" },
                { label: "Legal Aid", href: "/layanan" },
                { label: "Work Programs", href: "/program" },
                { label: "Legal Articles", href: "/artikel" },
                { label: "Contact", href: "/kontak" },
            ],
            copyright: "All Rights Reserved.",
        },

        // ─── HomePage ─────────────────────────────────────────────────────────
        home: {
            heroTitle: "Legal Aid\nFor Everyone",
            heroSubtitle: "LBH Garuda Dharma Nusantara is committed to delivering justice for the community.",
            heroContact: "Contact Us",
            heroServices: "Our Services",

            aboutLabel: "About Us",
            aboutHeading1: "Legal Aid Institution",
            aboutHeading2: "Garuda Dharma Nusantara",
            aboutDesc: "An officially incorporated institution (No. AHU-0006869.AH.01.07.TAHUN 2025) in education, social, and humanitarian fields — handling criminal, civil, labour, human rights, and public policy cases.",
            aboutLink: "Learn more about us",

            visiLabel: "Vision",
            visiTitle: "Justice for All",
            visiText: "Building a law-aware society where everyone's rights are protected and can access justice without economic or social barriers.",

            misiLabel: "Mission",
            misiItems: [
                "Pro bono legal aid & assistance",
                "Legal education and public awareness",
                "Promoting fair law enforcement",
            ],

            ctaLabel: "Free Consultation",
            ctaHeading1: "Need Legal",
            ctaHeading2: " Help?",
            ctaDesc: "Our experienced team of advocates is ready to listen to your problems and provide the best legal solutions. First consultation is free and confidentiality is guaranteed.",
            ctaBtn1: "Consult Now",
            ctaBtn2: "Chat WhatsApp",
            ctaPhone: "Phone",
            ctaWa: "WhatsApp",
            ctaAddress: "Address",
        },

        // ─── AboutPage ────────────────────────────────────────────────────────
        about: {
            heroLabel: "About Us",
            heroTitle: "Getting to Know LBH Garuda Dharma Nusantara",
            heroSubtitle: "A legal aid institution established with the spirit of justice, integrity, and concern for human rights since 2025.",

            profilLabel: "Profile & History",
            profilHeading1: "Legal Aid Institution",
            profilHeading2: "Garuda Dharma Nusantara.",
            profilP1: "LBH Garuda Dharma Nusantara (LBH Gardhatara) is a formally incorporated legal aid institution recognized by the state under Number AHU-0006869.AH.01.07.TAHUN 2025, operating in education, social, and humanitarian fields. Founded by a group of advocates and legal activists who believe that access to justice is a fundamental right of every citizen, without exception.",
            profilP2: "Based in South Jakarta, LBH Gardhatara has assisted more than 500 cases over more than a decade. We handle various legal areas including criminal, civil, labour, family, agrarian matters, as well as human rights issues and public policy advocacy.",
            profilP3: "The name \"Garuda Dharma Nusantara\" symbolises our commitment: Garuda represents national pride and steadfastness, Dharma means moral duty and justice, and Nusantara reflects the national scope of our services.",
            sinceText: "Since",
            sinceDesc: "More than a decade serving justice in Indonesia.",
            valuesLabel: "Core Values",
            values: [
                "Integrity",
                "Justice",
                "Professionalism",
                "Social Care",
                "Protection of Human Rights",
                "Transparency & Accountability",
            ],

            visiMisiLabel: "Vision & Mission",
            visiMisiHeading: "Our Direction & Commitment",
            visiTitle: "Vision",
            visiText: "\"To become a professional and trusted legal aid institution that contributes to creating a law-aware, just society that respects human rights.\"",
            misiTitle: "Mission",
            missions: [
                "Provide legal assistance to those in need.",
                "Improve public legal awareness through education and outreach.",
                "Advocate for policies that impact the public.",
                "Promote the protection of human rights.",
                "Develop a democratic and participatory legal culture.",
                "Build networks with legal organizations and NGOs in Indonesia.",
            ],

            whyLabel: "Why Choose Us",
            whyHeading: "Reasons to trust us.",
            whySubtitle: "A combination of legal competence, integrity, and social concern that distinguishes us as a reliable legal partner.",
            whyItems: [
                { title: "Professional & Integrity-driven", desc: "Experienced advocates and paralegals with the highest ethical standards." },
                { title: "Justice-oriented", desc: "Every case is pursued with commitment to substantive justice values." },
                { title: "Continuous Legal Education", desc: "Regular outreach programs to build a law-aware community." },
                { title: "Humanist Assistance", desc: "Empathetic and personal approach at every stage of the legal process." },
                { title: "Commitment to Human Rights", desc: "Standing at the forefront of human rights protection in Indonesia." },
                { title: "National Network", desc: "Branch development and strategic partnerships across the archipelago." },
            ],

            structureLabel: "Organizational Structure",
            structureHeading: "LBH Gardhatara Organizational Structure.",
            teamRoles: {
                "Ketua": "Chairman",
                "Sekretaris": "Secretary",
                "Bendahara": "Treasurer",
                "Pengawas": "Supervisor",
            },
            teamDescs: [
                "Leading the strategic direction of the organisation with commitment to substantive justice and professional integrity.",
                "Managing governance, documentation, and internal coordination of the institution professionally.",
                "Maintaining financial accountability and transparent reporting to stakeholders.",
                "Overseeing compliance with the organisation's ethics, standards, and operational procedures.",
                "Overseeing compliance with the organisation's ethics, standards, and operational procedures.",
            ],

            ctaHeading: "Want to join or collaborate?",
            ctaDesc: "We are open to partnerships with individuals, organisations, and institutions that share the same vision of realising legal justice.",
            ctaBtn: "Contact Us",
        },

        // ─── ServicesPage ─────────────────────────────────────────────────────
        services: {
            heroLabel: "Our Services",
            heroTitle: "Comprehensive Legal Services for All",
            heroSubtitle: "From initial consultation to court representation — we are here to ensure your rights are protected professionally and humanely.",

            listLabel: "Service Areas",
            listHeading: "We are ready to assist you at every stage.",
            listSubtitle: "Every service is designed to address real community needs, with a humane approach oriented toward fair resolution.",
            coverageLabel: "Service Coverage",

            items: [
                {
                    title: "Legal Aid",
                    tagline: "Full assistance from start to finish",
                    desc: "We provide pro bono legal aid to underprivileged communities in accordance with Law No. 16 of 2011 on Legal Aid. Services include litigation assistance at District Courts, Religious Courts, Administrative Courts, up to the Supreme Court level.",
                    details: [
                        "Criminal cases (suspects, defendants, convicts)",
                        "Civil cases (property disputes, default, unlawful acts)",
                        "Family cases (divorce, child custody, inheritance)",
                        "Labour cases (layoffs, wages, discrimination)",
                        "Agrarian and land cases",
                    ],
                },
                {
                    title: "Legal Consultation",
                    tagline: "Precise solutions for every legal issue",
                    desc: "Legal consultation services with experienced advocates and paralegals. We help you understand your rights and obligations, analyse legal risks, and devise case resolution strategies.",
                    details: [
                        "In-office face-to-face consultation",
                        "Consultation via WhatsApp and email",
                        "Contract and agreement analysis",
                        "Legal opinion",
                        "Mediation and dispute negotiation",
                    ],
                },
                {
                    title: "Legal Advocacy",
                    tagline: "Defending community rights firmly and professionally",
                    desc: "Legal advocacy is an effort to defend community rights through both litigation and non-litigation channels. Our team is experienced in policy advocacy, assistance at state institutions, and assisting victims of human rights violations.",
                    details: [
                        "Assistance for human rights violation victims",
                        "Public policy and legislative advocacy",
                        "Petitions and legal recommendations",
                        "Coordination with Komnas HAM, LPSK, and ORI",
                        "Assistance for vulnerable groups (women, children, persons with disabilities)",
                    ],
                },
                {
                    title: "Legal Outreach",
                    tagline: "Legal education reaching all levels of society",
                    desc: "The legal outreach program is designed to improve public understanding and legal awareness. We are present in communities, schools, Islamic boarding schools, markets, and industrial areas.",
                    details: [
                        "Public legal seminars and discussions",
                        "Community paralegal training",
                        "Outreach at schools and universities",
                        "Workers' rights workshops",
                        "Legal campaigns via digital media",
                    ],
                },
                {
                    title: "Policy Research",
                    tagline: "In-depth analysis for more just policies",
                    desc: "We conduct legal research on legislation and public policies. Research outputs are used as inputs for Parliament, the government, and stakeholders.",
                    details: [
                        "Research and analysis of legislation",
                        "Position papers",
                        "Academic papers",
                        "Policy implementation monitoring",
                        "Human rights situation reports",
                    ],
                },
            ],

            procedureLabel: "How to Apply",
            procedureHeading: "Legal Aid Application Procedure",
            procedureSubtitle: "Four easy steps to obtain legal aid from LBH Gardhatara.",
            steps: [
                {
                    title: "Submit Application",
                    desc: "Contact us via WhatsApp, phone, email, or visit our office directly. Tell us the legal situation you are facing.",
                },
                {
                    title: "Verification & Assessment",
                    desc: "Our team will verify identity and eligibility, and conduct an initial assessment of your case.",
                },
                {
                    title: "Advocate Assignment",
                    desc: "Once approved, an experienced advocate or paralegal in the relevant field will be assigned to assist you.",
                },
                {
                    title: "Assistance & Resolution",
                    desc: "The legal process proceeds with full assistance from our team until the case is resolved — through mediation or court proceedings.",
                },
            ],

            probono: "Pro Bono Legal Aid",
            probonoHeading: "Requirements for Free Legal Aid",
            probonoDesc: "In accordance with Law No. 16 of 2011 on Legal Aid, LBH Gardhatara provides free legal aid services to those who meet the following criteria:",
            requirements: [
                "Possess a valid ID card or identity document",
                "Attach a Certificate of Indigence (SKTM) from the local sub-district office (for pro bono services)",
                "Include documents related to the case (if any)",
                "Complete the legal aid application form",
                "Not currently represented by another attorney",
            ],
            importantLabel: "Important to Know",
            importantItems: [
                "<strong>Free legal aid</strong> is provided to economically disadvantaged communities verifiable with an SKTM from the sub-district office.",
                "<strong>All types of cases</strong> including criminal, civil, administrative, and family cases can be submitted.",
                "<strong>Confidentiality is guaranteed</strong> — all information you share is protected by advocate professional secrecy.",
                "<strong>No fees charged</strong> for assistance costs and advocate honorarium for verified legal aid recipients.",
            ],
            probonoBtn: "Apply for Legal Aid",
        },

        // ─── ProgramPage ──────────────────────────────────────────────────────
        program: {
            heroLabel: "Program & Focus",
            heroTitle: "Our Programs and Areas of Service",
            heroSubtitle: "Six pillars of service focus and four main work programs driving LBH Gardhatara's justice mission.",

            stats: [
                { value: "100+", label: "Cases Handled", desc: "Professional" },
                { value: "1+", label: "Years of Service", desc: "Experienced" },
                { value: "10+", label: "Outreach Activities", desc: "Per Year" },
                { value: "100+", label: "Citizens Helped", desc: "And still growing" },
            ],

            focusLabel: "Service Focus",
            focusHeading: "Our six pillars of service.",
            focusItems: [
                {
                    title: "Human Rights (HAM)",
                    desc: "Championing and protecting the fundamental rights of every citizen.",
                    examples: ["Assistance for victims of state violence", "Advocacy for prisoners' rights", "Protection of human rights defenders"],
                },
                {
                    title: "Social Justice",
                    desc: "Promoting equal access to justice without discrimination.",
                    examples: ["Pro bono services for the underprivileged", "Anti-discrimination policy advocacy", "Citizen rights education"],
                },
                {
                    title: "Protection of Vulnerable Groups",
                    desc: "Specialised assistance for women, children, the elderly, and marginalised groups.",
                    examples: ["Legal aid for domestic violence victims", "Assistance for children in conflict with the law", "Migrant worker protection"],
                },
                {
                    title: "Legal Education",
                    desc: "Continuous legal education to build a law-aware society.",
                    examples: ["Community legal outreach", "Paralegal training", "Legal literacy publications"],
                },
                {
                    title: "Democracy & Public Participation",
                    desc: "Promoting citizen engagement in healthy democratic processes.",
                    examples: ["Election monitoring", "Government transparency advocacy", "Citizen forums and public discussions"],
                },
                {
                    title: "Environment & Public Interest",
                    desc: "Advocacy on environmental issues for public welfare.",
                    examples: ["Land dispute advocacy", "Assistance for pollution victims", "Environmental policy research"],
                },
            ],

            programLabel: "Work Programs",
            programHeading: "Four main programs driving our justice mission.",
            programSubtitle: "Designed as an integrated ecosystem — from direct assistance to public education and policy advocacy.",
            programItems: [
                {
                    title: "Legal Aid Program",
                    desc: "Providing legal aid and assistance to underprivileged communities, from criminal, civil, family, to labour cases.",
                },
                {
                    title: "Policy Advocacy Program",
                    desc: "Conducting legal research and providing input on public policies to make them more just and community-oriented.",
                },
                {
                    title: "Legal Outreach Program",
                    desc: "Improving public legal understanding through continuous education in schools, communities, and public spaces.",
                },
                {
                    title: "Campaign & Publication Program",
                    desc: "Disseminating legal information through digital media, podcasts, and various public communication channels to spread legal literacy.",
                },
            ],
        },

        // ─── ArticlePage ──────────────────────────────────────────────────────
        article: {
            heroLabel: "Articles & News",
            heroTitle: "Legal Insights & Activities",
            heroSubtitle: "A collection of legal articles, activity news, policy studies, and press releases from LBH Garuda Dharma Nusantara.",

            allContent: "All Content",
            heading: "Articles & Publications",
            readMore: "Read More",
            loadMore: "Load More",
            showing: "Showing",
            of: "of",
            articles: "articles",

            galleryLabel: "Documentation",
            galleryHeading: "Activity Gallery",
        },

        // ─── ArticleDetailPage ────────────────────────────────────────────────
        articleDetail: {
            back: "Back to Articles",
            share: "Share",
            copyLink: "Copy Link",
            shareWa: "Share on WhatsApp",
            relatedLabel: "Related Articles",
            relatedHeading: "Read Also",
            prevArticle: "Previous Article",
            nextArticle: "Next Article",
            readTime: "min read",
            notFound: "Article not found.",
            notFoundDesc: "The article you are looking for does not exist or has been moved.",
            backToList: "Back to Article List",
        },

        // ─── ContactPage ──────────────────────────────────────────────────────
        contact: {
            heroLabel: "Contact & FAQ",
            heroTitle: "Contact Us",
            heroSubtitle: "The LBH Gardhatara team is ready to listen and help you. Don't hesitate to reach out.",

            infoLabel: "Contact Information",
            infoHeading: "Let's discuss your case.",
            infoDesc: "Our team is ready to listen, analyse, and provide the best legal steps. Confidentiality guaranteed.",

            hoursLabel: "Service Hours",
            hours: [
                { hari: "Monday – Friday", jam: "08:00 – 17:00 WIB" },
                { hari: "Saturday", jam: "09:00 – 13:00 WIB" },
                { hari: "Sunday & Public Holidays", jam: "Closed" },
            ],
            closed: "Closed",

            waBtn: "Chat on WhatsApp Directly",

            formHeading: "Consultation Form",
            formSubtitle: "Fill in the form below and we will contact you within 24 hours.",
            formName: "Full Name *",
            formPhone: "Phone / WhatsApp",
            formEmail: "Email",
            formSubject: "Type of Legal Issue",
            formMessage: "Tell Us Your Case *",
            formPlaceholderName: "Your Name",
            formPlaceholderPhone: "08xx-xxxx-xxxx",
            formPlaceholderEmail: "email@yourdomain.com",
            formPlaceholderMessage: "Briefly describe the legal situation you are facing...",
            formSelectDefault: "— Select Category —",
            formCategories: [
                "Criminal Case",
                "Civil Case",
                "Family Law (Divorce, Inheritance, etc.)",
                "Labour Law",
                "Agrarian & Land Law",
                "Child & Women Protection",
                "Human Rights & Public Policy",
                "Others",
            ],
            formSubmit: "Send Consultation Request",
            formPrivacy: "By submitting this form, you agree to our Privacy Policy. All information is confidential.",
            formSuccessTitle: "Thank you!",
            formSuccessDesc: "Your consultation request has been received. Our team will get in touch shortly.",
            formSuccessResend: "Send another message →",
            toastError: "Please fill in your name and message.",
            toastSuccess: "Consultation request sent to our WhatsApp.",
            waMessage: "Hello LBH Gardhatara,",
            waName: "Name",
            waEmail: "Email",
            waPhone: "Phone",
            waSubject: "Subject",
            waMessageLabel: "Message",

            mapLabel: "Head Office",

            faqLabel: "FAQ",
            faqHeading: "Frequently Asked Questions.",
            faqSubtitle: "Didn't find the answer you were looking for? Don't hesitate to contact us directly.",
            faqs: [
                {
                    q: "Are LBH Gardhatara's legal aid services paid?",
                    a: "For underprivileged communities, our legal aid services are provided free of charge (pro bono) in accordance with Law No. 16 of 2011 on Legal Aid. You need to attach a Certificate of Indigence (SKTM) from your local sub-district office. For general consultations, please contact us for more information.",
                },
                {
                    q: "Who is entitled to legal aid?",
                    a: "Every member of the public — especially vulnerable groups, the underprivileged, victims of legal injustice, women, children, and other marginalised groups — is entitled to receive legal assistance from us.",
                },
                {
                    q: "How do I submit a legal aid application?",
                    a: "You can contact us via WhatsApp, phone, email, or visit our office directly at Gedung Multika 4th Floor Suite 408, South Jakarta. Our team will verify and assess your case within 1-3 working days.",
                },
                {
                    q: "What areas of law are handled?",
                    a: "We handle criminal, civil, family, labour, agrarian, child and women protection cases, as well as human rights and public policy issues.",
                },
                {
                    q: "Is the initial consultation confidential?",
                    a: "Absolutely. All information you share with our team is protected by advocate professional secrecy and will not be shared with any party without your consent.",
                },
                {
                    q: "Does LBH Gardhatara have branches outside Jakarta?",
                    a: "We are continuously developing our national network. Contact our team for the latest information on branch offices and partners in your city.",
                },
                {
                    q: "How long does case handling take?",
                    a: "Case duration depends heavily on the type and complexity of the matter. Civil or criminal court cases may take several months to over a year. Consultations and mediations can be shorter. Our team will provide a time estimate after the initial assessment.",
                },
                {
                    q: "What documents should I bring for the first consultation?",
                    a: "For the first consultation, bring: (1) ID card or identity document, (2) documents related to the case (contracts, letters, evidence, etc.), (3) a brief written chronology of your situation. For pro bono services, also prepare your SKTM from the sub-district office.",
                },
                {
                    q: "What if I cannot visit the office in person?",
                    a: "We offer consultation via WhatsApp, phone, and video call. Under certain circumstances, we can also visit the client's location. Contact us first to schedule a suitable consultation session.",
                },
                {
                    q: "Does LBH Gardhatara accept donations or volunteers?",
                    a: "Yes, we accept donations from individuals and institutions who wish to support our pro bono legal aid program. We also open internship and volunteer opportunities for law students and practitioners. Please contact us for more information.",
                },
            ],

            contactLabels: {
                Alamat: "Address",
                Telepon: "Phone",
                WhatsApp: "WhatsApp",
                Email: "Email",
            },
        },
    },
};
