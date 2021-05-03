import Header from './Header';
import Footer from './footer';
import Head from 'next/head';

const Layouts = ({ children }) => {
	return (
		<>
			<Head>
				<title>Djibouti Abroad</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Head>
			<Header />
			<main> {children} </main>
            <Footer/>
		</>
	);
};

export default Layouts;
