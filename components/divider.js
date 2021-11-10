import classNames from 'classnames/bind'

import styles from './divider.module.scss'

let cx = classNames.bind(styles)

const Divider = ({color}) => {
	let dividerClasses = cx({
		divider: true,
		white: color === "white"
	});
	return (
		<hr className={dividerClasses} />
	)
}
export default Divider;
