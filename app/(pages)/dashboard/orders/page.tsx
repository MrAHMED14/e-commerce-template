import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface OrderPageProps {}

export default function OrderPage({}: OrderPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title>Order page</Title>
      </div>
    </MaxWidthWrapper>
  )
}
