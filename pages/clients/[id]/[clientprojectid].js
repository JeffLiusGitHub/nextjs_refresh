import React from 'react';
import { useRouter } from 'next/router';
const selectClientPage = () => {
	const router = useRouter();
    console.log(router.query)
	return (
		<div>
			<h1>selectClientPage</h1>
		</div>
	);
};

export default selectClientPage;
