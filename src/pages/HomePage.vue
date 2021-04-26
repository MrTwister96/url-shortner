<template>
	<home-layout>
		<home-banner />
		<home-shortner />
		<div class="flex flex-col items-center space-y-2">
			<div
				v-for="url in urls"
				:key="url"
				class="flex flex-row items-center justify-between w-full lg:w-9/12 xl:w-6/12 md:w-10/12 h-14 rounded-md shadow-md bg-white bg-opacity-90"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="md:ml-6 h-full w-14 text-green-700 opacity-90"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<a class="md:text-xl p-2" :href="`${fqdn}${url}`" target="blank">
					{{ fqdn }}{{ url }}
				</a>
				<input type="hidden" :value="`${fqdn}${url}`" id="hiddenInput" />
				<base-button class="mr-1 md:mr-6" @click="testCopy">
					<span ref="btnRef">Copy</span>
				</base-button>
			</div>
		</div>
	</home-layout>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import HomeLayout from "@/components/pages/homepage/HomeLayout.vue";
import HomeBanner from "@/components/pages/homepage/HomeBanner.vue";
import HomeShortner from "@/components/pages/homepage/HomeShortner.vue";
import BaseButton from "@/components/buttons/BaseButton.vue";

export default {
	components: { BaseButton, HomeLayout, HomeBanner, HomeShortner },
	setup() {
		const store = useStore();
		const btnRef = ref(null);
		// const fqdn = "http://localhost:8080/";
		const fqdn = "https://surl.ptype.app/";

		const urls = computed(() => {
			let collection = store.state.urls;
			return collection.reverse();
		});

		function testCopy() {
			let testingCodeToCopy = document.querySelector("#hiddenInput");
			testingCodeToCopy.setAttribute("type", "text");
			testingCodeToCopy.select();

			try {
				document.execCommand("copy");
				btnRef.value.textContent = "Copied!";
			} catch (err) {
				btnRef.value.textContent = "Not Copied!";
			} finally {
				setTimeout(() => {
					btnRef.value.textContent = "Copy";
				}, 2000);
			}

			/* unselect the range */
			testingCodeToCopy.setAttribute("type", "hidden");
			window.getSelection().removeAllRanges();
		}

		return { fqdn, urls, testCopy, btnRef };
	},
};
</script>
