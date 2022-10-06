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
          <div className='flex gap-8'>
            <article className='w-3/4'>
              <section id='sejarah'>
                <h2>Sejarah JDIH</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aenean justo suspendisse at turpis vivamus facilisis. Eget nibh sit ante eget metus, pharetra, ut. Urna, pulvinar lobortis erat nisl, fringilla venenatis. Ut sit viverra nulla diam bibendum amet. Quis quisque imperdiet in eget quis enim dui vulputate. Urna vulputate ornare sit vel mi sed faucibus tincidunt. Mi mauris ut lobortis ut bibendum neque. Iaculis cras volutpat dolor, fringilla. Morbi nunc ut non, laoreet quam neque.

                Gravida tristique mollis sollicitudin quisque vel ornare laoreet mauris aliquam. Facilisis neque suspendisse velit mauris ipsum. Egestas purus eu pulvinar elementum. Augue pharetra eleifend lacus lacus ipsum facilisi bibendum. Nibh est habitant sed aliquet neque. Rhoncus ut volutpat, leo sollicitudin semper nec turpis eu. Cum amet sed sit egestas fusce non purus. Pellentesque sem id in elementum. Ipsum at nunc, duis vel integer duis massa lobortis dignissim. Cras habitant tristique arcu dui maecenas enim quis.

                Nisi, id ultrices suscipit consequat et euismod. Enim sit ut tristique praesent ante. Est porta vestibulum gravida leo sit. Cras malesuada ornare viverra justo. Tellus dignissim a id scelerisque tempor consequat. Quam sapien nibh odio a imperdiet proin. A, orci nunc vulputate ultrices. Suspendisse turpis ante tellus et. Faucibus aliquet vestibulum purus ipsum ipsum malesuada varius leo, sit. Amet urna at metus nulla urna. Habitasse venenatis tellus sit dolor eu malesuada. Dictum ac bibendum nulla dolor nisl commodo in gravida. Erat pellentesque ac egestas volutpat urna. Ipsum sed scelerisque tincidunt vulputate venenatis.
                </p>
              </section>
              <section id='dasar-hukum'>
                <h2>Dasar Hukum JDIH</h2>
              </section>
              <section id='visi-misi'>
                <h2>Visi</h2>
                <p>“Masyarakat memperoleh kepastian hukum”</p>
                <h2>Misi</h2>
                <p> “Mewujudkan peraturan Perundang-Undangan yang berkualitas”</p>
              </section>
              <section id='makna-logo'>
                <h2>Makna Logo JDIH</h2>
              </section>
              <section id='struktur-organisasi'>
                <h2>Struktur Organisasi JDIH</h2>
              </section>
            </article>
            <aside className='w-1/4'>
              <nav className='sticky top-8'>
                <h2>Tentang Kami</h2>
                <ul>
                  <li><a href='#sejarah'>Sejarah JDIH</a></li>
                  <li><a href='#dasar-hukum'>Dasar Hukum JDIH</a></li>
                  <li><a href='#visi-misi'>Visi & Misi</a></li>
                  <li><a href='#logo'>Makna Logo JDIH</a></li>
                  <li><a href='#struktur-organisasi'>Struktur Organisasi JDIH</a></li>
                </ul>
              </nav>
            </aside>
          </div>
        </Template>
      </main>
    </div>
  )
}
