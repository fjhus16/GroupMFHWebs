import PostPreview from '../post-preview'
import type Post from '../../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="flex flex-wrap justify-center mb-4">
        {posts.map((post) => (
          <div key={post.slug} className="px-4 mb-8">
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              cat={post.cat}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoreStories
