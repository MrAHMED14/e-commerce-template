import { validateRequest } from "@/lib/actions/auth/auth"

import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import MenuItems from "@/components/navbar/menu-items"
import Search from "@/components/filter/search"
import Link from "next/link"

interface NavbarProps {}

export default async function Navbar({}: NavbarProps) {
  const { user } = await validateRequest()

  return (
    <nav className="w-full bg-white dark:bg-stone-950 fixed h-14 top-0 z-50 pt-1">
      <MaxWidthWrapper>
        <div className="w-full flex items-center justify-between mx-auto my-2">
          {/* Left */}
          <div className="w-fit flex items-center justify-start gap-4">
            <Link href="/" className="font-bold">
              LOGO
            </Link>
            <Search className="hidden sm:flex" />
          </div>

          {/* Right */}
          <div className="w-fit">
            <MenuItems user={user} />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
