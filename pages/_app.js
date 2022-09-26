import '../styles/globals.css'
import Navbar from '../components/nav-navbar'
import Footer from '../components/nav-footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className='w-full min-h-screen bg-gray-50 selection:bg-secondary-400 selection:text-primary-500 accent-primary-500'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
