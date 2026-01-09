<template>
	<aside
		:class="[
			'fixed top-0 left-0 z-40 h-screen transition-all duration-300',
			'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700',
			isSidebarOpen
				? 'translate-x-0 w-64'
				: '-translate-x-full lg:translate-x-0 lg:w-20',
		]"
		aria-label="Sidebar"
	>
		<div class="h-full px-3 py-4 overflow-y-auto">
			<!-- Logo -->
			<div class="flex items-center pl-2.5 mb-8">
				<div class="flex items-center justify-center w-full">
					<div
						class="h-8 w-8 rounded-lg bg-[#004aad] flex items-center justify-center"
					>
						<span class="text-white font-bold text-lg">E</span>
					</div>
					<span
						v-if="isSidebarOpen"
						class="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-3"
					>
						EasySign
					</span>
				</div>
			</div>

			<!-- Navigation -->
			<ul class="space-y-2 font-medium">
				<li>
					<NuxtLink
						to="/dashboard"
						:title="isSidebarOpen ? 'Dashboard' : 'Dashboard'"
						class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group"
						:class="{
							'bg-gray-100 dark:bg-gray-800': $route.path === '/dashboard',
						}"
					>
						<svg
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 22 21"
						>
							<path
								d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
							/>
							<path
								d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
							/>
						</svg>
						<span v-if="isSidebarOpen" class="ml-3">Dashboard</span>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/personnel"
						:title="isSidebarOpen ? 'Personnel' : 'Personnel'"
						class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group"
						:class="{
							'bg-gray-100 dark:bg-gray-800': $route.path === '/personnel',
						}"
					>
						<svg
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 18"
						>
							<path
								d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
							/>
						</svg>
						<span v-if="isSidebarOpen" class="ml-3">Personnel</span>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/presences"
						:title="isSidebarOpen ? 'Présences' : 'Présences'"
						class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group"
						:class="{
							'bg-gray-100 dark:bg-gray-800': $route.path === '/presences',
						}"
					>
						<svg
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"
							/>
						</svg>
						<span v-if="isSidebarOpen" class="ml-3">Présences</span>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/rapports"
						:title="isSidebarOpen ? 'Rapports' : 'Rapports'"
						class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group"
						:class="{
							'bg-gray-100 dark:bg-gray-800': $route.path === '/rapports',
						}"
					>
						<svg
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"
							/>
							<path
								d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
							/>
							<path
								d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"
							/>
						</svg>
						<span v-if="isSidebarOpen" class="ml-3">Rapports</span>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/organisations"
						:title="isSidebarOpen ? 'Organisations' : 'Organisations'"
						class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group"
						:class="{
							'bg-gray-100 dark:bg-gray-800': $route.path === '/organisations',
						}"
					>
						<svg
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3h3a1 1 0 0 1-.274.058L8 5.5 8.058 5Zm6.1 0h-3a1 1 0 0 1-.274-.058L11 5.5l.058-.5h3a1.5 1.5 0 1 1 0 3ZM18 9H2v2h16V9Z"
							/>
							<path
								d="M17.5 13.5h-1.586a1 1 0 0 0-.707.293l-1.353 1.353a1 1 0 0 1-.707.293h-1.586a1 1 0 0 1-.707-.293l-1.353-1.353a1 1 0 0 0-.707-.293H6.5A1.5 1.5 0 0 0 5 15v4.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V15a1.5 1.5 0 0 0-1.5-1.5Z"
							/>
						</svg>
						<span v-if="isSidebarOpen" class="ml-3">Organisations</span>
					</NuxtLink>
				</li>
			</ul>

			<!-- Section Admin (en bas) -->
			<div
				class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700"
			>
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<div
							class="w-8 h-8 rounded-full bg-[#004aad] flex items-center justify-center"
						>
							<span class="text-white font-bold text-sm">{{
								userInitial
							}}</span>
						</div>
					</div>
					<div v-if="isSidebarOpen" class="ml-3 overflow-hidden">
						<p
							class="text-sm font-medium text-gray-900 dark:text-white truncate"
						>
							{{ userFullName }}
						</p>
						<p class="text-xs text-gray-500 dark:text-gray-400 truncate">
							{{ userRole }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</aside>

	<!-- Overlay pour mobile -->
	<div
		v-if="isSidebarOpen && windowWidth < 1024"
		class="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 lg:hidden"
		@click="$emit('toggle-sidebar')"
	></div>
</template>

<script setup>
	import { ref, onMounted, onUnmounted } from "vue";
	import { useUserStore } from "~~/stores/user";

	defineProps({
		isSidebarOpen: {
			type: Boolean,
			default: false,
		},
	});

	defineEmits(["toggle-sidebar"]);

	// Pour gérer le responsive
	const windowWidth = ref(0);

	const userStore = useUserStore();
	const userFullName = ref("");
	const userRole = ref("");
	const userEmail = ref("");
	const userInitial = computed(() => {
		if (userStore.user && userStore.user.nom) {
			// Prend la première lettre du nom et la met en majuscule
			return userStore.user.nom.charAt(0).toUpperCase();
		}
	});

	onMounted(async () => {
		windowWidth.value = window.innerWidth;
		window.addEventListener("resize", updateWindowWidth);

		await userStore.fetchMe();
		if (userStore.user) {
			userFullName.value = `${userStore.user.nom} ${userStore.user.prenom}`;
			userRole.value =
				userStore.user.role === "superadmin"
					? "Admin Principal"
					: "Administrateur";
			userEmail.value = userStore.user.email;
		}
	});

	onUnmounted(() => {
		window.removeEventListener("resize", updateWindowWidth);
	});

	const updateWindowWidth = () => {
		windowWidth.value = window.innerWidth;
	};
</script>

<style scoped>
	/* Styles pour les transitions */
	.sidebar-transition {
		transition-property: transform, width;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
	}

	/* Masquer le texte dans la sidebar réduite */
	.sidebar-collapsed .nav-text {
		display: none;
	}
</style>
