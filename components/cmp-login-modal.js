import Image from 'next/image';

export default function ComponentLoginModal({isVisible, setIsVisible}) {
  const submitKrisar = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('submit krisar');
    // const data = {
    //   nama: e.target.nama.value,
    //   email: e.target.email.value,
    //   krisar: e.target.krisar.value,
    // }
    // const res = await fetch('/api/krisar', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // const json = await res.json()
    // if (!res.ok) throw Error(json.message)
    // alert('Terima kasih atas kritik dan saran Anda!')
    setIsVisible(false);
  }

  return (
    <div className={`${isVisible? 'translate-x-0' : 'translate-x-[100vw]'} flex items-center justify-center fixed z-50 w-full h-screen duration-300`}>
      <form className='gap-4 relative flex bg-white rounded-lg p-8 shadow-lg w-2/3 h-3/4 max-h-[90vh] text-center overflow-auto' onSubmit={submitKrisar}>
        <div className='relative w-1/2'>
          <Image src='/images/homepage/img-background-hero.png' objectFit='cover' objectPosition='center' layout='fill' />
        </div>
        <div className='flex flex-col gap-4 w-1/2'>
          <button className='hover:rotate-90 duration-100 p-0 w-6 h-6 self-end sticky top-0'>
            <Image src='/icons/icon-close.svg' width={24} height={24} />
          </button>
          <p className='text-lg'><b>Masuk atau Daftar</b></p>
          <p className='text-xs text-neutral-700'>Silakan masuk atau daftar untuk dapat mengakses semua fitur pada website JDIH.</p>
          <input type='text' placeholder='Email' className='text-sm border border-neutral-300 rounded-md p-2' />
          <input type='text' placeholder='Password' className='text-sm border border-neutral-300 rounded-md p-2' />
          <button className='buttonSecondary'>
            <b>Masuk</b>
          </button>
          <div className='text-xs'>atau</div>
          <button className='buttonTertiary'>
            <b>Lanjutkan dengan Google</b>
          </button>
        </div>
      </form>
    </div>
  )
}
