import { useRouter } from "next/router";
import Link from "next/link";
import Container from "../../components/container";
import MoreStories from "../../components/en/more-stories";
import Layout from "../../components/en/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  const router = useRouter();
  const { query } = router;
  const selectedCategory = query.category as string;
  const searchQuery = query.search as string;

  // Filter and sort the posts by language and date
  var filteredPosts = allPosts
    .filter((post) => post.lang === "en")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const categories = new Set<string>();

    categories.add("Current");
    
    const postsByCategory: { [category: string]: Post[] } = {};
    filteredPosts.forEach((post) => {
      const postCategories = post.cat.split(";");
      postCategories.forEach((category) => {
        categories.add(category);
        if (!postsByCategory[category]) {
          postsByCategory[category] = [];
        }
        postsByCategory[category].push(post);
      });
    });
    
    // Convert the set of categories to an array
    const sortedCategories = Array.from(categories);
    
    // Sort the array by category name length
    sortedCategories.sort((a, b) => a.length - b.length);
    
    // Move "Current" category to the first position
    const index = sortedCategories.indexOf("Current");
    if (index !== -1) {
      sortedCategories.splice(index, 1);
      sortedCategories.unshift("Current");
    }
    
    // Clear the categories set
    categories.clear();
    
    // Add the sorted categories back into the set
    sortedCategories.forEach((category) => {
      categories.add(category);
    });   

  if (searchQuery != "" && searchQuery != null) {
    filteredPosts = filteredPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const filteredPostsByCategory = selectedCategory
    ? postsByCategory[selectedCategory] || []
    : filteredPosts;

  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        </Head>
        <Container>
          <h2 className="mb-2 text-5xl justify-center w-full flex font-bold">
            Headlines
          </h2>
          <div
            id="yazılar"
            className="pt-2 ism:pt-2 items-center justify-center"
          >
            <div className="flex flex-wrap mt-2 flex-center justify-center">
              <Link href={`/en/blog`} passHref>
                <p
                  className={`text-white text-sm ism:text-md mx-3 bg-black hover:bg-white hover:text-black border border-black  font-semibold py-3 px-3 lg:px-8 duration-200 mb-3 ${
                    !selectedCategory ? "bg-gray-600 text-black" : "bg-black"
                  }`}
                >
                  All
                </p>
              </Link>
              {Array.from(categories).map((category) => (
                <Link
                  key={category}
                  href={`/en/blog?category=${encodeURIComponent(category)}`}
                  passHref
                >
                  <p
                    className={` text-white text-sm ism:text-md mx-3 bg-black hover:bg-white hover:text-black border border-black font-semibold py-3 px-3 lg:px-8 duration-200 mb-3 ${
                      selectedCategory === category
                        ? "bg-gray-600 text-black"
                        : "bg-black"
                    }`}
                  >
                    {category}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            {filteredPostsByCategory.length > 0 ? (
              <MoreStories posts={filteredPostsByCategory} />
            ) : (
              <p></p>
            )}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "lang",
    "cat",
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
