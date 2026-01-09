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
						@click="openCreateModal"
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
							v-model="searchQuery"
							type="text"
							class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base rounded-lg focus:ring-[#004aad] focus:border-[#004aad] block pl-10 p-3"
							placeholder="Rechercher un employé..."
						/>
					</div>
				</div>
			</div>

			<!-- État de chargement/erreur -->
			<div v-if="personnelStore.loading" class="p-8 text-center">
				<div
					class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#004aad]"
				></div>
				<p class="mt-2 text-gray-600 dark:text-gray-400">
					Chargement du personnel...
				</p>
			</div>

			<div v-else-if="personnelStore.error" class="p-4 mx-4 md:mx-6">
				<div
					class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4"
				>
					<p class="text-red-700 dark:text-red-400">
						{{ personnelStore.error }}
					</p>
				</div>
			</div>

			<!-- Tableau -->
			<div v-else class="w-full overflow-x-auto mx-4 md:mx-6">
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
									Téléphone
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
							<!-- Aucun résultat -->
							<tr v-if="filteredPersonnel.length === 0">
								<td
									colspan="5"
									class="px-4 py-8 text-center text-gray-500 dark:text-gray-400"
								>
									Aucun employé trouvé
								</td>
							</tr>

							<!-- Liste des employés -->
							<tr
								v-for="person in filteredPersonnel"
								:key="person.id"
								class="hover:bg-gray-50 dark:hover:bg-gray-700"
							>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="flex items-center">
										<div class="flex-shrink-0 h-10 w-10">
											<div
												class="h-10 w-10 rounded-full bg-[#004aad]/10 dark:bg-[#004aad]/20 flex items-center justify-center"
											>
												<span
													class="text-[#004aad] dark:text-[#4a8cff] font-bold text-sm"
												>
													{{ getInitials(person) }}
												</span>
											</div>
										</div>
										<div class="ml-3">
											<div
												class="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[120px]"
											>
												{{ getFullName(person) }}
											</div>
										</div>
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="text-xs text-gray-500 dark:text-gray-400">
										{{ person.tel || "Non renseigné" }}
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div
										class="text-sm text-gray-900 dark:text-white truncate max-w-[150px]"
									>
										{{ person.email || "Non renseigné" }}
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="text-sm text-gray-900 dark:text-white">
										{{ formatDate(person.created_at) }}
									</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="flex space-x-2">
										<button
											class="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#004aad] dark:text-[#4a8cff] hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
											title="Éditer"
											@click="openEditModal(person)"
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
											@click="deletePerson(person)"
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
											@click="openDetailModal(person)"
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
						</tbody>
					</table>
				</div>
			</div>

			<!-- Pagination -->
			<div
				v-if="!personnelStore.loading && personnelStore.personnel.length > 0"
				class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 p-4 md:p-6"
			>
				<div class="text-sm text-gray-600 dark:text-gray-400">
					Affichage de <span class="font-semibold">1</span> à
					<span class="font-semibold">{{
						personnelStore.personnel.length
					}}</span>
					sur
					<span class="font-semibold">{{
						personnelStore.personnel.length
					}}</span>
					employés
				</div>
				<div class="flex items-center space-x-3">
					<select
						v-model="itemsPerPage"
						class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-lg p-2 focus:ring-[#004aad] focus:border-[#004aad]"
					>
						<option value="5">5 par page</option>
						<option value="10">10 par page</option>
						<option value="25">25 par page</option>
						<option value="50">50 par page</option>
					</select>
					<nav class="flex items-center space-x-2">
						<button
							class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-colors"
							:disabled="currentPage === 1"
							@click="currentPage--"
						>
							Précédent
						</button>
						<button
							v-for="page in totalPages"
							:key="page"
							class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium transition-colors"
							:class="{
								'bg-[#004aad] text-white hover:bg-[#003b8a]':
									currentPage === page,
								'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700':
									currentPage !== page,
							}"
							@click="currentPage = page"
						>
							{{ page }}
						</button>
						<button
							class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors"
							:disabled="currentPage === totalPages"
							@click="currentPage++"
						>
							Suivant
						</button>
					</nav>
				</div>
			</div>
		</div>
	</div>

	<div
		v-if="showCreateModal"
		class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
	>
		<div class="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md">
			<h2 class="text-xl font-bold mb-4">Ajouter un employé</h2>

			<input v-model="form.prenom" placeholder="Prénom" class="input" />
			<input v-model="form.nom" placeholder="Nom" class="input" />
			<input v-model="form.email" placeholder="Email" class="input" />
			<input v-model="form.tel" placeholder="Téléphone" class="input" />

			<div class="flex justify-end gap-2 mt-4">
				<button @click="showCreateModal = false" class="btn-gray">
					Annuler
				</button>
				<button @click="submitCreate" class="btn-primary">
					{{ actionLoading ? "Création..." : "Créer" }}
				</button>
			</div>
		</div>
	</div>

	<div
		v-if="showEditModal"
		class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
	>
		<div class="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md">
			<h2 class="text-xl font-bold mb-4">Modifier employé</h2>

			<input v-model="form.prenom" class="input" />
			<input v-model="form.nom" class="input" />
			<input v-model="form.email" class="input" />
			<input v-model="form.tel" class="input" />

			<div class="flex justify-end gap-2 mt-4">
				<button @click="showEditModal = false" class="btn-gray">Annuler</button>
				<button @click="submitUpdate" class="btn-primary">
					{{ actionLoading ? "Sauvegarde..." : "Enregistrer" }}
				</button>
			</div>
		</div>
	</div>

	<div
		v-if="showDetailModal"
		class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
	>
		<div class="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md">
			<h2 class="text-xl font-bold mb-4">Détails employé</h2>

			<div v-if="selectedPerson">
				<p><b>Nom :</b> {{ getFullName(selectedPerson) }}</p>
				<p><b>Email :</b> {{ selectedPerson.email || "N/A" }}</p>
				<p><b>Téléphone :</b> {{ selectedPerson.tel || "N/A" }}</p>
				<p><b>Code :</b> {{ selectedPerson.qr_code }}</p>
			</div>

			<div class="flex justify-between gap-2 mt-6">
				<button @click="generateBadge(selectedPerson)" class="btn-primary">
					Générer badge
				</button>

				<button @click="showDetailModal = false" class="btn-gray">
					Fermer
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted } from "vue";
	import { usePersonnelStore } from "~~/stores/personnel";

	const personnelStore = usePersonnelStore();
	const searchQuery = ref("");
	const currentPage = ref(1);
	const itemsPerPage = ref(10);
	// Modals
	const showCreateModal = ref(false);
	const showEditModal = ref(false);
	const showDetailModal = ref(false);

	// Personnel sélectionné
	const selectedPerson = ref(null);

	// Formulaire
	const form = ref({
		nom: "",
		prenom: "",
		email: "",
		tel: "",
	});

	// Loading action
	const actionLoading = ref(false);

	// Fonctions utilitaires
	const getFullName = (person) => {
		return `${person.prenom || ""} ${person.nom || ""}`.trim();
	};

	const getInitials = (person) => {
		const nom = person.nom?.charAt(0).toUpperCase() || "";
		const prenom = person.prenom?.charAt(0).toUpperCase() || "";
		return `${prenom}${nom}`;
	};

	const formatDate = (dateString) => {
		if (!dateString) return "Non renseignée";
		const date = new Date(dateString);
		return date.toLocaleDateString("fr-FR");
	};

	// Filtrage et pagination
	const filteredPersonnel = computed(() => {
		let personnel = personnelStore.personnel || [];

		// Filtre de recherche
		if (searchQuery.value) {
			const query = searchQuery.value.toLowerCase();
			personnel = personnel.filter(
				(person) =>
					getFullName(person).toLowerCase().includes(query) ||
					person.email?.toLowerCase().includes(query) ||
					person.tel?.includes(query),
			);
		}

		return personnel;
	});

	const totalPages = computed(() => {
		return Math.ceil(filteredPersonnel.value.length / itemsPerPage.value);
	});

	// Méthodes d'actions
	const editPerson = (person) => {
		console.log("Éditer:", person);
		// Implémentez la logique d'édition
	};

	const viewDetails = (person) => {
		console.log("Voir détails:", person);
		// Implémentez la navigation vers les détails
	};

	// =========================
	// MODALS
	// =========================
	const openCreateModal = () => {
		form.value = { nom: "", prenom: "", email: "", tel: "" };
		showCreateModal.value = true;
	};

	const openEditModal = (person) => {
		selectedPerson.value = person;
		form.value = {
			nom: person.nom,
			prenom: person.prenom,
			email: person.email,
			tel: person.tel,
		};
		showEditModal.value = true;
	};

	const openDetailModal = (person) => {
		selectedPerson.value = person;
		showDetailModal.value = true;
	};

	// =========================
	// ACTIONS
	// =========================
	const submitCreate = async () => {
		try {
			actionLoading.value = true;
			await personnelStore.createPersonnel(form.value);
			showCreateModal.value = false;
		} catch (e) {
			alert("Erreur création");
		} finally {
			actionLoading.value = false;
		}
	};

	const submitUpdate = async () => {
		try {
			actionLoading.value = true;
			await personnelStore.updatePersonnel(selectedPerson.value.id, form.value);
			showEditModal.value = false;
		} catch (e) {
			alert("Erreur modification");
		} finally {
			actionLoading.value = false;
		}
	};

	const deletePerson = async (person) => {
		if (!confirm(`Supprimer ${getFullName(person)} ?`)) return;

		try {
			await personnelStore.deletePersonnel(person.id);
		} catch (e) {
			alert("Erreur suppression");
		}
	};

	const generateBadge = (person) => {
		window.open(
			`http://192.168.10.112:8000/api/personnel/${person.id}/qrcode`,
			"_blank",
		);
	};

	// Chargement initial
	onMounted(async () => {
		await personnelStore.getPersonnel();
	});

	definePageMeta({
		middleware: "auth",
	});
</script>
