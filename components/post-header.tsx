import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImageUrl: string
  date: string
}

const PostHeader = ({ title, coverImageUrl, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-4 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="sm:mx-0">
        <CoverImage title={title} src={"https://api.groupmfh.com"+coverImageUrl} />
      </div>
     
    </>
  )
}

export default PostHeader
