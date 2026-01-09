<template>
	<div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
		<!-- En-tête du dashboard -->
		<div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
			<div>
				<h1 class="text-3xl font-bold text-gray-900 dark:text-white">
					Dashboard
				</h1>
				<p class="text-gray-600 dark:text-gray-400 mt-2">
					Vue d'ensemble de votre système de gestion
				</p>
			</div>
			<div class="mt-4 md:mt-0">
				<button
					@click="refreshPage"
					:disabled="refreshing"
					:class="[
						'px-4 py-2.5 bg-[#004aad] hover:bg-[#003b8a] text-white rounded-lg font-medium flex items-center transition duration-200',
						refreshing ? 'opacity-75 cursor-not-allowed' : '',
					]"
				>
					<svg
						:class="['w-5 h-5 mr-3', refreshing ? 'animate-spin' : '']"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
							clip-rule="evenodd"
						/>
					</svg>
					{{ refreshing ? "Rafraîchissement..." : "Rafraîchir les données" }}
				</button>
			</div>
		</div>

		<!-- Cartes de statistiques -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
			<!-- Carte Total Personnel -->
			<div
				class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#004aad]"
			>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-gray-500 dark:text-gray-400">
							Total Personnel
						</p>
						<p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">
							{{ personnelStore.getTotalPersonnel }}
						</p>
					</div>
					<div class="p-3 rounded-lg bg-[#004aad]/10 dark:bg-[#004aad]/20">
						<svg
							class="w-8 h-8 text-[#004aad] dark:text-[#4a8cff]"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fill-rule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>

			<!-- Carte Présences Aujourd'hui -->
			<div
				class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#00bf63]"
			>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-gray-500 dark:text-gray-400">
							Présences Aujourd'hui
						</p>
						<p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">
							{{ totalPresents }}
						</p>
					</div>
					<div class="p-3 rounded-lg bg-[#00bf63]/10 dark:bg-[#00bf63]/20">
						<svg
							class="w-8 h-8 text-[#00bf63] dark:text-[#00e673]"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
							<path
								fill-rule="evenodd"
								d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
				<div class="mt-4">
					<div class="flex items-center justify-between mb-1">
						<span class="text-sm text-gray-500 dark:text-gray-400"
							>Taux de présence</span
						>
						<span class="text-sm font-medium text-[#00bf63] dark:text-[#00e673]"
							>{{ tauxPresence }}%</span
						>
					</div>
					<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
						<div
							class="bg-[#00bf63] h-2 rounded-full"
							:style="{
								width: tauxPresence + '%',
							}"
						></div>
					</div>
				</div>
			</div>

			<!-- Carte Absences -->
			<div
				class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#e61c0e]"
			>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-gray-500 dark:text-gray-400">Absences</p>
						<p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">
							{{ totalAbsents }}
						</p>
					</div>
					<div class="p-3 rounded-lg bg-[#e61c0e]/10 dark:bg-[#e61c0e]/20">
						<svg
							class="w-8 h-8 text-[#e61c0e] dark:text-[#ff4d4d]"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>

		<!-- Deuxième ligne : Graphique et Activités -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
			<!-- Présences de la semaine -->
			<div
				class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow p-6"
			>
				<div class="flex items-center justify-between mb-6">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
						Présences de la semaine
					</h3>
					<select
						v-model="selectedWeek"
						class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] block p-2"
					>
						<option>Cette semaine</option>
						<option>Semaine dernière</option>
					</select>
				</div>

				<div
					v-for="day in displayedWeek"
					:key="day.day"
					class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
				>
					<div>
						<p class="font-medium text-gray-900 dark:text-white">
							{{ getDayInFrench(day.day) }}
						</p>
						<p class="text-lg font-bold text-green-600">{{ day.present }}</p>
						<p class="text-sm text-gray-400">présents</p>
					</div>

					<div class="text-right">
						<p class="text-lg font-bold text-red-500">{{ day.absent }}</p>
						<p class="text-sm text-gray-400">absents</p>
					</div>
				</div>

				<!-- Légende -->
				<div class="mt-6 flex items-center justify-center space-x-6">
					<div class="flex items-center">
						<div class="w-3 h-3 bg-[#00bf63] rounded-full mr-2"></div>
						<span class="text-sm text-gray-600 dark:text-gray-400"
							>Présents</span
						>
					</div>
					<div class="flex items-center">
						<div class="w-3 h-3 bg-[#e61c0e] rounded-full mr-2"></div>
						<span class="text-sm text-gray-600 dark:text-gray-400"
							>Absents</span
						>
					</div>
				</div>
			</div>

			<!-- Activités Récentes -->
			<div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
				<div class="flex items-center justify-between mb-6">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
						Activités Récentes
					</h3>
					<button
						class="text-sm text-[#004aad] dark:text-[#4a8cff] hover:text-[#003b8a] dark:hover:text-[#3a7cff]"
					>
						Voir toutes
					</button>
				</div>

				<!-- Filtre actions -->
				<div class="flex gap-2 mb-4 flex-wrap">
					<button
						v-for="filter in filters"
						:key="filter"
						@click="selectedFilter = filter"
						:class="[
							'px-3 py-1 rounded-full text-sm font-medium border',
							selectedFilter === filter
								? 'bg-[#004aad] text-white border-[#004aad]'
								: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600',
						]"
					>
						{{ filterLabels[filter] }}
					</button>
				</div>

				<!-- Liste des activités filtrées -->
				<div class="space-y-3">
					<div
						v-for="(a, i) in filteredActivities"
						:key="i"
						class="flex items-start p-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm"
					>
						<!-- Icône action -->
						<div
							class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full"
							:class="{
								'bg-green-100 text-green-600': a.action === 'arrivee',
								'bg-red-100 text-red-600': a.action === 'depart',
								'bg-yellow-100 text-yellow-600': a.action.includes('pause'),
							}"
						>
							<span class="text-xs font-bold">
								{{
									a.action === "arrivee"
										? "A"
										: a.action === "depart"
										? "D"
										: a.action === "pause_debut"
										? "P"
										: a.action === "pause_fin"
										? "F"
										: "?"
								}}
							</span>
						</div>

						<!-- Détails -->
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								{{ a.personnel }} — {{ actionLabel(a.action) }}
							</p>
							<p class="text-xs text-gray-500 dark:text-gray-400">
								{{ a.date }} à {{ a.time }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Troisième ligne : Départements et Actions rapides -->
		<div class="">
			<!-- Actions Rapides -->
			<div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">
					Actions Rapides
				</h3>

				<div class="space-y-4">
					<!-- Action 1 -->
					<button
						class="w-full bg-[#004aad]/5 dark:bg-[#004aad]/10 hover:bg-[#004aad]/10 dark:hover:bg-[#004aad]/20 text-[#004aad] dark:text-[#4a8cff] rounded-lg p-4 flex items-center transition duration-200"
					>
						<div
							class="w-12 h-12 rounded-lg bg-[#004aad]/10 dark:bg-[#004aad]/20 flex items-center justify-center mr-4"
						>
							<svg
								class="w-6 h-6 text-[#004aad] dark:text-[#4a8cff]"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="text-left">
							<p class="font-medium">Ajouter Personnel</p>
							<p class="text-sm opacity-75">Nouveau membre</p>
						</div>
					</button>

					<!-- Action 2 -->
					<button
						class="w-full bg-[#2E9AC8]/5 dark:bg-[#2E9AC8]/10 hover:bg-[#2E9AC8]/10 dark:hover:bg-[#2E9AC8]/20 text-[#2E9AC8] dark:text-[#4ab3e6] rounded-lg p-4 flex items-center transition duration-200"
					>
						<div
							class="w-12 h-12 rounded-lg bg-[#2E9AC8]/10 dark:bg-[#2E9AC8]/20 flex items-center justify-center mr-4"
						>
							<svg
								class="w-6 h-6 text-[#2E9AC8] dark:text-[#4ab3e6]"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="text-left">
							<p class="font-medium">Marquer Présence</p>
							<p class="text-sm opacity-75">Enregistrement</p>
						</div>
					</button>

					<!-- Action 3 -->
					<button
						class="w-full bg-[#2E9AC8]/5 dark:bg-[#2E9AC8]/10 hover:bg-[#2E9AC8]/10 dark:hover:bg-[#2E9AC8]/20 text-[#2E9AC8] dark:text-[#4ab3e6] rounded-lg p-4 flex items-center transition duration-200"
					>
						<div
							class="w-12 h-12 rounded-lg bg-[#2E9AC8]/10 dark:bg-[#2E9AC8]/20 flex items-center justify-center mr-4"
						>
							<svg
								class="w-6 h-6 text-[#2E9AC8] dark:text-[#4ab3e6]"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="text-left">
							<p class="font-medium">Nouveau Rapport</p>
							<p class="text-sm opacity-75">Générer</p>
						</div>
					</button>

					<!-- Action 4 -->
					<button
						class="w-full bg-[#004aad]/5 dark:bg-[#004aad]/10 hover:bg-[#004aad]/10 dark:hover:bg-[#004aad]/20 text-[#004aad] dark:text-[#4a8cff] rounded-lg p-4 flex items-center transition duration-200"
					>
						<div
							class="w-12 h-12 rounded-lg bg-[#004aad]/10 dark:bg-[#004aad]/20 flex items-center justify-center mr-4"
						>
							<svg
								class="w-6 h-6 text-[#004aad] dark:text-[#4a8cff]"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="text-left">
							<p class="font-medium">Gérer Organisations</p>
							<p class="text-sm opacity-75">Paramètres</p>
						</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import { usePersonnelStore } from "~~/stores/personnel";
	import { usePresenceStore } from "~~/stores/presence";
	import { useDashboardStore } from "~~/stores/dashboard";

	const dashboardStore = useDashboardStore();
	const personnelStore = usePersonnelStore();
	const presenceStore = usePresenceStore();
	const totalPersonnel = computed(() => personnelStore.count);
	const totalPresents = computed(() => presenceStore.totalPresents);
	const totalAbsents = computed(() => {
		return totalPersonnel.value - totalPresents.value;
	});
	const tauxPresence = computed(() => {
		if (totalPersonnel.value === 0) return 0;
		return Math.round((totalPresents.value / totalPersonnel.value) * 100);
	});

	const refreshing = ref(false);

	const refreshPage = () => {
		refreshing.value = true;
		setTimeout(() => {
			window.location.reload();
		}, 500);
	};

	const selectedWeek = ref("Cette semaine");

	const displayedWeek = computed(() => {
		return selectedWeek.value === "Cette semaine"
			? dashboardStore.currentWeek
			: dashboardStore.lastWeek;
	});

	const getDayInFrench = (day) => {
		const days = {
			Monday: "Lundi",
			Tuesday: "Mardi",
			Wednesday: "Mercredi",
			Thursday: "Jeudi",
			Friday: "Vendredi",
			Saturday: "Samedi",
			Sunday: "Dimanche",
		};
		return days[day] || day;
	};

	// Filtres disponibles
	const filters = ["all", "arrivee", "depart", "pause_debut", "pause_fin"];
	const filterLabels = {
		all: "Toutes",
		arrivee: "Arrivée",
		depart: "Départ",
		pause_debut: "Début pause",
		pause_fin: "Fin pause",
	};

	const selectedFilter = ref("all");

	// Fonction pour afficher le label d'une action
	const actionLabel = (action) => {
		switch (action) {
			case "arrivee":
				return "Arrivée";
			case "depart":
				return "Départ";
			case "pause_debut":
				return "Début pause";
			case "pause_fin":
				return "Fin pause";
			default:
				return action;
		}
	};

	// Activités filtrées selon le filtre sélectionné
	const filteredActivities = computed(() => {
		if (selectedFilter.value === "all") return dashboardStore.activities;
		return dashboardStore.activities.filter(
			(a) => a.action === selectedFilter.value,
		);
	});

	// Chargement initial
	onMounted(async () => {
		await personnelStore.getPersonnel();
		await presenceStore.getTodayPresences();
		await dashboardStore.loadStats();
	});

	definePageMeta({
		middleware: "auth",
	});
</script>

<style scoped>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	.animate-spin {
		animation: spin 1s linear infinite;
	}
</style>
