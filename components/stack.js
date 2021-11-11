import Link from "next/link"
import Image from "next/image"


import Row from './row'
import Col from './col';
import Heading from './heading';
import Paragraph from './paragraph';
import Category from './category';

import { getPeople } from '../lib/api'

const Stack = () => {
	const people = getPeople()
	console.log({people});
	return <section>
		<Row>
			{people.map((person, index) => {
				const {role, name, email, bio, slug } = person;
			return <Col key={index} sm="6">
				<Row>
					<Col xs="12" sm="12">
						<Category label={role} />
						<Heading rank="3">{name}</Heading>
						<Paragraph><a href={`mailto:${email}`}>{email}</a></Paragraph>
						{bio && <Paragraph>
							<Link href={`/leadership/${slug}`}>
								<a>View bio <span dangerouslySetInnerHTML={{ __html: "&raquo;" }}></span></a>
							</Link>	
						</Paragraph>}
				</Col>
				</Row>
			</Col>})}
		</Row>
	</section>
}
export default Stack;
