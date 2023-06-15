import clsx from 'clsx'
import { ALL_PATHS } from '../constants'
import { FC } from 'react'

export const AgeFilters: FC<{
  options: string[]
  selected: string
  onSelect: (age: string) => void
}> = ({ options, selected, onSelect }) => {
  const buildOnClick = (age: string) => () => {
    onSelect(age)
  }

  const buildCn = (age: string) => {
    return clsx(
      'text-md py-1 text-gray-900 mb-2 rounded-full py-1 px-3 bg-indigo-50 md:bg-white md:border-2',
      selected === age
        ? 'border border-indigo-500'
        : 'md:border-gray-300'
    )
  }

  return (
    <>
      <p className="text-xl md:text-xl font-bold text-gray-800 mb-2">Edades</p>
      <div className="flex gap-1 flex-wrap">
        <button
          className={buildCn(ALL_PATHS)}
          onClick={buildOnClick(ALL_PATHS)}
        >
          Todas
        </button>
        {options.map((age) => (
          <button
            className={buildCn(age)}
            key={age}
            onClick={buildOnClick(age)}
          >
            {age}
          </button>
        ))}
      </div>
    </>
  )
}
