import "./globals.css"
import Nav from "./Nav"
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <body
          className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} font-sans bg-gray-200`}
        >
          <QueryWrapper>
            <AuthContext>
              <Nav />
              {children}
            </AuthContext>
          </QueryWrapper>
        </body>
      </html>
    )
  }


