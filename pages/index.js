import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout";
import Row from "../components/row";
import Col from "../components/col";
import Card from "../components/card";
import ButtonGroup from "../components/buttongroup";
import Button from "../components/button";
import Heading from "../components/heading";
import Paragraph from "../components/paragraph";

import { getPublications } from "../lib/api";

// markup
const IndexPage = () => {
 const publicationsArr = getPublications();
 const { title, subtitle, image, file } = publicationsArr[0];
 return (
  <Layout>
   <Head>
    <title>Syrian Accountability Project | Syracuse University</title>
    <meta
     property="og:title"
     content="Syrian Accountability Project | Syracuse University"
     key="title"
    />
    <meta
     name="description"
     content="The Syrian Accountability Project (SAP) is an internationally recognized cooperative effort between activists, non-governmental organizations, students, and other interested parties to document war crimes and crimes against humanity in the context of the Syrian Crisis."
     key="description"
    />
   </Head>
   <section>
    <Paragraph intro>
     The <strong>Syrian Accountability Project</strong> (SAP) is an
     internationally recognized cooperative effort between activists,
     non-governmental organizations, students, and other interested parties to
     document war crimes and crimes against humanity in the context of the
     Syrian Crisis.
    </Paragraph>
    <Paragraph>
     The project aims to produce non-partisan, high quality analysis of open
     source materials and to catalogue that information relative to applicable
     bodies of law; including, the Geneva Conventions, the Rome Statute of the
     International Criminal Court, and Syrian Penal Law.
    </Paragraph>
    <Paragraph>
     SAP primarily creates documentation products in a narrative and graphical
     format, as well as a quarterly and annual trend analysis of ongoing crimes.
     Furthermore, the SAP publishes issue-specific white papers as well as
     contributed to the newly established{" "}
     <strong>Pacific Rim Accountability Project</strong>. Its clients include
     the Syrian National Council, United Nations, U.S. Department of State, and
     the International Criminal Court.
    </Paragraph>
   </section>
   <section>
    <Heading mt="4" rank="3">
     Latest publication
    </Heading>
    <Row>
     <Col sm="6">
      <Card>
       <Image src={`/images/${image}`} alt={title} width={2244} height={1372} />
       <Card.content>
        <Heading rank="3" content="">
         {title}
        </Heading>
        <Heading rank="4" content="">
         {subtitle}
        </Heading>
        <ButtonGroup>
         <Button.download level="primary" fileName={`/docs/${file}`} />
        </ButtonGroup>
       </Card.content>
      </Card>
     </Col>
    </Row>
   </section>
  </Layout>
 );
};

export default IndexPage;
