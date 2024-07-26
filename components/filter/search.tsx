import { SearchIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { cn } from "@/lib/utils"

interface SearchProps {
  className?: string
}
export default function Search({ className }: SearchProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Input
        type="text"
        placeholder="Search for products..."
        className="w-full focus-visible:ring-0 border-r-0 rounded-r-none rounded-l-full"
      />
      <Button
        variant={"ghost"}
        className="border border-l-0 rounded-l-none rounded-r-full text-muted-foreground/50 dark:text-muted hover:text-muted hover:dark:text-muted-foreground/50"
      >
        <SearchIcon size={17} className="" />
      </Button>
    </div>
  )
}
