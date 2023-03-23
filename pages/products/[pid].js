import React from 'react';
import path from 'path';
import fs from 'fs/promises';
const ProductDetailPage = (props) => {
	const { loadedProduct } = props;
	if (!loadedProduct) {
		return <p>loading..</p>;
	}
	return (
		<div>
			<h1>Title{loadedProduct.title}</h1>
			<p>Description</p>
		</div>
	);
};
async function getData() {
	const filePath = path.join(process.cwd(), 'data', 'dummy_backend.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);
	return data;
}

export async function getStaticProps(context) {
	const { params } = context;
	const productId = params.pid;

	const data = await getData();
	const filtedProduct = data?.products.find((d) => d.id === productId);
	if (!filtedProduct) {
		return { notFound: true };
	}
	return {
		props: {
			loadedProduct: filtedProduct,
		},
	};
}
export async function getStaticPaths() {
	const data = await getData();
	// const ids = data.products.map((p) => p.id);
	// console.log(data);

	const params = data.products.map((p) => {
		return {
			params: {
				pid: p.id,
			},
		};
	});
	// console.log(params);

	return {
		paths: params,
		//  [

		// {
		// 	params: {
		// 		//    data.products.map((p)=>({pid:p.id})
		// 		pid: 'p1',
		// 	},
		// 	params: {
		// 		//    data.products.map((p)=>({pid:p.id})
		// 		pid: 'p2',
		// 	},
		// },
		// ],
		fallback: true, //if id do not exist return 404
		// fallback: true, //do not pregenerate less frequency used page, but can still visit it
		// fallback: 'blocking', //take long time
	};
}

export default ProductDetailPage;
