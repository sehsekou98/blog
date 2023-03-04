
import Head from 'next/head'
import Nav from './Nav'


export default function Home() {
  return (
    <>
      <Head>
        <title>Front Dev</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
       <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/favicon.ico" />

      </Head>
      <main>
        <Nav />
      </main>
    </>
  )
}
