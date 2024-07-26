import MaxWidthWrapper from "@/components/global/max-width-wrapper"

interface FooterProps {}
export default function Footer({}: FooterProps) {
  return (
    <footer className="w-full mt-20">
      <MaxWidthWrapper>
        <div className="w-full flex flex-col items-center py-5 mt-4">
          <div className="w-full h-px bg-muted-foreground/60 dark:bg-muted" />
          <h1 className="pt-5 text-muted-foreground/60 dark:text-muted text-xs font-bold">
            {new Date().getFullYear()} &copy; MrAHMED CHIKHAOUI
          </h1>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
