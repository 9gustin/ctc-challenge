import { ALL_PATHS } from './constants'
import { FC, useMemo, useState } from 'react'
import { AgeFilters } from './components/AgeFilters'
import { LearningPath } from '../../services/paths/types'
import { StickyFooter } from '../../components/StickyFooter'
import { DisplayContents } from '../../components/DisplayContents'

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

            <DisplayContents
              items={
                filteredPaths.map(({ slug, ...rest }) => ({
                  ...rest,
                  courses: rest.courses.length,
                  href: `/rutas/${slug}`,
                })) as any
              }
            />
          </div>
        </div>
      </section>
      {ageRanges.length && (
        <StickyFooter className="md:hidden">
          <AgeFilters
            options={ageRanges}
            selected={filterAge}
            onSelect={setFilterAge}
          />
        </StickyFooter>
      )}
    </>
  )
}

export default Home
