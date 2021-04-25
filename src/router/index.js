import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from "@/pages/HomePage.vue";
import Url from "@/pages/UrlPage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/:id",
		name: "Url",
		component: Url,
	},
	// {
	// 	path: "/about",
	// 	name: "About",
	// 	component: () => import("@/pages/AboutPage.vue"),
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
