import { FC } from 'react'
import Link from 'next/link'
import { LearningPath } from '../../services/paths/types'
import ImageFallback from '../../components/ImageFallback'

const Home: FC<{
  paths: LearningPath[]
}> = ({ paths }): React.ReactNode => {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-indigo-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-black">
            Rutas de 3 a 5 cursos organizados en niveles para que tu hij@
            profundice en el tema que le apasiona.
          </h2>

          <div className="bg-gray-100 mt-6 rounded-2xl p-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {paths
              ? paths.map(
                  ({
                    id,
                    name,
                    slug,
                    money,
                    color,
                    secondaryColor,
                    courses,
                    ageRange,
                    formattedPrice,
                    callOut: description,
                    formattedPriceAfterDiscount,
                  }) => (
                    <Link
                      className="group relative p-4"
                      key={id}
                      href={`rutas/${slug}`}
                    >
                      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-90 sm:h-64">
                        <ImageFallback
                          height={320}
                          width={640}
                          src={courses[0]?.thumbnail}
                          fallbackSrc="/assets/default_thumbnail.jpeg"
                          alt={`Imagen para el curso de ${name}`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <h3 className="mt-6 text-sm text-gray-500 flex items-center justify-between">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          {name}
                        </a>
                        <span
                          className="font-semibold py-1 px-3 rounded-xl text-gray-700"
                          style={{
                            backgroundColor: secondaryColor,
                          }}
                        >
                          de {ageRange} años
                        </span>
                      </h3>
                      <p className="h-28 text-base font-semibold text-gray-900 line-clamp-4">
                        {description}
                      </p>
                      <p className="mt-6 flex items-end justify-end gap-x-2">
                        <span className="text-sm leading-6 tracking-wide text-gray-700">
                          {courses.length} cursos por
                        </span>
                        <div className="flex flex-wrap w-min">
                          <s className="text-2xl font-bold tracking-tight text-gray-400">
                            {formattedPrice}
                          </s>
                          <span
                            className="text-4xl font-bold tracking-tight text-gray-900"
                            style={{
                              color,
                            }}
                          >
                            {formattedPriceAfterDiscount}
                          </span>
                        </div>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                          {money}
                        </span>
                      </p>
                      <button
                        className="mt-4 rounded-full font-bold bg-indigo-500 text-1xl w-full p-2 text-gray-100 opacity-90 group-hover:opacity-100"
                        style={{
                          backgroundColor: color,
                        }}
                      >
                        Más información
                      </button>
                    </Link>
                  )
                )
              : 'empty'}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

//group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-indigo-700
