import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import CreateCancha from "../views/CreateCancha.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Login",
		component: Login,
	},
	{
		path: "/home",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/crear",
		name: "Crear Cancha",
		component: CreateCancha,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
