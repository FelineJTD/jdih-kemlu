import Head from 'next/head'
import Template from '../../components/layout-template'

export default function DetailDokumen() {
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

  const dokumen_data = {
    tentang: 'Tentang Pembentukan Negara Kesatuan Republik Indonesia',
    nomor: '12/2020',
    tahun: '2020',
    judul: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    jenis: 'Permenlu',
    ditetapkan: '29 Desember 1945',
    diundangkan: '1 Januari 1946',
    berlaku: '1 Januari 1946',
    sumber: 'Berita Resmi Republik Indonesia',
    tema: 'Kepegawaian',
    halaman: '12',
    deskripsi: '-',
    status: ['diubah', 'mengubah'],
  }

  return (
    <div>
      <Head>
        <title>JDIH Kemlu</title>
        <meta name="description" content="JDIH Kemlu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Template
          title='Permenlu No. 67 Tahun 2021'
          subtitle=''
          img='https://picsum.photos/200/300'
          alt=''
          paths={paths}
        >
          <div className='flex flex-col-reverse lg:flex-row gap-8'>
            {/* ASIDE */}
            <aside className='w-full lg:w-1/4 flex-grow-0 flex flex-col-reverse lg:flex-col gap-8'>
              <div className='bg-neutral-50 rounded-lg p-4'>
                <h3 className='text-lg font-josefin-sans mb-4'>Infografis</h3>
                <div className='w-full h-96' />
              </div>

              <div className='bg-neutral-50 rounded-lg'>      
                <div className='px-3'>
                {
                  dokumens.slice(0, 5).map((dokumen, index) => {
                    return (
                      <div key={index} className='border-b last:border-0 last:pb-5 border-neutral-300 py-3'>
                        <h4 className='text-sm text-neutral-800 font-semibold mb-2'>{dokumen.title}</h4>
                        <p className='text-xs text-neutral-600'>{dokumen.desc}</p>
                      </div>
                    )
                  })
                }
                </div>
              </div>
            </aside>

            {/* TABLE */}
            <section className='w-full lg:w-3/4 flex flex-col'>
              <h3 className='border-b border-primary-700'>Informasi Detail Dokumen</h3>
              <table className='text-gray-800 block'>
                <thead className='text-left block'>
                  <tr className='block float-left'>
                    <th className='block my-4 text-base font-inter'>Tentang</th>
                    <th className='block my-4 text-base font-inter'>Nomor Peraturan</th>
                    <th className='block my-4 text-base font-inter'>Tahun</th>
                    <th className='block my-4 text-base font-inter'>Judul</th>
                    <th className='block my-4 text-base font-inter'>Jenis Dokumen</th>
                    <th className='block my-4 text-base font-inter'>Ditetapkan Tanggal</th>
                    <th className='block my-4 text-base font-inter'>Diundangkan Tanggal</th>
                    <th className='block my-4 text-base font-inter'>Berlaku Tanggal</th>
                    <th className='block my-4 text-base font-inter'>Sumber</th>
                    <th className='block my-4 text-base font-inter'>Tema</th>
                    <th className='block my-4 text-base font-inter'>Jumlah Halaman</th>
                    <th className='block my-4 text-base font-inter'>Deskripsi</th>
                    <th className='block my-4 text-base font-inter'>Status</th>
                  </tr>
                </thead>
                <tbody className='block'>
                  <tr className='block float-left mx-2'>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                    <td className='block my-4'>:</td>
                  </tr>
                  <tr className='block float-left'>
                    <td className='block my-4'>{dokumen_data.tentang}</td>
                    <td className='block my-4'>{dokumen_data.nomor}</td>
                    <td className='block my-4'>{dokumen_data.tahun}</td>
                    <td className='block my-4'>{dokumen_data.judul}</td>
                    <td className='block my-4'>{dokumen_data.jenis}</td>
                    <td className='block my-4'>{dokumen_data.ditetapkan}</td>
                    <td className='block my-4'>{dokumen_data.diundangkan}</td>
                    <td className='block my-4'>{dokumen_data.berlaku}</td>
                    <td className='block my-4'>{dokumen_data.sumber}</td>
                    <td className='block my-4'>{dokumen_data.tema}</td>
                    <td className='block my-4'>{dokumen_data.halaman}</td>
                    <td className='block my-4'>{dokumen_data.deskripsi}</td>
                    <td className='block my-4'>{dokumen_data.status}</td>
                  </tr>
                </tbody>
              </table>
              <div className='flex flex-col lg:flex-row justify-center mt-8 items-center'>
                <button>Baca</button>
                <button>Unduh</button>
              </div>
            </section>
          </div>
        </Template>
      </main>
    </div>
  )
}
