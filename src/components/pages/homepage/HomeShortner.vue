<template>
	<div class="flex flex-row justify-center">
		<form
			@submit.prevent="testingNew"
			class="flex flex-row space-x-2 bg-gray-900 bg-opacity-70 p-6 w-full md:w-10/12 lg:w-9/12 xl:w-6/12 rounded-md"
		>
			<base-input
				class="w-full"
				name="url"
				pattern="[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
				placeholder="URL to shorten"
			></base-input>
			<base-button>Shorten</base-button>
		</form>
	</div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import BaseButton from "@/components/buttons/BaseButton.vue";
import BaseInput from "@/components/inputs/BaseInput.vue";

export default {
	components: { BaseButton, BaseInput },
	setup() {
		const store = useStore();
		const inputUrl = ref("");

		function testingNew(event) {
			const { url } = Object.fromEntries(new FormData(event.target));
			store.dispatch("addUrl", url);
			document.getElementById("urlInput").value = "";
		}

		return { inputUrl, testingNew };
	},
};
</script>
