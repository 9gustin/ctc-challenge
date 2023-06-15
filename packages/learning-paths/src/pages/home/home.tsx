import Link from 'next/link'
import { ALL_PATHS } from './constants'
import { FC, useMemo, useState } from 'react'
import { AgeFilters } from './components/AgeFilters'
import { LearningPath } from '../../services/paths/types'
import ImageFallback from '../../components/ImageFallback'

const Home: FC<{
  paths: LearningPath[]
}> = ({ paths }): React.ReactNode => {
  const [filterAge, setFilterAge] = useState<string>(ALL_PATHS)

  const ageRanges = useMemo(() => {
    if (!paths) return []
    const arr = paths.map(({ ageRange }) => ageRange)

    return paths ? Array.from(new Set(arr)) : []
  }, [paths])

  const filteredPaths =
    filterAge && filterAge !== ALL_PATHS
      ? paths.filter(({ ageRange }) => ageRange === filterAge)
      : paths

  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-indigo-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-8 pb-40 md:py-20 lg:max-w-none">
            <h2 className="mb-4 text-2xl font-bold text-black hidden md:block">
              Rutas de 3 a 5 cursos organizados en niveles para que tu hij@
              profundice en el tema que le apasiona.
            </h2>
            <h2 className="mb-4 text-xl font-bold text-black md:hidden">
              Elegi la ruta para tu hij@
            </h2>

            {ageRanges.length && (
              <div className="hidden md:block w-full">
                <AgeFilters
                  options={ageRanges}
                  selected={filterAge}
                  onSelect={setFilterAge}
                />
              </div>
            )}

            <div className="bg-gray-100 rounded-2xl p-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {filteredPaths
                ? filteredPaths.map(
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
                        className="flex flex-col group md:pb-8"
                        key={id}
                        href={`rutas/${slug}`}
                      >
                        <div className="relative h-40 md:h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-90 sm:h-64">
                          <ImageFallback
                            height={320}
                            width={640}
                            src={courses[0]?.thumbnail}
                            fallbackSrc="/assets/default_thumbnail.jpeg"
                            alt={`Imagen para el curso de ${name}`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <h3 className="mt-3 md:mt-6 text-gray-600 flex items-center justify-between">
                          <a href="#">{name}</a>
                        </h3>
                        <span
                          className="text-sm py-1 text-gray-500 mb-2"
                          style={{
                            borderBottom: `1px solid ${secondaryColor}`,
                          }}
                        >
                          de {ageRange} años
                        </span>
                        <p className="h-18 md:h-20 line-clamp-3 text-base font-semibold text-gray-900">
                          {description}
                        </p>
                        <p className="mt-6 flex items-end justify-end gap-x-2">
                          <span className="text-sm leading-6 tracking-wide text-gray-700">
                            {courses.length} cursos por
                          </span>
                          <div className="flex flex-wrap w-min">
                            <s className="text-md md:text-2xl font-bold tracking-tight text-gray-400">
                              {formattedPrice}
                            </s>
                            <span
                              className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900"
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
                          className="text-md md:text-1xl mt-4 rounded-full font-bold bg-indigo-500 w-full p-2 text-gray-100 opacity-90 group-hover:opacity-100"
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
      {ageRanges.length && (
        <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-2 rounded-tr-lg rounded-tl-lg ">
          <AgeFilters
            options={ageRanges}
            selected={filterAge}
            onSelect={setFilterAge}
          />
        </footer>
      )}
    </>
  )
}

export default Home
