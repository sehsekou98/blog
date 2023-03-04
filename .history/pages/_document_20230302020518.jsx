
import  Nav  from './Nav'


export default function Document({children}) {
  return (
    <Html lang="en">
      <Head />
      <body className={`mx-4`}>
        <Main />
        <NextScript />
        <Nav />
        
      </body>
    </Html>
  )
}
