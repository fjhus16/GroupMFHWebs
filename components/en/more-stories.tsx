import PostPreview from '../post-preview'
import Article from '../../interfaces/post'

type Props = {
  allArticles: Article[]
}

const MoreStories = ({ allArticles }: Props) => {
  return (
    <section>
      <div className="flex flex-wrap justify-center mb-4">
        {allArticles.map((article) => (
          <div key={article.data.id} className="px-4 mb-8">
            <PostPreview
              title={article.data.attributes.title}
              coverImageUrl={"https://api.groupmfh.com"+article.data.attributes.coverImage.data.attributes.url}
              date={article.data.attributes.date.toString()}
              excerpt={article.data.attributes.excerpt}
              category={article.data.attributes.category}
              id={article.data.id.toString()}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoreStories
