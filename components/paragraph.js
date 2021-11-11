import classNames from 'classnames/bind';
import styles from './paragraph.module.scss';

let cx = classNames.bind(styles);

const Paragraph = ({type, children, intro, mb, mt}) => {

	let paragraphClasses = cx({
		paragraph: true,
		intro: intro,
		mt1 : mt === "1",
		mt2 : mt === "2",
		mb1 : mb === "1",
		mb2 : mb === "2"
	});

	return (
		<p className={paragraphClasses}>{children}</p>
	);
}
export default Paragraph;
