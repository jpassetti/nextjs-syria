import Heading from '../components/heading';
import Paragraph from '../components/paragraph';

import Layout from '../components/layout';

const About = () => {
	return (
		<Layout>
			<Heading rank="1">About</Heading>
			<Paragraph type="intro"><strong>The Syrian Accountability Project (SAP)</strong> is an internationally recognized cooperative effort between activists, non-governmental organizations, students, and other interested parties to document war crimes and crimes against humanity in the context of the Syrian Crisis.</Paragraph>
			<Paragraph>Now in its fifth phase, the project aims to produce non-partisan, high quality analysis of open source materials and to catalogue that information relative to applicable bodies of law; including, the Geneva Conventions, the Rome Statute of the International Criminal Court, and Syrian Penal Law.</Paragraph>
			<Paragraph>The SAP primarily creates documentation products in a narrative and graphical format, as well as a quarterly and annual trend analysis of ongoing crimes. Furthermore, the SAP publishes issue-specific white papers. Its clients include the Syrian National Council, United Nations, U.S. Department of State, and the International Criminal Court.</Paragraph>
		</Layout>
	)
}
export default About;
