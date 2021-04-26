import { createStore } from "vuex";
import { urlCollection } from "@/firebase/firebase";

export default createStore({
	state: {
		urls: [],
	},
	mutations: {
		addUrl(state, urlID) {
			state.urls.push(urlID);
		},
	},
	actions: {
		async addUrl({ commit }, url) {
			let urlID = Math.random().toString(36).substring(7);

			await urlCollection.doc(urlID).set({
				url: url,
			});

			commit("addUrl", urlID);
		},
	},
	modules: {},
});
