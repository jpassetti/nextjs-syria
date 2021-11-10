const Button = ({label}) => {
	return (
		<button className="btn">{label}</button>
	)
}
const ButtonDownload = () => {
	return <Button label={label} />
}

Button.download = ButtonDownload;

export default Button;
