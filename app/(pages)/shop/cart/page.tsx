import MaxWidthWrapper from "@/components/global/max-width-wrapper"

interface CartPageProps {}

export default function CartPage({}: CartPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <h1 className="text-4xl sm:text-5xl font-bold">Cart page</h1>
      </div>
    </MaxWidthWrapper>
  )
}
