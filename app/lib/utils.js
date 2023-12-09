export async function generateMetadata({ name }) {
	console.log('name:', name);
	return {
        title: name,
    };
}
