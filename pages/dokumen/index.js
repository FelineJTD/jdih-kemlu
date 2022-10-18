import Head from 'next/head'
import { useState } from 'react'
import Template from '../../components/layout-template'

export default function Dokumen() {
  const paths = [
    {
      name: 'Dokumen Hukum',
      link: '/dokumen'
    }
  ]

  const dokumens = [
    {
      title: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
      desc: 'Tentang Pembentukan Negara Kesatuan Republik Indonesia',
      jenis: 'Permenlu',
      tema: 'Kepegawaian',
      tahun: '2021',
      status: ['diubah', 'mengubah'],
      link: 'https://www.google.com'
    },
    {
      title: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
      desc: 'Tentang Pembentukan Negara Kesatuan Republik Indonesia',
      jenis: 'Permenlu',
      tema: 'Kepegawaian',
      tahun: '2021',
      status: ['diubah'],
      link: 'https://www.google.com'
    },
    {
      title: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
      desc: 'Tentang Pembentukan Negara Kesatuan Republik Indonesia',
      jenis: 'Permenlu',
      tema: 'Kepegawaian',
      tahun: '2021',
      status: ['diubah'],
      link: 'https://www.google.com'
    },
    {
      title: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
      desc: 'Tentang Pembentukan Negara Kesatuan Republik Indonesia',
      jenis: 'Permenlu',
      tema: 'Kepegawaian',
      tahun: '2021',
      status: ['mencabut', 'mengubah'],
      link: 'https://www.google.com'
    }
  ]

  const status = [
    {
      name: 'Mengubah',
      count: 18,
      color: 'mengubah'
    },
    {
      name: 'Diubah',
      count: 18,
      color: 'diubah'
    },
    {
      name: 'Mencabut',
      count: 18,
      color: 'mencabut'
    },
  ]

  const status_info = {
    mengubah: {
      name: 'Mengubah',
      count: 18,
      color: 'mengubah'
    },
    diubah: {
      name: 'Diubah',
      count: 18,
      color: 'diubah'
    },
    mencabut: {
      name: 'Mencabut',
      count: 18,
      color: 'mencabut'
    },
  }

  const [currPage, setCurrPage] = useState(1);
  const numOfDataOnOnePage = 10;
  const maxPage = Math.ceil(dokumens.length/numOfDataOnOnePage);

  const changePage = (num) => {
    setCurrPage(Math.min(Math.max(currPage + num, 0)), maxPage);
  }

  const [isTerbaru, setIsTerbaru] = useState(true);

  return (
    <div>
      <Head>
        <title>JDIH Kemlu</title>
        <meta name="description" content="JDIH Kemlu" />
      </Head>

      <main>
        <Template
          title='Dokumen Hukum'
          subtitle='Himpunan Dokumen Hukum di JDIH Kementrian Luar Negeri'
          img='https://picsum.photos/200/300'
          alt='Gambar Dokumen Hukum'
          paths={paths}
        >
          <div className='flex flex-col-reverse lg:flex-row gap-8'>
            {/* TABLE */}
            <section className='w-full lg:w-3/4'>
              <div className='grid grid-cols-4 gap-4 mb-8'>
                <select className='buttonFilter'>
                  <option value=''>Pilih Jenis Dokumen</option>
                  <option value=''>Undang-Undang</option>
                  <option value=''>Peraturan Pemerintah</option>
                  <option value=''>Peraturan Presiden</option>
                  <option value=''>Peraturan Menteri</option>
                </select>
                <select className='buttonFilter'>
                  <option value=''>Pilih Tema</option>
                  <option value=''>Undang-Undang</option>
                  <option value=''>Peraturan Pemerintah</option>
                  <option value=''>Peraturan Presiden</option>
                  <option value=''>Peraturan Menteri</option>
                </select>
                <select className='buttonFilter'>
                  <option value=''>Pilih Tahun</option>
                  <option value=''>Undang-Undang</option>
                  <option value=''>Peraturan Pemerintah</option>
                  <option value=''>Peraturan Presiden</option>
                  <option value=''>Peraturan Menteri</option>
                </select>
                <select className='buttonFilter'>
                  <option value=''>Pilih Status</option>
                  <option value=''>Undang-Undang</option>
                  <option value=''>Peraturan Pemerintah</option>
                  <option value=''>Peraturan Presiden</option>
                  <option value=''>Peraturan Menteri</option>
                </select>
              </div>

              <table className='text-gray-800'>
                <thead className='border-b-2 border-primary-600 text-left'>
                  <tr>
                    <th className='pr-4'>No</th>
                    <th className='pr-4'>Judul Dokumen</th>
                    <th className='pr-4 hidden md:block'>Jenis</th>
                    <th className='pr-4 hidden md:block'>Tema</th>
                    <th className='pr-4 hidden md:block'>Tahun</th>
                    <th className='pr-4'>Status</th>
                    <th className='hidden md:block'>Lihat Detail</th>
                  </tr>
                </thead>
                <tbody className='odd:bg-neutral-100'>
                  { dokumens.map((dokumen, index) => {
                      return (
                        <tr key={index} className='odd:bg-neutral-50'>
                          <td className='pr-4 py-4'>{index + 1}</td>
                          <td className='pr-4 py-4'>{dokumen.title}</td>
                          <td className='pr-4 py-4 hidden md:block'>{dokumen.jenis}</td>
                          <td className='pr-4 py-4 hidden md:block'>{dokumen.tema}</td>
                          <td className='pr-4 py-4 hidden md:block'>{dokumen.tahun}</td>
                          <td className='pr-4 py-4'>
                            <ul>
                              { dokumen.status.map((item, index) => {
                                return (
                                  <li key={index} className='flex justify-between mb-2'>
                                    <div className={`border border-${status_info[item].color} rounded-md px-2 py-1 w-full text-center`}>
                                      <p className={`text-${status_info[item].color} text-xs`}>{status_info[item].name}</p>
                                    </div>
                                    <p>{item.count}</p>
                                  </li>
                                )
                              }) }
                            </ul>
                          </td>
                          <td className='hidden md:block'>
                            <a href={dokumen.link} target='_blank' rel='noreferrer' className='text-primary-500 hover:text-primary-700 duration-100'>Lihat</a>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <div className='flex flex-col lg:flex-row justify-between mt-8 items-center'>
                <p>Menampilkan {Math.min(dokumens.length, 10*currPage)} dari {dokumens.length} dokumen</p>
                <div className='flex gap-4'>
                  <button onClick={() => changePage(-1)}>Sebelumnya</button>
                  {
                    Math.ceil(dokumens.length/numOfDataOnOnePage)
                  }
                  <button onClick={() => changePage(1)}>Selanjutnya</button>
                </div>
              </div>
            </section>

            {/* ASIDE */}
            <aside className='w-full lg:w-1/4 flex-grow-0 flex flex-col-reverse lg:flex-col gap-8'>
              <input type='text' placeholder='Cari Dokumen' className='buttonFilter placeholder:text-neutral-400' />

              <div className='bg-neutral-50 rounded-lg p-4'>
                <h3 className='text-lg font-josefin-sans mb-4'>Rangkuman Status</h3>
                <ul>
                  { status.map((item, index) => {
                    return (
                      <li key={index} className='flex justify-between mb-2'>
                        <div className={`border border-${item.color} rounded-md px-2 py-1`}>
                          <p className={`text-${item.color} text-xs`}>{item.name}</p>
                        </div>
                        <p>{item.count}</p>
                      </li>
                    )
                  }) }
                </ul>
              </div>

              <div className='bg-neutral-50 rounded-lg'>
                <div className='flex text-neutral-800 mb-2'>
                  <button 
                    className={`${isTerbaru? 'unStaticSelected' : 'unStatic enabled:hover:bg-neutral-100'} w-1/2 px-2 pt-2 pb-3 text-base rounded-lg font-josefin-sans`}  
                    onClick={() => setIsTerbaru(true)}
                  >
                    Terbaru
                  </button>
                  <button 
                    className={`${isTerbaru? 'unStatic enabled:hover:bg-neutral-100' : 'unStaticSelected'} w-1/2 px-2 pt-2 pb-3 text-base rounded-lg font-josefin-sans`} 
                    onClick={() => setIsTerbaru(false)}
                  >
                    Terpopuler
                  </button>
                </div>
                
                <div className='px-3'>
                { isTerbaru ?
                  dokumens.slice(0, 5).map((dokumen, index) => {
                    return (
                      <div key={index} className='border-b last:border-0 last:pb-5 border-neutral-300 py-3'>
                        <h4 className='text-sm text-neutral-800 font-semibold mb-2'>{dokumen.title}</h4>
                        <p className='text-xs text-neutral-600'>{dokumen.desc}</p>
                      </div>
                    )
                  }
                ) :
                  dokumens.slice(0, 5).map((dokumen, index) => {
                  return (
                    <div key={index} className='border-b last:border-0 last:pb-5 border-neutral-300 py-3'>
                      <h4 className='text-sm text-neutral-800 font-semibold mb-2'>{dokumen.title}</h4>
                      <p className='text-xs text-neutral-600'>{dokumen.desc}</p>
                    </div>
                  )
                }
                )}
                </div>
              </div>
            </aside>
          </div>
        </Template>
      </main>
    </div>
  )
}
