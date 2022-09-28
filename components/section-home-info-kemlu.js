import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Animate from '../components/layout-animate'

export default function SectionInfoKemlu() {
  const [isBerita, setIsBerita] = useState(true);

  const Berita = [
    {
      title: 'FGD Terkait Perubahan UU No 37 tahun 1999 dan UU No 24 tahun 2000',
      img: 'https://picsum.photos/1920/1080',
      alt: '',
      date: 'Kamis, 1 Agustus 2019',
      desc: 'Ide membentuk Jaringan Dokumentasi dan Informasi Hukum Nasional (JDIHN), secara historis melekat erat dengan pembangunan hukum nasional dalam upaya mewujudkan ....',
      href: '/',
    }, {
      title: 'FGD Terkait Perubahan UU No 37 tahun 1999 dan UU No 24 tahun 2000',
      img: 'https://picsum.photos/1920/1080',
      alt: '',
      date: 'Kamis, 7 Juli 2019',
      desc: 'Ide membentuk Jaringan Dokumentasi dan Informasi Hukum Nasional (JDIHN), secara historis melekat erat dengan pembangunan hukum nasional dalam upaya mewujudkan ....',
      href: '/',
    }, {
      title: 'FGD Terkait Perubahan UU No 37 tahun 1999 dan UU No 24 tahun 2000',
      img: 'https://picsum.photos/1920/1080',
      alt: '',
      date: 'Kamis, 4 Juli 2019',
      desc: 'Ide membentuk Jaringan Dokumentasi dan Informasi Hukum Nasional (JDIHN), secara historis melekat erat dengan pembangunan hukum nasional dalam upaya mewujudkan ....',
      href: '/',
    }, {
      title: 'FGD Terkait Perubahan UU No 37 tahun 1999 dan UU No 24 tahun 2000',
      img: 'https://picsum.photos/1920/1080',
      alt: '',
      date: 'Kamis, 3 Juli 2019',
      desc: 'Ide membentuk Jaringan Dokumentasi dan Informasi Hukum Nasional (JDIHN), secara historis melekat erat dengan pembangunan hukum nasional dalam upaya mewujudkan ....',
      href: '/',
    }, {
      title: 'FGD Terkait Perubahan UU No 37 tahun 1999 dan UU No 24 tahun 2000',
      img: 'https://picsum.photos/1920/1080',
      alt: '',
      date: 'Kamis, 1 Juli 2019',
      desc: 'Ide membentuk Jaringan Dokumentasi dan Informasi Hukum Nasional (JDIHN), secara historis melekat erat dengan pembangunan hukum nasional dalam upaya mewujudkan ....',
      href: '/',
    }
  ]

  return (
    <section className='defaultPadding'>
      <Animate before='opacity-0 translate-y-4' after='opacity-100 translate-y-0' className='duration-300'>
        <h2 className='uppercase text-center mb-6'>Informasi Kemlu</h2>
      </Animate>
      <div className='w-full h-[1px] bg-neutral-400 mb-8' />
      <div className='flex gap-8'>
        {/* LEFT */}
        <div className='w-1/4'>
          <h3 className='tag rounded-2xl bg-primary-500 text-white text-sm font-semibold w-fit mb-4 duration-100'>{isBerita? 'Berita Terbaru' : 'Infografis Terbaru'}</h3>
          <Link href={Berita[0].href}><a className='group'>
            <div className='w-full h-fit overflow-hidden rounded-md mb-4'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={Berita[0].img} alt={Berita[0].alt} className='w-full max-h-[600px] object-cover object-center group-hover:scale-110 duration-300' />
            </div>
            <p className='text-neutral-500 mb-2'>{Berita[0].date}</p>
            <h4 className='font-semibold mb-2'>{Berita[0].title}</h4>
            <p className='text-neutral-600 mb-2'>{Berita[0].desc}</p>
          </a></Link>
        </div>
        {/* RIGHT */}
        <div className='w-3/4 bg-white rounded-lg max-h-full'>
          <div className='flex text-primary-500'>
            <button 
              className={`${isBerita? 'unStaticSelected' : 'unStatic enabled:hover:bg-neutral-100'} w-1/2 py-3 pt-3 pb-4 text-base rounded-b-md font-semibold`}  
              onClick={() => setIsBerita(true)}
            >
              Berita
            </button>
            <button 
              className={`${isBerita? 'unStatic enabled:hover:bg-neutral-100' : 'unStaticSelected'} w-1/2 py-3 pt-3 pb-4 text-base rounded-b-md font-semibold`} 
              onClick={() => setIsBerita(false)}
            >
              Infografis
            </button>
          </div>
          <div className='flex flex-col overflow-auto p-6 space-y-4 max-h-[24rem]'>
            { Berita.map((item, index) => {
              if (index === 0) return null
              return (
              <Link href={item.href} key={index}>
                <a className='flex p-4 space-x-4 border border-neutral-400 rounded-md hover:bg-neutral-100 duration-100 min-h-[10rem]'>
                  <div className='relative min-w-full lg:min-w-0 aspect-[3/2] lg:min-h-full flex-shrink-0'>
                    <Image src={item.img} alt={item.alt} layout='fill' objectFit='cover' objectPosition='center' className='rounded-md' />
                  </div>
                  <div className='h-full overflow-hidden'>
                    <p className='text-neutral-500 mb-2 text-xs'>{item.date}</p>
                    <h4 className='font-semibold mb-2 text-base'>{item.title}</h4>
                    <p className='text-neutral-600 mb-2 text-xs'>{item.desc}</p>
                  </div>
                </a>
              </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}