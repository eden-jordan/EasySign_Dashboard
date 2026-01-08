import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useUserStore = defineStore("user", {
	state: () => ({
		user: null as null | Record<string, any>,
		loading: false,
	}),

	actions: {
		async fetchMe() {
			const auth = useAuthStore();
			if (!auth.token) return;

			const { $api } = useNuxtApp();

			try {
				this.loading = true;

				const res = await $api("/user");

				this.user = res;
				auth.user = res; // sync auth

				if (process.client) {
					localStorage.setItem("user", JSON.stringify(res));
				}

				return res;
			} catch (err) {
				console.error("Impossible de récupérer le profil", err);
			} finally {
				this.loading = false;
			}
		},
	},
});
