import MaxWidthWrapper from "@/components/global/max-width-wrapper"

interface OrderPageProps {}

export default function OrderPage({}: OrderPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <h1 className="text-4xl sm:text-5xl font-bold">Order page</h1>
      </div>
    </MaxWidthWrapper>
  )
}
