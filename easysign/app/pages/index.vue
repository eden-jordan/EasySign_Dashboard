<template>
	<div>
		<!-- En-tête de page -->
		<div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
			<h1 class="text-2xl font-bold text-gray-900 dark:text-white">
				Tableau de bord
			</h1>
			<div class="mt-4 md:mt-0">
				<button
					class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition duration-200"
				>
					+ Ajouter du personnel
				</button>
			</div>
		</div>

		<!-- Cartes de statistiques -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
			<div
				class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-blue-500"
			>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-gray-500 dark:text-gray-400">
							Total Personnel
						</p>
						<p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">
							245
						</p>
					</div>
					<div class="p-3 rounded-lg bg-blue-100 dark:bg-blue-900">
						<svg
							class="w-6 h-6 text-blue-600 dark:text-blue-300"
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
				<p class="text-xs text-green-600 dark:text-green-400 mt-2">
					<span class="font-medium">+12%</span> depuis le mois dernier
				</p>
			</div>

			<div
				class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-green-500"
			>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-gray-500 dark:text-gray-400">
							Présences Aujourd'hui
						</p>
						<p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">
							198
						</p>
					</div>
					<div class="p-3 rounded-lg bg-green-100 dark:bg-green-900">
						<svg
							class="w-6 h-6 text-green-600 dark:text-green-300"
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
				<p class="text-xs text-green-600 dark:text-green-400 mt-2">
					<span class="font-medium">+8%</span> taux de présence
				</p>
			</div>

			<div
				class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-purple-500"
			>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-gray-500 dark:text-gray-400">
							Rapports ce mois
						</p>
						<p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">
							42
						</p>
					</div>
					<div class="p-3 rounded-lg bg-purple-100 dark:bg-purple-900">
						<svg
							class="w-6 h-6 text-purple-600 dark:text-purple-300"
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
				</div>
				<p class="text-xs text-red-600 dark:text-red-400 mt-2">
					<span class="font-medium">-3%</span> moins qu'hier
				</p>
			</div>

			<div
				class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-orange-500"
			>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-gray-500 dark:text-gray-400">
							Organisations
						</p>
						<p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">
							7
						</p>
					</div>
					<div class="p-3 rounded-lg bg-orange-100 dark:bg-orange-900">
						<svg
							class="w-6 h-6 text-orange-600 dark:text-orange-300"
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
				</div>
				<p class="text-xs text-green-600 dark:text-green-400 mt-2">
					<span class="font-medium">+1</span> ajoutée cette semaine
				</p>
			</div>
		</div>

		<!-- Graphique et tableau -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
			<!-- Graphique -->
			<div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
				<div class="flex items-center justify-between mb-6">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
						Présences hebdomadaires
					</h3>
					<select
						class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
					>
						<option selected>Cette semaine</option>
						<option>Semaine dernière</option>
						<option>Ce mois</option>
					</select>
				</div>
				<div class="h-64 flex items-end space-x-2">
					<!-- Barres du graphique simplifié -->
					<div
						v-for="day in ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']"
						:key="day"
						class="flex-1 flex flex-col items-center"
					>
						<div
							class="w-full bg-blue-100 dark:bg-blue-900 rounded-t-lg"
							:style="{ height: Math.random() * 80 + 20 + 'px' }"
						></div>
						<span class="text-xs text-gray-500 dark:text-gray-400 mt-2">{{
							day
						}}</span>
					</div>
				</div>
			</div>

			<!-- Dernières activités -->
			<div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">
					Dernières activités
				</h3>
				<div class="space-y-4">
					<div
						v-for="activity in activities"
						:key="activity.id"
						class="flex items-start"
					>
						<div :class="`p-2 rounded-lg ${activity.color}`">
							<svg
								class="w-4 h-4 text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path :d="activity.icon" />
							</svg>
						</div>
						<div class="ml-3 flex-1">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								{{ activity.title }}
							</p>
							<p class="text-xs text-gray-500 dark:text-gray-400">
								{{ activity.description }}
							</p>
							<p class="text-xs text-gray-400 dark:text-gray-500 mt-1">
								{{ activity.time }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const activities = [
		{
			id: 1,
			title: "Nouveau membre ajouté",
			description: "Marie Dupont a rejoint le département RH",
			time: "Il y a 10 minutes",
			color: "bg-green-500",
			icon: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z",
		},
		{
			id: 2,
			title: "Rapport mensuel généré",
			description: "Rapport des présences pour Septembre 2024",
			time: "Il y a 2 heures",
			color: "bg-blue-500",
			icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
		},
		{
			id: 3,
			title: "Présence mise à jour",
			description: "Absence justifiée pour Jean Martin",
			time: "Il y a 5 heures",
			color: "bg-yellow-500",
			icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
		},
	];
</script>
