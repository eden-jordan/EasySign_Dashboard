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
			try {
				const res = await $fetch("http://192.168.10.112:8000/api/login", {
					method: "POST",
					body: { email, password },
				});

				console.log("REPONSE BACKEND:", res);

				// Vérification de sécurité
				if (!res || !res.token) {
					throw new Error("Réponse invalide du serveur");
				}

				this.token = res.token;
				this.user = res.user;

				localStorage.setItem("token", res.token);

				return res;
			} catch (error: any) {
				console.error("ERREUR LOGIN:", error);

				if (error?.data?.message) {
					throw new Error(error.data.message);
				}

				throw new Error("Impossible de se connecter au serveur");
			}
		},

		logout() {
			this.token = null;
			this.user = null;
			localStorage.removeItem("token");
			navigateTo("/login");
		},

		init() {
			const token = localStorage.getItem("token");
			if (token) {
				this.token = token;
			}
		},
	},
});
