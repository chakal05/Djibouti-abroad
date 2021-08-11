import Header from './Header';
import Footer from './footer';
const Layouts = ({ children }) => {
	return (
		<>
			
			<Header />
			<main> {children} </main>
            <Footer/>
		</>
	);
};

export default Layouts;
