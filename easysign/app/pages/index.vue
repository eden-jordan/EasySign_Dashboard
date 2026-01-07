<script setup>
	import { useRouter } from "vue-router";

	const router = useRouter();

	router.replace("/dashboard");

	definePageMeta({
		middleware: "auth",
	});
</script>

<template></template>
