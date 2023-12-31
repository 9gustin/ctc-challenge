import clsx from 'clsx'
import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FullLearningPath } from '../../services/paths/types'
import { YTVideo } from '../../components/YTVideo'
import { DisplayContents } from '../../components/DisplayContents'
import { StickyFooter } from '../../components/StickyFooter'
import { RenderPrice } from '../../components/RenderPrice'

const Detail: FC<{
  path: FullLearningPath
}> = ({ path }) => {
  return (
    <>
      <div
        className=" pb-40"
        style={{
          backgroundColor: path.secondaryColor,
        }}
      >
        <main
          className="bg-gradient-to-t to-white from-indigo-100 relative isolate px-6 pt-14 lg:px-8 h-full"
          style={
            {
              '--tw-gradient-from': `${path.secondaryColor} var(--tw-gradient-from-position)`,
            } as any
          }
        >
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {path.name}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {path.callOut}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 flex-col gap-6">
                <a
                  href="#cursos"
                  className="text-sm md:text-lg font-semibold leading-6 text-gray-700"
                >
                  Ver cursos incluidos<span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <section className="mx-auto container flex flex-wrap gap-6 py-6 px-2">
          <h2 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 w-full">
            Acerca de la ruta de aprendizaje
          </h2>
          <div className="md:w-6/12">
            <p className="text-md md:text-xl">{path.description}</p>
            <h3 className="font-bold text-sm md:text-lg mt-6">
              Este curso fue pensado para niñ@s
            </h3>
            <span className="text-sm md:text-xl">de {path.ageRange} años</span>
            <h3 className="font-bold text-sm md:text-lg mt-6">Duracion</h3>
            <span className="text-sm md:text-xl">
              {path.numberOfSessions} clases / {path.durationInMonths.toFixed()}{' '}
              meses
            </span>
            <a
              href={path.curriculum}
              target="_blank"
              className="font-bold text-sm md:text-lg mt-6 block text-indigo-700 hover:text-indigo-800"
            >
              Ver plan de estudios
            </a>
          </div>
          <YTVideo videoId={path.youtubeVideoId} />
        </section>
        <div className="w-full bg-gray-50">
          {path.benefits && (
            <section className="mx-auto container py-6 px-2">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 w-full">
                Gracias a esta ruta será capaz de
              </h2>
              <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 md:py-16">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                  {path.benefits.map(({ title, description }) => (
                    <div
                      className="mx-auto flex max-w-xs flex-col gap-y-4"
                      key={title}
                    >
                      <dt className="text-xl text-gray-600">{title}</dt>
                      <dd
                        className="text-lg font-semibold"
                        style={{
                          color: path.color,
                        }}
                      >
                        {description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          )}
        </div>
        {path.courses && (
          <section className="mx-auto container py-6 px-2" id="cursos">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 w-full mb-6">
              La ruta contiene estos cursos
            </h2>
            <DisplayContents
              className="bg-white"
              items={path.courses.map(
                (course) =>
                  ({
                    ...course,
                    href: `/cursos/${course.id}`,
                  } as any)
              )}
            />
          </section>
        )}
      </div>
      <StickyFooter className="h-20 md:h-24 flex justify-between items-center">
        <div>
          <h2 className="text-md md:text-xl font-bold">{path.name}</h2>
          <RenderPrice
            priceAfterDiscount={path.formattedPriceAfterDiscount}
            money={path.money}
            color={path.color}
            courses={path.courses.length}
          />
        </div>
        <Link
          href="/checkout"
          className="h-min rounded-full md:px-8 px-3.5 py-2.5 text-sm md:text-xl font-semibold text-white shadow-sm hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            backgroundColor: path.color,
          }}
        >
          Lo quiero
        </Link>
      </StickyFooter>
    </>
  )
}

export default Detail
