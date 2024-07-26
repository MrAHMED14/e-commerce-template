import MaxWidthWrapper from "@/components/global/max-width-wrapper"

interface ShopPageProps {}

export default function ShopPage({}: ShopPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <h1 className="text-4xl sm:text-5xl font-bold">Shop page</h1>
      </div>
    </MaxWidthWrapper>
  )
}
