import MaxWidthWrapper from "@/components/global/max-width-wrapper"

interface ProductDetailsPageProps {}

export default function ProductDetailsPage({}: ProductDetailsPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <h1 className="text-4xl sm:text-5xl font-bold">Product details page</h1>
      </div>
    </MaxWidthWrapper>
  )
}
