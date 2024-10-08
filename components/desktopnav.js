import Link from "next/link";

import Icon from "./icon";
import Divider from "./divider";

import styles from "./desktopnav.module.scss";

const navLinks = [
 {
  title: "Home",
  path: "/",
 },
 {
  title: "About",
  path: "/about",
 },
 {
  title: "Publications",
  path: "/publications",
 },
 // {
 // 	title: "Leadership",
 // 	path: "/leadership"
 // },
 {
  title: "Affiliates",
  path: "/affiliates",
 },
 {
  title: "Contact",
  path: "/contact",
 },
];

const DesktopNav = () => {
 return (
  <nav className={styles.desktop_nav}>
   <ul>
    {navLinks.map((navLink, index) => {
     const { path, title } = navLink;
     return (
      <li key={index}>
       <Link href={path}>
        <a className={styles.navLink}>{title}</a>
       </Link>
      </li>
     );
    })}
   </ul>
   <Divider />
   <a href="https://twitter.com/sap_sucol" target="_blank" rel="noreferrer">
    <Icon.Twitter />
   </a>
  </nav>
 );
};
export default DesktopNav;
