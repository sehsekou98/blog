

import Head from 'next/head'
import Nav from './Nav'
import { Roboto } from "@next/font/google"
import AuthContext from "./auth/AuthContext"
import QueryWrapper from "./QueryWrapper"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})


export default function Home() {
  return (
    <>
      <Head>
        <title>Front Dev</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
       <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/favicon.ico" />

      </Head>
      <body className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} font-sans bg-gray-200`}>
        <main>
        <Nav />
      </main>
      <QueryWrapper>
          <AuthContext>
            <Nav />
            {children}
          </AuthContext>
        </QueryWrapper>
      </body>
      </>
  )
}
