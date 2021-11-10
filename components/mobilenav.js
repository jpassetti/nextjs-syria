import Link from "next/link";

import Button from './button'
import Icon from './icon'
import Divider from './divider'

import styles from './mobilenav.module.scss';

const navLinks = [
	{
		title: "Home",
		path: "/"
	},
	{
		title: "About",
		path: "/about"
	},
	{
		title: "Publications",
		path: "/publications"
	},
	{
		title: "Leadership",
		path: "/leadership"
	},
	{
		title: "Affiliates",
		path: "/affiliates"
	},
	{
		title: "Contact",
		path: "/contact"
	},
];


const MobileNav = ({ closeHandler }) => {
	return (
		<nav className={styles.nav}>
			<Button clickHandler={closeHandler} id="closeMenuBtn">
				<Icon.Close color="white" />
			</Button>
			<ul>
				{navLinks.map((navLink, index) => {
					const {path, title} = navLink;
					return <li key={index}>
						<Link href={path}>
							<a className={styles.navLink} activeClassName={styles.navLinkActive}>{title}</a>
						</Link>
					</li>
				})}
			</ul>
			<Divider color="white" />
			<a href="https://twitter.com/sap_sucol" target="_blank" rel="noreferrer">
				<Icon.Twitter color="white" />
			</a>
		</nav>
	)
}
export default MobileNav;
