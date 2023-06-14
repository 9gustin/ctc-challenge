import { FC } from 'react'
import { LearningPath } from '../../services/paths/types'
import ImageFallback from '../../components/ImageFallback'

const Home: FC<{
  paths: LearningPath[]
}> = ({ paths }): React.ReactNode => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">
            Elegi la ruta ideal para tu hij@
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {paths
              ? paths.map(({ id, name, description, courses }) => (
                  <div className="group relative" key={id}>
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <ImageFallback
                        height={320}
                        width={640}
                        src={courses[0]?.thumbnail}
                        fallbackSrc="/assets/default_thumbnail.jpeg"
                        alt={`Imagen para el curso de ${name}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        {name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      {description}
                    </p>
                  </div>
                ))
              : 'empty'}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
