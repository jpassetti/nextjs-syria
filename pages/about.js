import Head from 'next/head'
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';

import Layout from '../components/layout';

const About = () => {
	return (
		<Layout>
			<Head>
				<title>About | Syrian Accountability Project</title>
				<meta property="og:title" content="About | Syrian Accountability Project" key="title" />
			</Head>
			<Heading rank="1">About</Heading>
			<Paragraph intro>Founded by Professor David Crane, former Chief Prosecutor for the Special Court for Sierra Leone,  SAP aims to produce non-partisan, high quality analysis of open source materials and to catalogue that information relative to applicable bodies of law; including, the <a href="https://www.icrc.org/en/war-and-law/treaties-customary-law/geneva-conventions" target="_blank">Geneva Conventions</a>, the <a href="https://www.icc-cpi.int/resource-library/documents/rs-eng.pdf" target="_blank">Rome Statute of the International Criminal Court</a>, and <a href="https://wipolex.wipo.int/en/legislation/details/10918" target="_blank">Syrian Penal Law</a>.</Paragraph>

			<Paragraph>SAP primarily creates documentation products in a narrative and graphical format, as well as a quarterly and annual trend analysis of ongoing crimes. Furthermore, the SAP publishes issue-specific white papers. Its clients include the <a href="http://syriancouncil.org/" target="_blank">Syrian National Council</a>, <a href="https://www.un.org/" target="_blank">United Nations</a>, <a href="https://www.state.gov/" target="_blank">U.S. Department of State</a>, and the <a href="https://www.icc-cpi.int/" target="_blank">International Criminal Court</a>. As a subsidiary of the Global Accountability Network, SAP collaborates with accountability projects and organizations across the globe to hold war criminals accountable for their heinous acts.</Paragraph>
		</Layout>
	)
}
export default About;
