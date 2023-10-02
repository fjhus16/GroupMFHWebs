import Container from "../../components/container";
import ContactForm from "../../components/en/contactform";
import Layout from "../../components/en/layout";
import Head from "next/head";
import MapChart from "../../components/en/map";
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
          content="MFH Group: Comprehensive financial, administrative, and legal services. Tax consulting, dispute resolution, establishment procedures, and more. Trust us for tailored solutions."
        />
        <meta name="language" content="EN"/>
        </Head>
        <Container>
          <section className="flex-col flex items-center md:justify-between pt-6 pb-6">
            <h2 className="mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
              Our Global Network
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
                  Our network in Europe
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
                    <Link href={"/en/about"}>Germany</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="Netherlands"
                  >
                    <Link href={"/en/about"}>Netherlands</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="Serbia"
                  >
                    <Link href={"/en/belgrade"}>Serbia</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="Spain"
                  >
                    <Link href={"/en/about"}>Spain</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="Sweden"
                  >
                    <Link href={"/en/about"}>Sweden</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="Türkiye"
                  >
                    <Link href={"/en/about"}>Türkiye</Link>
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                    key="United Kingdom"
                  >
                    <Link href={"/en/london"}>United Kingdom</Link>
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
