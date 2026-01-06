<template>
	<div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
		<div class="max-w-full mx-auto space-y-6">
			<!-- En-tête -->
			<div class="flex flex-col md:flex-row md:items-center justify-between">
				<div>
					<h1
						class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
					>
						Gestion des Présences
					</h1>
					<p class="text-gray-600 dark:text-gray-400 mt-1">
						Suivez les présences et absences quotidiennes
					</p>
				</div>
			</div>

			<!-- Cartes de statistiques-->
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-4"
			>
				<!-- Carte Présents -->
				<div
					class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#00bf63]"
				>
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm text-gray-500 dark:text-gray-400">Présents</p>
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
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
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
							<span
								class="text-sm font-medium text-[#00bf63] dark:text-[#00e673]"
								>75%</span
							>
						</div>
						<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
							<div
								class="bg-[#00bf63] h-2 rounded-full"
								style="width: 75%"
							></div>
						</div>
						<div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							ce mois
						</div>
					</div>
				</div>

				<!-- Carte Absents -->
				<div
					class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#e61c0e]"
				>
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm text-gray-500 dark:text-gray-400">Absents</p>
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
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
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

				<!-- Carte Retards -->
				<div
					class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#f59e0b]"
				>
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm text-gray-500 dark:text-gray-400">Retards</p>
							<p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">
								28
							</p>
						</div>
						<div class="p-3 rounded-lg bg-[#f59e0b]/10 dark:bg-[#f59e0b]/20">
							<svg
								class="w-8 h-8 text-[#f59e0b] dark:text-[#fbbf24]"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
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
							+15%
						</span>
						<span class="text-gray-500 dark:text-gray-400 ml-2">ce mois</span>
					</div>
				</div>
			</div>

			<!-- Filtres et recherche -->
			<div
				class="bg-white dark:bg-gray-800 rounded-none shadow-md p-4 md:p-5 mx-4 md:mx-6"
			>
				<div class="flex flex-col md:flex-row md:items-center gap-4">
					<!-- Recherche -->
					<div class="relative flex-1 w-full md:w-auto">
						<div
							class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
						>
							<svg
								class="w-4 h-4 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<input
							type="text"
							class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] block pl-10 p-2.5"
							placeholder="Rechercher un employé..."
						/>
					</div>

					<!-- Date -->
					<div class="relative flex-1">
						<div
							class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
						>
							<svg
								class="w-4 h-4 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<input
							type="text"
							class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] block w-24 pl-10 p-2.5"
							value="06/01/2026"
						/>
					</div>

					<!-- Filtre statut -->
					<select
						class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] p-2.5 w-24"
					>
						<option selected>Tous les statuts</option>
						<option>Présent</option>
						<option>Absent</option>
						<option>Retard</option>
						<option>Congé</option>
					</select>
				</div>
			</div>

			<!-- Tableau des présences -->
			<div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
				<div class="overflow-x-auto">
					<table
						class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm"
					>
						<thead class="bg-gray-50 dark:bg-gray-700">
							<tr>
								<th
									scope="col"
									class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider min-w-[200px]"
								>
									Employé
								</th>
								<th
									scope="col"
									class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider min-w-[150px]"
								>
									Département
								</th>
								<th
									scope="col"
									class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider min-w-[120px]"
								>
									Date
								</th>
								<th
									scope="col"
									class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider min-w-[120px]"
								>
									Heure d'arrivée
								</th>
								<th
									scope="col"
									class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider min-w-[120px]"
								>
									Heure de départ
								</th>
								<th
									scope="col"
									class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider min-w-[110px]"
								>
									Durée
								</th>
								<th
									scope="col"
									class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider min-w-[100px]"
								>
									Statut
								</th>
								<th
									scope="col"
									class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider min-w-[120px]"
								>
									Actions
								</th>
							</tr>
						</thead>
						<tbody
							class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
						>
							<!-- Marie Dubois -->
							<tr
								class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
							>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="flex items-center space-x-3">
										<div class="flex-shrink-0 h-8 w-8">
											<div
												class="h-8 w-8 rounded-full bg-[#004aad]/10 dark:bg-[#004aad]/20 flex items-center justify-center"
											>
												<span
													class="text-[#004aad] dark:text-[#4a8cff] font-bold text-sm"
													>MD</span
												>
											</div>
										</div>
										<div>
											<div
												class="text-sm font-medium text-gray-900 dark:text-white"
											>
												Marie Dubois
											</div>
											<div class="text-xs text-gray-500 dark:text-gray-400">
												Responsable RH
											</div>
										</div>
									</div>
								</td>
								<td class="px-4 py-3">
									<div class="text-sm text-gray-900 dark:text-white">
										Ressources Humaines
									</div>
								</td>
								<td class="px-4 py-3">
									<div class="text-sm text-gray-900 dark:text-white">
										15/01/2024
									</div>
								</td>
								<td class="px-4 py-3">
									<div
										class="text-sm font-medium text-gray-900 dark:text-white"
									>
										08:45
									</div>
								</td>
								<td class="px-4 py-3">
									<div
										class="text-sm font-medium text-gray-900 dark:text-white"
									>
										17:30
									</div>
								</td>
								<td class="px-4 py-3">
									<div
										class="text-sm font-medium text-green-600 dark:text-green-400"
									>
										8h 45min
									</div>
								</td>
								<td class="px-4 py-3">
									<span
										class="px-2 py-1 inline-flex text-xs font-semibold rounded-full bg-[#00bf63]/10 dark:bg-[#00bf63]/20 text-[#00bf63] dark:text-[#00e673]"
									>
										Présent
									</span>
								</td>
								<td class="px-4 py-3">
									<div class="flex space-x-2">
										<button
											class="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#004aad] dark:text-[#4a8cff] hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
											title="Modifier"
										>
											<svg
												class="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
												/>
											</svg>
										</button>
										<button
											class="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-[#e61c0e] dark:text-[#ff4d4d] hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
											title="Supprimer"
										>
											<svg
												class="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fill-rule="evenodd"
													d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
													clip-rule="evenodd"
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>

							<!-- Jean Martin -->
							<tr
								class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
							>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="flex items-center space-x-3">
										<div class="flex-shrink-0 h-8 w-8">
											<div
												class="h-8 w-8 rounded-full bg-[#00bf63]/10 dark:bg-[#00bf63]/20 flex items-center justify-center"
											>
												<span
													class="text-[#00bf63] dark:text-[#00e673] font-bold text-sm"
													>JM</span
												>
											</div>
										</div>
										<div>
											<div
												class="text-sm font-medium text-gray-900 dark:text-white"
											>
												Jean Martin
											</div>
											<div class="text-xs text-gray-500 dark:text-gray-400">
												Développeur Senior
											</div>
										</div>
									</div>
								</td>
								<td class="px-4 py-3">
									<div class="text-sm text-gray-900 dark:text-white">
										Informatique
									</div>
								</td>
								<td class="px-4 py-3">
									<div class="text-sm text-gray-900 dark:text-white">
										15/01/2024
									</div>
								</td>
								<td class="px-4 py-3">
									<div
										class="text-sm font-medium text-amber-600 dark:text-amber-400"
									>
										09:15
									</div>
								</td>
								<td class="px-4 py-3">
									<div
										class="text-sm font-medium text-gray-900 dark:text-white"
									>
										18:00
									</div>
								</td>
								<td class="px-4 py-3">
									<div
										class="text-sm font-medium text-green-600 dark:text-green-400"
									>
										8h 45min
									</div>
								</td>
								<td class="px-4 py-3">
									<span
										class="px-2 py-1 inline-flex text-xs font-semibold rounded-full bg-[#f59e0b]/10 dark:bg-[#fbbf24]/20 text-[#f59e0b] dark:text-[#fbbf24]"
									>
										Retard
									</span>
								</td>
								<td class="px-4 py-3">
									<div class="flex space-x-2">
										<button
											class="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#004aad] dark:text-[#4a8cff] hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
											title="Modifier"
										>
											<svg
												class="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
												/>
											</svg>
										</button>
										<button
											class="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-[#e61c0e] dark:text-[#ff4d4d] hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
											title="Supprimer"
										>
											<svg
												class="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fill-rule="evenodd"
													d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
													clip-rule="evenodd"
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>

							<!-- Sophie Laurent -->
							<tr
								class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
							>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="flex items-center space-x-3">
										<div class="flex-shrink-0 h-8 w-8">
											<div
												class="h-8 w-8 rounded-full bg-[#2E9AC8]/10 dark:bg-[#2E9AC8]/20 flex items-center justify-center"
											>
												<span
													class="text-[#2E9AC8] dark:text-[#4ab3e6] font-bold text-sm"
													>SL</span
												>
											</div>
										</div>
										<div>
											<div
												class="text-sm font-medium text-gray-900 dark:text-white"
											>
												Sophie Laurent
											</div>
											<div class="text-xs text-gray-500 dark:text-gray-400">
												Chef de Projet
											</div>
										</div>
									</div>
								</td>
								<td class="px-4 py-3">
									<div class="text-sm text-gray-900 dark:text-white">
										Marketing
									</div>
								</td>
								<td class="px-4 py-3">
									<div class="text-sm text-gray-900 dark:text-white">
										15/01/2024
									</div>
								</td>
								<td class="px-4 py-3">
									<div
										class="text-sm font-medium text-gray-400 dark:text-gray-500"
									>
										-
									</div>
								</td>
								<td class="px-4 py-3">
									<div
										class="text-sm font-medium text-gray-400 dark:text-gray-500"
									>
										-
									</div>
								</td>
								<td class="px-4 py-3">
									<div
										class="text-sm font-medium text-gray-400 dark:text-gray-500"
									>
										-
									</div>
								</td>
								<td class="px-4 py-3">
									<span
										class="px-2 py-1 inline-flex text-xs font-semibold rounded-full bg-[#e61c0e]/10 dark:bg-[#ff4d4d]/20 text-[#e61c0e] dark:text-[#ff4d4d]"
									>
										Absent
									</span>
								</td>
								<td class="px-4 py-3">
									<div class="flex space-x-2">
										<button
											class="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#004aad] dark:text-[#4a8cff] hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
											title="Modifier"
										>
											<svg
												class="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
												/>
											</svg>
										</button>
										<button
											class="p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-[#e61c0e] dark:text-[#ff4d4d] hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
											title="Supprimer"
										>
											<svg
												class="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fill-rule="evenodd"
													d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
													clip-rule="evenodd"
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>

							<!-- Ajouter les autres employés de la même manière... -->
						</tbody>
					</table>
				</div>
			</div>

			<!-- Pagination -->
			<div
				class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 p-4 md:p-6"
			>
				<div class="text-sm text-gray-600 dark:text-gray-400">
					Affichage de <span class="font-semibold">1</span> à
					<span class="font-semibold">5</span> sur
					<span class="font-semibold">10</span> employés
				</div>
				<div class="flex items-center space-x-3">
					<select
						class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-lg p-2 focus:ring-[#004aad] focus:border-[#004aad]"
					>
						<option>5 par page</option>
						<option>10 par page</option>
						<option>25 par page</option>
						<option>50 par page</option>
					</select>
					<nav class="flex items-center space-x-2">
						<button
							class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-colors"
							disabled
						>
							Précédent
						</button>
						<button
							class="px-3 py-2 rounded-lg bg-[#004aad] text-white text-sm font-medium hover:bg-[#003b8a] transition-colors"
						>
							1
						</button>
						<button
							class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
						>
							2
						</button>
						<button
							class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
						>
							3
						</button>
						<button
							class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
						>
							Suivant
						</button>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	// Code pour les interactions si nécessaire
</script>
