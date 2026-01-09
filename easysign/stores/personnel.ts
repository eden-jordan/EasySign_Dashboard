import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const usePersonnelStore = defineStore("personnel", {
	state: () => ({
		personnel: [] as Array<Record<string, any>>,
		loading: false,
		error: null as string | null,
	}),

	getters: {
		count: (state) => state.personnel.length,

		getTotalPersonnel: (state) => state.personnel.length,

		byId: (state) => {
			return (id: number | string) => state.personnel.find((p) => p.id == id);
		},
	},

	actions: {
		// =========================
		// LISTE
		// =========================
		async getPersonnel() {
			const { $api } = useNuxtApp();

			try {
				this.loading = true;
				this.error = null;

				const res: any = await $api("/personnel");

				this.personnel = res.data || res;

				return this.personnel;
			} catch (err: any) {
				console.error("Erreur chargement personnel", err);
				this.error = err?.data?.message || "Erreur chargement personnel";
				throw err;
			} finally {
				this.loading = false;
			}
		},

		// =========================
		// DETAIL (API)
		// =========================
		async fetchPersonnel(id: number | string) {
			const { $api } = useNuxtApp();

			try {
				this.loading = true;

				const res: any = await $api(`/personnel/${id}`);

				return res.data || res;
			} catch (err) {
				console.error("Erreur chargement personnel", err);
				throw err;
			} finally {
				this.loading = false;
			}
		},

		// =========================
		// CREATE
		// =========================
		async createPersonnel(data: {
			nom: string;
			prenom: string;
			email?: string;
			tel?: string;
		}) {
			const { $api } = useNuxtApp();

			try {
				this.loading = true;
				this.error = null;

				const res: any = await $api("/personnel", {
					method: "POST",
					body: data,
				});

				const created = res.personnel || res.data?.personnel || res;

				// Ajouter directement dans la liste
				this.personnel.unshift(created);

				return created;
			} catch (err: any) {
				console.error("Erreur création personnel", err);
				this.error = err?.data?.message || "Erreur création personnel";
				throw err;
			} finally {
				this.loading = false;
			}
		},

		// =========================
		// UPDATE
		// =========================
		async updatePersonnel(id: number | string, data: any) {
			const { $api } = useNuxtApp();

			try {
				this.loading = true;
				this.error = null;

				const res: any = await $api(`/personnel/${id}`, {
					method: "PUT",
					body: data,
				});

				const updated = res.personnel || res.data?.personnel || res;

				// Mettre à jour dans le state
				const index = this.personnel.findIndex((p) => p.id == id);
				if (index !== -1) {
					this.personnel[index] = updated;
				}

				return updated;
			} catch (err: any) {
				console.error("Erreur modification personnel", err);
				this.error = err?.data?.message || "Erreur modification personnel";
				throw err;
			} finally {
				this.loading = false;
			}
		},

		// =========================
		// DELETE
		// =========================
		async deletePersonnel(id: number | string) {
			const { $api } = useNuxtApp();

			try {
				this.loading = true;
				this.error = null;

				await $api(`/personnel/${id}`, {
					method: "DELETE",
				});

				// Retirer du state
				this.personnel = this.personnel.filter((p) => p.id != id);

				return true;
			} catch (err: any) {
				console.error("Erreur suppression personnel", err);
				this.error = err?.data?.message || "Erreur suppression personnel";
				throw err;
			} finally {
				this.loading = false;
			}
		},

		// =========================
		// RELOAD
		// =========================
		async refresh() {
			return await this.getPersonnel();
		},
	},
});
