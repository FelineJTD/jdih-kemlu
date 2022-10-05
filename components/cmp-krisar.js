import { useState, useEffect } from 'react'

export default function ComponentKrisar() {
  const [showKrisarButton, setShowKrisarButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight*2/3) {
        setShowKrisarButton(true);
      } else {
        setShowKrisarButton(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);
  
  return (
    <>
      {/* KRISAR BUTTON */}
      <button className={`${showKrisarButton? 'opacity-100' : 'opacity-0'} flex fixed bg-secondary-300 top-[50vh] right-0 z-40 text-gray-900 p-2 duration-300 rotate-90 origin-top-right rounded-b-sm`}>
        <p className='un hover:decoration-neutral-900 mr-2'><b>Kritik dan Saran</b></p>
        <p>★</p>
      </button>
    </>
  )
}
