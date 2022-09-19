import Head from 'next/head'
import Layout from '../components/layout';
import Row from '../components/row'
import Col from '../components/col';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Category from '../components/category';

const Contact = () => {
	return (
		<Layout>
			<Head>
				<title>Contact | Syrian Accountability Project</title>
				<meta property="og:title" content="Contact | Syrian Accountability Project" key="title" />
			</Head>
			<Heading rank="1">Contact</Heading>
			<Paragraph type="intro">If you have any questions or inquiries, please contact us.</Paragraph>
			<Row>
				<Col sm="6">
					<Row>
						<Col xs="12" sm="12">
							<Category label="Executive Director" />
							<Heading rank="3">Rebecca Buchanan</Heading>
							<Paragraph><a href="mailto:rmbuchan@syr.edu"> rmbuchan@syr.edu</a></Paragraph>
							<Paragraph>College of Law</Paragraph>
						</Col>
					</Row>
				</Col>
			</Row>
		</Layout>
	)
}
export default Contact;
