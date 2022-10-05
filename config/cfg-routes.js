export const Routes = [
  { name: 'Beranda', href: '/', children: [] },
  { name: 'Dokumen Hukum', href: '/dokumen', children: [
    { name: 'UUD 1945', href: '/dokumen/uud-1945' },
    { name: 'UU/Perppu', href: '/dokumen/uu-perppu' },
    { name: 'Peraturan Pemerintah (PP)', href: '/dokumen/pp' },
    { name: 'Peraturan Presiden (Perpres)', href: '/dokumen/perpres' },
    { name: 'Keputusan Presiden (Keppres)', href: '/dokumen/keppres' },
    { name: 'Permenlu', href: '/dokumen/permenlu' },
    { name: 'Kepmenlu', href: '/dokumen/kepmenlu' },
    { name: 'MoU', href: '/dokumen/mou' },
    { name: 'PKS', href: '/dokumen/pks' },
    { name: 'Putusan MA/MK', href: '/dokumen/putusan-ma-mk' },
  ] },
  { name: 'Berita Terkini', href: '/berita', children: [
    { name: 'Berita', href: '/berita' },
    { name: 'Foto Kegiatan', href: '/foto' },
    { name: 'Infografis', href: '/infografis' },
  ] },
  { name: 'Tentang Kami', href: '/tentang-kami', children: [
    { name: 'Sejarah JDIH', href: '/tentang-kami/#sejarah' },
    { name: 'Dasar Hukum JDIH', href: '/tentang-kami/#dasar-hukum' },
    { name: 'Visi & Misi JDIH', href: '/tentang-kami/#visi-misi' },
    { name: 'Makna Logo JDIH', href: '/tentang-kami/#makna-logo' },
    { name: 'Struktur Organisasi JDIH', href: '/tentang-kami/#struktur-organisasi' },
  ] },
]

// TODO
export const Links = [
  { name: 'Portal Resmi JDIHN', href: '/' },
  { name: 'Portal Resmi Kemlu RI', href: '/' },
  { name: 'Portal Resmi Anggota JDIH', href: '/' },
  { name: 'peraturan.go.id', href: 'https://peraturan.go.id' },
  { name: 'Ditjen Peraturan Perundang-Undangan', href: '/' },
]