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

const reportsArr = [
	{
		title: "An Endless Tragedy",
		subtitle: "A Report on the Incidents Regarding Demonstrations in Gaza March 2018 to December 2018",
		image: "gaza-crimes.jpg",
		slug: "an-endless-tragedy",
		file: "an-endless-tragedy-by-syrian-accountability-project-syracuse-university.pdf"
	},
	{
		title: "Report on the Yazidi Genocide",
		subtitle: "Mapping Atrocity in Iraq and Syria / 30 Oct 2017",
		image: "yazidi-genocide.jpg",
		slug: "yazidi-genocide",
		file: "report-on-the-yazidi-genocide-syrian-accountability-project-syracuse-university.pdf"
	},
	{
		title: "Idlib Left Breathless",
		subtitle: "The Chemical Attack in Khan Sheikhoun / 4 April 2017",
		image: "idlib-left-breathless-by-jeff-passetti.jpg",
		slug: "idlib-left-breathless",
		file: "idlib-left-breathless-white-paper-by-syrian-accountability-project-syacuse-university.pdf"
	},
	{
		title: "Covered in dust, veiled by shadow",
		subtitle: "The Siege And Destruction Of Aleppo",
		image: "covered-in-dust-veiled-by-shadow-by-jeff-passetti.jpg",
		slug: "covered-in-dust",
		file: "covered-in-dust-veiled-by-shadow-by-syrian-accountability-project-syacuse-university.pdf"
	},
	{
		title: "Looking through the window darkly",
		subtitle: "A Snapshot Analysis of Rape in Syria / 2011–2015",
		image: "05.jpg",
		slug: "looking-through-the-window-darkly",
		file: "looking-through-the-window-darkly-a-snapshot-analysis-of-rape-in-syria-by-syrian-accountability-project-syracuse-university.pdf"
	},
]


const Reports = () => {
	return (
		<Layout>
			<Head>
				<title>Publications | Syrian Accountability Project</title>
				<meta property="og:title" content="Publications | Syrian Accountability Project" key="title" />
			</Head>
			<Heading rank="1">Publications</Heading>
			<Paragraph type="intro">The Syrian Accountability Project publishes issue-specific white papers for clients including the Syrian National Council, United Nations, U.S. Department of State, and the International Criminal Court.</Paragraph>
			<Row>
				{reportsArr.map((report, index) => {
					const { title, subtitle, image, slug, file } = report;
					return <Col sm="6">
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
export default Reports;
