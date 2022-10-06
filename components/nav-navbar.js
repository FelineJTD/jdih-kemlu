import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Routes } from '../config/cfg-routes';
import ComponentLoginModal from './cmp-login-modal';

export default function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeMobileNav = () => {
    document.getElementById('toggle').style.transform = 'rotate(0)';
    document.getElementById('mobile-nav').style.transform = 'translateY(-100vh)';
    document.getElementById('mobile-nav').style.display = 'hidden';
    setIsMobileNavOpen(false);
  }

  const openMobileNav = () => {
    document.getElementById('toggle').style.transform = 'rotate(180deg)';
    document.getElementById('nav').style.transform = 'translateY(0)';
    document.getElementById('mobile-nav').style.display = 'flex';
    document.getElementById('mobile-nav').style.transform = 'translateY(0)';
    setIsMobileNavOpen(true);
  }

  const toggleMobileNav = () => {
    if (isMobileNavOpen) { // close nav
      closeMobileNav();
    } else { // open nav
      openMobileNav();
    }
  }

  const [lastScrollY, setLastScrollY] = useState(0);

  // hide navbar when scrolled
  useEffect(() => {
    const navbar = document.getElementById('nav');
    const onScroll = () => {
      setLastScrollY(window.scrollY);
      if (!isMobileNavOpen) {
        if (window.scrollY > lastScrollY) { // scroll down
          if (window.scrollY > 40) { // hide navbar
            navbar.style.transform = 'translateY(-5rem)';
            navbar.style.transitionDelay = '0.2s';
          } else { // show navbar
            navbar.style.transform = 'translateY(0)';
            navbar.style.transitionDelay = '0s';
          }
        } else { // scroll up
          navbar.style.transform = 'translateY(0)';
          navbar.style.transitionDelay = '0s';
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [lastScrollY, isMobileNavOpen]);

  return (
    <>
      <ComponentLoginModal isVisible={isLoginModalOpen} setIsVisible={setIsLoginModalOpen} />

      {/* MOBILE NAV */}
      <nav id='mobile-nav' className='w-full bg-primary-700 z-50 fixed top-0 left-0 p-3 duration-300 translate-y-[-100vh] lg:hidden flex flex-col space-y-6 text-left text-white selection:bg-secondary-400 selection:text-primary-500 pt-[60px]'>
        { Routes.map((route, index) => (
          <Link key={index} href={route.href}>
            <a onClick={closeMobileNav}>{route.name}</a>
          </Link>
        ))}
      </nav>

      {/* DESKTOP NAV */}
      <nav id='nav' className='flex items-center justify-between w-full px-6 py-3 bg-primary-700 text-white sticky top-0 z-50 duration-200 selection:bg-secondary-400 selection:text-primary-500 h-[60px]'>
        <div className='relative flex items-center'>
          {/* LOGO */}
          <div className='flex items-center justify-start mr-6'>
            <Image src='/logo-kemlu.png' alt='Logo Kemlu' width={40} height={40}/>
            <Image src='/logo-jdih.png' alt='Logo JDIH' width={40} height={40} />
          </div>

          {/* NAV */}
          <div className='relative h-full items-center space-x-8 hidden md:flex px-6 border-l border-r border-white/50'>
            { Routes.map((route, index) => {
                if (route.children.length > 0) {
                  return (
                    <div key={index} className='relative h-full'>
                      <p className='opacity-0 text-sm relative z-10'>{route.name}</p>
                      <div className='absolute -left-4 -top-2 w-[calc(200%+16px)] min-h-[48px] max-h-0 hover:max-h-fit duration-500 z-40 overflow-hidden flex flex-col'>
                        <Link href={route.href}>
                          <a className='left-0 top-0 mt-[7px] mb-0 mx-4'>
                            <p className='unWhite text-sm'>{route.name}</p>
                          </a>
                        </Link>
                        <div className='flex flex-col space-y-2 pt-8 pb-4 px-4 bg-primary-700 rounded-md'>
                          { route.children.map((child, idx) => {
                              return (
                                <Link key={idx} href={child.href? child.href : (route.href + '/' + child.name)}>
                                  <a><p className='unWhite text-sm'>{child.name}</p></a>
                                </Link>
                              )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <Link href={route.href} key={index}>
                      <a className='font-medium unWhite duration-300'>{route.name}</a>
                    </Link>
                  )
                }
              })}
          </div>

          {/* BAHASA */}
          <div className='relative h-full items-center space-x-2 pl-6 hidden md:flex z-40'>
            <button className='enabled:hover:text-secondary-300'>ID</button>
            <button className='enabled:hover:text-secondary-300'>EN</button>
          </div>
        </div>

        <div className='flex'>
          <button className='unWhite' onClick={() => setIsLoginModalOpen(true)}>
            Masuk
          </button>
          <button className='buttonSecondary ml-3'>
            Pencarian
          </button>
          <img src='/navbar/ic-arrow-left.svg' alt='Navbar menu button' id='toggle' onClick={toggleMobileNav} className='lg:hidden ml-3 relative cursor-pointer duration-300' />
        </div>
      </nav>
    </>
  )
}
