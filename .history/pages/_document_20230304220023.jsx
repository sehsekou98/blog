
import D { Html, Head, Main, NextScript, } from 'next/document'
import Nav  from './Nav'


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <main />
          <Nav />
          <NextScript />
        </body>
      </Html>

    ); 

   }
  
  }
    
  
export default MyDocument

