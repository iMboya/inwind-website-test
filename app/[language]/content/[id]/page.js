import { getContentInfo } from '/app/lib/fetchUnicloud';
import Link from 'next/link';
import HTMLReactParser from 'html-react-parser';

export default async function Home({ params }) {
	const info = await getContentInfo({ id: params.id });
	return (
		<div>
			<h1>{info.name}</h1>
			{HTMLReactParser(info.content)}
		</div>
	);
}
