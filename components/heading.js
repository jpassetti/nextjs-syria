import classNames from 'classnames/bind';
import styles from './heading.module.scss';

let cx = classNames.bind(styles);

const Heading = ({
	rank = 2,
	children,
	type = 'headline',
	mt,
	className
}) => {
	const Tag = rank > 6 ? 'h6' : `h${rank}`;

	let headingClasses = cx({
		heading: true,
		[`${Tag}`]: rank,
		[`${className}`]: className,
		[`mt-4`]: mt === "4",
	});


	return (
		<Tag className={headingClasses}>
			{children}
		</Tag>
	);
};
export default Heading;
