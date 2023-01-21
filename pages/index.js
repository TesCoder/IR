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
      <main className={styles.main}>
        <h1>Tsion Consulting</h1>
        <div className="card mt-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Hey Tesfa</h5>
            <p className="card-text">Check out the contact form using the link below. Let me know what you think!</p>
            <Link href="/contact" className="btn btn-primary">Click Here</Link>
          </div>
        </div>
      </main>
    </>
  )
}
