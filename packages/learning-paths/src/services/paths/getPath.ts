import { GetPathResponse, FullLearningPath } from './types'

export const getPath = async (
  slug: string
): Promise<FullLearningPath | null> => {
  try {
    const response = await fetch(
      `${process.env.MS_LEARNING_PATHS}/learning-paths-all/${slug}`
    )

    if (response.status !== 200) {
      console.warn({
        status: response.status,
        body: await response.text(),
        message: 'Error fetching path',
      })
      return null
    }

    const path = (await response.json()) as GetPathResponse

    if (!path) {
      return null
    }

    const {
      id,
      faqs,
      name,
      cover,
      duration,
      call_out,
      courses,
      benefits,
      thumbnail,
      curriculum,
      main_color,
      amount_usd,
      description,
      secondary_color,
      gradient_colors,
      youtube_video_id,
      age_range_min_max,
      number_of_sessions,
      technical_requirements,
      amount_after_discount_usd,
    } = path

    return {
      id,
      faqs,
      name,
      cover,
      callOut: call_out,
      durationInMonths: Number(duration),
      courses: courses
        .sort((a, b) => a.order_in_learning_path - b.order_in_learning_path)
        .map(
          ({
            id,
            name,
            cover,
            call_out,
            duration,
            thumbnail,
            learnings,
            main_color,
            curriculum,
            description,
            jumbotron_cover,
            project_summary,
            youtube_video_id,
            skills_to_develop,
            number_of_sessions,
            final_project_cover,
            jumbotron_cover_mobile,
            technical_requirements,
            final_project_description,
          }) => ({
            id,
            name,
            cover,
            learnings,
            thumbnail,
            curriculum,
            description,
            callOut: call_out,
            color: main_color,
            durationInMonths: duration,
            jumbotronCover: jumbotron_cover,
            projectSummary: project_summary,
            youtubeVideoId: youtube_video_id,
            skillsToDevelop: skills_to_develop,
            numberOfSessions: number_of_sessions,
            finalProjectCover: final_project_cover,
            jumbotronCoverMobile: jumbotron_cover_mobile,
            technicalRequirements: technical_requirements,
            finalProjectDescription: final_project_description,
          })
        ),
      benefits,
      thumbnail,
      curriculum,
      description,
      color: main_color,
      formattedPrice: amount_usd,
      ageRange: age_range_min_max,
      secondaryColor: secondary_color,
      gradientColors: gradient_colors,
      youtubeVideoId: youtube_video_id,
      numberOfSessions: number_of_sessions,
      technicalRequirements: technical_requirements,
      formattedPriceAfterDiscount: amount_after_discount_usd,
    }
  } catch (error: any) {
    console.error({
      stack: error.stack,
      message: error.message || 'Error fetching learning paths',
    })
    return null
  }
}
