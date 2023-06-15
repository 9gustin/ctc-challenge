import Link from 'next/link'
import { FC } from 'react'
import ImageFallback from './ImageFallback'
import clsx from 'clsx'
import { RenderPrice } from './RenderPrice'

interface DisplayContent {
  id: number
  name: string
  href: string
  money?: string
  color: string
  callOut: string
  courses?: number
  ageRange?: string
  thumbnail: string
  formattedPrice?: string
  secondaryColor: string
  formattedPriceAfterDiscount?: string
}

export const DisplayContents: FC<{
  items: DisplayContent[]
  className?: string
}> = ({ items, className }) => {
  return (
    <div
      className={clsx(
        'bg-gray-100 rounded-2xl p-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0',
        className
      )}
    >
      {items.map(
        ({
          id,
          name,
          href,
          money,
          color,
          courses,
          ageRange,
          thumbnail,
          formattedPrice,
          secondaryColor,
          callOut: description,
          formattedPriceAfterDiscount,
        }) => (
          <Link key={id} href={href} className="flex flex-col group md:pb-8">
            <div className="relative h-40 md:h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-90 sm:h-64">
              <ImageFallback
                height={320}
                width={640}
                src={thumbnail}
                fallbackSrc="/assets/default_thumbnail.jpeg"
                alt={`Imagen para ${name}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-3 md:mt-6 text-gray-600 flex items-center justify-between">
              <a href="#">{name}</a>
            </h3>
            {ageRange && (
              <span
                className="text-sm py-1 text-gray-500 mb-2"
                style={{
                  borderBottom: `1px solid ${secondaryColor}`,
                }}
              >
                de {ageRange} años
              </span>
            )}
            <p className="h-18 md:h-20 line-clamp-3 text-base font-semibold text-gray-900">
              {description}
            </p>
            {formattedPrice && formattedPriceAfterDiscount && money && (
              <RenderPrice
                className="mt-6"
                price={formattedPrice}
                priceAfterDiscount={formattedPriceAfterDiscount}
                money={money}
                color={color}
                courses={courses}
              />
            )}
            {href && (
              <button
                className="text-md md:text-1xl mt-4 rounded-full font-bold bg-indigo-500 w-full p-2 text-gray-100 opacity-90 group-hover:opacity-100"
                style={{
                  backgroundColor: color,
                }}
              >
                Más información
              </button>
            )}
          </Link>
        )
      )}
    </div>
  )
}
