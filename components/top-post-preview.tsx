import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}


const TopPostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {

  const { asPath } = useRouter()

  return (
    <div className='h-[400px] flex flex-col items-center justify-center'>
     <Image fill style={{objectFit:"cover"}} src={coverImage} alt={title} className='-z-10'/>
      <div className='flex flex-col items-center justify-center text-white'>
      <h3 className="font-bold text-3xl mb-3 w-[85%] md:w-[65%] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_80%)]">
        <Link
          as={`${asPath.substring(0,3)}/posts/${slug}`}
          href={`${asPath.substring(0,3)}/posts/[slug]`}
          className="hover:underline">
          {title}
        </Link>
      </h3>
      <Link
          as={`${asPath.substring(0,3)}/posts/${slug}`}
          href={`${asPath.substring(0,3)}/posts/[slug]`}
          className="text-lg mb-4 w-[85%] md:w-[65%] [text-shadow:_3px_3px_3px_rgb(0_0_0_/_80%)]">{excerpt}</Link>
    </div>
    </div>
  )
}

export default TopPostPreview
