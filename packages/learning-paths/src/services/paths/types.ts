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
  money: string
  callOut: string
  ageRange: string
  courses: Omit<CourseResponse, 'order_in_learning_path'>[]
  description: string
  secondaryColor: string
  formattedPrice: string
  durationInMonths: number
  formattedPriceAfterDiscount: string
}

export interface Faq {
  question: string
  answer: string
}

export interface Benefit {
  title: string
  description: string
}

export interface CourseDetailResponse {
  id: number
  name: string
  cover: string
  call_out: string
  duration: string
  thumbnail: string
  main_color: string
  curriculum: string
  description: string
  learnings: Benefit[]
  jumbotron_cover: string
  project_summary: string
  youtube_video_id: string
  number_of_sessions: number
  final_project_cover: string
  skills_to_develop: string[]
  jumbotron_cover_mobile: string
  order_in_learning_path: number
  technical_requirements: string[]
  final_project_description: string
}

export interface GetPathResponse {
  id: number
  faqs: Faq[]
  name: string
  cover: string
  duration: string
  call_out: string
  thumbnail: string
  curriculum: string
  main_color: string
  description: string
  benefits: Benefit[]
  amount_usd: string
  amount_pen: string
  amount_mxn: string
  amount_col: string
  secondary_color: string
  youtube_video_id: string
  gradient_colors: string[]
  age_range_min_max: string
  number_of_sessions: number
  technical_requirements: string[]
  courses: CourseDetailResponse[]
  amount_after_discount_usd: string
  amount_after_discount_pen: string
  amount_after_discount_mxn: string
  amount_after_discount_col: string
}

export interface FullCourse {
  id: number
  name: string
  cover: string
  color: string
  callOut: string
  thumbnail: string
  curriculum: string
  description: string
  learnings: Benefit[]
  jumbotronCover: string
  projectSummary: string
  youtubeVideoId: string
  durationInMonths: string
  numberOfSessions: number
  finalProjectCover: string
  skillsToDevelop: string[]
  jumbotronCoverMobile: string
  technicalRequirements: string[]
  finalProjectDescription: string
}

export interface FullLearningPath {
  id: number
  faqs: Faq[]
  name: string
  cover: string
  money: string
  color: string
  callOut: string
  ageRange: string
  thumbnail: string
  curriculum: string
  description: string
  benefits: Benefit[]
  courses: FullCourse[]
  secondaryColor: string
  youtubeVideoId: string
  formattedPrice: string
  durationInMonths: number
  gradientColors: string[]
  numberOfSessions: number
  technicalRequirements: string[]
  formattedPriceAfterDiscount: string
}