import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

export const StickyFooter: FC<
  PropsWithChildren<{
    className?: string
  }>
> = ({ children, className }) => {
  return (
    <footer
      className={clsx(
        'fixed bottom-0 left-0 right-0 bg-white p-2 rounded-tr-lg rounded-tl-lg',
        className
      )}
    >
      {children}
    </footer>
  )
}
