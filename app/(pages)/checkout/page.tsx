import MaxWidthWrapper from "@/components/global/max-width-wrapper"

interface CheckoutPageProps {}
export default function CheckoutPage({}: CheckoutPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <h1 className="text-4xl sm:text-5xl font-bold">Checkout page</h1>
      </div>
    </MaxWidthWrapper>
  )
}
