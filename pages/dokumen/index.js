import Head from 'next/head'
import Template from '../../components/layout-template'

export default function Dokumen() {
  const paths = [
    {
      name: 'Dokumen Hukum',
      link: '/dokumen'
    }
  ]
  return (
    <div>
      <Head>
        <title>JDIH Kemlu</title>
        <meta name="description" content="JDIH Kemlu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Template
          title='Dokumen Hukum'
          subtitle='Himpunan Dokumen Hukum di JDIH Kementrian Luar Negeri'
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
