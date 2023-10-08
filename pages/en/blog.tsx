import { useRouter } from "next/router";
import Container from "../../components/container";
import MoreStories from "../../components/en/more-stories";
import Layout from "../../components/en/layout";
import { getAllArticles } from "../../lib/api";
import Head from "next/head";
import { Article } from "../../interfaces/post";
import { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  allArticles: Article[];
};

export default function Blog({ allArticles }: Props) {
  const router = useRouter();
  const { query } = router;
  const selectedCategory = query.category as string;
  const searchQuery = query.search as string;

  var filteredArticles = allArticles;

  const categories = new Set<string>();

  categories.add("Current");

  const postsByCategory: { [category: string]: Article[] } = {};
  filteredArticles.forEach((article) => {
    const postCategories = article.data.attributes.category.split(";");
    postCategories.forEach((category) => {
      categories.add(category);
      if (!postsByCategory[category]) {
        postsByCategory[category] = [];
      }
      postsByCategory[category].push(article);
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
    filteredArticles = filteredArticles.filter((article) =>
      article.data.attributes.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }

  const filteredArticlesByCategory = selectedCategory
    ? postsByCategory[selectedCategory] || []
    : filteredArticles;

  useEffect(() => {
    if (filteredArticlesByCategory.length === 0) {
      router.push("/en/blog");
    }
  }, [filteredArticlesByCategory]);

  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
        <meta
          name="description"
          content="MFH Group: Comprehensive financial, administrative, and legal services. Tax consulting, dispute resolution, establishment procedures, and more. Trust us for tailored solutions."
        />
        <meta name="language" content="EN"/>
        </Head>
        <Container>
          <h2 className="mb-2 text-5xl justify-center w-full flex font-bold">
            Headlines
          </h2>
          <div
            id="yazılar"
            className="pt-2 ism:pt-2 items-center justify-center"
          >
            <div className="flex flex-wrap mt-2 mb-4 flex-center justify-center">
              <Accordion className="w-[80vw] md:w-[80vw] fhd:w-[60vw]">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography component="div">
                    <Box fontWeight="bold" display="inline">
                      Categories
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ButtonGroup
                    color="inherit"
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text"
                    size="large"
                    fullWidth
                  >
                    <Button
                      style={{
                        color: "black",
                        textTransform: "none",
                        justifyContent: "left",
                      }}
                      fullWidth
                      key="All"
                    >
                      <a
                        className="whitespace-nowrap shrink w-full"
                        style={{
                          color: "black",
                          textTransform: "none",
                          justifyContent: "left",
                          textAlign: "left",
                          width: "100%",
                        }}
                        href={"/en/blog"}
                      >
                        All
                      </a>
                    </Button>
                    {Array.from(categories).map((category) => (
                      <Button
                        style={{
                          color: "black",
                          textTransform: "none",
                          justifyContent: "left",
                          textAlign: "left",
                        }}
                        fullWidth
                        key={category}
                      >
                        <a
                          className="text-left w-full"
                          style={{
                            color: "black",
                            textTransform: "none",
                            justifyContent: "left",
                            textAlign: "left",
                            width: "100%",
                          }}
                          href={`/en/blog?category=${encodeURIComponent(
                            category
                          )}`}
                        >
                          {category}
                        </a>
                      </Button>
                    ))}
                  </ButtonGroup>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div>
            {filteredArticlesByCategory.length > 0 ? (
              <MoreStories allArticles={filteredArticlesByCategory} />
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
  const allArticles = await getAllArticles("en", 1000);

  return {
    props: { allArticles },
    revalidate: 600,
  };
};
