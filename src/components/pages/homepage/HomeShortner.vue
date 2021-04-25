<template>
	<div class="flex flex-row justify-center">
		<div
			class="flex flex-row space-x-2 bg-gray-900 bg-opacity-70 p-6 w-full md:w-10/12 lg:w-9/12 xl:w-6/12 rounded-md"
		>
			<base-input
				class="w-full"
				placeholder="URL to shorten"
				v-model="URL"
			></base-input>
			<base-button @click="testingFB">Shorten</base-button>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import BaseButton from "@/components/buttons/BaseButton.vue";
import BaseInput from "@/components/inputs/BaseInput.vue";
import { urlCollection } from "@/firebase/firebase";

export default {
	components: { BaseButton, BaseInput },
	setup() {
		const URL = ref("");

		function testingFB() {
			let urlID = Math.random().toString(36).substring(7);

			urlCollection
				.doc(urlID)
				.set({
					url: URL.value,
				})
				.then(() => {
					console.log(`Added ${URL.value} (${urlID})`);
				});
		}

		return { URL, testingFB };
	},
};
</script>
