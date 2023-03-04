import Link from "next/link"
import { useEffect } from "react"

export default function Nav() {
  
  useEffect(() => {
    // Perform any asynchronous operations here
  }, [])

  return (
    <nav className="flex justify-between items-center py-8 ">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">SendIt.</h1>
      </Link>
      <ul className="flex items-center gap-6"></ul>
    </nav>
  )
}
