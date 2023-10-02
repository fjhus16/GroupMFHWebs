import Container from "../../components/container";
import ContactForm from "../../components/tr/contactform";
import Layout from "../../components/tr/layout";
import Head from "next/head";
import MapChart from "../../components/tr/map";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { Button, ButtonGroup } from "@mui/material";

export default function Global() {
  return (
    <>
      <Layout>
        <Head>
          <title>GroupMFH</title>
          <meta
            name="description"
            content="Vergi danışmanlığı, vergi davaları, yatırım, teşvik ve devlet desteği gibi konularda uzmanlaşmış bir kurumuz."
          />
          <meta name="language" content="TR"/>
        </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Küresel Ağımız
            </h2>
            <div className="w-[80vw] md:w-[80vw] fhd:w-[60vw] border-2 mb-6">
              <MapChart></MapChart>
            </div>
            <Accordion className="w-[80vw] md:w-[80vw] fhd:w-[60vw]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="text-xl font-bold">
                  Avrupa Ağımız
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
                    key="Germany"
                  >
                    <Link href={"/tr/about"}>Almanya</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="United Kingdom"
                  >
                    <Link href={"/tr/london"}>Birleşik Krallık</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="Netherlands"
                  >
                    <Link href={"/tr/about"}>Hollanda</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="Spain"
                  >
                    <Link href={"/tr/about"}>İspanya</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="Sweden"
                  >
                    <Link href={"/tr/about"}>İsveç</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="Serbia"
                  >
                    <Link href={"/tr/belgrade"}>Sırbistan</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="Türkiye"
                  >
                    <Link href={"/tr/about"}>Türkiye</Link>
                  </Button>
                </ButtonGroup>
              </AccordionDetails>
            </Accordion>
          </section>
          <ContactForm />
        </Container>
      </Layout>
    </>
  );
}
