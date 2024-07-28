import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"

interface LoadingProps {}
export default function Loading({}: LoadingProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title>Checkout page</Title>
        <p>Loading ...</p>
      </div>
    </MaxWidthWrapper>
  )
}
