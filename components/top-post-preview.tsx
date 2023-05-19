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
     <Image fill style={{objectFit:"cover"}} priority loading='eager' src={coverImage} alt={title} className='-z-10'/>
     <div className='flex mt-auto pb-6 w-[80%] flex-col items-center justify-center flex-end text-white'>
      <h3 className="font-bold text-white text-2xl xl:text-3xl mr-auto [text-shadow:_3px_3px_3px_rgb(0_0_0_/_80%)] mb-3">
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
          className="text-white text-md xl:text-lg mr-auto [text-shadow:_3px_3px_3px_rgb(0_0_0_/_80%)]">{excerpt}</Link>
    </div>
    </div>
  )
}

export default TopPostPreview
