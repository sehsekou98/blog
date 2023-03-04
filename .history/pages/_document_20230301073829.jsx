
import Nav from '@/app/Nav'
import { Html, Head, Main, NextScript, } from 'next/document'


export default function Document({na}) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Nav />
        {children}
        
      </body>
    </Html>
  )
}
