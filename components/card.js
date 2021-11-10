import styles from './card.module.scss';

const Card = ({children}) => {

	return (
		<div className={styles.card}>
			{children}
		</div>
	)
}
const CardContent = ({children}) => {
	return <div className={styles.cardContent}>{children}</div>
}
Card.content = CardContent;

export default Card;
