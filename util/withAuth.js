import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
//import verifyToken from "services/verifyToken";


const withAuth = (WrappedComponent) => {
	return (props) => {
		const Router = useRouter();
		const [verified, setVerified] = useState(false);

		useEffect(async () => {
			const accessToken = localStorage.getItem('accessToken');
			// if no accessToken was found,then we redirect to "/" page.
			if (!accessToken) {
				Router.replace('/');
			} else {
				// we call the api that verifies the token.
				const data = { verified: 'false' }; //await verifyToken(accessToken);
				// if token was verified we set the state.
				if (data.verified) {
					setVerified(data.verified);
				} else {
					// If the token was fraud we first remove it from localStorage and then redirect to "/"
					localStorage.removeItem('accessToken');
					Router.replace('/');
				}
			}
		}, []);

		if (verified) {
			return <WrappedComponent {...props} />;
		} else {
			return null;
		}
	};
};

export default withAuth;
