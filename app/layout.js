import { Inter } from 'next/font/google';
import { initWebsite } from './lib/fetchUnicloud';
import 'app/ui/globals.css';

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
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
