
import { Html, Head, Main, NextScript, } from 'next/document'
import  Nav  from './Nav'


export default function Document({child}) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Nav />
        
      </body>
    </Html>
  )
}
