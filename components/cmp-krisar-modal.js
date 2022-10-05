import Image from 'next/image';

export default function ComponentKrisarModal({isVisible, setIsVisible}) {
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
      <form className='relative flex flex-col gap-4 bg-white rounded-lg p-8 shadow-lg w-1/2 h-1/2 max-h-[90vh] text-center overflow-auto' onSubmit={submitKrisar}>
        <button className='hover:rotate-90 duration-100 p-0 w-6 h-6 self-end sticky top-0'>
          <Image src='/icons/icon-close.svg' width={24} height={24} />
        </button>
        <p className='text-lg'><b>Silakan berikan penilaian kepuasan Anda terhadap penggunaan website di bawah ini.</b></p>
        <textarea 
          placeholder='Kritik/saran terkait JDIH Kemlu'
          className='border border-neutral-300 rounded-md p-2' 
        />
        <div className='flex justify-center gap-4'>
          <button 
            className='buttonTertiary'
            onClick={(e) => {setIsVisible(false); e.preventDefault(); e.stopPropagation()}}
          >
            Tutup
          </button>
          <button
            className='buttonSecondary'
          >
            <b>Kirim</b>
          </button>
        </div>
      </form>
    </div>
  )
}
