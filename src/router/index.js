import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from "@/pages/HomePage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
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
