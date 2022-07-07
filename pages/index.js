import Head from 'next/head'
import { Picture } from '../components/Picture'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dan Black</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className=''>Hellooo</h1>
        <Picture />
      </main>
    </div>
  )
}
