import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  
  const { asPath } = useRouter()

  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full max-w-[600px]', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`${asPath.substring(0,3)}/posts/${slug}`}
        href={`${asPath.substring(0,3)}/posts/[slug]`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage

