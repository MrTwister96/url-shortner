<template>
	<home-layout>
		<home-banner />
		<home-shortner />
	</home-layout>
</template>

<script>
import HomeLayout from "@/components/pages/homepage/HomeLayout.vue";
import HomeBanner from "@/components/pages/homepage/HomeBanner.vue";
import HomeShortner from "@/components/pages/homepage/HomeShortner.vue";

export default {
	components: { HomeLayout, HomeBanner, HomeShortner },
};
</script>
