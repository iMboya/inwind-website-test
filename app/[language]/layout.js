import { Inter } from 'next/font/google';
import '/app/ui/globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params, searchParams }, parent) {
	console.log('params:', params);
	return {
		title: 'product',
	};
}

export default function RootLayout({ params, children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
