
import Image from "next/image"

import Row from './row'
import Col from './col';
import Heading from './heading';
import Paragraph from './paragraph';
import Category from './category';
/*
Faculty Lead: Professor David Crane
Executive Director: Christopher Martz (cgmartz@syr.edu)
Deputy Director: Kanalya Arivalagan (karivala@syr.edu)
Investigations Lead: Rebecca Buchanan (rmbuchan@syr.edu)
Intelligence Lead: Matthew McCartin (mmccarti@syr.edu)
Special Projects Lead: Tina Al-khersan (alkherti@umich.edu)
*/
const people = [
	{
		name: "David M. Crane",
		job: "Retired Professor",
		organization: "College of Law",
		role: "Faculty Lead",
		email: null
	},
	{
		name: "Christopher Martz",
		//job: "Job title",
		organization: "College of Law",
		role: "Executive Director",
		email: "cgmartz@syr.edu"
	},
	{
		name: "Kanalya Arivalagan",
		//job: "Job title",
		organization: "College of Law",
		role: "Deputy Director",
		email: "karivala@syr.edu"
	},
	{
		name: "Rebecca Buchanan",
		//job: "Job title",
		organization: "College of Law",
		role: "Investigations Lead",
		email: "rmbuchan@syr.edu"
	},
	{
		//Intelligence Lead: Matthew McCartin (mmccarti@syr.edu)
		name: "Matthew McCartin",
		//job: "Job title",
		organization: "College of Law",
		role: "Intelligence Lead",
		email: "mmccarti@syr.edu"
	},
	{
		//Special Projects Lead: Tina Al-khersan (alkherti@umich.edu)
		name: "Tina Al-khersan",
		//job: "Job title",
		organization: "College of Law",
		role: "Special Projects Lead",
		email: "alkherti@umich.edu"
	},
];

const Stack = () => {
	return <section>
		<Row>
		{people.map((person, index) => {
			return <Col key={index} sm="6">
				<Row>
					<Col xs="12" sm="12">
						<Category label={person.role} />
						<Heading rank="3">{person.name}</Heading>
						<Paragraph><a href={`mailto:${person.email}`}>{person.email}</a></Paragraph>
						{/*<Paragraph>{person.organization}</Paragraph>*/}
					</Col>
				</Row>
			</Col>
		})}
		</Row>
	</section>
}
export default Stack;
