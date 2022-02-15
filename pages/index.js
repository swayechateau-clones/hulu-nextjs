import Head from 'next/head'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu Clone - NextJS, TailwindCSS </title>
        <meta name="description" content="Hulu Clone created using NextJS, TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** Header */}
      <Header />
      {/** Nav */}
      <Navigation />
      {/** Results */}
    </div>
  )
}
