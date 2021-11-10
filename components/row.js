import classNames from 'classnames/bind';
import styles from './row.module.scss';
let cx = classNames.bind(styles);

const Row = ({ children, justifyContentSpaceBetween, alignItemsCenter, tableHeader}) => {
	let rowClasses = cx({
		row: true,
		justifyContentSpaceBetween: justifyContentSpaceBetween,
		alignItemsCenter: alignItemsCenter,
		tableHeader: tableHeader
	});
	return <div className={rowClasses}>{children}</div>
}
export default Row;
