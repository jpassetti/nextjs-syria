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
			<Paragraph type="intro"><strong>The Syrian Accountability Project (SAP)</strong> is an internationally recognized cooperative effort between activists, non-governmental organizations, students, and other interested parties to document war crimes and crimes against humanity in the context of the Syrian Crisis.</Paragraph>
			<Paragraph>Now in its fifth phase, the project aims to produce non-partisan, high quality analysis of open source materials and to catalogue that information relative to applicable bodies of law; including, the <a href="https://www.icrc.org/en/war-and-law/treaties-customary-law/geneva-conventions" target="_blank">Geneva Conventions</a>, the <a href="https://www.icc-cpi.int/resource-library/documents/rs-eng.pdf" target="_blank">Rome Statute of the International Criminal Court</a>, and <a href="https://wipolex.wipo.int/en/legislation/details/10918" target="_blank">Syrian Penal Law</a>.</Paragraph>
			<Paragraph>The SAP primarily creates documentation products in a narrative and graphical format, as well as a quarterly and annual trend analysis of ongoing crimes. Furthermore, the SAP publishes issue-specific white papers. Its clients include the <a href="http://syriancouncil.org/" target="_blank">Syrian National Council</a>, <a href="https://www.un.org/" target="_blank">United Nations</a>, <a href="https://www.state.gov/" target="_blank">U.S. Department of State</a>, and the <a href="https://www.icc-cpi.int/" target="_blank">International Criminal Court</a>.</Paragraph>
		</Layout>
	)
}
export default About;
