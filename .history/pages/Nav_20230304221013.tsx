

import Link from "next/link"

export default async function Nav() {
  

  return (
    <nav className="flex justify-between items-center py-8 ">
      <Link className="font-bold text-lg" href={"/"}>
        <>SendIt.</>
      </Link>
      <ul className="flex items-center gap-6"></ul>
    </nav>
  )
}