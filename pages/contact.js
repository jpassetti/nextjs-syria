import Layout from '../components/layout';
import Row from '../components/row'
import Col from '../components/col';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Category from '../components/category';

const Contact = () => {
	return (
		<Layout>
			<Heading rank="1">Contact</Heading>
			<Paragraph type="intro">Suspendisse massa metus, scelerisque quis tempor vel, scelerisque sed lacus. </Paragraph>
			<Paragraph>If you have any questions, please email:</Paragraph>
			<Row>
				<Col sm="6">
					<Row>
						<Col xs="12" sm="12">
							<Category label="Executive Director" />
							<Heading rank="3">Christopher Martz</Heading>
							<Paragraph><a href="mailto:cgmartz@syr.edu">cgmartz@syr.edu</a></Paragraph>
							<Paragraph>College of Law</Paragraph>
						</Col>
					</Row>
				</Col>
			</Row>
		</Layout>
	)
}
export default Contact;
