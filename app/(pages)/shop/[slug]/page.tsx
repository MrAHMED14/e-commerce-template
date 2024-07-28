import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface ProductDetailsPageProps {}

export default function ProductDetailsPage({}: ProductDetailsPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title>Product details page</Title>
      </div>
    </MaxWidthWrapper>
  )
}
