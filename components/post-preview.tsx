import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}


const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {

  const { asPath } = useRouter()

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-xl font-bold mb-3 leading-snug">
        <Link
          as={`${asPath.substring(0, 3)}/posts/${slug}`}
          href={`${asPath.substring(0, 3)}/posts/[slug]`}
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-md mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-md leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
