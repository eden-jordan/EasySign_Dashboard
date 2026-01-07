<template>
	<div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
		<div class="max-w-full mx-auto space-y-6">
			<!-- En-tête -->
			<div class="flex flex-col md:flex-row md:items-center justify-between">
				<div>
					<h1
						class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
					>
						Rapports
					</h1>
					<p class="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
						Générez et analysez vos rapports de présences
					</p>
				</div>
				<div class="flex space-x-3 mt-3 md:mt-0">
					<button
						class="px-4 py-2.5 bg-[#004aad] hover:bg-[#044396] text-white rounded-lg text-sm font-medium flex items-center transition duration-200"
					>
						<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
						Export PDF
					</button>
				</div>
			</div>

			<!-- Filtres et options de rapport -->
			<div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
				<!-- Filtres de gauche -->
				<div class="lg:col-span-1">
					<div class="bg-white dark:bg-gray-800 rounded-lg shadow p-5">
						<h3
							class="text-lg font-semibold text-gray-900 dark:text-white mb-4"
						>
							Filtres
						</h3>

						<div class="space-y-4">
							<!-- Type de rapport -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									Type de rapport
								</label>
								<select
									class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] p-2.5"
								>
									<option selected>Mensuel</option>
									<option>Hebdomadaire</option>
									<option>Trimestriel</option>
									<option>Annuel</option>
									<option>Personnalisé</option>
								</select>
							</div>

							<!-- Rapport par -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									Rapport par
								</label>
								<select
									class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] p-2.5"
								>
									<option selected>Vue globale</option>
									<option>Par département</option>
									<option>Par équipe</option>
									<option>Par employé</option>
								</select>
							</div>

							<!-- Organisation -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									Organisation
								</label>
								<select
									class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] p-2.5"
								>
									<option selected>Toutes les organisations</option>
									<option>Organisation 1</option>
									<option>Organisation 2</option>
									<option>Organisation 3</option>
								</select>
							</div>

							<!-- Personnel -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									Personnel
								</label>
								<select
									class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] p-2.5"
								>
									<option selected>Tout le personnel</option>
									<option>Par département</option>
									<option>Par statut</option>
									<option>Sélection multiple</option>
								</select>
							</div>

							<!-- Date de début -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									Date de début
								</label>
								<div class="relative">
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
										class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] block w-full pl-10 p-2.5"
										value="01/01/2025"
									/>
								</div>
							</div>

							<!-- Date de fin -->
							<div>
								<label
									class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									Date de fin
								</label>
								<div class="relative">
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
										class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#004aad] focus:border-[#004aad] block w-full pl-10 p-2.5"
										value="31/01/2025"
									/>
								</div>
							</div>

							<!-- Bouton générer -->
							<button
								class="w-full mt-2 px-4 py-3 bg-[#004aad] hover:bg-[#003b8a] text-white rounded-lg text-sm font-medium flex items-center justify-center transition duration-200"
							>
								<svg
									class="w-5 h-5 mr-2"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
										clip-rule="evenodd"
									/>
								</svg>
								Générer le rapport
							</button>
						</div>
					</div>
				</div>

				<!-- Statistiques principales -->
				<div class="lg:col-span-3">
					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
					>
						<!-- Total Présences -->
						<div
							class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#00bf63]"
						>
							<div class="flex items-center justify-between">
								<div>
									<p class="text-sm text-gray-500 dark:text-gray-400">
										Total Présences
									</p>
									<p
										class="text-3xl font-bold text-gray-900 dark:text-white mt-2"
									>
										136
									</p>
								</div>
								<div
									class="p-3 rounded-lg bg-[#00bf63]/10 dark:bg-[#00bf63]/20"
								>
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
							<div class="mt-4 flex items-center text-sm">
								<span
									class="text-[#00bf63] dark:text-[#00d673] flex items-center"
								>
									<svg
										class="w-4 h-4 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
											clip-rule="evenodd"
										/>
									</svg>
									+12%
								</span>
								<span class="text-gray-500 dark:text-gray-400 ml-2"
									>vs mois dernier</span
								>
							</div>
						</div>

						<!-- Total Absences -->
						<div
							class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#e61c0e]"
						>
							<div class="flex items-center justify-between">
								<div>
									<p class="text-sm text-gray-500 dark:text-gray-400">
										Total Absences
									</p>
									<p
										class="text-3xl font-bold text-gray-900 dark:text-white mt-2"
									>
										8
									</p>
								</div>
								<div
									class="p-3 rounded-lg bg-[#e61c0e]/10 dark:bg-[#e61c0e]/20"
								>
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
								<span
									class="text-[#e61c0e] dark:text-[#ff4d4d] flex items-center"
								>
									<svg
										class="w-4 h-4 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
											clip-rule="evenodd"
										/>
									</svg>
									-8%
								</span>
								<span class="text-gray-500 dark:text-gray-400 ml-2"
									>vs mois dernier</span
								>
							</div>
						</div>

						<!-- Total Retards -->
						<div
							class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#f59e0b]"
						>
							<div class="flex items-center justify-between">
								<div>
									<p class="text-sm text-gray-500 dark:text-gray-400">
										Total Retards
									</p>
									<p
										class="text-3xl font-bold text-gray-900 dark:text-white mt-2"
									>
										5
									</p>
								</div>
								<div
									class="p-3 rounded-lg bg-[#f59e0b]/10 dark:bg-[#f59e0b]/20"
								>
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
								<span
									class="text-[#00bf63] dark:text-[#00d673] flex items-center"
								>
									<svg
										class="w-4 h-4 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
											clip-rule="evenodd"
										/>
									</svg>
									+3%
								</span>
								<span class="text-gray-500 dark:text-gray-400 ml-2"
									>vs mois dernier</span
								>
							</div>
						</div>

						<!-- Taux Moyen -->
						<div
							class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-[#2E9AC8]"
						>
							<div class="flex items-center justify-between">
								<div>
									<p class="text-sm text-gray-500 dark:text-gray-400">
										Taux Moyen
									</p>
									<p
										class="text-3xl font-bold text-gray-900 dark:text-white mt-2"
									>
										94.5%
									</p>
								</div>
								<div
									class="p-3 rounded-lg bg-[#2E9AC8]/10 dark:bg-[#2E9AC8]/20"
								>
									<svg
										class="w-8 h-8 text-[#2E9AC8] dark:text-[#4ab3e6]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
							</div>
							<div class="mt-4 flex items-center text-sm">
								<span
									class="text-[#00bf63] dark:text-[#00d673] flex items-center"
								>
									<svg
										class="w-4 h-4 mr-1"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
											clip-rule="evenodd"
										/>
									</svg>
									+5%
								</span>
								<span class="text-gray-500 dark:text-gray-400 ml-2"
									>vs mois dernier</span
								>
							</div>
						</div>
					</div>

					<!-- Évolution des présences -->
					<div class="bg-white dark:bg-gray-800 rounded-lg shadow p-5 mb-6">
						<h3
							class="text-lg font-semibold text-gray-900 dark:text-white mb-4"
						>
							Évolution des présences
						</h3>

						<div class="space-y-4">
							<!-- Sophie Martin -->
							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-3">
									<div class="flex-shrink-0 h-10 w-10">
										<div
											class="h-10 w-10 rounded-full bg-[#004aad]/10 dark:bg-[#004aad]/20 flex items-center justify-center"
										>
											<span class="text-[#004aad] dark:text-[#4a8cff] font-bold"
												>SM</span
											>
										</div>
									</div>
									<div>
										<p
											class="text-sm font-medium text-gray-900 dark:text-white"
										>
											Sophie Martin
										</p>
										<p class="text-xs text-gray-500 dark:text-gray-400">
											Chef de Projet
										</p>
									</div>
								</div>
								<div class="flex items-center space-x-4">
									<div
										class="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
									>
										<div
											class="bg-[#00bf63] h-2 rounded-full"
											style="width: 91.7%"
										></div>
									</div>
									<span
										class="text-sm font-medium text-gray-900 dark:text-white w-12 text-right"
									>
										91.7%
									</span>
								</div>
							</div>

							<!-- Thomas Dubois -->
							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-3">
									<div class="flex-shrink-0 h-10 w-10">
										<div
											class="h-10 w-10 rounded-full bg-[#00bf63]/10 dark:bg-[#00bf63]/20 flex items-center justify-center"
										>
											<span class="text-[#00bf63] dark:text-[#00e673] font-bold"
												>TD</span
											>
										</div>
									</div>
									<div>
										<p
											class="text-sm font-medium text-gray-900 dark:text-white"
										>
											Thomas Dubois
										</p>
										<p class="text-xs text-gray-500 dark:text-gray-400">
											Développeur
										</p>
									</div>
								</div>
								<div class="flex items-center space-x-4">
									<div
										class="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
									>
										<div
											class="bg-[#00bf63] h-2 rounded-full"
											style="width: 100%"
										></div>
									</div>
									<span
										class="text-sm font-medium text-gray-900 dark:text-white w-12 text-right"
									>
										100%
									</span>
								</div>
							</div>

							<!-- Marie Laurent -->
							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-3">
									<div class="flex-shrink-0 h-10 w-10">
										<div
											class="h-10 w-10 rounded-full bg-[#2E9AC8]/10 dark:bg-[#2E9AC8]/20 flex items-center justify-center"
										>
											<span class="text-[#2E9AC8] dark:text-[#4ab3e6] font-bold"
												>ML</span
											>
										</div>
									</div>
									<div>
										<p
											class="text-sm font-medium text-gray-900 dark:text-white"
										>
											Marie Laurent
										</p>
										<p class="text-xs text-gray-500 dark:text-gray-400">RH</p>
									</div>
								</div>
								<div class="flex items-center space-x-4">
									<div
										class="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
									>
										<div
											class="bg-[#f59e0b] h-2 rounded-full"
											style="width: 87.5%"
										></div>
									</div>
									<span
										class="text-sm font-medium text-gray-900 dark:text-white w-12 text-right"
									>
										87.5%
									</span>
								</div>
							</div>

							<!-- Pierre Bernard -->
							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-3">
									<div class="flex-shrink-0 h-10 w-10">
										<div
											class="h-10 w-10 rounded-full bg-[#004aad]/15 dark:bg-[#004aad]/25 flex items-center justify-center"
										>
											<span class="text-[#004aad] dark:text-[#4a8cff] font-bold"
												>PB</span
											>
										</div>
									</div>
									<div>
										<p
											class="text-sm font-medium text-gray-900 dark:text-white"
										>
											Pierre Bernard
										</p>
										<p class="text-xs text-gray-500 dark:text-gray-400">
											Commercial
										</p>
									</div>
								</div>
								<div class="flex items-center space-x-4">
									<div
										class="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
									>
										<div
											class="bg-[#00bf63] h-2 rounded-full"
											style="width: 95.8%"
										></div>
									</div>
									<span
										class="text-sm font-medium text-gray-900 dark:text-white w-12 text-right"
									>
										95.8%
									</span>
								</div>
							</div>

							<!-- Julie Petit -->
							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-3">
									<div class="flex-shrink-0 h-10 w-10">
										<div
											class="h-10 w-10 rounded-full bg-[#8b5cf6]/10 dark:bg-[#a78bfa]/20 flex items-center justify-center"
										>
											<span class="text-[#8b5cf6] dark:text-[#a78bfa] font-bold"
												>JP</span
											>
										</div>
									</div>
									<div>
										<p
											class="text-sm font-medium text-gray-900 dark:text-white"
										>
											Julie Petit
										</p>
										<p class="text-xs text-gray-500 dark:text-gray-400">
											Marketing
										</p>
									</div>
								</div>
								<div class="flex items-center space-x-4">
									<div
										class="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
									>
										<div
											class="bg-[#00bf63] h-2 rounded-full"
											style="width: 91.7%"
										></div>
									</div>
									<span
										class="text-sm font-medium text-gray-900 dark:text-white w-12 text-right"
									>
										91.7%
									</span>
								</div>
							</div>

							<!-- Lucas Moreau -->
							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-3">
									<div class="flex-shrink-0 h-10 w-10">
										<div
											class="h-10 w-10 rounded-full bg-[#ec4899]/10 dark:bg-[#f472b6]/20 flex items-center justify-center"
										>
											<span class="text-[#ec4899] dark:text-[#f472b6] font-bold"
												>LM</span
											>
										</div>
									</div>
									<div>
										<p
											class="text-sm font-medium text-gray-900 dark:text-white"
										>
											Lucas Moreau
										</p>
										<p class="text-xs text-gray-500 dark:text-gray-400">
											Support
										</p>
									</div>
								</div>
								<div class="flex items-center space-x-4">
									<div
										class="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
									>
										<div
											class="bg-[#00bf63] h-2 rounded-full"
											style="width: 100%"
										></div>
									</div>
									<span
										class="text-sm font-medium text-gray-900 dark:text-white w-12 text-right"
									>
										100%
									</span>
								</div>
							</div>
						</div>
					</div>

					<!-- Détails du rapport -->
					<div
						class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
					>
						<div
							class="px-5 py-4 border-b border-gray-200 dark:border-gray-700"
						>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
								Détails du rapport
							</h3>
						</div>

						<div class="overflow-x-auto">
							<table
								class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
							>
								<thead class="bg-gray-50 dark:bg-gray-700">
									<tr>
										<th
											scope="col"
											class="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
										>
											Nom
										</th>
										<th
											scope="col"
											class="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
										>
											Présences
										</th>
										<th
											scope="col"
											class="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
										>
											Absences
										</th>
										<th
											scope="col"
											class="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
										>
											Retards
										</th>
										<th
											scope="col"
											class="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
										>
											Heures
										</th>
										<th
											scope="col"
											class="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
										>
											Taux
										</th>
									</tr>
								</thead>
								<tbody
									class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
								>
									<!-- Sophie Martin -->
									<tr
										class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
									>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-3">
												<div class="flex-shrink-0 h-8 w-8">
													<div
														class="h-8 w-8 rounded-full bg-[#004aad]/10 dark:bg-[#004aad]/20 flex items-center justify-center"
													>
														<span
															class="text-[#004aad] dark:text-[#4a8cff] font-bold text-sm"
															>SM</span
														>
													</div>
												</div>
												<div>
													<p
														class="text-sm font-medium text-gray-900 dark:text-white"
													>
														Sophie Martin
													</p>
													<p class="text-xs text-gray-500 dark:text-gray-400">
														Chef de Projet
													</p>
												</div>
											</div>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#00bf63] dark:text-[#00e673]"
											>
												22
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#e61c0e] dark:text-[#ff4d4d]"
											>
												2
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#f59e0b] dark:text-[#fbbf24]"
											>
												1
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-gray-900 dark:text-white"
											>
												176h
											</span>
										</td>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-2">
												<div
													class="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
												>
													<div
														class="bg-[#00bf63] h-2 rounded-full"
														style="width: 91.7%"
													></div>
												</div>
												<span
													class="text-sm font-medium text-gray-900 dark:text-white"
												>
													91.7%
												</span>
											</div>
										</td>
									</tr>

									<!-- Thomas Dubois -->
									<tr
										class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
									>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-3">
												<div class="flex-shrink-0 h-8 w-8">
													<div
														class="h-8 w-8 rounded-full bg-[#00bf63]/10 dark:bg-[#00bf63]/20 flex items-center justify-center"
													>
														<span
															class="text-[#00bf63] dark:text-[#00e673] font-bold text-sm"
															>TD</span
														>
													</div>
												</div>
												<div>
													<p
														class="text-sm font-medium text-gray-900 dark:text-white"
													>
														Thomas Dubois
													</p>
													<p class="text-xs text-gray-500 dark:text-gray-400">
														Développeur
													</p>
												</div>
											</div>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#00bf63] dark:text-[#00e673]"
											>
												24
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#e61c0e] dark:text-[#ff4d4d]"
											>
												0
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#f59e0b] dark:text-[#fbbf24]"
											>
												0
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-gray-900 dark:text-white"
											>
												192h
											</span>
										</td>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-2">
												<div
													class="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
												>
													<div
														class="bg-[#00bf63] h-2 rounded-full"
														style="width: 100%"
													></div>
												</div>
												<span
													class="text-sm font-medium text-gray-900 dark:text-white"
												>
													100%
												</span>
											</div>
										</td>
									</tr>

									<!-- Marie Laurent -->
									<tr
										class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
									>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-3">
												<div class="flex-shrink-0 h-8 w-8">
													<div
														class="h-8 w-8 rounded-full bg-[#2E9AC8]/10 dark:bg-[#2E9AC8]/20 flex items-center justify-center"
													>
														<span
															class="text-[#2E9AC8] dark:text-[#4ab3e6] font-bold text-sm"
															>ML</span
														>
													</div>
												</div>
												<div>
													<p
														class="text-sm font-medium text-gray-900 dark:text-white"
													>
														Marie Laurent
													</p>
													<p class="text-xs text-gray-500 dark:text-gray-400">
														RH
													</p>
												</div>
											</div>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#00bf63] dark:text-[#00e673]"
											>
												21
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#e61c0e] dark:text-[#ff4d4d]"
											>
												3
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#f59e0b] dark:text-[#fbbf24]"
											>
												2
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-gray-900 dark:text-white"
											>
												168h
											</span>
										</td>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-2">
												<div
													class="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
												>
													<div
														class="bg-[#f59e0b] h-2 rounded-full"
														style="width: 87.5%"
													></div>
												</div>
												<span
													class="text-sm font-medium text-gray-900 dark:text-white"
												>
													87.5%
												</span>
											</div>
										</td>
									</tr>

									<!-- Pierre Bernard -->
									<tr
										class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
									>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-3">
												<div class="flex-shrink-0 h-8 w-8">
													<div
														class="h-8 w-8 rounded-full bg-[#004aad]/15 dark:bg-[#004aad]/25 flex items-center justify-center"
													>
														<span
															class="text-[#004aad] dark:text-[#4a8cff] font-bold text-sm"
															>PB</span
														>
													</div>
												</div>
												<div>
													<p
														class="text-sm font-medium text-gray-900 dark:text-white"
													>
														Pierre Bernard
													</p>
													<p class="text-xs text-gray-500 dark:text-gray-400">
														Commercial
													</p>
												</div>
											</div>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#00bf63] dark:text-[#00e673]"
											>
												23
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#e61c0e] dark:text-[#ff4d4d]"
											>
												1
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#f59e0b] dark:text-[#fbbf24]"
											>
												1
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-gray-900 dark:text-white"
											>
												184h
											</span>
										</td>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-2">
												<div
													class="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
												>
													<div
														class="bg-[#00bf63] h-2 rounded-full"
														style="width: 95.8%"
													></div>
												</div>
												<span
													class="text-sm font-medium text-gray-900 dark:text-white"
												>
													95.8%
												</span>
											</div>
										</td>
									</tr>

									<!-- Julie Petit -->
									<tr
										class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
									>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-3">
												<div class="flex-shrink-0 h-8 w-8">
													<div
														class="h-8 w-8 rounded-full bg-[#8b5cf6]/10 dark:bg-[#a78bfa]/20 flex items-center justify-center"
													>
														<span
															class="text-[#8b5cf6] dark:text-[#a78bfa] font-bold text-sm"
															>JP</span
														>
													</div>
												</div>
												<div>
													<p
														class="text-sm font-medium text-gray-900 dark:text-white"
													>
														Julie Petit
													</p>
													<p class="text-xs text-gray-500 dark:text-gray-400">
														Marketing
													</p>
												</div>
											</div>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#00bf63] dark:text-[#00e673]"
											>
												22
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#e61c0e] dark:text-[#ff4d4d]"
											>
												2
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#f59e0b] dark:text-[#fbbf24]"
											>
												0
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-gray-900 dark:text-white"
											>
												176h
											</span>
										</td>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-2">
												<div
													class="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
												>
													<div
														class="bg-[#00bf63] h-2 rounded-full"
														style="width: 91.7%"
													></div>
												</div>
												<span
													class="text-sm font-medium text-gray-900 dark:text-white"
												>
													91.7%
												</span>
											</div>
										</td>
									</tr>

									<!-- Lucas Moreau -->
									<tr
										class="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
									>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-3">
												<div class="flex-shrink-0 h-8 w-8">
													<div
														class="h-8 w-8 rounded-full bg-[#ec4899]/10 dark:bg-[#f472b6]/20 flex items-center justify-center"
													>
														<span
															class="text-[#ec4899] dark:text-[#f472b6] font-bold text-sm"
															>LM</span
														>
													</div>
												</div>
												<div>
													<p
														class="text-sm font-medium text-gray-900 dark:text-white"
													>
														Lucas Moreau
													</p>
													<p class="text-xs text-gray-500 dark:text-gray-400">
														Support
													</p>
												</div>
											</div>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#00bf63] dark:text-[#00e673]"
											>
												24
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#e61c0e] dark:text-[#ff4d4d]"
											>
												0
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-[#f59e0b] dark:text-[#fbbf24]"
											>
												1
											</span>
										</td>
										<td class="px-5 py-4">
											<span
												class="text-sm font-medium text-gray-900 dark:text-white"
											>
												192h
											</span>
										</td>
										<td class="px-5 py-4">
											<div class="flex items-center space-x-2">
												<div
													class="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2"
												>
													<div
														class="bg-[#00bf63] h-2 rounded-full"
														style="width: 100%"
													></div>
												</div>
												<span
													class="text-sm font-medium text-gray-900 dark:text-white"
												>
													100%
												</span>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
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
