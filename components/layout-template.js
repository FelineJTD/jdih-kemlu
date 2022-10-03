import Image from 'next/image';
import Link from 'next/link';

export default function Template({title, subtitle, img, alt, paths, children}) {
  return (
    <>
      <div className='fixed w-full h-60'>
        <Image src={img} alt={alt} layout='fill' objectFit='cover' objectPosition='center' />
      </div>
      <div>
        <section className='flex flex-col justify-center defaultPaddingX w-full pt-8 h-60 relative z-10 text-white bg-gradient-to-b from-primary-700/70 to-primary-700/40'>
          <h1 className='mb-2'>{title}</h1>
          <h2 className='text-xl mb-10'>{subtitle}</h2>
          <nav className='flex space-x-3'>
            <Link href='/'>
              <a className='hover:text-secondary-300 duration-100'><b>Beranda</b></a>
            </Link>
            {
              paths.map((path, index) => {
                return (
                  <>
                    <span key={index} className='text-sm'>&gt;</span>
                    <Link key={index} href={`/${path.link}`}>
                      <a className='hover:text-secondary-300 duration-100 capitalize'>{path.name}</a>
                    </Link>
                  </>
                )
              })
            }
          </nav>
        </section>
        <section className='min-h-screen defaultPadding relative z-10 bg-white'>
          {children}
        </section>
      </div>
    </>
  );
};