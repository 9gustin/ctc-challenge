import { GetAllPathsResponse, LearningPath } from './types'

export const getAllPaths = async (): Promise<LearningPath[] | null> => {
  try {
    const response = await fetch(
      `${process.env.MS_LEARNING_PATHS}/learning-paths`
    )

    if (response.status !== 200) {
      console.warn({
        status: response.status,
        body: await response.text(),
        message: 'Error fetching learning paths',
      })
      return null
    }

    const paths = (await response.json()) as GetAllPathsResponse
    console.warn({ paths })

    return paths.all
      .sort((a, b) => a.order - b.order)
      .map(
        ({
          id,
          name,
          slug,
          main_color,
          description,
          level,
          call_out,
          age_range_min_max,
          secondary_color,
          courses,
          amount_after_discount_usd,
          amount_usd,
          duration,
        }) => ({
          id,
          name,
          slug,
          color: main_color,
          level,
          callOut: call_out,
          ageRange: age_range_min_max,
          courses: courses
            .sort((a, b) => a.order_in_learning_path - b.order_in_learning_path)
            .map(({ id, name, thumbnail, description }) => ({
              id,
              name,
              thumbnail,
              description,
            })),
          description,
          durationInMonths: Number(duration),
          secondaryColor: secondary_color,
          formattedPrice: `USD ${amount_usd}`,
          formattedPriceAfterDiscount: `USD ${amount_after_discount_usd}`,
        })
      )
  } catch (error: any) {
    console.error({
      stack: error.stack,
      message: error.message || 'Error fetching learning paths',
    })
    return null
  }
}
