import Head from "next/head"
import Link from "next/link"

import Layout from'../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'
import Heading from '../../components/heading'
import Paragraph from '../../components/paragraph'
import Category from '../../components/category'

import { getPeople, getPersonBySlug } from '../../lib/api'


export async function getStaticPaths() {

	const people = await getPeople()

	const paths = people.map(person => {
		const { slug } = person
		return {
			params: {
				id: slug,
			}
		}
	})
	return {
		paths,
		fallback: false,
	}
}
export async function getStaticProps({ params }) {

	const personData = await getPersonBySlug(params.id)
	return {
		props: {
			personData,
		}
	}

}

export default function Person({ personData }) {

	const { role, name, email, bio } = personData;

	return (
		<Layout>
			<Head>
				<title>{name} | Syrian Accountability Project</title>
				<meta property="og:title" content={`${name} | Syrian Accountability Project`} key="title" />
			</Head>
				<Row>
					<Col xs="12" sm="12">
						<Category label={role} />
						<Heading rank="1">{name}</Heading>
						{email && <Paragraph mb="1"><a href={`mailto:${email}`}>{email}</a></Paragraph>}
						{bio && <div dangerouslySetInnerHTML={{__html:bio}} />}
						<Paragraph mt="1">
							<Link href={`/leadership`}>
							<a><span dangerouslySetInnerHTML={{ __html: "&laquo;" }}></span> Back to leadership</a>
							</Link>
						</Paragraph>
					</Col>
				</Row>
		</Layout>
	)
}
