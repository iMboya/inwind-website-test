export async function GET(request) {
	return Response.json({ a: 1 });
}

export async function POST(request) {
	const res = await request.json();
	return Response.json({ ...res });
}
