import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const usePersonnelStore = defineStore("personnel", {
	state: () => ({
		personnel: [] as Array<Record<string, any>>, // Changé en tableau
		loading: false,
		error: null as string | null,
	}),

	actions: {
		async getPersonnel() {
			const auth = useAuthStore();
			if (!auth.token) {
				this.error = "Non authentifié";
				return;
			}

			const { $api } = useNuxtApp();

			try {
				this.loading = true;
				this.error = null;

				const res = await $api("/personnel");

				// Stocker les données dans le state
				this.personnel = res.data || res;

				return res;
			} catch (err: any) {
				console.error("Impossible de récupérer la liste du personnel", err);
				this.error =
					err.message || "Erreur lors de la récupération du personnel";
			} finally {
				this.loading = false;
			}
		},

		// Méthodes utilitaires pour manipuler les données
		getPersonnelById(id: string | number) {
			return this.personnel.find((p) => p.id === id);
		},
	},
});
