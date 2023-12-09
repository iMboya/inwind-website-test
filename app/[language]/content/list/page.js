import { getContentList } from 'app/lib/fetchUnicloud';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';

export const revalidate = 0;
export default async function Home({ params }) {
	const contentList = await getContentList({});
	return (
		<div>
			<h1>乘风</h1>
			<br />
			<h2>大鹏一日同风起，扶摇直上九万里</h2>
			<ul>
				{contentList.map((item) => (
					<li key={item._id}>
						<Link href={`/${params.language || 'zh_cn'}/content/${item._id}`}>{item.name}</Link>{' '}
					</li>
				))}
			</ul>
		</div>
	);
}
