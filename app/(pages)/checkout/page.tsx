import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import OrderList from "@/components/order/order-list"
import Title from "@/components/ui/title"

interface CheckoutPageProps {}
export default function CheckoutPage({}: CheckoutPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title>Checkout</Title>
        <OrderList />
      </div>
    </MaxWidthWrapper>
  )
}
