import Head from 'next/head'
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
      jenis: 'Permenlu',
      tema: 'Kepegawaian',
      tahun: '2021',
      status: ['Berlaku', 'Mengubah'],
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
          <div className='flex gap-4'>
            <section>
              <div className='flex gap-4 justify-between mb-8'>
                <select className='border border-gray-300 rounded-md px-1 py-1'>
                  <option value=''>Pilih Jenis Dokumen</option>
                  <option value=''>Undang-Undang</option>
                  <option value=''>Peraturan Pemerintah</option>
                  <option value=''>Peraturan Presiden</option>
                  <option value=''>Peraturan Menteri</option>
                </select>
                <select className='border border-gray-300 rounded-md px-1 py-1'>
                  <option value=''>Pilih Tema</option>
                  <option value=''>Undang-Undang</option>
                  <option value=''>Peraturan Pemerintah</option>
                  <option value=''>Peraturan Presiden</option>
                  <option value=''>Peraturan Menteri</option>
                </select>
                <select className='border border-gray-300 rounded-md px-1 py-1'>
                  <option value=''>Pilih Tahun</option>
                  <option value=''>Undang-Undang</option>
                  <option value=''>Peraturan Pemerintah</option>
                  <option value=''>Peraturan Presiden</option>
                  <option value=''>Peraturan Menteri</option>
                </select>
                <select className='border border-gray-300 rounded-md px-1 py-1'>
                  <option value=''>Pilih Status</option>
                  <option value=''>Undang-Undang</option>
                  <option value=''>Peraturan Pemerintah</option>
                  <option value=''>Peraturan Presiden</option>
                  <option value=''>Peraturan Menteri</option>
                </select>
              </div>
              <table className='table-fixed gap-4'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul Dokumen</th>
                    <th>Jenis</th>
                    <th>Tema</th>
                    <th>Tahun</th>
                    <th>Status</th>
                    <th>Lihat Detail</th>
                  </tr>
                </thead>
                <tbody>
                  { dokumens.map((dokumen, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{dokumen.title}</td>
                          <td>{dokumen.jenis}</td>
                          <td>{dokumen.tema}</td>
                          <td>{dokumen.tahun}</td>
                          <td>
                            {
                              dokumen.status.map((status, index) => {
                                return (
                                  <div key={index} className={`px-2 py-1 rounded-md text-xs bg-${status.toLowerCase()}-100 text-${status.toLowerCase()}-800`}>{status}</div>
                                )
                              })
                            }
                          </td>
                          <td>
                            <a href={dokumen.link} target='_blank' rel='noreferrer' className='text-primary-500 hover:text-primary-700 duration-100'>Lihat</a>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </section>
            <aside>
              <input type='text' placeholder='Cari Dokumen' />
              <div className='bg-neutral-100 rounded-lg'>
                <h3>Rangkuman Status</h3>
                <ul>
                  { status.map((item, index) => {
                    return (
                      <li key={index}>
                        <span className={`bg-${item.color}-100 rounded-full w-4 h-4 inline-block`} />
                        <span>{item.name}</span>
                        <span>{item.count}</span>
                      </li>
                    )
                  }) }
                </ul>
              </div>
            </aside>
          </div>
        </Template>
      </main>
    </div>
  )
}
