import { defineStore } from "pinia";

export const usePresenceStore = defineStore("presence", {
	state: () => ({
		presences: [] as Array<any>,
		loading: false,
		error: null as string | null,
	}),

	getters: {
		// Nombre de présents aujourd’hui
		totalPresents: (state) => state.presences.length,

		// Le nombre total du personnel devra venir du personnelStore
	},

	actions: {
		// =========================
		// PRÉSENCES DU JOUR
		// =========================
		async getTodayPresences() {
			const { $api } = useNuxtApp();

			try {
				this.loading = true;
				this.error = null;

				const res: any = await $api("/presences/today");

				this.presences = res.data || res;

				return this.presences;
			} catch (err: any) {
				console.error("Erreur chargement présences", err);
				this.error = err?.data?.message || "Erreur chargement présences";
				throw err;
			} finally {
				this.loading = false;
			}
		},

		// =========================
		// HISTORIQUE D’UN PERSONNEL
		// =========================
		async getHistory(personnelId: number | string) {
			const { $api } = useNuxtApp();

			const res: any = await $api(`/presences/${personnelId}/history`);
			return res.data || res;
		},

		async getHistoryAll(personnelId: number | string) {
			const { $api } = useNuxtApp();

			const res: any = await $api(`/presences/${personnelId}/history-all`);
			return res.data || res;
		},
	},
});
