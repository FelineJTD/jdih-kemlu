import Head from 'next/head'
import Template from '../components/layout-template'

export default function TentangKami() {
  const paths = [
    {
      name: 'Tentang Kami',
      link: '/tentang-kami'
    }
  ]
  return (
    <div>
      <Head>
        <title>JDIH Kemlu</title>
        <meta name="description" content="JDIH Kemlu" />
      </Head>

      <main>
        <Template
          title='Tentang Kami'
          subtitle='Deskripsi Singkat Seputar JDIH Kementrian Luar Negeri'
          img='https://picsum.photos/200/300'
          alt='Gambar Dokumen Hukum'
          paths={paths}
        >
          <h2>TEST</h2>
        </Template>
      </main>
    </div>
  )
}
