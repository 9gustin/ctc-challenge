import clsx from 'clsx'
import { FC } from 'react'

export const RenderPrice: FC<{
  price?: string
  money: string
  color: string
  courses?: number
  className?: string
  priceAfterDiscount: string
}> = ({ price, priceAfterDiscount, money, courses, color, className }) => {
  return (
    <p className={clsx('flex items-end justify-end gap-x-2', className)}>
      {courses && (
        <span className="text-sm leading-6 tracking-wide text-gray-700">
          {courses} cursos por
        </span>
      )}
      <div className="flex flex-wrap w-min">
        {price && (
          <s className="text-md md:text-2xl font-bold tracking-tight text-gray-400">
            {price}
          </s>
        )}
        <span
          className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900"
          style={{
            color,
          }}
        >
          {priceAfterDiscount}
        </span>
      </div>
      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
        {money}
      </span>
    </p>
  )
}
