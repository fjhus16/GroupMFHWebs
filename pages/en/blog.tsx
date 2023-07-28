import { useRouter } from "next/router";
import Link from "next/link";
import Container from "../../components/container";
import MoreStories from "../../components/en/more-stories";
import Layout from "../../components/en/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { useState, useEffect } from "react";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  SwiperCore.use([Autoplay]);
  
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setSlidesPerView(window.innerWidth < 1000 ? 2 : 4);
      }
    };
  
    handleResize(); // Initial calculation
  
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
  
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
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
           <Swiper
                  className="mt-2 mb-4"
                  loop={true}
                  spaceBetween={-20}
                  slidesPerView={slidesPerView}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                >
                  <SwiperSlide key={"all"}>
                  <Link className="my-2" href={`/en/blog`} passHref>
                  <p
                    className={`text-center text-white text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black font-semibold py-3 px-3 lg:px-8 transitions-colors duration-200`}
                  >
                    All
                  </p>
                </Link>
                    </SwiperSlide>
                  {Array.from(categories).map((category) => (
                    <SwiperSlide key={category}>
                      <Link
                        className="my-2"
                        key={category}
                        href={`/en/blog?category=${encodeURIComponent(category)}`}
                        passHref
                      >
                        <p
                          className={`text-center text-white text-sm ism:text-md mx-3 bg-gray-700 hover:bg-white hover:text-black border border-black font-semibold py-3 px-3 lg:px-8 transitions-colors duration-200`}
                        >
                          {category}
                        </p>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
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
