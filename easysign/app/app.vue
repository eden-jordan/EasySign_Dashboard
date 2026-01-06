<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
	useHead({
		htmlAttrs: {
			class: "scroll-smooth",
		},
		bodyAttrs: {
			class: "antialiased",
		},
	});
</script>
