"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LogOutIcon, MenuIcon, UserCircle2Icon } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

import ThemeSwitcher from "../global/theme-switcher"
import Search from "../filter/search"
import Link from "next/link"
import Image from "next/image"

interface MenuItemsProps {
  className?: string
}

export default function MenuItems({ className }: MenuItemsProps) {
  const user = true
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {/* Desktop Menu */}
      <Menu className="hidden min-[1140px]:flex items-center gap-8" />

      {/* Light / dark mode toggle */}
      <ThemeSwitcher />

      {user ? (
        // Avatar Component
        <UserAvatar />
      ) : (
        // Auth Component
        <AuthButton className="hidden min-[375px]:flex" />
      )}

      {/* Mobile Menu */}
      <div className="min-[1140px]:hidden flex">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent className="flex flex-col max-[375px]:justify-between">
            <Search className="sm:hidden flex mt-3" />
            <Menu className="flex flex-col items-start gap-y-5" />
            <AuthButton className="min-[375px]:hidden flex" />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export function Menu({ className }: MenuItemsProps) {
  const pathname = usePathname()

  return (
    <div className={cn(className)}>
      <Link
        href={"/"}
        className={cn(
          pathname === "/"
            ? "text-stone-950 dark:text-white font-semibold"
            : "text-muted-foreground"
        )}
      >
        Home
      </Link>
      <Link
        href={"/shop"}
        className={cn(
          pathname === "/shop"
            ? "text-stone-950 dark:text-white font-semibold"
            : "text-muted-foreground"
        )}
      >
        Shop
      </Link>
      <Link
        href={"/shop/cart"}
        className={cn(
          pathname === "/shop/cart"
            ? "text-stone-950 dark:text-white font-semibold"
            : "text-muted-foreground"
        )}
      >
        Cart ({0})
      </Link>
      <Link
        href={"/orders"}
        className={cn(
          pathname === "/orders"
            ? "text-stone-950 dark:text-white font-semibold"
            : "text-muted-foreground"
        )}
      >
        Orders
      </Link>
      <Link
        href={"/add-product"}
        className={cn(
          pathname === "/add-product"
            ? "text-stone-950 dark:text-white font-semibold"
            : "text-muted-foreground"
        )}
      >
        Add Product
      </Link>
    </div>
  )
}

export function AuthButton({ className }: MenuItemsProps) {
  return (
    // Auth Component
    <div className={cn("flex gap-3", className)}>
      <Button
        variant="ghost"
        className="font-bold hover:bg-muted-foreground/40"
      >
        Login
      </Button>
      <Button className="font-bold">Sign in</Button>
    </div>
  )
}

export function UserAvatar({}: MenuItemsProps) {
  const user = true
  return (
    <>
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="w-9 h-9 aspect-square object-center">
              {false ? (
                <Image
                  src={""}
                  alt={"user_img"}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full rounded-full"
                />
              ) : (
                <div className="dark:bg-white bg-stone-950/90 w-9 h-9 rounded-full aspect-square object-center flex items-center justify-center">
                  <UserCircle2Icon className="dark:text-stone-950/70 text-white/90" />
                </div>
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-7">
            <DropdownMenuLabel>Username</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer flex items-center gap-2">
              <LogOutIcon size={18} />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  )
}
