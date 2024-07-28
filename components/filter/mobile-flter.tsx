import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { buttonVariants } from "@/components/ui/button"
import { Suspense } from "react"

import FilterOptions from "@/components/filter/filter-options"

export function MobileFilter() {
  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger>
          <span className={buttonVariants({})}>Filter</span>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle className="text-left">Filter</SheetTitle>
            <Suspense>
              <FilterOptions />
            </Suspense>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
