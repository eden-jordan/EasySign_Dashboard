export const useDashboardStore = defineStore("dashboard", {
	state: () => ({
		currentWeek: [], // cette semaine
		lastWeek: [], // semaine dernière
		activities: [],
		loading: false,
	}),

	actions: {
		async loadStats() {
			const { $api } = useNuxtApp();

			this.loading = true;
			const res: any = await $api("/dashboard/stats");

			console.log("STATS API =", res);

			this.currentWeek = res.currentWeek || [];
			this.lastWeek = res.lastWeek || [];
			this.activities = res.activities || [];

			this.loading = false;
		},
	},
});
