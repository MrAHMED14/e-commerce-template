import MaxWidthWrapper from "@/components/global/max-width-wrapper"

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-24">
        <h1 className="text-4xl sm:text-5xl font-bold">Hello There</h1>
      </div>
    </MaxWidthWrapper>
  )
}