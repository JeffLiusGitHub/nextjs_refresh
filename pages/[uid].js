export default function UserIdPage(props) {
	return <div>{props.id}</div>;
}

export async function getServerSideProps(ctx) {
	const { params } = ctx;
	const userId = params.uid;
	console.log(userId);
	console.log({ params });
	return {
		props: {
			id: 'userId ' + userId,
		},
	};
}
