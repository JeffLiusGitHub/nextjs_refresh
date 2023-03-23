// import React from 'react';
import { useRouter } from 'next/router';

const porfolioProjectPage = () => {
	const router = useRouter();
	console.log(router.pathname);
    console.log(router.query);

	return (
		<div>
			<h1>Profolio project Page</h1>
		</div>
	);
};

export default porfolioProjectPage;
