export default defineNuxtPlugin(() => {
	import { useAuthStore } from "../stores/auth";
	const auth = useAuthStore();

	return {
		provide: {
			api: $fetch.create({
				baseURL: "http://192.168.10.112:8000/api",
				onRequest({ options }) {
					if (auth.token) {
						options.headers = {
							...options.headers,
							Authorization: `Bearer ${auth.token}`,
						};
					}
				},
			}),
		},
	};
});
