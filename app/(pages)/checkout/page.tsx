import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface CheckoutPageProps {}
export default function CheckoutPage({}: CheckoutPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title>Checkout page</Title>
      </div>
    </MaxWidthWrapper>
  )
}
