<template>
	<div class="flex flex-row justify-center">
		<div
			class="flex flex-row space-x-2 bg-gray-900 bg-opacity-70 p-6 w-full md:w-10/12 lg:w-9/12 xl:w-6/12 rounded-md"
		>
			<base-input class="w-full" placeholder="URL to shorten"></base-input>
			<base-button>Shorten</base-button>
		</div>
	</div>
</template>

<script>
import BaseButton from "@/components/buttons/BaseButton.vue";
import BaseInput from "@/components/inputs/BaseInput.vue";

export default {
	components: { BaseButton, BaseInput },
};
</script>
