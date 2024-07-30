import CartList from "@/components/cart/cart-list"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface CartPageProps {}

export default function CartPage({}: CartPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title>Shopping Cart</Title>

        <CartList />
      </div>
    </MaxWidthWrapper>
  )
}
