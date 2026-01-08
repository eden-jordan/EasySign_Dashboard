import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		user: null as any,
		token: null as string | null,
		loading: false,
	}),

	getters: {
		isLogged: (state) => !!state.token,
	},

	actions: {
		async login(email: string, password: string) {
			const res: any = await $fetch("http://192.168.10.112:8000/api/login", {
				method: "POST",
				body: { email, password },
			});

			this.token = res.token;
			this.user = res.user;

			if (process.client) {
				localStorage.setItem("token", res.token);
				localStorage.setItem("user", JSON.stringify(res.user));
			}
		},

		logout() {
			this.token = null;
			this.user = null;

			if (process.client) {
				localStorage.removeItem("token");
				localStorage.removeItem("user");
			}

			return navigateTo("/login");
		},

		init() {
			if (!process.client) return;

			const token = localStorage.getItem("token");
			const user = localStorage.getItem("user");

			if (token) this.token = token;
			if (user) this.user = JSON.parse(user);
		},
	},
});
