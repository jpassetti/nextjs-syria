import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

import classNames from 'classnames/bind'

import MobileNav from './mobilenav'
import DesktopNav from './desktopnav'
import Icon from './icon'

import Button from './button'

import styles from './header.module.scss';

let cx = classNames.bind(styles);

const Header = ({position}) => {
	const [isMenuVisible, setMenuVisible] = useState(false)

	let headerClasses = cx({
		header: true,
		sticky : position === 'sticky'
	});


	return <>
		<div className={styles.mobile_header}>
			<Button id="menuBtn" clickHandler={() => { setMenuVisible(true) }}>
				<Icon.Menu color="white" />
			</Button>
		</div>
		<header className={headerClasses}>
			<Link href="/">
				<Image
					className={styles.logo}
					src="/images/syrian-accountability-project-logo.jpg" 
					alt="Syrian Accountability Project"
					width={266}
					height={266}
				/>
			</Link>
			
			{isMenuVisible && <MobileNav closeHandler={() => {setMenuVisible(false)}} />}
			<DesktopNav />
		</header>
	</>
}
export default Header;
