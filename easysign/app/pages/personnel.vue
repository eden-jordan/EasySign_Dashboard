<template>
	<div class="min-h-screen bg-gray-50 dark:bg-gray-900 w-full p-0 m-0">
		<div class="w-full p-0 m-0">
			<!-- En-tête -->
			<div
				class="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6"
			>
				<div>
					<h1
						class="text-3xl md:text-3xl font-bold text-gray-900 dark:text-white"
					>
						Gestion du Personnel
					</h1>
					<p class="text-gray-600 dark:text-gray-400 mt-2">
						Gérez et suivez tous vos employés en un seul endroit
					</p>
				</div>
				<div class="mt-4 md:mt-0">
					<button
						class="px-4 py-2.5 bg-[#004aad] hover:bg-[#003b8a] text-white rounded-lg font-medium flex items-center transition duration-200 shadow-md hover:shadow-lg"
					>
						<svg
							class="w-5 h-5 md:w-6 md:h-6 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fill-rule="evenodd"
								d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
								clip-rule="evenodd"
							/>
						</svg>
						Ajouter un Employé
					</button>
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
								class="w-5 h-5 text-gray-400"
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
							class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base rounded-lg focus:ring-[#004aad] focus:border-[#004aad] block pl-10 p-3"
							placeholder="Rechercher un employé..."
						/>
					</div>
				</div>
			</div>

			<!-- Tableau -->
			<div class="w-full overflow-x-auto mx-4 md:mx-6">
				<div class="inline-block min-w-full">
					<table class="w-full divide-y divide-gray-200 dark:divide-gray-700">
						<thead class="bg-gray-100 dark:bg-gray-700">
							<tr>
								<th
									scope="col"
									class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
								>
									Employé
								</th>
								<th
									scope="col"
									class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
								>
									Telephone
								</th>
								<th
									scope="col"
									class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
								>
									Email
								</th>

								<th
									scope="col"
									class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
								>
									Date enregistrement
								</th>
								<th
									scope="col"
									class="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
								>
									Actions
								</th>
							</tr>
						</thead>
						<tbody
							class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
						>
							<!-- Employé 1 -->
							<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<div
												class="h-10 w-10 rounded-full bg-[#004aad]/10 dark:bg-[#004aad]/20 flex items-center justify-center"
											>
												<span
													class="text-[#004aad] dark:text-[#4a8cff] font-bold text-sm"
													>MD</span
												>
											</div>
										</div>
										<div class="ml-3">
											<div
												class="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[120px]"
											>
												Marie Dubois
											</div>
										</div>
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="text-xs text-gray-500 dark:text-gray-400">
										+33 6 12 34 56 78
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div
										class="text-sm text-gray-900 dark:text-white truncate max-w-[150px]"
									>
										marie.dubois@example.com
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="text-sm text-gray-900 dark:text-white">
										15/03/2020
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="flex space-x-2">
										<button
											class="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#004aad] dark:text-[#4a8cff] hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
											title="Éditer"
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
											class="p-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-[#e61c0e] dark:text-[#ff4d4d] hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
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
										<button
											class="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
											title="Voir détails"
										>
											<svg
												class="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fill-rule="evenodd"
													d="M10 12a2 2 0 100-4 2 2 0 000 4z"
												/>
												<path
													fill-rule="evenodd"
													d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>

							<!-- Employé 2 -->
							<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<div
												class="h-10 w-10 rounded-full bg-[#00bf63]/10 dark:bg-[#00bf63]/20 flex items-center justify-center"
											>
												<span
													class="text-[#00bf63] dark:text-[#00e673] font-bold text-sm"
													>JM</span
												>
											</div>
										</div>
										<div class="ml-3">
											<div
												class="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[120px]"
											>
												Jean Martin
											</div>
										</div>
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="text-xs text-gray-500 dark:text-gray-400">
										+33 6 23 45 67 89
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div
										class="text-sm text-gray-900 dark:text-white truncate max-w-[150px]"
									>
										jean.martin@example.com
									</div>
								</td>

								<td class="px-4 py-3 whitespace-nowrap">
									<div class="text-sm text-gray-900 dark:text-white">
										20/06/2019
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="flex space-x-2">
										<button
											class="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#004aad] dark:text-[#4a8cff] hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
											title="Éditer"
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
											class="p-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-[#e61c0e] dark:text-[#ff4d4d] hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
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
										<button
											class="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
											title="Voir détails"
										>
											<svg
												class="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fill-rule="evenodd"
													d="M10 12a2 2 0 100-4 2 2 0 000 4z"
												/>
												<path
													fill-rule="evenodd"
													d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>

							<!-- Ajoute les autres employés ici -->
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
	definePageMeta({
		middleware: "auth",
	});
</script>
