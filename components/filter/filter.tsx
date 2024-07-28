import { Suspense } from "react"
import FilterOptions from "./filter-options"

interface FilterProps {}

export default function Filter({}: FilterProps) {
  return (
    <div className="w-[240px] hidden lg:block">
      <div className="border sticky top-1 w-full flex-col p-4 rounded-md">
        <h1 className="font-bold text-lg">Filters</h1>
        <Suspense>
          <FilterOptions />
        </Suspense>
      </div>
    </div>
  )
}
