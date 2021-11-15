import Head from 'next/head'
import Image from "next/image"
import Heading from '../../components/heading'
import Layout from '../../components/layout'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'
import ButtonGroup from '../../components/buttongroup'
import Button from '../../components/button'
import Paragraph from '../../components/paragraph'

import { getPublications } from '../../lib/api'

const Publications = () => {
	const publicationsArr = getPublications()
	return (
		<Layout>
			<Head>
				<title>Publications | Syrian Accountability Project</title>
				<meta property="og:title" content="Publications | Syrian Accountability Project" key="title" />
			</Head>
			<Heading rank="1">Publications</Heading>
			<Paragraph intro>The Syrian Accountability Project publishes issue-specific white papers for clients including the Syrian National Council, United Nations, U.S. Department of State, and the International Criminal Court. Issues range from conflict studies, genocide, slavery, or famine and include comprehensive analysis of key issues related to justice, accountability, and human rights. SAP collaborates with writers and editors across the globe to produce these timely publications.</Paragraph>
			<Row>
				{publicationsArr.map((publication, index) => {
					const { title, subtitle, image, file } = publication;
					return <Col sm="6" key={index}>
						<Card>
							<Image
								src={`/images/${image}`}
								alt={title}
								width={2244}
								height={1372}
							/>
							<Card.content>
								<Heading rank="3" content="">{title}</Heading>
								<Heading rank="4" content="">{subtitle}</Heading>
								<ButtonGroup>
									<Button.download
										level="primary"
										fileName={`/docs/${file}`}
									/>
								</ButtonGroup>
							</Card.content>
						</Card>
					</Col>
				})}
			</Row>
		</Layout>
	)
}
export default Publications;
