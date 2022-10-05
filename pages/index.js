import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Animate from '../components/layout-animate'
import SectionInfoKemlu from '../components/section-home-info-kemlu'
import ComponentKrisarButton from '../components/cmp-krisar-button'

export default function Home() {
  const string_to_url = (string) => {
    return string.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
  }
  
  const HasilPencarian = ['Permenlu', 'UUD 1945', 'PKS', 'UU / Perppu', 'Perpres']

  const DokumenTerbaru = ['PERMENLU NO 67 Tahun 2021', 'PERMENLU NO 6 Tahun 2021', 'Perjanjian Kerja Sama antara Kemenlu dengan Universitas Indonesia Nomor 13/XII/2021']

  const AksesCepat = [
    {
      name: 'Dokumen Hukum',
      href: '/dokumen',
      icon: '/icons/dokumen.svg',
      desc: 'Lihat dokumen hukum terkini dengan detail dan terperinci.',
      cta: 'Akses',
    }, {
      name: 'Pembentukan Peraturan',
      href: '/pembentukan-peraturan',
      icon: '/icons/pembentukan-peraturan.svg',
      desc: 'Lihat status pembentukan peraturan perundang-undangan.',
      cta: 'Lihat status',
    }, {
      name: 'Infografis',
      href: '/infografis',
      icon: '/icons/infografis.svg',
      desc: 'Informasi dan visualisasi data dalam sajian grafis.',
      cta: 'Akses',
    },
  ]

  const TemaDokumen = [
    {
      name: 'Organisasi & Kelembagaan',
      href: '/dokumen/' + string_to_url('Organisasi & Kelembagaan'),
      icon: '/icons/peraturan-pemerintah.svg',
      count: 5000,
    }, {
      name: 'Keuangan & Perlengkapan',
      href: '/dokumen/' + string_to_url('Keuangan & Perlengkapan'),
      icon: '/icons/peraturan-pemerintah.svg',
      count: 5000,
    }, {
      name: 'Layanan Publik',
      href: '/dokumen/' + string_to_url('Layanan Publik'),
      icon: '/icons/peraturan-pemerintah.svg',
      count: 5000,
    }, {
      name: 'Kepegawaian',
      href: '/dokumen/' + string_to_url('Kepegawaian'),
      icon: '/icons/peraturan-pemerintah.svg',
      count: 5000,
    }
  ]

  const TautanEksternal = [
    {
      name: 'JDIH Nasional',
      href: '/',
      icon: '/icons/icon-flag.svg',
      desc: 'Temukan Dokumen Hukum Nasional di portal ini.',
    }, {
      name: 'JDIHN BPHN',
      href: '/',
      icon: '/icons/icon-flag.svg',
      desc: 'Temukan Dokumen Hukum Nasional di portal ini.',
    }, {
      name: 'Treaty Room',
      href: '/',
      icon: '/icons/icon-briefcase.svg',
      desc: 'Lihat Data Perjanjian Internasional di portal ini.',
    },
  ]

  return (
    <div>
      <Head>
        <title>JDIH Kemlu</title>
        <meta name="description" content="JDIH Kemlu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* KRITIK & SARAN FLOATING COMPONENT */}
        <ComponentKrisarButton />

        {/* MAIN HERO SECTION */}
        <section className='bg-[url("/images/homepage/img-background-hero.png")] lg:h-screen bg-cover bg-center bg-no-repeat relative text-white text-center -mt-[60px]'>
          {/* overlay */}
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-700/90 to-primary-700/40 z-0' aria-hidden />
          {/* content */}
          <div className='defaultPadding h-full w-full flex flex-col items-center justify-center relative'>
            <h1 className='uppercase mb-12'>
              Jaringan Dokumentasi dan Informasi Hukum<br />
              Kementrian Luar Negeri
            </h1>
            <p className='text-neutral-200 mb-2'>Temukan Informasi dan Dokumentasi Hukum Terkini dari Kementrian Luar Negeri</p>
            <form className='relative flex w-full mb-7'>
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <Image src='/icons/icon-search.svg' width={20} height={20} alt='icon search' />
              </span>
              <input 
                type='text'
                placeholder='Ketik kata kunci pencarian'
                className='placeholder:italic placeholder:text-neutral-500 h-full flex-grow rounded-l-md pl-10 py-2 pr-3 text-neutral-900' 
              />
              <button className='flex-grow-0 whitespace-nowrap py-2 px-3 rounded-r-md bg-secondary-300 text-neutral-900 enabled:hover:bg-secondary-500 duration-100'>Cari Dokumen</button>
            </form>
            <p className='font-medium mb-2 text-neutral-100'>Pencarian Populer Dokumen Hukum JDIH</p>
            <div className='flex items-center justify-center gap-4'>
              { HasilPencarian.map((item, index) => (
                <Link href='' key={index}>
                  <a key={index} className='flex gap-4 items-center bg-white hover:bg-neutral-200 duration-100 text-neutral-700 px-4 py-2 rounded-md'>
                    <b>{item}</b>
                    <Image src='/icons/icon-open-in-new-tab.svg' width={16} height={16} alt='icon open' />
                  </a>
                </Link>
              )) }
              <Link href='/dokumen'>
                <a className='underline hover:text-secondary-300 duration-100'>
                  Pencarian Lanjut
                </a>
              </Link>
            </div>

            {/* DOKUMEN CAROUSEL */}
            <div className='absolute bottom-0 flex bg-secondary-400 w-full py-2 text-neutral-700'>
              <button className='whitespace-nowrap buttonWhite mx-2'>Dokumen Terbaru</button>
              <div className='overflow-hidden'>
                <div className='flex w-fit h-full items-center animate-scrollLeft hover:[animation-play-state:paused] justify-around'>
                  <div className='flex justify-around w-1/3'>
                    { DokumenTerbaru.map((dokumen, index) => {
                        return (
                          <Link href={'/dokumen/' + string_to_url(dokumen)} key={index}>
                            <a className='whitespace-nowrap border-r-2 border-black pr-2 mr-2 underline hover:text-primary-500 duration-100'>{dokumen}</a>
                          </Link>
                        )
                      }
                    )}
                  </div>
                  <div className='flex justify-around w-1/3'>
                    { DokumenTerbaru.map((dokumen, index) => {
                        return (
                          <Link href={'/dokumen/' + string_to_url(dokumen)} key={index}>
                            <a className='whitespace-nowrap border-r-2 border-black pr-2 mr-2 underline hover:text-primary-500 duration-100'>{dokumen}</a>
                          </Link>
                        )
                      }
                    )}
                  </div>
                  <div className='flex justify-around w-1/3'>
                    { DokumenTerbaru.map((dokumen, index) => {
                        return (
                          <Link href={'/dokumen/' + string_to_url(dokumen)} key={index}>
                            <a className='whitespace-nowrap border-r-2 border-black pr-2 mr-2 underline hover:text-primary-500 duration-100'>{dokumen}</a>
                          </Link>
                        )
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AKSES CEPAT */}
        <section className='defaultPadding'>
          <Animate before='opacity-0 translate-y-4' after='opacity-100 translate-y-0' className='duration-300'>
            <h2 className='uppercase text-center mb-10'>Akses Cepat</h2>
          </Animate>
          <div className='grid grid-cols-1 md:grid-cols-3 justify-between gap-4'>
            { AksesCepat.map((item, index) => {
                return (
                  <Link href={item.href} key={index}>
                    <a className='flex flex-col justify-between items-start border border-neutral-400 bg-white rounded-md p-4 hover:shadow-md hover:border-primary-400 duration-100'>
                      <div>
                        <Image src={item.icon} alt='' width={36} height={36} />
                        <h3 className='my-1'>{item.name}</h3>
                        <p className='mb-2 text-neutral-700'>{item.desc}</p>
                      </div>
                      <button className='underline hover:text-primary-500 duration-100'><b>{item.cta}</b></button>
                    </a>
                  </Link>
                )
            })}
          </div>
        </section>

        {/* TEMA DOKUMEN */}
        <section className='defaultPadding relative bg-[url("/images/homepage/img-background-hero-tema.png")] bg-cover bg-no-repeat bg-center text-white'>
          {/* overlay */}
          <div className='absolute top-0 left-0 w-full h-full bg-primary-700/75 z-0' aria-hidden />
          {/* content */}
          <Animate before='opacity-0 translate-y-4' after='opacity-100 translate-y-0' className='duration-300 relative z-10'>
            <h2 className='uppercase text-center mb-10'>Tema Dokumen</h2>
          </Animate>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10'>
            { TemaDokumen.map((item, index) => {
                return (
                  <Link href={item.href} key={index}>
                    <a className='flex flex-col items-center border border-neutral-400 rounded-md p-4 text-center hover:drop-shadow-[0_0_8px_rgba(255,206,30,0.7)] hover:border-secondary-400 duration-100'>
                      <Image src={item.icon} alt='' width={36} height={36} />
                      <p className='my-4'>
                        <span className='text-3xl font-semibold'>{item.count}<br /></span>
                        dokumen
                      </p>
                      <h3 className='text-lg font-medium'>{item.name}</h3>
                    </a>
                  </Link>
                )
            })}
          </div>
        </section>

        {/* INFORMASI KEMLU */}
        <SectionInfoKemlu />

        {/* TAUTAN EKSTERNAL */}
        <section className='defaultPadding bg-primary-700 text-white'>
          <Animate before='opacity-0 translate-y-4' after='opacity-100 translate-y-0' className='duration-300'>
            <h2 className='uppercase text-center mb-10'>Tautan Eksternal</h2>
          </Animate>
          <div className='flex flex-col md:flex-row justify-between gap-4'>
            { TautanEksternal.map((item, index) => {
                return (
                  <Link href={item.href} key={index}>
                    <a className='border border-neutral-400 rounded-md p-4 hover:shadow-[0_0_8px_rgba(255,206,30,0.7)] hover:border-secondary-400 duration-100'>
                      <Image src={item.icon} alt='' width={36} height={36} />
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                      <button className='buttonPrimary'>Kunjungi</button>
                    </a>
                  </Link>
                )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
