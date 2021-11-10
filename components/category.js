import Link from 'next/link';
import Heading from './heading';

const Category = ({label, path=false}) => {
  	return path ? <Heading rank="5"><Link href={path}>{label}</Link></Heading>
	  : <Heading rank="5">{label}</Heading>
}
export default Category;
