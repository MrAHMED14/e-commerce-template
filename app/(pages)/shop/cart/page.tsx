import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface CartPageProps {}

export default function CartPage({}: CartPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title>Cart page</Title>
      </div>
    </MaxWidthWrapper>
  )
}
