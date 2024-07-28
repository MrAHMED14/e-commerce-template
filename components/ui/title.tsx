import { cn } from "@/lib/utils"

interface TitleProps {
  children: React.ReactNode
  className?: string
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h1 className={cn(className, "text-4xl sm:text-5xl font-bold mb-3")}>
      {children}
    </h1>
  )
}
