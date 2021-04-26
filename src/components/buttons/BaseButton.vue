<template>
	<button
		type="submit"
		class="flex active:scale-100 active:shadow-none px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-400 font-semibold text-white transform hover:scale-105 hover:shadow transition duration-75 ease-in-out rounded-md focus:outline-none"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "base-button",
};
</script>
