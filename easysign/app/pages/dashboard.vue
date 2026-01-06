<template>
	<div>
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
					{{ refreshing ? "Rafraîchissement..." : "Raffraichir les données" }}
				</button>
			</div>
		</div>

		<!-- Cartes de statistiques -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
							248
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
				<div class="mt-4 flex items-center text-sm">
					<span class="text-[#00bf63] dark:text-[#00d673] flex items-center">
						<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
								clip-rule="evenodd"
							/>
						</svg>
						+12%
					</span>
					<span class="text-gray-500 dark:text-gray-400 ml-2">ce mois</span>
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
							186
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
							>75%</span
						>
					</div>
					<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
						<div class="bg-[#00bf63] h-2 rounded-full" style="width: 75%"></div>
					</div>
					<div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
						ce mois
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
							62
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
				<div class="mt-4 flex items-center text-sm">
					<span class="text-[#e61c0e] dark:text-[#ff4d4d] flex items-center">
						<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
								clip-rule="evenodd"
							/>
						</svg>
						-8%
					</span>
					<span class="text-gray-500 dark:text-gray-400 ml-2">ce mois</span>
				</div>
			</div>

			<!-- Carte Rapports Générés -->
			<div
				class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#2E9AC8]"
			>
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-gray-500 dark:text-gray-400">
							Rapports Générés
						</p>
						<p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">
							34
						</p>
					</div>
					<div class="p-3 rounded-lg bg-[#2E9AC8]/10 dark:bg-[#2E9AC8]/20">
						<svg
							class="w-8 h-8 text-[#2E9AC8] dark:text-[#4ab3e6]"
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
				<div class="mt-4 flex items-center text-sm">
					<span class="text-[#00bf63] dark:text-[#00d673] flex items-center">
						<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
								clip-rule="evenodd"
							/>
						</svg>
						+23%
					</span>
					<span class="text-gray-500 dark:text-gray-400 ml-2">ce mois</span>
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
						class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] block p-2"
					>
						<option selected>Cette semaine</option>
						<option>Semaine dernière</option>
						<option>Ce mois</option>
					</select>
				</div>

				<div class="space-y-4">
					<!-- Jour : Lundi -->
					<div
						class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
					>
						<div class="flex items-center">
							<div
								class="w-10 h-10 rounded-lg bg-[#004aad]/10 dark:bg-[#004aad]/20 flex items-center justify-center mr-3"
							>
								<span class="text-[#004aad] dark:text-[#4a8cff] font-medium"
									>Lun</span
								>
							</div>
							<div>
								<p class="font-medium text-gray-900 dark:text-white">Lundi</p>
								<p class="text-sm text-gray-500 dark:text-gray-400">
									220 présents
								</p>
							</div>
						</div>
						<div class="text-right">
							<p class="text-lg font-bold text-[#e61c0e] dark:text-[#ff4d4d]">
								28
							</p>
							<p class="text-sm text-gray-500 dark:text-gray-400">absents</p>
						</div>
					</div>

					<!-- Jour : Mardi -->
					<div
						class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
					>
						<div class="flex items-center">
							<div
								class="w-10 h-10 rounded-lg bg-[#00bf63]/10 dark:bg-[#00bf63]/20 flex items-center justify-center mr-3"
							>
								<span class="text-[#00bf63] dark:text-[#00e673] font-medium"
									>Mar</span
								>
							</div>
							<div>
								<p class="font-medium text-gray-900 dark:text-white">Mardi</p>
								<p class="text-sm text-gray-500 dark:text-gray-400">
									215 présents
								</p>
							</div>
						</div>
						<div class="text-right">
							<p class="text-lg font-bold text-[#e61c0e] dark:text-[#ff4d4d]">
								33
							</p>
							<p class="text-sm text-gray-500 dark:text-gray-400">absents</p>
						</div>
					</div>

					<!-- Jour : Mercredi -->
					<div
						class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
					>
						<div class="flex items-center">
							<div
								class="w-10 h-10 rounded-lg bg-[#2E9AC8]/10 dark:bg-[#2E9AC8]/20 flex items-center justify-center mr-3"
							>
								<span class="text-[#2E9AC8] dark:text-[#4ab3e6] font-medium"
									>Mer</span
								>
							</div>
							<div>
								<p class="font-medium text-gray-900 dark:text-white">
									Mercredi
								</p>
								<p class="text-sm text-gray-500 dark:text-gray-400">
									230 présents
								</p>
							</div>
						</div>
						<div class="text-right">
							<p class="text-lg font-bold text-[#e61c0e] dark:text-[#ff4d4d]">
								18
							</p>
							<p class="text-sm text-gray-500 dark:text-gray-400">absents</p>
						</div>
					</div>

					<!-- Jour : Jeudi -->
					<div
						class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
					>
						<div class="flex items-center">
							<div
								class="w-10 h-10 rounded-lg bg-[#004aad]/20 dark:bg-[#004aad]/30 flex items-center justify-center mr-3"
							>
								<span class="text-[#004aad] dark:text-[#5a9cff] font-medium"
									>Jeu</span
								>
							</div>
							<div>
								<p class="font-medium text-gray-900 dark:text-white">Jeudi</p>
								<p class="text-sm text-gray-500 dark:text-gray-400">
									225 présents
								</p>
							</div>
						</div>
						<div class="text-right">
							<p class="text-lg font-bold text-[#e61c0e] dark:text-[#ff4d4d]">
								23
							</p>
							<p class="text-sm text-gray-500 dark:text-gray-400">absents</p>
						</div>
					</div>

					<!-- Jour : Vendredi -->
					<div
						class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
					>
						<div class="flex items-center">
							<div
								class="w-10 h-10 rounded-lg bg-[#2E9AC8]/20 dark:bg-[#2E9AC8]/30 flex items-center justify-center mr-3"
							>
								<span class="text-[#2E9AC8] dark:text-[#5ab3e6] font-medium"
									>Ven</span
								>
							</div>
							<div>
								<p class="font-medium text-gray-900 dark:text-white">
									Vendredi
								</p>
								<p class="text-sm text-gray-500 dark:text-gray-400">
									186 présents
								</p>
							</div>
						</div>
						<div class="text-right">
							<p class="text-lg font-bold text-[#e61c0e] dark:text-[#ff4d4d]">
								62
							</p>
							<p class="text-sm text-gray-500 dark:text-gray-400">absents</p>
						</div>
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

				<div class="space-y-4">
					<!-- Activité 1 -->
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<div
								class="w-10 h-10 rounded-full bg-[#00bf63]/10 dark:bg-[#00bf63]/20 flex items-center justify-center"
							>
								<svg
									class="w-5 h-5 text-[#00bf63] dark:text-[#00e673]"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								Marie Dubois a marqué sa présence
							</p>
							<p class="text-xs text-gray-500 dark:text-gray-400">
								Il y a 5 min
							</p>
						</div>
					</div>

					<!-- Activité 2 -->
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<div
								class="w-10 h-10 rounded-full bg-[#004aad]/10 dark:bg-[#004aad]/20 flex items-center justify-center"
							>
								<svg
									class="w-5 h-5 text-[#004aad] dark:text-[#4a8cff]"
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
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								Jean Martin a été ajouté au personnel
							</p>
							<p class="text-xs text-gray-500 dark:text-gray-400">
								Il y a 15 min
							</p>
						</div>
					</div>

					<!-- Activité 3 -->
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<div
								class="w-10 h-10 rounded-full bg-[#2E9AC8]/10 dark:bg-[#2E9AC8]/20 flex items-center justify-center"
							>
								<svg
									class="w-5 h-5 text-[#2E9AC8] dark:text-[#4ab3e6]"
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
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								Sophie Laurent a généré un rapport
							</p>
							<p class="text-xs text-gray-500 dark:text-gray-400">
								Il y a 30 min
							</p>
						</div>
					</div>

					<!-- Activité 4 -->
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<div
								class="w-10 h-10 rounded-full bg-[#e61c0e]/10 dark:bg-[#e61c0e]/20 flex items-center justify-center"
							>
								<svg
									class="w-5 h-5 text-[#e61c0e] dark:text-[#ff4d4d]"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								Pierre Durand a marqué une absence
							</p>
							<p class="text-xs text-gray-500 dark:text-gray-400">Il y a 1h</p>
						</div>
					</div>

					<!-- Activité 5 -->
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<div
								class="w-10 h-10 rounded-full bg-[#2E9AC8]/15 dark:bg-[#2E9AC8]/25 flex items-center justify-center"
							>
								<svg
									class="w-5 h-5 text-[#2E9AC8] dark:text-[#4ab3e6]"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								Claire Bernard a mis à jour son profil
							</p>
							<p class="text-xs text-gray-500 dark:text-gray-400">Il y a 2h</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Troisième ligne : Départements et Actions rapides -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<!-- Départements -->
			<div
				class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow p-6"
			>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">
					Départements
				</h3>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<!-- Département 1 -->
					<div
						class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200"
					>
						<div class="flex items-center justify-between mb-2">
							<h4 class="font-medium text-gray-900 dark:text-white">
								Ressources Humaines
							</h4>
							<div
								class="w-8 h-8 rounded-lg bg-[#004aad]/10 dark:bg-[#004aad]/20 flex items-center justify-center"
							>
								<svg
									class="w-5 h-5 text-[#004aad] dark:text-[#4a8cff]"
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
						<p class="text-2xl font-bold text-gray-900 dark:text-white">45</p>
						<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
							personnes
						</p>
					</div>

					<!-- Département 2 -->
					<div
						class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200"
					>
						<div class="flex items-center justify-between mb-2">
							<h4 class="font-medium text-gray-900 dark:text-white">
								Informatique
							</h4>
							<div
								class="w-8 h-8 rounded-lg bg-[#00bf63]/10 dark:bg-[#00bf63]/20 flex items-center justify-center"
							>
								<svg
									class="w-5 h-5 text-[#00bf63] dark:text-[#00e673]"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<p class="text-2xl font-bold text-gray-900 dark:text-white">62</p>
						<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
							personnes
						</p>
					</div>

					<!-- Département 3 -->
					<div
						class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200"
					>
						<div class="flex items-center justify-between mb-2">
							<h4 class="font-medium text-gray-900 dark:text-white">
								Marketing
							</h4>
							<div
								class="w-8 h-8 rounded-lg bg-[#2E9AC8]/10 dark:bg-[#2E9AC8]/20 flex items-center justify-center"
							>
								<svg
									class="w-5 h-5 text-[#2E9AC8] dark:text-[#4ab3e6]"
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
						<p class="text-2xl font-bold text-gray-900 dark:text-white">38</p>
						<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
							personnes
						</p>
					</div>

					<!-- Département 4 -->
					<div
						class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200"
					>
						<div class="flex items-center justify-between mb-2">
							<h4 class="font-medium text-gray-900 dark:text-white">Ventes</h4>
							<div
								class="w-8 h-8 rounded-lg bg-[#004aad]/15 dark:bg-[#004aad]/25 flex items-center justify-center"
							>
								<svg
									class="w-5 h-5 text-[#004aad] dark:text-[#4a8cff]"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<p class="text-2xl font-bold text-gray-900 dark:text-white">54</p>
						<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
							personnes
						</p>
					</div>

					<!-- Département 5 -->
					<div
						class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200"
					>
						<div class="flex items-center justify-between mb-2">
							<h4 class="font-medium text-gray-900 dark:text-white">Support</h4>
							<div
								class="w-8 h-8 rounded-lg bg-[#e61c0e]/10 dark:bg-[#e61c0e]/20 flex items-center justify-center"
							>
								<svg
									class="w-5 h-5 text-[#e61c0e] dark:text-[#ff4d4d]"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<p class="text-2xl font-bold text-gray-900 dark:text-white">49</p>
						<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
							personnes
						</p>
					</div>
				</div>
			</div>

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

	const refreshing = ref(false);

	const refreshPage = () => {
		refreshing.value = true;
		// Petit délai pour montrer l'animation
		setTimeout(() => {
			window.location.reload();
		}, 500);
	};
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
