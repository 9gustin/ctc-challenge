import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ImageFallback({ src, fallbackSrc, ...rest }: any) {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      {...rest}
      src={imgSrc}
      onLoadingComplete={(result: any) => {
        if (result.naturalWidth === 0) {
          setImgSrc(fallbackSrc)
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}
