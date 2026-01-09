export const useDashboardStore = defineStore("dashboard", {
	state: () => ({
		week: [],
		activities: [],
		loading: false,
	}),

	actions: {
		async loadStats() {
			const { $api } = useNuxtApp();

			this.loading = true;
			const res: any = await $api("/dashboard/stats");

			console.log("STATS API =", res);

			this.week = res.week;
			this.activities = res.activities;

			this.loading = false;
		},
	},
});
