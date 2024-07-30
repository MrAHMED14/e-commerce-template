import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import AddNewProduct from "@/components/product/AddNewProduct"
import Title from "@/components/ui/title"

interface AddProductPageProps {}

export default function AddProductPage({}: AddProductPageProps) {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <Title className="pb-10">Add new product</Title>
        <AddNewProduct className="mt-10 border border-neutral-200 rounded sm:p-16 cursor-pointer" />
      </div>
    </MaxWidthWrapper>
  )
}
