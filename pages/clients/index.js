import React from 'react';
import Link from 'next/link';
const ClientsPage = () => {
	const clients = [
		{ id: 'jeff', name: 'jeffliu' },
		{ id: 'zexi', name: 'zexi Liu' },
	];
	return (
		<div>
			<ul>
				{clients.map((client) => (
					<li key={client.id}>
						<Link
							href={{ pathname: '/clients/[id]', query: { id: client.id } }}
						>
							{client.name}
						</Link>
					</li>
				))}
				<li>
					<Link href="/clients/jeff">Jeff</Link>
				</li>
				<li>
					<Link href="/clients/liu">liu</Link>
				</li>
			</ul>
			<h1>ClientsPage</h1>
		</div>
	);
};

export default ClientsPage;
