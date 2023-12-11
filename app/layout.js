import { Inter } from 'next/font/google';
import { initWebsite } from './lib/fetchUnicloud';
import './ui/globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const revalidate = 3600;
export async function generateMetadata() {
	let websiteConfig = await initWebsite();
	return {
		title: {
			template: `%s_${websiteConfig.name}`,
			default: websiteConfig.name,
		},
	};
}

export default function RootLayout({ params, children }) {
	return (
		<html
			lang='en'
			className='light'
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
