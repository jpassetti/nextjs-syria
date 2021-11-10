import Image from "next/image"

import Layout from '../components/layout'
import Row from '../components/row'
import Col from '../components/col'
import Card from '../components/card'
import ButtonGroup from '../components/buttongroup'
import Button from '../components/button'
import Heading from '../components/heading'
import Paragraph from '../components/paragraph'


// markup
const IndexPage = () => {
  return (
	 <Layout>
		<title>Syrian Accountability Project</title>
		<section>
			  <Paragraph type="intro">The <strong>Syrian Accountability Project</strong> (SAP) is an internationally recognized cooperative effort between activists, non-governmental organizations, students, and other interested parties to document war crimes and crimes against humanity in the context of the Syrian Crisis.</Paragraph>
			  <Paragraph>The project aims to produce non-partisan, high quality analysis of open source materials and to catalogue that information relative to applicable bodies of law; including, the Geneva Conventions, the Rome Statute of the International Criminal Court, and Syrian Penal Law.</Paragraph>
			  <Paragraph>The SAP primarily creates documentation products in a narrative and graphical format, as well as a quarterly and annual trend analysis of ongoing crimes. Furthermore, the SAP publishes issue-specific white papers as well as contributed to the newly established <strong>Uyghur Genocide Project</strong>. Its clients include the Syrian National Council, United Nations, U.S. Department of State, and the International Criminal Court.</Paragraph>
		</section>
		<section>
			<Heading mt="4" rank="3">Lastest publication</Heading>
			<Row>
				  <Col sm="6">
					  <Card>
						  <Image
							  src="/images/gaza-crimes.jpg"
							  alt="Gaza Crimes"
							  width={2244}
							  height={1372}
						  />
						  <Card.content>
							  <Heading rank="3" content="">An Endless Tragedy</Heading>
							  <Heading rank="4" content="">A Report on the Incidents Regarding Demonstrations in Gaza March 2018 to December 2018</Heading>
							  <ButtonGroup>
								  <Button.download
									  level="primary"
									  fileName={`/docs/an-endless-tragedy-by-syrian-accountability-project-syracuse-university.pdf`}
								  />
							  </ButtonGroup>
						  </Card.content>
					  </Card>
				  </Col>
			</Row>
		</section>
	</Layout >
  )
}

export default IndexPage
