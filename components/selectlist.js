import styles from './selectlist.module.scss';

const SelectList = () => {
	return <select className={styles.selectList} name="years" id="years">
		<option value="2021">2021</option>
		<option value="2020">2020</option>
		<option value="2019">2019</option>
		<option value="2018">2018</option>
	</select>
}
export default SelectList;
