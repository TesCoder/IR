import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Tsion Consulting</title>
      </Head>
      <main className="container">
        <h1>Tsion Consulting</h1>
        <div className='row justify-content-center'>
          <div className='col-3'>
            <div className="card mt-5" style={{ height: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">Contact Form</h5>
                <p className="card-text">Check out the contact form using the link below. Let me know what you think!</p>
                <Link href="/contact" className="btn btn-primary">Click Here</Link>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className="card mt-5" style={{ height: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">Application Support Agreement Agreement</h5>
                <p className="card-text">Check out the agreement form using the link below. Let me know what you think!</p>
                <Link href="/agreement" className="btn btn-primary">Click Here</Link>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
