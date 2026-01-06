<template>
	<NuxtPage>
		<NuxtLayout />
	</NuxtPage>
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
