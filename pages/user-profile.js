export default function userProfilePage(props) {
	return <div>{props.userName}</div>;
}

export async function getServerSideProps(ctx) {
	const { params, req, res } = ctx;
    console.log('run server sides code')
	return {
		props: {
			userName: 'jeff',
		},
	};
}
