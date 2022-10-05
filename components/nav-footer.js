// DATA
import { Routes, Links } from '../config/cfg-routes';

// COMPONENTS
import Image from 'next/image';
import Link from 'next/link'
import IconTwitter from '../assets/icons/social/icon-twitter';
import IconInstagram from '../assets/icons/social/icon-instagram';
import IconFacebook from '../assets/icons/social/icon-facebook';

export default function Footer() {
  return (
    <footer className='flex flex-col lg:flex-row bg-primary-700 text-white defaultPadding w-full selection:bg-secondary-400 selection:text-primary-500 h-fit relative'>
      <div className='w-full lg:w-3/12'>
        <div className='flex lg:flex-col gap-4'>
          <Image src='/logo-kemlu.png' alt='Logo Kemlu' width={60} height={60} layout='fixed' />
          <h3 className='text-xl md:text-2xl mb-8'>
            <span className='font-medium'>Kementrian Luar Negeri</span><br />
            Republik Indonesia
          </h3>
        </div>
        <address className='w-full md:w-[12rem] mb-16 md:mb-0'>
          <div className='flex space-x-2 lg:flex-col items-start'>
            <Image src='/icons/icon-map.svg' alt='Alamat' width={16} height={16} />
            <a 
              href='https://goo.gl/maps/HaHrxxxT6kNnSRfN6' 
              target='_blank' 
              rel='noopener noreferrer'
              className='unWhite'
            >
              <p className='font-medium my-1'>Jakarta Pusat, Indonesia</p>
              <p className='mb-6'>Jalan Taman Pejambon No. 6</p>
            </a>
          </div>
          <div className='flex space-x-2 lg:flex-col items-start'>
            <Image src='/icons/icon-mail.svg' alt='Kontak' width={16} height={16} />
            <div>
              <a 
                href='mailto:baghukum@kemlu.go.id'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='my-1'><span className='font-medium unWhite'>baghukum@kemlu.go.id</span></p>
              </a>
              <p className='mb-1'>021 - 3441508 ext 5558</p>
              <div className='flex space-x-2'>
                <a
                  href='https://twitter.com/Kemlu_RI'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <IconTwitter className='h-6 w-6 group-hover:fill-secondary-300 duration-100' />
                </a>
                <a
                  href='https://www.instagram.com/kemlu_ri/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <IconInstagram className='h-6 w-6 group-hover:fill-secondary-300 duration-100' />
                </a>
                <a
                  href='https://www.facebook.com/Kemlu.RI/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <IconFacebook className='h-6 w-6 group-hover:fill-secondary-300 duration-100' />
                </a>
              </div>
            </div>
          </div>
          <p className='mt-12 self-end hidden lg:block'>© Hak Cipta Kementerian Luar Negeri RI 2021</p>
        </address>
      </div>

      {/* DIVIDER */}
      <div className='hidden lg:block flex-grow min-h-full mx-auto max-w-[1px] bg-gray-500' />

      <nav className='flex flex-col justify-between lg:w-8/12'>
        <button className='flex items-center bg-gray-300 bg-opacity-20 hover:bg-opacity-50 duration-100 w-fit p-1 rounded-2xl mb-4'>
          <p className='bg-secondary-400 text-gray-900 rounded-xl py-1 px-2 text-sm'>Kritik dan Saran</p>
          <p className='hidden md:block mx-2'>Bantu kami meningkatkan layanan digital Kemlu</p>
          <p className='hidden md:block underline mr-2'>Isi survey</p>
        </button>
        <div className='flex flex-wrap md:flex-nowrap w-full justify-between gap-6'>
          {/* NAVIGATION */}
          { Routes.filter(route => route.children.length > 0).map((route, index) => (
            <div key={index} className='w-[46%] md:w-1/4'>
              <Link href={route.href}>
                <a className='block font-medium mb-4 unWhite'>{route.name}</a>
              </Link>
              <ul>
              { route.children.map((child, index) => (
                <li key={index}>
                  <Link href={child.href? child.href : (route.href + '/' + child.name)}>
                    <a className='pb-2 un hover:decoration-neutral-300 text-neutral-300'>{child.name}</a>
                  </Link>
                </li>
              ))}
              </ul>
            </div>
          ))}
          {/* LINKS */}
          <div className='w-[46%] md:w-1/4'>
            <p className='block font-medium mb-4'>Tautan Lainnya</p>
            <ul>
              { Links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='pb-2 un hover:decoration-neutral-300 text-neutral-300'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <p className='mt-12 lg:hidden'>© Hak Cipta Kementerian Luar Negeri RI 2021</p>
    </footer>
  )
}
