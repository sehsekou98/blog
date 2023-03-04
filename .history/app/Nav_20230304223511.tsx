

import Link from "next/link"

export default async function Nav() {
  const session = await unstable_getServerSession(authOptions)

  return (
    <nav className="flex justify-between items-center py-8 ">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">SendIt.</h1>
      </Link>
      <ul className="flex items-center gap-6"></ul>
    </nav>
  )
}