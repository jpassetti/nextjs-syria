import Head from 'next/head'
import Heading from '../../components/heading';
import Row from '../../components/row';
import Col from '../../components/col';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layout';
import SelectList from '../../components/selectlist';
import Stack from '../../components/stack';

const Team = () => {
	return (
		<Layout>
			<Head>
				<title>Leadership | Syrian Accountability Project</title>
				<meta property="og:title" content="Leadership | Syrian Accountability Project" key="title" />
			</Head>
			<Heading rank="1">2021-22 Leadership</Heading>
			<Paragraph intro>The members are comprised from different schools and colleges at Syracuse University.</Paragraph>
			<Row>
				<Col sm="9">
					<Stack />
				</Col>
			</Row>
		</Layout>
	)
}
export default Team;
