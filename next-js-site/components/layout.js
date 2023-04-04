import Footer from './Footer'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='min-h-screen font-raleway'>{children}</main>
      {/* <Footer /> */}
    </>
  )
}