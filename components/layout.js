import { Fragment } from 'react';

import './layout.module.scss';

import Main from './main';
import Row from './row';
import Col from './col';
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
	return (
		<Fragment>
			<Row>
				<Col md="2">
					<Header position="sticky" />
				</Col>
				<Col md="10">
					<Main>
						{children}
					</Main>
				</Col>
			</Row>
			<Footer />
		</Fragment>
	)
}
export default Layout;
