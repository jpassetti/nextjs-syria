import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './button.module.scss';

let cx = classNames.bind(styles);

const Button = ({children, clickHandler, id}) => {
	let btnClasses = cx({
		btn: true,
		close: id === "closeMenuBtn",
		menu_btn: id === "menuBtn"
	});
	return (
		<button className={btnClasses} onClick={clickHandler}>{children}</button>
	)
}
const ButtonPageLink = ({level, path}) => {
	let classNames = cx({
		btn: true,
		primary: level === "primary",
		secondary: level === "secondary",
	});
	return <Link href={path} className={classNames}>
			<a>More information</a>
	</Link>
}
Button.pageLink = ButtonPageLink;

const ButtonDownload = ({level, fileName}) => {
	let classNames = cx({
		btn: true,
		primary: level === "primary",
		secondary: level === "secondary",
	});
	return <Link href={fileName}>
		<a className={classNames}>Download PDF</a>
	</Link>
}

Button.download = ButtonDownload;

export default Button;
