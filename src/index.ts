export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>
		<body>
		  <h1>We're Sorry</h1>
		  <p>The system is down for maintenance.</p>
		</body>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
