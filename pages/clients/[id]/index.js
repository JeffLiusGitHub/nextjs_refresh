import React from 'react';
import { useRouter } from 'next/router';
const ClientProjectPage = () => {
	const router = useRouter();
	const loadProjectHandler = () => {
		// router.push('/clients/jeffliu/projecta');
		router.push({
			pathname: '/clients/[id]/[clientprojectid]',
			query: { id: 'jeffliu', clientprojectid: 'projecta' },
		});
		// router.replace('/clients/jeffliu/projecta');
		// replace cannot go back
	};
	return (
		<div>
			<h1> Project of a given client</h1>
			<button onClick={loadProjectHandler}> Load project A</button>
		</div>
	);
};

export default ClientProjectPage;
