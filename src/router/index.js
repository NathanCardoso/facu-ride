import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "screen-home",
      component: () => import("../views/ScreenHome.vue"),
    },
    {
      path: "/screen-ride-list",
      name: "screen-rides-list",
      component: () => import("../views/ScreenRidesList.vue"),
    },
		{
			path: "/screen-ride-add",
			name: "screen-ride-add",
			component: () => import("../views/ScreenRidesAdd.vue")
		}, 
		{
			path: "/screen-ride-edit/:id",
			name: "screen-ride-edit",
			component: () => import("../views/ScreenRidesEdit.vue")
		}, 
		{
			path: "/screen-vehicle-add",
			name: "screen-vehicle-add",
			component: () => import("../views/ScreenVehicleAdd.vue")
		}, 
		{
			path: "/screen-car-list",
			name: "screen-car-list",
			component: () => import("../views/ScreenCarList.vue")
		}, 
		{
			path: "/screen-car-edit/:id",
			name: "screen-car-edit",
			component: () => import("../views/ScreenCarEdit.vue")
		} 
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;