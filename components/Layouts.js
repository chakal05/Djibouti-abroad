
import Header from '../components/Header'
const Layouts = ({ children }) => {
	return (
		<>
            <Header/>
				<main> {children} </main>
	
		</>
	);
};

export default Layouts;
