import Image from 'next/image'
import styles from './icon.module.scss';

const Icon = () => {
	return <p>Icon</p>
}
const Instagram = () => {
	return <Image 
		src="/icons/instagram.inline.svg"
		width={30}
		height={30}
		className={styles.icon}
	/>
}
Icon.Instagram = Instagram;

const Twitter = ({color}) => {
	if (color === "white") {
		return <Image
			src="/icons/twitter--white.svg"
			width={30}
			height={30}
			className={styles.icon}
		/>
	} else {
		return <Image
			src="/icons/twitter--black.svg"
			width={30}
			height={30}
			className={styles.icon}
		/>
	}
	
}
Icon.Twitter = Twitter;

const Menu = ({color}) => {
	if (color === "white") {
		return <Image
			src="/icons/menu--white.svg"
			width={30}
			height={30}
			className={styles.icon}
		/>
	} else {
		return <Image
			src="/icons/menu--black.svg"
			width={30}
			height={30}
			className={styles.icon}
		/>
	}
}
Icon.Menu = Menu;

const Close = ({ color }) => {
	if (color === "white") {
		return <Image
			src="/icons/close--white.svg"
			width={30}
			height={30}
			className={styles.icon}
		/>
	} else {
		return <Image
			src="/icons/close--black.svg"
			width={30}
			height={30}
			className={styles.icon}
		/>
	}
}
Icon.Close = Close;

export default Icon
