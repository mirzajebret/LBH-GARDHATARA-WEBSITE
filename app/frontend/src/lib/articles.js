/**
 * articles.js — Sumber data terpusat untuk semua artikel LBH Gardhatara.
 *
 * CARA MENAMBAH ARTIKEL BARU:
 *   1. Tambahkan objek baru ke array ARTICLES di bawah.
 *   2. Pastikan `slug` unik (digunakan sebagai URL: /artikel/[slug]).
 *   3. Field `content` mendukung HTML sederhana untuk formatting.
 *
 * PENGEMBANGAN MASA DEPAN:
 *   - Untuk menggunakan API/CMS, cukup ganti fungsi-fungsi helper di bawah
 *     dengan fetch ke endpoint Anda. Komponen tidak perlu diubah.
 */

// ─── KATEGORI ─────────────────────────────────────────────────────────────────
export const ARTICLE_CATEGORIES = [
    "Semua",
    "Artikel Hukum",
    "Berita & Kegiatan",
    "Kajian Kebijakan",
    "Siaran Pers",
];

// ─── DATA ARTIKEL ──────────────────────────────────────────────────────────────
// Urutan: terbaru di atas (descending by date)
const ARTICLES = [
    {
        id: 1,
        slug: "pentingnya-bantuan-hukum-pro-bono",
        category: "Berita & Kegiatan",
        date: "12 Nov 2025",
        dateISO: "2025-11-12",
        title: "Pentingnya Bantuan Hukum Pro Bono: Bergabung Dalam Gerakan Pro Bono",
        excerpt:
            "Pendampingan hukum pro bono bukan sekadar praktik hukum, tetapi juga wujud nyata dari komitmen terhadap keadilan sosial dan hak asasi manusia.",
        img: "images/pro-bono2.webp",
        author: "Tim Redaksi LBH Gardhatara",
        readTime: "5 menit",
        tags: ["pro bono", "keadilan sosial", "bantuan hukum"],
        featured: true,
        content: `
<p>Pendampingan hukum pro bono bukan sekadar praktik hukum, tetapi juga wujud nyata dari komitmen terhadap keadilan sosial dan hak asasi manusia. Di LBH Gardhatara, kami percaya bahwa setiap orang berhak mendapatkan akses terhadap keadilan, terlepas dari latar belakang ekonomi atau status sosial mereka.</p>

<h2>Apa Itu Pro Bono?</h2>
<p>Istilah <em>pro bono</em> berasal dari frasa Latin <em>pro bono publico</em>, yang berarti "untuk kebaikan publik." Dalam konteks hukum, pro bono merujuk pada layanan hukum yang diberikan secara gratis atau dengan biaya minimal kepada mereka yang tidak mampu membayar jasa pengacara.</p>

<p>Di Indonesia, hak atas bantuan hukum dijamin oleh Undang-Undang Nomor 16 Tahun 2011 tentang Bantuan Hukum. Namun, implementasinya masih jauh dari ideal. Banyak masyarakat, terutama di daerah terpencil, belum mengetahui hak-hak mereka atau cara mengaksesnya.</p>

<h2>Mengapa Pro Bono Penting?</h2>
<p>Sistem peradilan yang adil bergantung pada akses yang setara bagi semua pihak. Ketika seseorang tidak memiliki representasi hukum yang layak, mereka berisiko mengalami:</p>
<ul>
    <li>Ketidakadilan dalam proses persidangan</li>
    <li>Hukuman yang tidak proporsional</li>
    <li>Pelanggaran hak-hak dasar mereka sebagai tersangka atau terdakwa</li>
    <li>Ketidakmampuan untuk memperjuangkan hak-hak sipil dan sosial mereka</li>
</ul>

<h2>Program Pro Bono LBH Gardhatara</h2>
<p>Program ini dirancang untuk memperkuat jejaring para advokat yang peduli, memastikan bahwa suara mereka yang paling rentan dapat didengar dan diperjuangkan di ruang sidang. Sejak berdiri, LBH Gardhatara telah mendampingi lebih dari 500 kasus secara pro bono.</p>

<p>Kami bekerja sama dengan:</p>
<ul>
    <li><strong>Fakultas Hukum</strong> di berbagai universitas untuk program magang dan klinik hukum</li>
    <li><strong>Serikat pekerja</strong> dan organisasi buruh</li>
    <li><strong>Lembaga swadaya masyarakat</strong> yang bergerak di bidang perlindungan HAM</li>
    <li><strong>Pemerintah daerah</strong> melalui pos bantuan hukum</li>
</ul>

<h2>Bagaimana Bergabung?</h2>
<p>Jika Anda adalah advokat, paralegal, atau mahasiswa hukum yang ingin berkontribusi dalam gerakan pro bono, kami membuka pendaftaran relawan setiap kuartal. Hubungi kami melalui halaman kontak atau langsung ke kantor kami di Jakarta Selatan.</p>

<p>Bersama, kita dapat memastikan bahwa keadilan bukan hanya milik mereka yang mampu membayar.</p>
        `,
    },
    {
        id: 2,
        slug: "bantuan-hukum-adalah-hak-kita",
        category: "Artikel Hukum",
        date: "05 Nov 2025",
        dateISO: "2025-11-05",
        title: "Bantuan Hukum adalah Hak Kita",
        excerpt:
            "Bantuan hukum merupakan hak fundamental bagi setiap warga negara yang menghadapi persoalan hukum, terutama bagi mereka yang memiliki keterbatasan ekonomi.",
        img: "images/bantuan-hukum.webp",
        author: "Tim Redaksi LBH Gardhatara",
        readTime: "4 menit",
        tags: ["hak hukum", "UU Bantuan Hukum", "akses keadilan"],
        featured: true,
        content: `
<p>Bantuan hukum merupakan hak fundamental bagi setiap warga negara yang menghadapi persoalan hukum, terutama bagi mereka yang memiliki keterbatasan ekonomi. Di LBH Gardhatara, kami memastikan bahwa hak ini terpenuhi melalui layanan pendampingan hukum pro bono yang berkualitas dan berkeadilan.</p>

<h2>Dasar Hukum</h2>
<p>Hak atas bantuan hukum di Indonesia dijamin oleh beberapa regulasi:</p>
<ul>
    <li><strong>UUD 1945 Pasal 28D ayat (1)</strong> — Setiap orang berhak atas pengakuan, jaminan, perlindungan, dan kepastian hukum yang adil.</li>
    <li><strong>UU No. 16 Tahun 2011</strong> tentang Bantuan Hukum — Mengatur mekanisme pemberian bantuan hukum gratis bagi masyarakat tidak mampu.</li>
    <li><strong>KUHAP Pasal 56</strong> — Wajib didampingi penasihat hukum dalam perkara pidana yang ancaman hukumannya 5 tahun ke atas.</li>
</ul>

<h2>Siapa yang Berhak Mendapat Bantuan Hukum?</h2>
<p>Berdasarkan UU No. 16 Tahun 2011, penerima bantuan hukum adalah orang atau kelompok orang miskin yang tidak dapat memenuhi hak dasar secara layak dan mandiri. Kriteria ini mencakup:</p>
<ul>
    <li>Memiliki Kartu Tanda Penduduk (KTP)</li>
    <li>Surat Keterangan Tidak Mampu (SKTM) dari kelurahan/desa</li>
    <li>Kartu Keluarga Sejahtera (KKS), Kartu Indonesia Pintar (KIP), atau dokumen sejenis</li>
</ul>

<h2>Layanan yang Tersedia</h2>
<p>LBH Gardhatara menyediakan berbagai layanan bantuan hukum, meliputi:</p>
<ul>
    <li>Konsultasi hukum gratis setiap hari kerja</li>
    <li>Pendampingan dalam perkara pidana, perdata, dan tata usaha negara</li>
    <li>Mediasi dan penyelesaian sengketa alternatif</li>
    <li>Penyuluhan hukum di komunitas</li>
    <li>Advokasi kebijakan dan litigasi strategis</li>
</ul>

<h2>Cara Mengakses Layanan</h2>
<p>Datang langsung ke kantor kami di Gedung Multika Lantai 4 Suites 408, Jl. Mampang Prapatan Raya Kav. 71–73, Jakarta Selatan. Bawa dokumen identitas dan surat keterangan tidak mampu (jika ada). Tim kami akan melakukan asesmen awal untuk menentukan langkah selanjutnya.</p>

<p>Anda juga dapat menghubungi kami melalui WhatsApp atau mengisi formulir kontak di website ini. Tidak ada biaya yang dikenakan untuk konsultasi awal.</p>
        `,
    },
    {
        id: 3,
        slug: "telaah-kritis-ruu-perlindungan-pekerja-informal",
        category: "Kajian Kebijakan",
        date: "28 Okt 2025",
        dateISO: "2025-10-28",
        title: "Telaah Kritis atas RUU Perlindungan Pekerja Sektor Informal",
        excerpt:
            "Analisis mendalam mengenai implikasi RUU terhadap jutaan pekerja informal di Indonesia.",
        img: "images/ruu.webp",
        author: "Divisi Kajian Kebijakan",
        readTime: "8 menit",
        tags: ["pekerja informal", "RUU", "kebijakan hukum", "ketenagakerjaan"],
        featured: false,
        content: `
<p>Analisis mendalam mengenai implikasi RUU terhadap jutaan pekerja informal di Indonesia. LBH Gardhatara menyampaikan sejumlah catatan dan rekomendasi perbaikan kepada DPR RI.</p>

<h2>Latar Belakang</h2>
<p>Sektor informal menyerap lebih dari 57% tenaga kerja Indonesia — sekitar 80 juta orang. Mereka bekerja tanpa jaminan sosial yang memadai, kontrak kerja yang jelas, atau perlindungan hukum dari eksploitasi. RUU Perlindungan Pekerja Sektor Informal menjanjikan perubahan signifikan, namun isinya perlu ditelaah secara kritis.</p>

<h2>Poin Positif RUU</h2>
<ul>
    <li>Mengakui pekerja informal sebagai subjek hukum yang dilindungi negara</li>
    <li>Mewajibkan kepesertaan BPJS Ketenagakerjaan bagi pekerja informal</li>
    <li>Membentuk mekanisme pengaduan yang lebih mudah diakses</li>
    <li>Mengatur upah minimum sektoral untuk beberapa jenis pekerjaan informal</li>
</ul>

<h2>Catatan Kritis LBH Gardhatara</h2>
<p>Meski menjanjikan, RUU ini memiliki beberapa kelemahan mendasar yang perlu diperbaiki:</p>

<h3>1. Definisi Pekerja Informal Terlalu Sempit</h3>
<p>Pasal 1 mendefinisikan pekerja informal secara terbatas, sehingga banyak kategori seperti ojek online, pekerja rumah tangga, dan pedagang kaki lima tidak tercakup secara eksplisit. Definisi harus diperluas dan inklusif.</p>

<h3>2. Mekanisme Penegakan Lemah</h3>
<p>RUU tidak secara tegas mengatur sanksi bagi majikan atau pemberi kerja yang tidak memberikan hak-hak pekerja informal. Tanpa mekanisme penegakan yang kuat, aturan ini berisiko menjadi "macan kertas."</p>

<h3>3. Beban Administratif pada Pekerja</h3>
<p>Beberapa pasal mewajibkan pekerja informal untuk mendaftarkan diri secara mandiri ke berbagai instansi, yang menciptakan beban administratif yang tidak proporsional bagi kelompok yang sudah rentan.</p>

<h2>Rekomendasi</h2>
<p>LBH Gardhatara merekomendasikan kepada DPR RI untuk:</p>
<ol>
    <li>Memperluas definisi pekerja informal agar mencakup semua kategori tenaga kerja non-formal</li>
    <li>Memperkuat mekanisme pengawasan dan penegakan dengan sanksi yang jelas</li>
    <li>Menyederhanakan prosedur pendaftaran dengan menerapkan sistem pendaftaran aktif (active enrolment) oleh pemerintah</li>
    <li>Melibatkan representasi pekerja informal dalam proses penyusunan regulasi pelaksana</li>
</ol>

<p>LBH Gardhatara terbuka untuk berdialog lebih lanjut dengan DPR RI dan pemerintah terkait kajian ini.</p>
        `,
    },
    {
        id: 4,
        slug: "hak-sewa-vs-hak-milik-panduan-hukum-penyewa",
        category: "Artikel Hukum",
        date: "15 Okt 2025",
        dateISO: "2025-10-15",
        title: "Hak Sewa vs Hak Milik: Panduan Hukum untuk Penyewa Properti",
        excerpt:
            "Banyak penyewa tidak mengetahui hak-hak mereka ketika menghadapi konflik dengan pemilik properti. Artikel ini menjelaskan perbedaan dan langkah hukum yang tersedia.",
        img: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        author: "Tim Advokat LBH Gardhatara",
        readTime: "6 menit",
        tags: ["hak sewa", "properti", "penyewa", "hukum perdata"],
        featured: false,
        content: `
<p>Banyak penyewa tidak mengetahui hak-hak mereka ketika menghadapi konflik dengan pemilik properti. Artikel ini menjelaskan perbedaan hak sewa dan hak milik serta langkah hukum yang tersedia.</p>

<h2>Hak Milik vs Hak Sewa: Apa Perbedaannya?</h2>
<p><strong>Hak Milik</strong> adalah hak terkuat atas suatu properti. Pemilik dapat menggunakan, mengalihkan, mewariskan, dan membebani properti dengan hak tanggungan. Hak milik diatur dalam UU No. 5 Tahun 1960 (UUPA).</p>

<p><strong>Hak Sewa</strong> adalah hak seseorang untuk menggunakan properti milik orang lain dengan membayar sejumlah uang sewa. Hubungan sewa-menyewa diatur dalam KUH Perdata Pasal 1548 hingga 1600.</p>

<h2>Hak-Hak Penyewa yang Sering Diabaikan</h2>
<ul>
    <li><strong>Hak atas ketenangan menikmati</strong> — Pemilik tidak boleh mengganggu atau mengusir penyewa selama masa sewa berlaku tanpa alasan hukum yang sah</li>
    <li><strong>Hak atas pemeliharaan</strong> — Pemilik wajib menanggung perbaikan besar yang diperlukan agar properti layak huni</li>
    <li><strong>Hak atas pemberitahuan</strong> — Jika pemilik ingin mengakhiri sewa, harus memberikan pemberitahuan yang wajar</li>
    <li><strong>Hak atas pengembalian deposit</strong> — Deposit harus dikembalikan setelah masa sewa berakhir, kecuali ada kerusakan yang dapat dipertanggungjawabkan</li>
</ul>

<h2>Apa yang Harus Dilakukan Jika Terjadi Sengketa?</h2>
<ol>
    <li><strong>Dokumentasi</strong> — Kumpulkan semua bukti: perjanjian sewa, kuitansi pembayaran, foto kondisi properti, dan korespondensi dengan pemilik</li>
    <li><strong>Negosiasi</strong> — Coba selesaikan secara musyawarah terlebih dahulu</li>
    <li><strong>Mediasi</strong> — Libatkan pihak ketiga yang netral</li>
    <li><strong>Jalur Hukum</strong> — Jika gagal, ajukan gugatan ke Pengadilan Negeri setempat</li>
</ol>

<p>LBH Gardhatara siap membantu penyewa yang menghadapi sengketa properti. Konsultasi pertama gratis.</p>
        `,
    },
    {
        id: 5,
        slug: "pernyataan-sikap-revisi-uu-tni",
        category: "Siaran Pers",
        date: "20 Sep 2025",
        dateISO: "2025-09-20",
        title: "Pernyataan Sikap: LBH Gardhatara terhadap Revisi UU TNI",
        excerpt:
            "LBH Gardhatara menyampaikan pernyataan sikap resmi mengenai potensi dampak revisi UU TNI terhadap supremasi hukum sipil dan perlindungan HAM.",
        img: "https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        author: "Dewan Pimpinan LBH Gardhatara",
        readTime: "3 menit",
        tags: ["UU TNI", "militerisasi", "HAM", "siaran pers"],
        featured: false,
        content: `
<p>LBH Garuda Dharma Nusantara menyampaikan pernyataan sikap resmi mengenai potensi dampak revisi UU TNI terhadap supremasi hukum sipil dan perlindungan hak asasi manusia.</p>

<h2>Pernyataan Sikap Resmi</h2>
<p>Jakarta, 20 September 2025 — Lembaga Bantuan Hukum Garuda Dharma Nusantara (LBH Gardhatara) menyatakan keprihatinan mendalam atas sejumlah substansi dalam Revisi Undang-Undang TNI yang tengah dibahas di Dewan Perwakilan Rakyat.</p>

<h2>Poin-Poin Keberatan</h2>
<ol>
    <li><strong>Perluasan Jabatan Sipil untuk Perwira Aktif TNI</strong> — Revisi yang memungkinkan perwira aktif menduduki jabatan di kementerian dan lembaga sipil dapat mengaburkan batas antara institusi militer dan sipil, yang merupakan pilar penting demokrasi.</li>
    <li><strong>Pelemahan Kontrol Sipil</strong> — Beberapa pasal yang diusulkan berpotensi melemahkan mekanisme pengawasan sipil atas institusi militer, yang bertentangan dengan prinsip negara demokratis.</li>
    <li><strong>Dampak terhadap Kebebasan Sipil</strong> — Kami khawatir revisi ini dapat membuka ruang bagi penggunaan instrumen militer dalam persoalan yang seharusnya diselesaikan melalui mekanisme hukum sipil.</li>
</ol>

<h2>Desakan LBH Gardhatara</h2>
<p>LBH Gardhatara mendesak DPR RI dan Pemerintah untuk:</p>
<ul>
    <li>Menunda pembahasan revisi hingga ada konsultasi publik yang bermakna</li>
    <li>Melibatkan masyarakat sipil, akademisi, dan organisasi HAM dalam proses penyusunan</li>
    <li>Memastikan bahwa setiap perubahan tidak melemahkan supremasi hukum sipil dan jaminan HAM</li>
</ul>

<p>LBH Gardhatara akan terus memantau perkembangan dan siap memberikan pendampingan hukum bagi siapa pun yang terdampak kebijakan ini.</p>

<p><em>Jakarta, 20 September 2025</em><br/><strong>Dewan Pimpinan LBH Garuda Dharma Nusantara</strong></p>
        `,
    },
    {
        id: 6,
        slug: "laporan-kriminalisasi-aktivis-2025",
        category: "Kajian Kebijakan",
        date: "10 Sep 2025",
        dateISO: "2025-09-10",
        title: "Laporan Situasi HAM: Kasus-kasus Kriminalisasi Aktivis 2025",
        excerpt:
            "LBH Gardhatara merilis laporan pemantauan kasus-kasus kriminalisasi aktivis dan pembela HAM sepanjang semester pertama 2025.",
        img: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        author: "Divisi Pemantauan HAM",
        readTime: "10 menit",
        tags: ["HAM", "kriminalisasi", "aktivis", "laporan tahunan"],
        featured: false,
        content: `
<p>LBH Gardhatara merilis laporan pemantauan kasus-kasus kriminalisasi aktivis dan pembela HAM sepanjang semester pertama 2025, beserta analisis pola dan rekomendasi kebijakan.</p>

<h2>Ringkasan Eksekutif</h2>
<p>Selama Januari hingga Juni 2025, LBH Gardhatara mencatat <strong>47 kasus kriminalisasi</strong> yang dialami oleh aktivis, jurnalis, dan pembela hak asasi manusia di Indonesia. Angka ini meningkat 23% dibandingkan periode yang sama tahun lalu.</p>

<h2>Pola yang Teridentifikasi</h2>
<h3>1. Penggunaan UU ITE sebagai Senjata</h3>
<p>Sebanyak 31 dari 47 kasus (66%) menggunakan pasal-pasal dalam UU ITE, khususnya Pasal 27 ayat (3) tentang pencemaran nama baik dan Pasal 28 ayat (2) tentang ujaran kebencian. Pasal-pasal ini sering digunakan oleh pihak yang berkuasa untuk membungkam kritik yang sah.</p>

<h3>2. Target Utama</h3>
<ul>
    <li>Aktivis lingkungan yang menolak proyek tambang dan reklamasi: 15 kasus</li>
    <li>Jurnalis yang meliput isu korupsi: 12 kasus</li>
    <li>Mahasiswa yang melakukan demonstrasi damai: 11 kasus</li>
    <li>Pembela hak buruh: 9 kasus</li>
</ul>

<h3>3. Durasi Penahanan Pra-Persidangan</h3>
<p>Rata-rata durasi penahanan sebelum persidangan adalah 47 hari, jauh melampaui batas yang wajar. Ini digunakan sebagai alat tekan untuk membuat terdakwa menarik pernyataan atau berhenti beraktivitas.</p>

<h2>Rekomendasi Kebijakan</h2>
<ol>
    <li>Revisi UU ITE dengan menghapus pasal-pasal yang multitafsir dan berpotensi menjadi alat kriminalisasi</li>
    <li>Memperkuat perlindungan hukum bagi pembela HAM sejalan dengan Deklarasi PBB tentang Pembela HAM</li>
    <li>Mendorong Mahkamah Agung menerbitkan surat edaran yang mewajibkan hakim mempertimbangkan konteks kebebasan berekspresi dalam kasus UU ITE</li>
</ol>

<p>Laporan lengkap dapat diunduh melalui halaman kontak kami.</p>
        `,
    },
    {
        id: 7,
        slug: "mengenal-kdrt-hukum-hak-perlindungan",
        category: "Artikel Hukum",
        date: "02 Sep 2025",
        dateISO: "2025-09-02",
        title: "Mengenal KDRT: Hukum, Hak, dan Langkah Perlindungan",
        excerpt:
            "Kekerasan Dalam Rumah Tangga (KDRT) masih menjadi masalah serius di Indonesia. Artikel ini menjelaskan hukum, hak korban, dan cara melaporkan kasus.",
        img: "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        author: "Tim Advokat LBH Gardhatara",
        readTime: "7 menit",
        tags: ["KDRT", "kekerasan gender", "hak korban", "perlindungan perempuan"],
        featured: false,
        content: `
<p>Kekerasan Dalam Rumah Tangga (KDRT) masih menjadi masalah serius di Indonesia. Artikel ini menjelaskan definisi KDRT menurut hukum, hak-hak korban, dan cara melaporkan kasus.</p>

<h2>Definisi KDRT Menurut Hukum</h2>
<p>Berdasarkan UU No. 23 Tahun 2004 tentang Penghapusan Kekerasan Dalam Rumah Tangga (UU PKDRT), KDRT didefinisikan sebagai setiap perbuatan terhadap seseorang terutama perempuan, yang berakibat timbulnya kesengsaraan atau penderitaan secara fisik, seksual, psikologis, dan/atau penelantaran rumah tangga.</p>

<h2>Bentuk-Bentuk KDRT</h2>
<ul>
    <li><strong>Kekerasan Fisik</strong> — Pemukulan, tendangan, atau tindakan fisik yang menyebabkan rasa sakit atau luka</li>
    <li><strong>Kekerasan Psikis</strong> — Ancaman, intimidasi, penghinaan yang menyebabkan ketakutan atau trauma</li>
    <li><strong>Kekerasan Seksual</strong> — Pemaksaan hubungan seksual tanpa persetujuan dalam lingkup rumah tangga</li>
    <li><strong>Penelantaran Rumah Tangga</strong> — Mengabaikan kewajiban ekonomi untuk menghidupi anggota rumah tangga</li>
</ul>

<h2>Hak-Hak Korban KDRT</h2>
<ul>
    <li>Perlindungan dari pihak keluarga, kepolisian, kejaksaan, pengadilan, advokat, atau pihak lainnya</li>
    <li>Pelayanan kesehatan sesuai dengan kebutuhan medis</li>
    <li>Penanganan secara khusus berkaitan dengan kerahasiaan korban</li>
    <li>Pendampingan oleh pekerja sosial dan bantuan hukum</li>
    <li>Pelayanan bimbingan rohani</li>
</ul>

<h2>Langkah-Langkah yang Dapat Diambil Korban</h2>
<ol>
    <li><strong>Cari tempat aman</strong> — Pergi ke tempat aman bersama anak-anak jika memungkinkan</li>
    <li><strong>Dokumentasikan kekerasan</strong> — Foto luka, simpan bukti pesan ancaman</li>
    <li><strong>Laporkan ke polisi</strong> — Buat laporan ke Polres atau Polsek terdekat. Kasus KDRT dapat dilaporkan 24 jam</li>
    <li><strong>Hubungi Komnas Perempuan</strong> — Hotline 021-3903963</li>
    <li><strong>Hubungi LBH Gardhatara</strong> — Kami menyediakan pendampingan hukum gratis bagi korban KDRT</li>
</ol>

<h2>Sanksi Pelaku KDRT</h2>
<p>Sanksi pidana bagi pelaku KDRT cukup berat. Kekerasan fisik dapat dipidana penjara maksimal 5 tahun atau denda Rp 15 juta. Untuk kekerasan yang mengakibatkan korban jatuh sakit berat atau cacat, ancaman hukumannya 10 tahun penjara.</p>

<p>Ingat: KDRT bukan aib yang harus ditutupi. Ini adalah kejahatan. Anda berhak atas perlindungan hukum.</p>
        `,
    },
    {
        id: 8,
        slug: "galeri-workshop-hak-buruh-jakarta",
        category: "Berita & Kegiatan",
        date: "25 Agu 2025",
        dateISO: "2025-08-25",
        title: "Galeri: Workshop Hak Buruh bersama Serikat Pekerja Jakarta",
        excerpt:
            "Dokumentasi kegiatan workshop hak-hak buruh yang diselenggarakan LBH Gardhatara bekerja sama dengan enam serikat pekerja di wilayah Jakarta.",
        img: "https://images.pexels.com/photos/5668868/pexels-photo-5668868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        author: "Tim Redaksi LBH Gardhatara",
        readTime: "3 menit",
        tags: ["buruh", "serikat pekerja", "workshop", "hak ketenagakerjaan"],
        featured: false,
        content: `
<p>Dokumentasi kegiatan workshop hak-hak buruh yang diselenggarakan LBH Gardhatara bekerja sama dengan enam serikat pekerja di wilayah Jakarta dan sekitarnya.</p>

<h2>Tentang Kegiatan</h2>
<p>Pada 25 Agustus 2025, LBH Gardhatara menyelenggarakan workshop intensif selama satu hari penuh bertajuk "Kenali Hakmu: Panduan Praktis Hak Buruh Indonesia." Kegiatan ini dihadiri oleh lebih dari 200 peserta dari berbagai serikat pekerja di Jakarta, Bekasi, Tangerang, dan Bogor.</p>

<h2>Materi yang Disampaikan</h2>
<ul>
    <li><strong>Sesi 1</strong> — Hak Upah dan Tunjangan: UMK, lembur, THR</li>
    <li><strong>Sesi 2</strong> — Perlindungan dari PHK Sepihak: prosedur dan mekanisme pembelaan</li>
    <li><strong>Sesi 3</strong> — BPJS Ketenagakerjaan dan Kesehatan: cara klaim dan hak peserta</li>
    <li><strong>Sesi 4</strong> — Keselamatan dan Kesehatan Kerja (K3): kewajiban pengusaha</li>
    <li><strong>Sesi 5</strong> — Simulasi Negosiasi: bagaimana menghadapi mediasi ketenagakerjaan</li>
</ul>

<h2>Pembicara</h2>
<p>Workshop ini menghadirkan advokat-advokat berpengalaman dari LBH Gardhatara, serta narasumber dari Dinas Ketenagakerjaan DKI Jakarta dan Federasi Serikat Pekerja Metal Indonesia (FSPMI).</p>

<h2>Dampak dan Tindak Lanjut</h2>
<p>Pasca-workshop, LBH Gardhatara membuka klinik hukum bulanan khusus ketenagakerjaan setiap Sabtu di kantor kami. Peserta yang menemukan kasus-kasus spesifik dapat berkonsultasi secara gratis dengan tim advokat kami.</p>

<p>Untuk informasi kegiatan mendatang, ikuti media sosial LBH Gardhatara atau daftarkan email Anda melalui formulir di website ini.</p>
        `,
    },
];

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────────
// Fungsi-fungsi ini dapat diganti dengan fetch ke API/CMS di masa depan

/** Ambil semua artikel (sudah terurut dari terbaru) */
export const getAllArticles = () => ARTICLES;

/** Ambil artikel berdasarkan slug unik */
export const getArticleBySlug = (slug) =>
    ARTICLES.find((a) => a.slug === slug) ?? null;

/** Ambil artikel berdasarkan kategori */
export const getArticlesByCategory = (category) => {
    if (!category || category === "Semua") return ARTICLES;
    return ARTICLES.filter((a) => a.category === category);
};

/** Ambil artikel featured (untuk homepage preview) */
export const getFeaturedArticles = (limit = 3) =>
    ARTICLES.filter((a) => a.featured).slice(0, limit);

/** Ambil artikel terbaru tanpa filter */
export const getRecentArticles = (limit = 3) => ARTICLES.slice(0, limit);

/** Ambil artikel terkait (sama kategori, exclude artikel saat ini) */
export const getRelatedArticles = (currentSlug, limit = 3) => {
    const current = getArticleBySlug(currentSlug);
    if (!current) return [];
    return ARTICLES.filter(
        (a) => a.slug !== currentSlug && a.category === current.category
    ).slice(0, limit);
};

/** Ambil artikel sebelum dan sesudah (navigasi prev/next) */
export const getAdjacentArticles = (currentSlug) => {
    const index = ARTICLES.findIndex((a) => a.slug === currentSlug);
    return {
        prev: index > 0 ? ARTICLES[index - 1] : null,
        next: index < ARTICLES.length - 1 ? ARTICLES[index + 1] : null,
    };
};
