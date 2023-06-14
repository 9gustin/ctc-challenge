export type PathTypes = 'all' | 'development' | 'design_and_creativity'

interface CourseResponse {
  id: number
  name: string
  thumbnail: string
  description: string
  order_in_learning_path: number
}

interface LearningPathResponse {
  id: number
  name: string
  slug: string
  icon: string
  order: number
  level: number
  call_out: string
  duration: string
  courses: CourseResponse[]
  amount_usd: string
  amount_pen: string
  amount_mxn: string
  amount_col: string
  main_color: string
  description: string
  has_discount: boolean
  secondary_color: string
  has_seo_noindex: boolean
  number_of_courses: number
  age_range_min_max: string
  gradient_colors: string[]
  discount_percentage: string
  amount_after_discount_usd: string
  amount_after_discount_pen: string
  amount_after_discount_mxn: string
  amount_after_discount_col: string
}

export type GetAllPathsResponse = Record<PathTypes, LearningPathResponse[]>

export interface LearningPath {
  id: number
  name: string
  slug: string
  color: string
  level: number
  callOut: string
  ageRange: string
  courses: Omit<CourseResponse, 'order_in_learning_path'>[]
  description: string
  secondaryColor: string
  formattedPrice: string
  durationInMonths: number
  formattedPriceAfterDiscount: string
}

export const CountryPriceMapper = {

}