import DateFormatter from './date-formatter'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
  cat: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  cat
}: Props) => {

  const { asPath } = useRouter()

  return (
    <Link className='' as={`${asPath.substring(0, 3)}/posts/${slug}`} href={`${asPath.substring(0, 3)}/posts/[slug]`}><div>
      <Card square sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
        className='w-[320px] md:w-[400px] min-h-[370px]'>
        <CardMedia
          sx={{ height: 140 }}
          title={title}
        ><div className='relative w-full h-[140px]'><Image fill style={{ objectFit: "cover" }} src={coverImage} alt={title} /></div></CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h6' component="div">
            {title}
          </Typography>
          <Typography variant="body2" className='text-black text-justify max-h-[110px]'>
            {excerpt}
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: "auto" }} className='flex flex-row items-center justify-between mt-auto font-bold text-lg'>
          {cat.replace(';', ', ')}
          <DateFormatter dateString={date} />
        </CardActions>
      </Card>
    </div></Link>
  )
}

export default PostPreview
