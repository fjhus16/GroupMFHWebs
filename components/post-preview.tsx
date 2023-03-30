import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

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
      <Card sx={{ 
    height: "100%",
    display: "flex",
    flexDirection: "column"}}
   className='w-[300px] md:w-[400px] min-h-[400px]'>
        <CardMedia
          sx={{ height: 140 }}
          image={coverImage}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom component="div" className='font-bold text-lg'>
            {title}
          </Typography>
          <Typography variant="body2" className='text-black max-h-[110px]'>
            {excerpt}
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: "auto" }} className='flex flex-row items-center justify-between mt-auto'>
          <Link className='hover:bg-black hover:text-white text-2xl pt-1 pb-1 pl-2 pr-2 mt-1 mb-3 duration-1000' as={`${asPath.substring(0, 3)}/posts/${slug}`} href={`${asPath.substring(0, 3)}/posts/[slug]`}>Read article</Link>
          <DateFormatter dateString={date} />
        </CardActions>
      </Card>

    </div>





  )
}

export default PostPreview
