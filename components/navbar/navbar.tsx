import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import MenuItems from "@/components/navbar/menu-items"
import Search from "@/components/filter/search"
import Link from "next/link"

interface NavbarProps {}
export default function Navbar({}: NavbarProps) {
  return (
    <nav className="w-full bg-white dark:bg-stone-950 sticky top-0 z-50 pt-1">
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
            <MenuItems />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
