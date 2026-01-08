import { useAuthStore } from "~~/stores/auth";

export default defineNuxtRouteMiddleware(() => {
	if (process.server) {
		return;
	}
	const auth = useAuthStore();

	if (!auth.isLogged) {
		return navigateTo("/login");
	}
});
