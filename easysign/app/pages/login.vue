<template>
	<div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
		<div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
			<div class="text-center mb-8">
				<h2 class="text-2xl font-bold text-gray-800 mb-2">Connexion</h2>
				<p class="text-gray-600">Accédez à votre espace</p>
			</div>

			<!-- Message d'erreur -->
			<div
				v-if="errorMessage"
				class="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-center border border-red-100"
			>
				{{ errorMessage }}
			</div>

			<form @submit.prevent="handleLogin" class="space-y-6">
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">
						Email
					</label>
					<input
						v-model="email"
						type="email"
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004aad]"
						required
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">
						Mot de passe
					</label>
					<input
						v-model="password"
						type="password"
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004aad]"
						required
					/>
				</div>

				<button
					type="submit"
					:disabled="loading"
					class="w-full bg-[#004aad] text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
				>
					{{ loading ? "Connexion..." : "Se connecter" }}
				</button>
			</form>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import { useAuthStore } from "../../stores/auth";
	import { useUserStore } from "~~/stores/user";

	const auth = useAuthStore();
	const userStore = useUserStore();

	const email = ref("");
	const password = ref("");
	const errorMessage = ref("");
	const loading = ref(false);

	const handleLogin = async () => {
		errorMessage.value = "";
		loading.value = true;

		try {
			await auth.login(email.value, password.value);
			await navigateTo("/dashboard");
		} catch (e) {
			errorMessage.value = e.message || "Erreur inconnue";
		} finally {
			loading.value = false;
		}
	};

	definePageMeta({
		layout: false,
	});
</script>
