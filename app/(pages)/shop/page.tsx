import { MobileFilter } from "@/components/filter/mobile-flter"
import { Loader2Icon } from "lucide-react"
import { Suspense } from "react"

import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import ProductLoading from "@/components/product/loading"
import ProductReels from "@/components/product/first-list"
import SortOption from "@/components/filter/sort-option"
import Filter from "@/components/filter/filter"
import Title from "@/components/ui/title"

interface ShopPageProps {}

export default function ShopPage({}: ShopPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <div className="w-full block min-[410px]:flex min-[410px]:flex-row justify-between items-center pb-3 mb-3">
          <Title>Our Products</Title>
          <div className="flex items-center justify-center max-[408px]:mt-8 gap-4">
            <Suspense
              fallback={<Loader2Icon className="w-4 h-4 animate-spin" />}
            >
              <SortOption />
            </Suspense>
            <MobileFilter />
          </div>
        </div>
        <div className="flex gap-x-2 justify-center">
          <Filter />
          <Suspense fallback={<ProductLoading />}>
            <ProductReels />
          </Suspense>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
