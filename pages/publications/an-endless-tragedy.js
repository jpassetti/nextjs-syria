
import Link from 'next/link'
import Image from "next/image"
import Layout from '../../components/layout';
import Heading from '../../components/heading';
import Paragraph from '../../components/paragraph';
import Row from '../../components/row';
import Col from '../../components/col';
import Category from '../../components/category';
import ButtonGroup from '../../components/buttongroup'
import Button from '../../components/button'
import Divider from '../../components/divider'

const people = [
	{
		"name" : "David Crane",
		"jobs" : [
			{
				"title" : "Former Chief Prosecutor",
				"organization": "Special Court for Sierra Leone"
			},
			{
				"title": "Principal",
				"organization": "Justice Consultancy International LLC"
			},
		]
	}
];


const AnEndlessTragedy = () => {
	return <Layout>
		<Category label="Publications" path="/publications" />
		<Heading rank="1">An Endless Tragedy</Heading>
		<Paragraph type="intro">A Report on the Incidents Regarding Demonstrations in Gaza March 2018 to December 2018.</Paragraph>
		<Row>
			<Col sm="9">
			<Paragraph>Released March 30, 2019 at Syracuse University.</Paragraph>
		<Paragraph>This report serves as an exploratory account of the violence that occurred along the border of the Occupied Palestine Territory (“Gaza” or “Gaza Strip”) from 30 March 2018 to December 2018. Specifically, the violence that spread in March 2018 took place along the fence that separates Gaza and the Israeli border—within the 300 meters between the Erez Crossing and the Rafah Crossing. The report begins with a general overview of the history of conflict between the Palestinians and the Israelis before examining in detail what the Palestinians call “Land Day” and “Nabka Day” as these are the historic dates that the current protests (called the Great March of Return) are intended to commemorate. Next, the report provides a general overview of the violence that has resulted in more than 19,000 injuries and at least 189 deaths.</Paragraph>

		<Paragraph>The report then provides a day-by-day analysis of the conflict in the Conflict Mapping Narrative and accompanying Crime Base Matrix. Finally, the report concludes with the determination that the certain conduct that took place in the during the border protests posited questions about the line that differentiates civic protests from armed conflicts. The report determines that under the such conduct constitutes both war crimes and crimes against humanity.

		The report also recommends the condemnation of Palestine’s use of incendiary kites as the usage of these weapons is a violation of the laws of armed conflict. The report recommends that the individuals responsible for these crimes be prosecuted by a domestic court of competent jurisdiction and, failing that, the United Nations Security Council should exercise its authority to submit the matter to the Prosecutor of the International Criminal Court in accordance with Article 13(b) of the Rome Statute.</Paragraph>

		<Divider />

		<Heading rank="3">Prepared By</Heading>
		<Paragraph>David M. Crane, Former Chief Prosecutor, Special Court for Sierra Leone; Principal, Justice Consultancy International LLC; In association with the Global Accountability Initiative; Margaret Mabie, Joseph Railey, Esq. Brandon Golfman.</Paragraph>
			</Col>
			<Col sm="3">
				<StaticImage
					src="../../images/cover-an-endless-tragedy.png"
					alt="Cover image for An Endless Tragedy report"
				/>
				<ButtonGroup>
					<Button.download
						level="primary"
						fileName="an-endless-tragedy.pdf"
					/>
				</ButtonGroup>
			</Col>
		</Row>
	</Layout>
}
export default AnEndlessTragedy;
