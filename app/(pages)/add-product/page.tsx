import MaxWidthWrapper from "@/components/global/max-width-wrapper"

interface AddProductPageProps {}

export default function AddProductPage({}: AddProductPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <h1 className="text-4xl sm:text-5xl font-bold">Add new product page</h1>
      </div>
    </MaxWidthWrapper>
  )
}
