// import React from 'react'
import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';
const HomePage = (props) => {
	const { products } = props;
	// if (!products) {
	// 	return <div>Loading...</div>;
	// }
	return (
		<div>
			<h1>home page</h1>
			<ul>
				<li>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link href="/clients">client</Link>
				</li>
				{/* <li>Product 1</li>
				<li>Product 2</li>
				<li>Product 3</li> */}
				{products?.map((p) => (
					<li key={p.id}>
						<Link href={`/products/${p.id}`}>{p.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export async function getStaticProps(context) {
	console.log('regenerate');
	const filePath = path.join(process.cwd(), 'data', 'dummy_backend.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);
	// if (data) {
	// 	return {
	// 		rediect: {
	// 			destination: '/clients'
	// 		},
	// 	};
	// }

	if (data.length === 0) {
		return { notFound: true };
	}
	return {
		props: {
			products: data.products,
		},
		revalidate: 10,
	};
}

export default HomePage;
