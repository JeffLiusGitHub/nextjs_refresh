import { useEffect, useState } from 'react';
import useSWR from 'swr';
export default function lastSalesPage(props) {
	const [sales, setSales] = useState(props.sales);
	// const [isLoading, setIsLoading] = useState(false);
	const { data, error } = useSWR(
		'https://nextjs-68b50-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
		(url) => fetch(url).then((res) => res.json())
	);

	useEffect(() => {
		if (data) {
			const transformedSales = [];
			for (const key in data) {
				transformedSales.push({
					id: key,
					username: data[key].username,
					volume: data[key].volume,
				});
			}

			setSales(transformedSales);
		}
	}, [data]);
	// useEffect(() => {
	// 	setIsLoading(true);
	// 	fetch(
	// 		'https://nextjs-68b50-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
	// 	)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			const transformedSales = [];
	// 			for (const key in data) {
	// 				transformedSales.push({
	// 					id: key,
	// 					username: data[key].username,
	// 					volume: data[key].volume,
	// 				});
	// 			}
	// 			setSales(transformedSales);
	// 			setIsLoading(false);
	// 		});
	// }, []);
	if (error) {
		return <p>Failed to load.</p>;
	}
	if (!data && !sales) {
		return <p>Loading</p>;
	}

	return (
		<ul>
			{sales?.map((sale) => (
				<li key={sale.id}>
					{sale.username} - ${sale.volume}
				</li>
			))}
		</ul>
	);
}

export async function getStaticProps(ctx) {
	const response = await fetch(
		'https://nextjs-68b50-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
	);
	const data = response.json();

	const transformedSales = [];
	for (const key in data) {
		transformedSales.push({
			id: key,
			username: data[key].username,
			volume: data[key].volume,
		});
	}
	return { props: { sales: transformedSales } };
}
