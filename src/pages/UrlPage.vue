<template>
	<div></div>
</template>

<script>
import { useRoute } from "vue-router";
import { urlCollection } from "@/firebase/firebase";

export default {
	created() {
		const route = useRoute();

		urlCollection
			.doc(route.params.id)
			.get()
			.then((doc) => {
				let url = doc.data().url;
				console.log(url);
				window.location.replace(url);
			});
	},
};
</script>
