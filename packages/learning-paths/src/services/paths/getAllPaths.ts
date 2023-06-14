import { GetAllPathsResponse, LearningPath } from './types'

export const getAllPaths = async (
  country: string
): Promise<LearningPath[] | null> => {
  try {
    const response = await fetch(
      `${process.env.MS_LEARNING_PATHS}/learning-paths`
    )
  
    if (response.status !== 200) {
      console.warn({
        status: response.status,
        body: await response.text(),
        message: 'Error fetching learning paths',
      });
      return null;
    }
  
    const paths = (await response.json()) as GetAllPathsResponse
  
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
            .map(({ order_in_learning_path, ...rest }) => rest),
          description,
          secondaryColor: secondary_color,
          formattedPrice: 1,
          durationInMonths: 1,
          formattedPriceAfterDiscount: 1,
        })
      )
  } catch (error: any) {
    console.error({
      stack: error.stack,
      message: error.message || 'Error fetching learning paths',
    });
    return null;
  }
}
