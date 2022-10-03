export const Routes = [
  { name: 'Beranda', href: '/', children: [] },
  { name: 'Dokumen Hukum', href: 'dokumen', children: [
    { name: 'UUD 1945' },
    { name: 'UU/Perppu' },
    { name: 'Peraturan Pemerintah (PP)' },
    { name: 'Peraturan Presiden (Perpres)' },
    { name: 'Keputusan Presiden (Keppres)' },
    { name: 'Permenlu' },
    { name: 'Kepmenlu' },
    { name: 'MoU' },
    { name: 'PKS' },
    { name: 'Putusan MA/MK' },
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