import { getContentInfo } from '/app/lib/fetchUnicloud';
import Link from 'next/link';
import HTMLReactParser from 'html-react-parser';
import { revalidatePath } from 'next/cache';

export async function generateMetadata({ params, searchParams }, parent) {
	const info = await getContentInfo({ ...params });
	return {
		title: info.name,
	};
}

export default async function Home({ params }) {
	let info = await getContentInfo({ ...params });

	// 强制刷新当前页面
	revalidatePath('/[zh]/content/[656f44738b0da41d31c38dcb]');
	return (
		<div>
			<h1>{info.name}</h1>
			{HTMLReactParser(info.content)}
		</div>
	);
}
