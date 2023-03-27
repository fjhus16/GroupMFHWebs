import TopPostPreview from '../top-post-preview'
import type Post from '../../interfaces/post'

type Props = {
  posts: Post[]
}

const TopStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 pb-16">
        {posts.map((post) => (
          <TopPostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default TopStories
