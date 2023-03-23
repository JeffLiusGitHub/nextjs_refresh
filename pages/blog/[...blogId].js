import React from 'react';
import { useRouter } from 'next/router';

const blogPostPage = () => {
	const router = useRouter();
	console.log(router.query);
	return (
		<div>
			<h1>blogPostPage</h1>
		</div>
	);
};

export default blogPostPage;
