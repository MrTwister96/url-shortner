<template>
	<div class="base-input shadow flex">
		<input
			@input="handleInput"
			:type="type"
			:placeholder="placeholder"
			class="w-full p-2 focus:outline-none rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 focus:placeholder-gray-300"
		/>
	</div>
</template>

<script>
export default {
	props: {
		type: { required: false, default: "text" },
		placeholder: { required: false, default: "" },
		modelValue: String,
	},
	setup(props, { emit }) {
		function handleInput(event) {
			emit("update:modelValue", event.target.value);
		}

		return { handleInput };
	},
};
</script>
