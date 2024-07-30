interface EmptyCartProps {
  size: number
}

export default function EmptyCart({ size }: EmptyCartProps) {
  return (
    <>
      <div className="w-full flex items-center justify-center mt-10">
        {size === 0 && (
          <div className="w-full md:w-1/2 h-48 flex items-center justify-center rounded-lg border border-gray-200 shadow-sm bg-muted dark:border-stone-700 dark:bg-muted">
            <p className="text-2xl font-bold text-center">
              Your cart is empty.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
